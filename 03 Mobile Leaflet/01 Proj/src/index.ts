// Initialize map
const map = L.map("mapDiv", {
  center: [54.3475, 18.645278],
  zoom: 13,
  zoomControl: true,
  dragging: true,
  minZoom: 4,
  maxZoom: 18,
  attributionControl: true,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

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
