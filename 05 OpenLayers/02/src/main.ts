import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import LayerGroup from "ol/layer/Group";
// import BingMaps from "ol/source/BingMaps";
import XYZ from "ol/source/XYZ";
import TileDebug from "ol/source/TileDebug";
import StadiaMaps from "ol/source/StadiaMaps";

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
  const cartoDBBaseLayer = new TileLayer({
    source: new XYZ({
      url: "http://{1-4}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png",
      attributions: "© CARTO",
    }),
    visible: false,
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
      }),
      new TileLayer({
        source: new StadiaMaps({
          layer: "stamen_terrain_labels",
          // apiKey: 'Not needed for localhost'
        }),
        visible: true,
      }),
    ],
  });
  map.addLayer(stamenLayerGroup);
}

window.onload = init;
