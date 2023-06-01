const GdanskPosition = [54.3475, 18.645278] as L.LatLngExpression;
const initialZoom = 13;

const countriesDataURL =
  "https://gist.githubusercontent.com/ThomasG77/c38e6b0ecfd014342aad/raw/ecaa086688859566f108b9630047a7110ad6eb94/countries.geojson";

// Initialize map
const map = L.map("mapDiv", {
  center: GdanskPosition,
  zoom: initialZoom,
  zoomControl: false,
  dragging: true,
  minZoom: 4,
  maxZoom: 18,
  attributionControl: true,
});

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

let lyrWorld = L.geoJSON
  // @ts-ignore
  .ajax(countriesDataURL, {}) as L.GeoJSON;

let polishVoivodeship = L.geoJSON
  // @ts-ignore
  .ajax("data/poland.geojson", {}) as L.GeoJSON;

const objOverlays = {
  Poland: polishVoivodeship,
  World: lyrWorld,
};

L.control.layers(objBaseMaps, objOverlays).addTo(map);

new L.Control.Zoom({ position: "topright" }).addTo(map);

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

// @ts-ignore
L.control.sidebar("sidebar").addTo(map);

if (map) {
  L.control
    // @ts-ignore
    .sidepanel("sidePanelRight", {
      panelPosition: "right",
      tabsPosition: "top",
      pushControls: true,
      darkMode: false,
      startTab: "tab-1",
    })
    .addTo(map);
}

// @ts-ignore
L.easyButton("fas fa-globe-europe fa-lg", function (_btn, map) {
  // console.log({_btn});
  map.setZoom(initialZoom).setView(GdanskPosition);
})
  .setPosition("topright")
  .addTo(map);

function isMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function isOnline() {
  return navigator.onLine;
}

console.log("isMobile():", isMobile());
console.log("isOnline():", isOnline());
