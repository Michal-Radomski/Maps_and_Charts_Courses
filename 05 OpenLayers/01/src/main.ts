import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import Overlay from "ol/Overlay";
import MapBrowserEvent from "ol/MapBrowserEvent";
// import DragRotate from "ol/interaction/DragRotate";
// import { altKeyOnly } from "ol/events/condition";
import Draw, { DrawEvent } from "ol/interaction/Draw";
import GeoJSON from "ol/format/GeoJSON";
import { FullScreen, MousePosition, OverviewMap, ScaleLine, ZoomSlider, ZoomToExtent, defaults } from "ol/control";

import "./style.scss";

// const init = (): void => console.log("init");
// window.onload = init;

const gdanskCoordinates = [18.645278, 54.3475]; // Longitude first
const gdanskWebMercator = fromLonLat(gdanskCoordinates); // Convert to Web Mercator
// console.log("gdanskWebMercator:", gdanskWebMercator);

const fullScreenControl = new FullScreen({ source: undefined });
const mousePositionControl = new MousePosition();
const overViewMapControl = new OverviewMap({
  collapsed: false,
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
});
const scaleLineControl = new ScaleLine();
const zoomSliderControl = new ZoomSlider();
const zoomToExtentControl = new ZoomToExtent();

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
    // rotation: Math.PI / 2, //* 90deg
    maxZoom: 16,
    minZoom: 2,
  }),
  keyboardEventTarget: document,
  controls: defaults().extend([
    mousePositionControl,
    overViewMapControl,
    scaleLineControl,
    zoomSliderControl,
    zoomToExtentControl,
    fullScreenControl,
  ]),
});
// console.log("map:", map);

const popupContainerElement = document.getElementById("popup-coordinates") as HTMLDivElement;
const popup = new Overlay({
  element: popupContainerElement,
  positioning: "top-right",
});

map.addOverlay(popup);

map.on("click", function (event: MapBrowserEvent<UIEvent>): void {
  // console.log("event:", event);
  const clickedCoordinate = event.coordinate;
  popup.setPosition(undefined);
  popup.setPosition(clickedCoordinate);
  // console.log("clickedCoordinate:", clickedCoordinate);
  popupContainerElement.innerText = String(clickedCoordinate);
});

// DragRotate Interaction
// const dragRotateInteraction = new DragRotate({
//   condition: altKeyOnly,
// });
// map.addInteraction(dragRotateInteraction);

// Draw Interaction
const drawInteraction = new Draw({
  type: "Polygon",
  freehand: true,
});
map.addInteraction(drawInteraction);

drawInteraction.on("drawend", function (event: DrawEvent) {
  let parser = new GeoJSON();
  let drawnFeatures = parser.writeFeatures([event.feature]);
  console.log("drawnFeatures:", drawnFeatures);
});
