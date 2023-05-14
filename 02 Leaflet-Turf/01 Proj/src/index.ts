// (function IIFE() {
//   console.log("IIFE");
// })();

const circle = L.circle([54.3475, 18.645278], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
});

const polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]);

const plyParks = L.polygon(
  [
    [
      [
        [19.4068, -99.2015],
        [19.4166, -99.1803],
        [19.4299, -99.1825],
        [19.4191, -99.2056],
      ],
      // Hole in the polygon
      [
        [19.4216, -99.1853],
        [19.4217, -99.1843],
        [19.4241, -99.1848],
        [19.4245, -99.1872],
      ],
    ],
    [
      [
        [19.4042, -99.1895],
        [19.405, -99.1884],
        [19.4076, -99.1898],
        [19.4055, -99.1909],
      ],
    ],
  ],
  { color: "red", fillColor: "yellow", fillOpacity: 0.5 }
);

const mrkMuseum = L.marker([19.42596, -99.1862], { draggable: true });
mrkMuseum.bindTooltip("Anthropology Museum");

const plnBikeRoute = L.polyline(
  [
    [
      [19.4138, -99.1876],
      [19.4167, -99.188],
      [19.4165, -99.1873],
      [19.4214, -99.1872],
      [19.4215, -99.1841],
      [19.4258, -99.1843],
      [19.4259, -99.1852],
    ],
    [
      [19.4215, -99.1865],
      [19.4251, -99.1881],
      [19.4246, -99.1843],
    ],
  ],
  { color: "purple" }
);

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

let fgpChapultepec: L.FeatureGroup<any>;
let fgpDrawnItems: L.FeatureGroup<any>;

let ctlDraw;
let ctlStyle;

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
  map.addLayer(polygon);
  map.addLayer(mrkMuseum);
  // map.addLayer(plyParks);
  // map.addLayer(plnBikeRoute);

  fgpChapultepec = L.featureGroup([plnBikeRoute, plyParks]).addTo(map);
  fgpDrawnItems = new L.FeatureGroup();
  fgpDrawnItems.addTo(map);

  objBaseMaps = {
    "Open Street Maps": lyrOSM,
    "Topo Maps": lyrTopo,
    Imagery: lyrImagery,
    Watercolor: lyrWaterColor,
  };

  objOverlays = {
    // "Chapultepec Image": lyrChapultepec,
    // "Museum of Anthropology": mrkMuseum,
    // "Bike Route to Museum": plnBikeRoute,
    // Parks: plyParks,

    "Chapultepec Image": lyrChapultepec,
    "Chapultepec Vectors": fgpChapultepec,
    "Drawn Items": fgpDrawnItems,
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

  // @ts-ignore
  ctlStyle = L.control.styleEditor({ position: "topright" }).addTo(map);

  // @ts-ignore
  ctlDraw = new L.Control.Draw({
    draw: {
      circle: false,
    },
    edit: {
      featureGroup: fgpDrawnItems,
    },
  });
  ctlDraw.addTo(map);

  // popExample = L.popup();
  // popExample.setLatLng([19.4132, -99.1859]);
  // popExample.setContent($("#side-bar")[0]);
  // popExample.openOn(map);

  map.on("draw:created", function (event) {
    console.log("event:", event);
    fgpDrawnItems.addLayer(event.layer);
    alert("event.layer.toGeoJSON()):" + JSON.stringify(event.layer.toGeoJSON()));
  });

  mrkMuseum.on("dragend", function () {
    mrkMuseum.setTooltipContent(
      "Current Location: " +
        mrkMuseum.getLatLng().toString() +
        "<br>" +
        "Distance to Anthropology Museum: " +
        mrkMuseum.getLatLng().distanceTo([19.42596, -99.1862]).toFixed(0)
    );
  });

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

  $("#btnMuseum").click(function () {
    map.setView([19.42596, -99.1862], 17);
    mrkMuseum.setLatLng([19.42596, -99.1862]);
    mrkMuseum.setTooltipContent("Anthropology Museum");
  });

  $("#btnBikeRoute").click(function () {
    map.fitBounds(plnBikeRoute.getBounds());
  });

  $("#sldOpacity").on("change", function () {
    $("#image-opacity").html((this as HTMLInputElement).value);

    lyrChapultepec.setOpacity((this as any).value);
  });

  $("#btnColor").click(function () {
    fgpChapultepec.setStyle({ color: "purple", fillColor: "green", fillOpacity: 0.8 });
  });

  $("#btnAddMuseum").click(function () {
    if (fgpChapultepec.hasLayer(mrkMuseum)) {
      fgpChapultepec.removeLayer(mrkMuseum);
      $("#btnAddMuseum").html("Add Museum To Chapultepec Vectors");
    } else {
      fgpChapultepec.addLayer(mrkMuseum);
      $("#btnAddMuseum").html("Remove Museum From Chapultepec Vectors");
    }
  });

  function LatLngToArrayString(latLan: L.LatLng) {
    // console.log("latLan:", latLan);
    return "[" + latLan.lat.toFixed(3) + ", " + latLan.lng.toFixed(3) + "]";
  }
});
