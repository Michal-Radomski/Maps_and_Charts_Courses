import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Attribution, defaults as defaultControls } from "ol/control";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import KML from "ol/format/KML";
import VectorSource from "ol/source/Vector";
import VectorImageLayer from "ol/layer/VectorImage";
import MVT from "ol/format/MVT";
import OGCVectorTile from "ol/source/OGCVectorTile";
import VectorTileLayer from "ol/layer/VectorTile";
// import VectorTileSource from "ol/source/VectorTile";
// import { Fill, Icon, Stroke, Style, Text } from "ol/style";
import { Heatmap } from "ol/layer.js";
import { Fill, Stroke, Style, Circle as CircleStyle, Icon } from "ol/style";
import Feature from "ol/Feature";
import { LineString, Polygon, Point } from "ol/geom";
import MapBrowserEvent from "ol/MapBrowserEvent";
import { register } from "ol/proj/proj4";
import { transform } from "ol/proj";
import { transformExtent } from "ol/proj";
import { defaults as defaultInteractions, Select } from "ol/interaction";
import DragBox from "ol/interaction/DragBox.js";
import { altKeyOnly, click } from "ol/events/condition";
import { SelectEvent } from "ol/interaction/Select";
import proj4 from "proj4";

// const { createMapboxStreetsV6Style } = window;

// import { mapBoxKey } from "./keys";
import "./style.scss";

