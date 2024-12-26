import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import Overlay from "ol/Overlay";
import MapBrowserEvent from "ol/MapBrowserEvent";

import "./style.scss";

// const init = (): void => console.log("init");
// window.onload = init;

const gdanskCoordinates = [18.645278, 54.3475]; // Longitude first
const gdanskWebMercator = fromLonLat(gdanskCoordinates); // Convert to Web Mercator
// console.log("gdanskWebMercator:", gdanskWebMercator);

const map: Map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    // center: [0, 0],
    center: gdanskWebMercator,
    zoom: 10,
    // rotation: 3.14 / 2, //* 90deg
    maxZoom: 16,
    minZoom: 2,
  }),
});
// console.log("map:", map);

const popupContainerElement = document.getElementById("popup-coordinates") as HTMLDivElement;
const popup = new Overlay({
  element: popupContainerElement,
  positioning: "top-right",
});

map.addOverlay(popup);

map.on("click", function (event: MapBrowserEvent<UIEvent>): void {
  console.log("event:", event);
  const clickedCoordinate = event.coordinate;
  popup.setPosition(undefined);
  popup.setPosition(clickedCoordinate);
  console.log("clickedCoordinate:", clickedCoordinate);
  popupContainerElement.innerText = String(clickedCoordinate);
});
