const circle = L.circle([54.3475, 18.645278], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
});

let map;
let lyrOSM;

$(document).ready(function () {
  map = L.map("mapDiv", { center: [54.3475, 18.645278], zoom: 13 });

  lyrOSM = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  });

  map.addLayer(lyrOSM);
  map.addLayer(circle);
});
