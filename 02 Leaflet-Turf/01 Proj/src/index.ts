const map = L.map("mapDiv").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var circle = L.circle([51.508, -0.11], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map);

// let mymap;
// let lyrOSM;
// let mrkCurrentLocation;

// $(document).ready(function () {
//   mymap = L.map("mapDiv", { center: [19.4, -99.2], zoom: 13 });
//   lyrOSM = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");
//   mymap.addLayer(lyrOSM);
// });
