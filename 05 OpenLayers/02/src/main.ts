import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import LayerGroup from "ol/layer/Group";

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
  map.on("click", function (event): void {
    console.log("event.coordinate:", event.coordinate);
  });
}

window.onload = init;
