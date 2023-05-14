// (function IIFE() {
//   console.log("IIFE");
// })();

const circle = L.circle([54.3475, 18.645278], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
});

let map: L.Map;
let lyrOSM: L.TileLayer;
let mrkCurrentLocation: L.Circle<any>;
let popZocalo: L.Popup;
let popExample: L.Popup;

// let ctlZoom: L.Control;
// let ctlAttribute: L.Control.Attribution;
// let ctlScale: L.Control;

let ctlZoomSlider: L.Control;
let ctlControlSidebar: { toggle: () => void };
let ctlSearch: L.Control;

let lyrWaterColor: L.TileLayer;
let lyrTopo: L.TileLayer;
let lyrImagery: L.TileLayer;

let ctlLayers: L.Control;
let objBaseMaps;
let objOverlays;
let lyrChapultepec: L.ImageOverlay;

$(document).ready(function () {
  map = L.map("mapDiv", {
    center: [54.3475, 18.645278],
    zoom: 13,
    zoomControl: false,
    dragging: true,
    minZoom: 4,
    maxZoom: 18,
    attributionControl: true,
  });

  //* V1
  // lyrOSM = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  // });

  //* V2
  // @ts-ignore
  lyrOSM = L.tileLayer.provider("OpenStreetMap.Mapnik", {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  });
  // @ts-ignore
  lyrWaterColor = L.tileLayer.provider("Stamen.Watercolor");
  // @ts-ignore
  lyrTopo = L.tileLayer.provider("OpenTopoMap");
  // @ts-ignore
  lyrImagery = L.tileLayer.provider("Esri.WorldImagery");

  lyrChapultepec = L.imageOverlay(
    "img/chapultepec.png",
    [
      [19.42993, -99.20843],
      [19.40621, -99.17453],
    ],
    { opacity: 0.5 }
  ).addTo(map);

  map.addLayer(lyrOSM);
  map.addLayer(circle);

  objBaseMaps = {
    "Open Street Maps": lyrOSM,
    "Topo Maps": lyrTopo,
    Imagery: lyrImagery,
    Watercolor: lyrWaterColor,
  };

  objOverlays = {
    "Chapultepec Image": lyrChapultepec,
  };

  ctlLayers = L.control.layers(objBaseMaps, objOverlays).addTo(map);

  // setInterval(function () {
  //   map.locate();
  // }, 5000);

  // ctlZoom = L.control.zoom({ zoomInText: "In", zoomOutText: "Out", position: "bottomright" }).addTo(map);
  // ctlAttribute = L.control.attribution({ position: "bottomleft" }).addTo(map);
  // ctlAttribute.addAttribution("OSM");
  // ctlAttribute.addAttribution("Test");
  // ctlScale = L.control.scale({ position: "bottomleft", metric: true, maxWidth: 200 }).addTo(map);

  // @ts-ignore
  ctlZoomSlider = L.control.zoomslider({ position: "topright" }).addTo(map);
  // @ts-ignore
  ctlControlSidebar = L.control.sidebar("side-bar").addTo(map);

  L.control
    // @ts-ignore
    .polylineMeasure({
      position: "topleft",
      unit: "kilometres",
    })
    .addTo(map);

  // @ts-ignore
  L.easyButton(
    '<img src="./img/penguin.png" width="30" height="auto"/>',
    function (_btn: any, map: { setView: (arg0: number[]) => void }) {
      const Gdansk = [54.3475, 18.645278];
      map.setView(Gdansk);
    }
  ).addTo(map);

  // @ts-ignore
  L.easyButton('<img src="./img/sidebar.svg" width="30" height="auto"/>', function () {
    ctlControlSidebar.toggle();
  }).addTo(map);

  //  @ts-ignore
  ctlSearch = L.Control.geocoder().addTo(map);

  popZocalo = L.popup({ maxWidth: 200, keepInView: true });
  popZocalo.setLatLng([19.43262, -99.13325]);
  popZocalo.setContent("<h2 style='text-align: center; color:blue'>Zocalo</h2><img src='img/zocalo.jpg' width='200px'>");

  // popExample = L.popup();
  // popExample.setLatLng([19.4132, -99.1859]);
  // popExample.setContent($("#side-bar")[0]);
  // popExample.openOn(map);

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

  map.on("keypress", function (event) {
    // console.log("event: ", event);
    if (event.originalEvent.key === "l") {
      map.locate();
    }
  });

  map.on("locationfound", function (event) {
    console.log("event: ", event);
    if (mrkCurrentLocation) {
      mrkCurrentLocation.remove();
    }
    mrkCurrentLocation = L.circle(event.latlng, { radius: event.accuracy / 2 }).addTo(map);
    map.setView(event.latlng, 11);
  });

  map.on("locationerror", function (event) {
    console.log("event: ", event);
    alert("Location was not found");
  });

  map.on("zoomend", function () {
    $("#zoom-level").html(String(map.getZoom()));
  });

  map.on("moveend", function () {
    $("#map-center").html(LatLngToArrayString(map.getCenter()));
  });

  map.on("mousemove", function (event: L.LeafletMouseEvent) {
    $("#mouse-location").html(LatLngToArrayString(event.latlng));
  });

  $("#btnLocate").click(function () {
    map.locate();
  });

  $("#btnZocalo").click(function () {
    map.setView([19.43262, -99.13325], 17);
    map.openPopup(popZocalo);
  });

  function LatLngToArrayString(latLan: L.LatLng) {
    // console.log("latLan:", latLan);
    return "[" + latLan.lat.toFixed(3) + ", " + latLan.lng.toFixed(3) + "]";
  }
});