function init(): void {
  const attribution = new Attribution({
    collapsible: true,
  });

  //* EPSG:4326 and EPSG:3857 out of box
  //* http://proj4js.org
  // EPSG:3416  for Austria
  proj4.defs(
    "EPSG:3416",
    "+proj=lcc +lat_1=49 +lat_2=46 +lat_0=47.5 +lon_0=13.33333333333333 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
  );
  // EPSG:27700 for the UK
  proj4.defs(
    "EPSG:27700",
    "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs"
  );
  register(proj4);

  const map = new Map({
    interactions: defaultInteractions(), // Add default interactions like DragPan
    view: new View({
      center: [0, 0],
      zoom: 1,
      projection: "EPSG:4326",
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
        visible: true,
        opacity: 0.1,
      }),

      //* OGC Vector Tile  Example
      new VectorTileLayer({
        opacity: 0.6,
        source: new OGCVectorTile({
          url: "https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:cultural:ne_10m_admin_0_countries/tiles/WorldCRS84Quad",
          format: new MVT(),
          projection: "EPSG:4326",
        }),
        background: "#d1d1d1",
        style: {
          // @ts-ignore
          "stroke-width": 0.6,
          "stroke-color": "#8c8b8b",
          "fill-color": "#f7f7e9",
        },
      }),
    ],
    target: "map",
    controls: defaultControls({ attribution: false }).extend([attribution]),
  });

  //* Vector Tile Layer MapBox Example
  // const openstreetMapVectorTile = new VectorTileLayer({
  //   declutter: true,
  //   source: new VectorTileSource({
  //     attributions:
  //       '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
  //       '© <a href="https://www.openstreetmap.org/copyright">' +
  //       "OpenStreetMap contributors</a>",
  //     format: new MVT(),
  //     url:
  //       "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/" + "{z}/{x}/{y}.vector.pbf?access_token=" + mapBoxKey,
  //   }),
  //   style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text),
  // });
  // map.addLayer(openstreetMapVectorTile);

  //* Vector Layer Example
  const vectorLayer = new VectorLayer({
    opacity: 0.4,
    source: new VectorSource({
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: new GeoJSON(),
    }),
    style: {
      "fill-color": ["string", ["get", "COLOR"], "#eee"],
    },
  });
  map.addLayer(vectorLayer);

  //* Vector Image Layer Example
  const vectorImageLayer = new VectorImageLayer({
    opacity: 0.4,
    source: new VectorSource({
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: new GeoJSON(),
    }),
    style: {
      "fill-color": ["string", ["get", "COLOR"], "#eee"],
    },
  });
  map.addLayer(vectorImageLayer);

  //* Vector Layers
  //* Central EU Countries GeoJSON VectorImage Layer
  const EUCountriesGeoJSONVectorImage = new VectorImageLayer({
    source: new VectorSource({
      url: "./src/vector_data/Central_EU_countries_GEOJSON.geojson",
      format: new GeoJSON(),
    }),
    visible: true,
  });
  map.addLayer(EUCountriesGeoJSONVectorImage);

  //* Central EU Countries KML Vector Layer
  const EUCountriesKML = new VectorLayer({
    source: new VectorSource({
      url: "./src/vector_data/Central_EU_countries_KML.kml",
      format: new KML(),
    }),
    visible: true,
  });
  map.addLayer(EUCountriesKML);

  //* HeatMap
  const heatMapOnlineFBUsers = new Heatmap({
    source: new VectorSource({
      url: "./src/vector_data/onlineFBUsers.geojson",
      format: new GeoJSON(),
    }),
    radius: 20,
    blur: 12,
    gradient: ["red", "orange", "yellow", "green", "blue"],
    visible: true,
  });
  map.addLayer(heatMapOnlineFBUsers);

  //* Styling Polygons and Lines
  // Create a vector source with GeoJSON data
  const geojsonObject = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-5, 6],
              [-5, 8],
              [-3, 8],
              [-3, 6],
              [-5, 6],
            ],
          ],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-5, 7],
            [-3, 7],
          ],
        },
      },
    ],
  };

  // Define styles for polygons and lines
  const polygonStyle = new Style({
    stroke: new Stroke({
      color: "blue",
      width: 5,
      lineCap: "square",
      lineJoin: "bevel",
      lineDash: [10, 10],
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
  });

  const lineStyle = new Style({
    stroke: new Stroke({
      color: "green",
      width: 7,
      lineCap: "butt",
    }),
  });

  // Create a vector source and layer for the features
  const vectorSource = new VectorSource({
    features: new GeoJSON().readFeatures(geojsonObject, { dataProjection: "EPSG:4326", featureProjection: "EPSG:4326" }),
  });

  const styledLayer = new VectorLayer({
    source: vectorSource,
    style: function (feature) {
      return feature.getGeometry()?.getType() === "Polygon" ? polygonStyle : lineStyle;
    },
  });
  map.addLayer(styledLayer);

  //* Styling a Point
  // Create a vector source with point features
  const pointSource = new VectorSource({
    features: [
      // Example point feature
      new Feature({
        geometry: new Point([0, 0]), // Coordinates in EPSG:3857 or EPSG:4326
      }),
    ],
  });

  // Define a style for the points
  const pointStyle = new Style({
    image: new CircleStyle({
      radius: 10, // Radius of the circle
      fill: new Fill({
        color: "rgba(255, 0, 0, 1)", // Fill color (red)
      }),
      stroke: new Stroke({
        color: "blue", // Stroke color (blue)
        width: 2, // Stroke width
      }),
    }),
  });

  // Create a vector layer to hold the points
  const pointLayer = new VectorLayer({
    source: pointSource,
    style: pointStyle,
  });
  map.addLayer(pointLayer);

  //* Point styled with Icon
  // Create a point feature with coordinates
  const iconFeature = new Feature({
    geometry: new Point([0, 0]), // Coordinates in EPSG:3857 or EPSG:4326
    name: "Custom SVG Icon",
  });

  // Define the style for the point feature using an image
  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 50], // Anchor point of the icon
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      src: "./src/vector_data/op.png", // Path to your icon image
    }),
  });

  // Apply the style to the feature
  iconFeature.setStyle(iconStyle);

  // Create a vector source and layer for the point feature
  const iconSource = new VectorSource({
    features: [iconFeature],
  });

  const iconLayer = new VectorLayer({
    source: iconSource,
    zIndex: 5,
  });
  map.addLayer(iconLayer);

  //* Styling a Feature
  const pointStyle2 = new Style({
    image: new CircleStyle({
      radius: 5,
      fill: new Fill({ color: "red" }),
      stroke: new Stroke({ color: "black", width: 1 }),
    }),
  });

  const lineStyle2 = new Style({
    stroke: new Stroke({
      color: "blue",
      width: 2,
    }),
  });

  const polygonStyle2 = new Style({
    fill: new Fill({
      color: "rgba(0, 255, 0, 0.5)",
    }),
    stroke: new Stroke({
      color: "green",
      width: 1,
    }),
  });

  const pointFeature = new Feature(new Point([-73.935242, 40.73061])); // Example coordinates
  pointFeature.setStyle(pointStyle2);

  const lineFeature = new Feature(
    new LineString([
      [-73.935242, 40.73061],
      [-74.935242, 41.73061],
    ])
  );
  lineFeature.setStyle(lineStyle2);

  const polygonFeature = new Feature(
    new Polygon([
      [
        [-74.0, 40.7],
        [-74.0, 41.7],
        [-73.0, 41.7],
        [-73.0, 40.7],
        [-74.0, 40.7],
      ],
    ])
  );
  polygonFeature.setStyle(polygonStyle2);

  const vectorStyledSource = new VectorSource({
    features: [pointFeature, lineFeature, polygonFeature],
  });
  const vectorStyledLayer = new VectorLayer({
    source: vectorStyledSource,
  });
  map.addLayer(vectorStyledLayer);

  //* Adding an Additional Data
  // Create a point feature with coordinates
  const countryFeature = new Feature({
    geometry: new Point([50, 50]), // Replace with actual coordinates
  });

  // Using setProperties to add multiple attributes
  countryFeature.setProperties({
    name: "Country Name",
    income: 50000, // Example income value
    population: 1000000, // Example population value
  });

  // Alternatively, using set for individual properties
  // countryFeature.set("income", 50000);

  // Create a vector source and layer
  const vectorSource2 = new VectorSource();
  const vectorLayer2 = new VectorLayer({
    source: vectorSource2,
  });

  // Add the feature to the vector source
  vectorSource2.addFeature(countryFeature);
  map.addLayer(vectorLayer2);

  map.on("singleclick", function (evt: MapBrowserEvent<any>): void {
    map.forEachFeatureAtPixel(evt.pixel, function (feature) {
      const income = feature.get("income"); // Retrieve income property
      console.log("Income:", income);
      // You can also retrieve other properties similarly
      const name = feature.get("name");
      console.log("Country Name:", name);
      console.log('feature.get("population"):', feature.get("population"));
    });
  });

  //* Austrian Cities EPSG:27700
  const AustrianCities = new VectorLayer({
    source: new VectorSource({
      url: "./src/vector_data/austrian_cities_EPSG_27700.geojson",
      format: new GeoJSON({
        dataProjection: "EPSG:27700",
      }),
    }),
    visible: true,
    style: new Style({
      image: new CircleStyle({
        fill: new Fill({
          color: "rgba(150,150,150,1)",
        }),
        radius: 10,
        stroke: new Stroke({
          color: "rgba(150,150,150,1)",
          width: 2,
        }),
      }),
    }),
  });
  map.addLayer(AustrianCities);

  //* Coordinate Transformations
  const coordinate = [-73.935242, 40.73061]; // Longitude, Latitude
  const transformedCoordinate = transform(coordinate, "EPSG:4326", "EPSG:3857");
  console.log("transformedCoordinate:", transformedCoordinate);

  // Create a point feature
  const pointFeature2 = new Point([-73.935242, 40.73061]);

  // Transform the feature's geometry
  pointFeature2.transform("EPSG:4326", "EPSG:3857");
  console.log("pointFeature.getCoordinates():", pointFeature2.getCoordinates());

  const extent = [-73.935242, 40.73061, -73.935, 40.731]; // [minX, minY, maxX, maxY]
  const transformedExtent = transformExtent(extent, "EPSG:4326", "EPSG:3857");
  console.log("transformedExtent:", transformedExtent);

  map.on("moveend", function () {
    const bbox = map.getView().calculateExtent(map.getSize());
    const transformedBbox = transform(bbox, "EPSG:3857", "EPSG:27700"); // Example of transforming to another projection
    console.log("transformedBbox:", transformedBbox);
  });

  //* DragBox Interaction
  const dragBoxInteraction = new DragBox({
    condition: altKeyOnly,
  });
  map.addInteraction(dragBoxInteraction);

  dragBoxInteraction.on("boxend", () => {
    const extent = dragBoxInteraction.getGeometry().getExtent();
    map.getView().fit(extent, { duration: 500 });
  });

  //* Draw Interaction
  // const draw = new Draw({
  //   type: "Polygon", // Can be Point, LineString, or Polygon
  // });
  // map.addInteraction(draw);

  //* Select Interaction
  // Define a style for selected features
  const selectedStyle = new Style({
    fill: new Fill({
      color: "rgba(255, 255, 0, 0.6)",
    }),
    stroke: new Stroke({
      color: "#ffcc33",
      width: 2,
    }),
  });

  // Create a select interaction for click events
  const selectClick = new Select({
    condition: click,
    style: selectedStyle,
  });
  // Add the select interaction to the map
  map.addInteraction(selectClick);

  // Listen for the select event to handle selected features
  selectClick.on("select", function (event: SelectEvent) {
    console.log("Selected features:", event.selected);
  });
}

window.onload = init;
