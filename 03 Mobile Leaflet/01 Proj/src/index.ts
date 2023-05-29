// Initialize map
const map = L.map("mapDiv", {
  center: [54.3475, 18.645278],
  zoom: 13,
  zoomControl: false,
  dragging: true,
  minZoom: 4,
  maxZoom: 18,
  attributionControl: true,
});

new L.Control.Zoom({ position: "topright" }).addTo(map);

// Map Providers
//* V1
// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

//* V2
const lyrOSM = L.tileLayer
  // @ts-ignore
  .provider("OpenStreetMap.Mapnik", {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  });
map.addLayer(lyrOSM);

// @ts-ignore
const lyrWaterColor = L.tileLayer.provider("Stamen.Watercolor");
// @ts-ignore
const lyrTopo = L.tileLayer.provider("OpenTopoMap");
// @ts-ignore
const lyrImagery = L.tileLayer.provider("Esri.WorldImagery");

const objBaseMaps = {
  "Open Street Maps": lyrOSM,
  "Topo Maps": lyrTopo,
  Imagery: lyrImagery,
  Watercolor: lyrWaterColor,
};

L.control.layers(objBaseMaps).addTo(map);

// Location
// map.locate({ setView: true, maxZoom: 16 });
// function onLocationFound(e: { accuracy: number; latlng: L.LatLngExpression }) {
//   var radius = e.accuracy;

//   L.marker(e.latlng)
//     .addTo(map)
//     .bindPopup("You are within " + radius + " meters from this point")
//     .openPopup();

//   L.circle(e.latlng, radius).addTo(map);
// }
// map.on("locationfound", onLocationFound);

// Measure Plugin
const measureOptions = {
  position: "topright",
  unit: "kilometres",
  useSubunits: true,
  clearMeasurementsOnStop: true,
  showBearings: true,
};

if (map) {
  // @ts-ignore
  L.control.polylineMeasure(measureOptions).addTo(map);
}
