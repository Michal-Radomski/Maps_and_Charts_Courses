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
import { Fill, Stroke, Style } from "ol/style";

// const { createMapboxStreetsV6Style } = window;

import "./style.scss";
// import { mapBoxKey } from "./keys";

function init(): void {
  const attribution = new Attribution({
    collapsible: true,
  });

  const map = new Map({
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
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
  });

  const lineStyle = new Style({
    stroke: new Stroke({
      color: "green",
      width: 7,
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
}

window.onload = init;
