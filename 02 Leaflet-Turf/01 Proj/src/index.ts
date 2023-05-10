const circle = L.circle([54.3475, 18.645278], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
});

let map: L.Map;
let lyrOSM: L.TileLayer;

$(document).ready(function () {
  map = L.map("mapDiv", {
    center: [54.3475, 18.645278],
    zoom: 13,
    zoomControl: true,
    dragging: true,
    minZoom: 4,
    maxZoom: 18,
  });

  lyrOSM = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  });

  map.addLayer(lyrOSM);
  map.addLayer(circle);

  map.on("click", function (event: L.LeafletMouseEvent) {
    // console.log("event:", event);
    // console.log("event.latlng.toString():", event.latlng.toString());
    if (event.originalEvent.shiftKey) {
      console.log("map.getZoom():", map.getZoom());
    } else {
      console.log("event.latlng:", event.latlng);
    }
  });

  map.on("contextmenu", function (event: L.LeafletMouseEvent) {
    const currentTime = new Date();
    L.marker(event.latlng)
      .addTo(map)
      .bindPopup(event.latlng.toString() + "<br/>" + currentTime.toString());
  });
});
