import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import LayerGroup from "ol/layer/Group";
// import BingMaps from "ol/source/BingMaps";
import TileDebug from "ol/source/TileDebug";
import StadiaMaps from "ol/source/StadiaMaps";
import CartoDB from "ol/source/CartoDB";
import TileArcGISRest from "ol/source/TileArcGISRest";
import TileWMS from "ol/source/TileWMS";

import "./style.scss";

function init(): void {
  const map = new Map({
    view: new View({
      center: [0, 0],
      zoom: 3,
      // extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516],
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
        zIndex: 1,
        visible: true,
        // extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516],
        opacity: 0.6,
      }),
      //* Bing Maps Basemap Layer
      // new TileLayer({
      //   visible: false,
      //   preload: Infinity,
      //   source: new BingMaps({
      //     key: "Your Bing Maps Key from here: https://www.bingmapsportal.com",
      //     imagerySet: "CanvasGray", // Road, CanvasDark, CanvasGray
      //   }),
      // }),
    ],
    target: "map",
  });

  // Layer Group
  const layerGroup = new LayerGroup({
    layers: [
      new TileLayer({
        source: new OSM({
          url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
        }),
        zIndex: 0,
        visible: true,
        extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516],
        opacity: 0.9,
      }),
    ],
  });
  map.addLayer(layerGroup);

  // Print out mouse click coordinates
  // map.on("click", function (event): void {
  //   console.log("event.coordinate:", event.coordinate);
  // });

  //* CartoDB BaseMap Layer
  const mapConfig = {
    layers: [
      {
        type: "cartodb",
        options: {
          cartocss_version: "2.1.1",
          cartocss: "#layer { polygon-fill: #F00; }",
          sql: "select * from european_countries_e",
        },
      },
    ],
  };

  const cartoDBSource = new CartoDB({
    account: "documentation",
    config: mapConfig,
  });

  const cartoDBBaseLayer = new TileLayer({
    source: cartoDBSource,
    visible: true,
    zIndex: 2,
    opacity: 0.25,
  });
  map.addLayer(cartoDBBaseLayer);

  //* TileDebug
  const tileDebugLayer = new TileLayer({
    source: new TileDebug(),
    visible: false,
  });
  map.addLayer(tileDebugLayer);

  //* Stamen basemap layer
  const stamenLayerGroup = new LayerGroup({
    layers: [
      new TileLayer({
        source: new StadiaMaps({
          layer: "stamen_watercolor",
          // apiKey: 'Not needed for localhost'
        }),
        visible: true,
        opacity: 0.5,
      }),
      new TileLayer({
        source: new StadiaMaps({
          layer: "stamen_terrain_labels",
          // apiKey: 'Not needed for localhost'
        }),
        visible: true,
        opacity: 0.5,
      }),
    ],
  });
  map.addLayer(stamenLayerGroup);

  //* tile ArcGIS REST API Layer
  const urlArcGIS = "https://sampleserver6.arcgisonline.com/ArcGIS/rest/services/USA/MapServer";
  const tileArcGISLayer = new TileLayer({
    source: new TileArcGISRest({
      url: urlArcGIS,
    }),
    visible: true,
  });
  map.addLayer(tileArcGISLayer);

  //* WMS Layer
  const wMSLayer = new TileLayer({
    source: new TileWMS({
      url: "https://ahocevar.com/geoserver/wms",
      params: { LAYERS: "topp:states", TILED: true },
      serverType: "geoserver",
      transition: 0,
    }),
  });
  map.addLayer(wMSLayer);
}

window.onload = init;
