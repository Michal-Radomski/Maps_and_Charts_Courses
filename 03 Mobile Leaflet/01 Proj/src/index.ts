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

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

new L.Control.Zoom({ position: "topright" }).addTo(map);

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
