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
