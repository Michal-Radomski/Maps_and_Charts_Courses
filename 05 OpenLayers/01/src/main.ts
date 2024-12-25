import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";

import "./style.scss";

// const init = (): void => console.log("init");
// window.onload = init;

const map: Map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 3,
  }),
});
console.log("map:", map);
