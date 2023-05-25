//* Not done: Spatial analysis
declare const turf: any;

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

// let ctlDraw;
// let ctlStyle;

// const countriesDataURL =
//   "https://gist.githubusercontent.com/ThomasG77/c38e6b0ecfd014342aad/raw/ecaa086688859566f108b9630047a7110ad6eb94/countries.geojson";

let lyrEagleNests: L.GeoJSON;
let lyrRaptorNests: L.GeoJSON;

// let icnEagleActive: L.Icon;
// let icnEagleInactive: L.Icon;

const spriteMarker1 = new L.Marker([54, 18], {
  // @ts-ignore
  icon: L.spriteIcon(), // default blue
});

const spriteMarker2 = new L.Marker([54, 18.5], {
  // @ts-ignore
  icon: L.spriteIcon("violet"),
});

// @ts-ignore
const redCoffeeMarker = L.AwesomeMarkers.icon({
  icon: "coffee",
  markerColor: "red",
  prefix: "ion",
  spin: false,
});

let lyrMarkerCluster: L.LayerGroup;
let lyrClientLines: L.GeoJSON;
let lyrBUOWL: L.GeoJSON;
let lyrGBH: L.GeoJSON;

let lyrSearch: L.GeoJSON;
let arProjectIDs = [] as string[];
let arHabitatIDs = [] as string[];
let arEagleIDs = [] as string[];
let arRaptorIDs = [] as string[];

let lyrBUOWLbuffer;
let jsnBUOWLbuffer;
let lyrClientLinesBuffer: L.FeatureGroup<any>;

let ctlLegend: L.Control;

$(document).ready(function () {
  map = L.map("mapDiv", {
    center: [54.3475, 18.645278],
    zoom: 13,
    zoomControl: true,
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

  spriteMarker1.addTo(map);
  spriteMarker2.addTo(map);
  L.marker([54.5, 18.5], { icon: redCoffeeMarker }).addTo(map);

  fgpChapultepec = L.featureGroup([plnBikeRoute, plyParks]).addTo(map);
  fgpDrawnItems = new L.FeatureGroup();
  fgpDrawnItems.addTo(map);

  // icnEagleActive = L.icon({ iconUrl: "img/nest2.png", iconSize: [40, 40], iconAnchor: [20, 24] });
  // icnEagleInactive = L.icon({ iconUrl: "img/nest.png", iconSize: [40, 40], iconAnchor: [20, 24] });

  lyrEagleNests = L.geoJSON
    // @ts-ignore
    .ajax("data/wildlife_eagle.geojson", {
      pointToLayer: returnEagleMarker,
      // filter: filterEagleNests
      onEachFeature: processEagle,
      filter: filterEagle,
    })
    .addTo(map);

  lyrEagleNests.on("data:loaded", function () {
    // map.fitBounds(lyrEagleNests.getBounds());
    arEagleIDs.sort(function (a, b) {
      return Number(a) - Number(b);
    });
    // @ts-ignore
    $("#txtFindEagle").autocomplete({
      source: arEagleIDs,
    });
  });

  lyrRaptorNests = L.geoJSON
    // @ts-ignore
    .ajax("data/wildlife_raptor.geojson", { pointToLayer: returnRaptorMarker, onEachFeature: processRaptor })
    .addTo(map);

  lyrClientLinesBuffer = L.featureGroup();
  lyrClientLines = L.geoJSON
    // @ts-ignore
    .ajax("data/client_lines.geojson", {
      style: styleClientLinears,
      onEachFeature: processClientLinears,
      filter: filterClientLines,
    })
    .addTo(map);

  lyrClientLines.on("data:loaded", function () {
    // console.log({ arProjectIDs });
    arProjectIDs.sort(function (a, b) {
      return Number(a) - Number(b);
    });
    // @ts-ignore
    $("#txtFindProject").autocomplete({
      source: arProjectIDs,
    });
    lyrClientLinesBuffer.addTo(map);
    lyrClientLines.bringToFront();
  });

  lyrBUOWL = L.geoJSON
    // @ts-ignore
    .ajax("data/wildlife_buowl.geojson", { style: styleBUOWL, onEachFeature: processBUOWL, filter: filterBUOWL })
    .addTo(map);

  lyrBUOWL.on("data:loaded", function () {
    arHabitatIDs.sort(function (a, b) {
      return Number(a) - Number(b);
    });
    // @ts-ignore
    $("#txtFindBUOWL").autocomplete({
      source: arHabitatIDs,
    });

    // console.log("turf:", turf);
    jsnBUOWLbuffer = turf.buffer(lyrBUOWL.toGeoJSON(), 0.3, "kilometers");
    // console.log("jsnBUOWLbuffer:", jsnBUOWLbuffer);
    lyrBUOWLbuffer = L.geoJSON(jsnBUOWLbuffer, { style: { color: "orange", dashArray: "5,5", fillOpacity: 0.3 } }).addTo(
      map
    );
    lyrBUOWL.bringToFront();
  });

  lyrGBH = L.geoJSON
    // @ts-ignore
    .ajax("data/wildlife_gbh.geojson", { style: { color: "fuchsia" } })
    .bindTooltip("GBH Nesting Area")
    .addTo(map);
  // console.log({ lyrGBH });

  // @ts-ignore
  lyrMarkerCluster = L.markerClusterGroup();

  lyrRaptorNests.on("data:loaded", function () {
    // map.fitBounds(lyrRaptorNests.getBounds());

    arRaptorIDs.sort(function (a, b) {
      return Number(a) - Number(b);
    });
    // @ts-ignore
    $("#txtFindRaptor").autocomplete({
      source: arRaptorIDs,
    });

    lyrMarkerCluster.addLayer(lyrRaptorNests);
    lyrMarkerCluster.addTo(map);
  });

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
    "Eagle Nest": lyrEagleNests,
    // "Raptor Nest": lyrRaptorNests,
    "Raptor Nest": lyrMarkerCluster,
    Client: lyrClientLines,
    "Burrowing Owl Habitat": lyrBUOWL,
    "GBH Rookeries": lyrGBH,
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

  // // @ts-ignore
  // ctlStyle = L.control.styleEditor({ position: "topright" }).addTo(map);

  // // @ts-ignore
  // ctlDraw = new L.Control.Draw({
  //   draw: {
  //     circle: false,
  //   },
  //   edit: {
  //     featureGroup: fgpDrawnItems,
  //   },
  // });
  // ctlDraw.addTo(map);

  // popExample = L.popup();
  // popExample.setLatLng([19.4132, -99.1859]);
  // popExample.setContent($("#side-bar")[0]);
  // popExample.openOn(map);

  // map.on("draw:created", function (event) {
  //   console.log("event:", event);
  //   fgpDrawnItems.addLayer(event.layer);
  //   alert("event.layer.toGeoJSON()):" + JSON.stringify(event.layer.toGeoJSON()));
  // });

  // fetch(countriesDataURL)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     L.geoJson(data).addTo(map);
  //   });

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
    // map.fitBounds(plnBikeRoute.getBounds());
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

  $("#btnShowLegend").click(function () {
    $("#legend").toggle();
  });

  $("#btnGBH").click(function () {
    $("#lgndGBHDetail").toggle();
  });
  $("#btnEagle").click(function () {
    $("#lgndEagleDetail").toggle();
  });
  $("#btnLinearProjects").click(function () {
    $("#lgndLinearProjectsDetail").toggle();
  });
  $("#btnRaptor").click(function () {
    $("#lgndRaptorDetail").toggle();
  });
  $("#btnBUOWL").click(function () {
    $("#lgndBUOWLDetail").toggle();
  });

  // @ts-ignore
  ctlLegend = new L.Control.Legend({
    position: "topright",
    controlButton: { title: "Legend" },
  }).addTo(map);

  $(".legend-container").append($("#legend"));
  $(".legend-toggle").append($("<i class='legend-toggle-icon fa fa-server fa-2x' style='color:#000'></i>"));

  map.on("overlayadd", function (event) {
    // console.log("event:", event);
    let strDiv = "#lgnd" + stripSpaces(event.name);
    $(strDiv).show();
  });

  map.on("overlayremove", function (event) {
    // console.log("event:", event);
    let strDiv = "#lgnd" + stripSpaces(event.name);
    $(strDiv).hide();
  });

  function returnClientLineById(id: number) {
    let arLayers = lyrClientLines.getLayers();
    for (let i = 0; i < arLayers.length; i++) {
      // @ts-ignore
      let featureId = arLayers[i].feature.properties.Project;
      // console.log({ featureId });
      if (featureId === Number(id)) {
        return arLayers[i];
      }
    }
    return false;
  }

  function testClientLineId(id: string) {
    // console.log(arProjectIDs);
    if (arProjectIDs.indexOf(id) < 0) {
      $("#divFindProject").addClass("has-error");
      $("#divFindError").html("Project ID not found");
      $("#btnFindProject").prop("disabled", true);
    } else {
      $("#divFindProject").removeClass("has-error");
      $("#divFindError").html("");
      $("#btnFindProject").prop("disabled", false);
    }
  }

  $("#txtFindProject").on("keyup paste", function () {
    let id = $("#txtFindProject").val();
    testClientLineId(id as string);
  });

  $("#btnFindProject").click(function () {
    let id = $("#txtFindProject").val();
    let lyr = returnClientLineById(id as number) as L.GeoJSON;
    if (lyr) {
      if (lyrSearch) {
        lyrSearch.remove();
      }
      lyrSearch = L.geoJSON(lyr.toGeoJSON(), { style: { color: "red", weight: 10, opacity: 0.5 } }).addTo(map);
      map.fitBounds(lyr.getBounds().pad(1));
      // @ts-ignore
      let att = lyr?.feature?.properties;
      $("#divProjectData").html(
        "<h4 class='text-center'>Attributes</h4><h5>Type: " + att.type + "</h5><h5>ROW width: " + att.row_width + "m </h5>"
      );
      $("#divProjectError").html("");

      // fgpDrawnItems.clearLayers();
      // fgpDrawnItems.addLayer(lyr);
    } else {
      $("#divProjectError").html("Project ID not found");
    }
  });

  function LatLngToArrayString(latLan: L.LatLng) {
    // console.log("latLan:", latLan);
    return "[" + latLan.lat.toFixed(3) + ", " + latLan.lng.toFixed(3) + "]";
  }

  function returnBUOWLId(id: number) {
    let arLayers = lyrBUOWL.getLayers();
    for (let i = 0; i < arLayers.length; i++) {
      // @ts-ignore
      let featureId = arLayers[i].feature.properties.habitat_id;
      // console.log({ featureId });
      if (featureId === Number(id)) {
        return arLayers[i];
      }
    }
    return false;
  }

  function testBUOWLId(id: string) {
    if (arHabitatIDs.indexOf(id) < 0) {
      $("#divFindBUOWL").addClass("has-error");
      $("#divBUOWLError").html("Project ID not found");
      $("#btnFindBUOWL").prop("disabled", true);
    } else {
      $("#divFindBUOWL").removeClass("has-error");
      $("#divBUOWLError").html("");
      $("#btnFindBUOWL").prop("disabled", false);
    }
  }

  $("#txtFindBUOWL").on("keyup paste", function () {
    let id = $("#txtFindBUOWL").val();
    testBUOWLId(id as string);
  });

  $("#btnFindBUOWL").click(function () {
    let id = $("#txtFindBUOWL").val();
    // console.log({ id });
    let lyr = returnBUOWLId(id as number) as L.GeoJSON;
    // console.log({ lyr });
    if (lyr) {
      if (lyrSearch) {
        lyrSearch.remove();
      }
      lyrSearch = L.geoJSON(lyr.toGeoJSON(), { style: { color: "red", weight: 10, opacity: 0.5 } }).addTo(map);
      map.fitBounds(lyr.getBounds().pad(1));
      // @ts-ignore
      let att = lyr?.feature?.properties;
      $("#divBUOWLData").html(
        "<h4 class='text-center'>Attributes</h4><h5>Habitat: " +
          att.habitat +
          "</h5><h5>Historically Occupied: " +
          att.hist_occup +
          "</h5><h5>Recent Status: " +
          att.recentstatus +
          "</h5>"
      );
      $("#divBUOWLError").html("");

      // fgpDrawnItems.clearLayers();
      // fgpDrawnItems.addLayer(lyr);
    } else {
      $("#divBUOWLError").html("Project ID not found");
    }
  });

  //* Bonus Material
  // @ts-ignore
  let ctlFile = L.Control.fileLayerLoad({
    position: "topright",
    layer: L.geoJson,
    layerOptions: {
      pointToLayer: function (_feature: L.GeoJSON, latlng: L.LatLngExpression) {
        return L.circleMarker(latlng, { radius: 7 });
      },
    },
    addToMap: true,
    // File size limit in kb (default: 1024) ?
    fileSizeLimit: 4096,
    // Restrict accepted file formats (default: .geojson, .kml, and .gpx) ?
    formats: [".geojson"],
  }).addTo(map);

  ctlFile.loader.on("data:loaded", function (event: any) {
    // Set a random color for the layer and add to the overlay control
    event.layer.setStyle({ color: returnRandomColor(), fillColor: returnRandomColor() });

    // @ts-ignore
    ctlLayers.addOverlay(event.layer, event.filename);
  });

  function returnRandomColor() {
    let arrColors = [
      "red",
      "darkred",
      "orange",
      "yellow",
      "green",
      "darkgreen",
      "chartreuse",
      "blue",
      "darkblue",
      "cyan",
      "indigo",
      "violet",
      "black",
      "gray",
    ];
    let idx = Math.floor(Math.random() * 14);
    return arrColors[idx];
  }

  function LLBtoMB(llb: L.LatLngBounds) {
    // Convert a leaflet LatLngBounds object to a turf compatible bbox array
    return [llb.getWest(), llb.getSouth(), llb.getEast(), llb.getNorth()];
  }

  function processGrid(json: { properties: { ID: string } }, lyr: L.Layer) {
    // Add popup with ID to grid layer
    lyr.bindPopup("ID: " + json.properties.ID);
  }

  $("#btnGrid").click(function () {
    let lyrGrid;
    // Set the initial size for the grid based on current map view
    let size = (map.getBounds().getNorth() - map.getBounds().getSouth()) * 10;

    let jsnGrid = turf.hexGrid(LLBtoMB(map.getBounds()), size, "kilometres");
    // Loop through all the hex polygons and add a unique ID property
    for (let i = 0; i < jsnGrid.features.length; i++) {
      jsnGrid.features[i].properties.ID = i + 1;
    }
    // If an existing grid exists, remove it from the layer control and the map.
    if (lyrGrid) {
      // @ts-ignore
      ctlLayers.removeLayer(lyrGrid);
      // @ts-ignore
      lyrGrid.remove();
    }
    // Convert the geoJSON feature collection to a leaflet map layer
    lyrGrid = L.geoJSON(jsnGrid, { style: { color: returnRandomColor() }, onEachFeature: processGrid }).addTo(map);
    // Add the grid layer to the layer control
    // @ts-ignore
    ctlLayers.addOverlay(lyrGrid, "Grid");
    // Refresh the layer selection controls to reflect the grid availability
  });
});

function returnEagleMarker(json: { properties: { status: string; nest_id: string } }, latlng: L.LatLngExpression) {
  const att = json.properties;
  let clrNest = "" as string;
  let wgtNest: number = 0;
  let opcNest: number = 0;
  let dshNest = "";
  if (att.status === "ACTIVE NEST") {
    clrNest = "darkGreen";
    wgtNest = 5;
    opcNest = 1;
    dshNest = "";
  } else {
    clrNest = "lightGreen";
    wgtNest = 5;
    opcNest = 0.5;
    dshNest = "2,8";
  }
  return L.circle(latlng, {
    radius: 804,
    color: clrNest,
    fillColor: "yellow",
    fillOpacity: 0.5,
    weight: wgtNest,
    opacity: opcNest,
    dashArray: dshNest,
  }).bindTooltip("<h4>Eagle Nest: " + att.nest_id + "</h4>Status: " + att.status);

  // let icnEagle;
  // if (att.status === "ACTIVE NEST") {
  //   icnEagle = icnEagleActive;
  // } else {
  //   icnEagle = icnEagleInactive;
  // }
  // return L.marker(latlng, { icon: icnEagle }).bindTooltip("<h4>Eagle Nest: " + att.nest_id + "</h4>Status: " + att.status);
}

// function filterEagleNests(json: { properties: { status: string; nest_id: string } }) {
//   const att = json.properties;
//   if (att.status === "ACTIVE NEST") {
//     return true;
//   } else {
//     return false;
//   }
// }

function returnRaptorMarker(
  json: { properties: { status: string; Nest_ID: string; recentspecies: string; recentstatus: string; lastsurvey: string } },
  latlng: L.LatLngExpression
) {
  let att = json.properties;
  let radRaptor: number;

  switch (att.recentspecies) {
    case "Red-tail Hawk":
      radRaptor = 533;
      break;
    case "Swainsons Hawk":
      radRaptor = 400;
      break;
    default:
      radRaptor = 804;
      break;
  }

  let optRaptor;
  switch (att.recentstatus) {
    case "ACTIVE NEST":
      optRaptor = { radius: radRaptor, color: "deeppink", fillColor: "blue", fillOpacity: 0.5 };
      break;
    case "INACTIVE NEST":
      optRaptor = { radius: radRaptor, color: "blue", fillColor: "blue", fillOpacity: 0.5 };
      break;
    case "FLEDGED NEST":
      optRaptor = { radius: radRaptor, color: "deeppink", fillColor: "blue", fillOpacity: 0.5, dashArray: "2,8" };
      break;
  }
  return L.circle(latlng, optRaptor).bindPopup(
    "<h4>Raptor Nest: " +
      att.Nest_ID +
      "</h4>Status: " +
      att.recentstatus +
      "<br>Species: " +
      att.recentspecies +
      "<br>Last Survey: " +
      att.lastsurvey
  );
}

function styleClientLinears(json: { properties: { type: string } }) {
  let att = json.properties;
  switch (att.type) {
    case "Pipeline":
      return { color: "peru" };
    case "Flowline":
      return { color: "navy" };
    case "Flowline, est.":
      return { color: "navy", dashArray: "5,5" };
    case "Electric Line":
      return { color: "darkgreen" };
    case "Access Road - Confirmed":
      return { color: "darkred" };
    case "Access Road - Estimated":
      return { color: "darkred", dashArray: "5,5" };
    case "Extraction":
      return { color: "indigo" };
    default:
      return { color: "darkgoldenrod" };
  }
}

function processClientLinears(
  json: { properties: { type: string; Project: string; row_width: number } },
  lyr: {
    getLatLngs(): (arg0: { lat: number; lng: number }[]) => number;
    bindTooltip: (arg0: string) => void;
  }
) {
  let att = json.properties;
  lyr.bindTooltip(
    "<h4>Linear Project: " +
      att.Project +
      "</h4>Type: " +
      att.type +
      "<br>ROW Width: " +
      att.row_width +
      "<br>Length: " +
      //@ts-ignore
      returnMultiLength(lyr.getLatLngs()).toFixed(0)
  );
  arProjectIDs.push(att.Project.toString());
  let jsnBuffer = turf.buffer(json, att.row_width / 1000, "kilometers");
  let lyrBuffer = L.geoJSON(jsnBuffer, { style: { color: "maroon", dashArray: "5,5" } });
  lyrClientLinesBuffer.addLayer(lyrBuffer);
}

function styleBUOWL(json: { properties: any }) {
  let att = json.properties;
  switch (att.hist_occup) {
    case "Yes":
      return { color: "deeppink", fillColor: "yellow" };
    case "Undetermined":
      return { color: "yellow" };
  }
}

function processBUOWL(json: { properties: any }, lyr: { bindTooltip: (arg0: string) => void }) {
  let att = json.properties;
  lyr.bindTooltip(
    "<h4>Habitat ID: " + att.habitat_id + "</h4>Historically Occupied: " + att.hist_occup + "<br>Status: " + att.recentstatus
  );
  arHabitatIDs.push(att.habitat_id.toString());
}

function filterBUOWL(json: { properties: any }) {
  let att = json.properties;
  if (att.recentstatus == "REMOVED") {
    return false;
  } else {
    return true;
  }
}

function filterEagle(json: { properties: any }) {
  let att = json.properties;
  let optFilter = $("input[name=fltEagle]:checked").val();
  if (optFilter == "ALL") {
    return true;
  } else {
    return att.status == optFilter;
  }
}

function processEagle(json: { properties: any }) {
  let att = json.properties;
  arEagleIDs.push(att.nest_id.toString());
}

function processRaptor(json: { properties: any }) {
  let att = json.properties;
  arRaptorIDs.push(att.Nest_ID.toString());
}

function returnEagleById(id: number) {
  let arLayers = lyrEagleNests.getLayers();
  // console.log(arLayers);
  for (let i = 0; i < arLayers.length; i++) {
    // @ts-ignore
    let featureId = arLayers[i].feature.properties.nest_id;
    // console.log({ featureId, id });
    if (featureId === Number(id)) {
      return arLayers[i];
    }
  }
  return false;
}

function testEagleNestId(id: string) {
  // console.log({ id });
  // console.log(arEagleIDs.indexOf(id));
  // console.log(arEagleIDs);
  if (arEagleIDs.indexOf(id) < 0) {
    $("#divFindEagle").addClass("has-error");
    $("#divEagleError").html("Project ID not found");
    $("#btnFindEagle").prop("disabled", true);
  } else {
    $("#divFindEagle").removeClass("has-error");
    $("#divEagleError").html("");
    $("#btnFindEagle").prop("disabled", false);
  }
}

$("#txtFindEagle").on("keyup paste", function () {
  let id = $("#txtFindEagle").val();
  // console.log({ id });
  testEagleNestId(id as string);
});

$("#btnFindEagle").click(function () {
  let id = $("#txtFindEagle").val();
  // console.log({ id });
  let lyr = returnEagleById(id as number) as L.GeoJSON;
  // console.log(lyr);
  if (lyr) {
    if (lyrSearch) {
      lyrSearch.remove();
    }
    lyrSearch = L.geoJSON(lyr.toGeoJSON(), { style: { color: "red", weight: 10, opacity: 0.5 } }).addTo(map);
    map.fitBounds(lyr.getBounds().pad(1));
    // @ts-ignore
    let att = lyr?.feature?.properties;
    // console.log({ att });
    $("#divEagleData").html("<h4 class='text-center'>Attributes</h4><h5>Status: " + att.status + "</h5>");
    $("#divEagleError").html("");

    // fgpDrawnItems.clearLayers();
    // fgpDrawnItems.addLayer(lyr);
  } else {
    $("#divEagleError").html("Project ID not found");
  }
});

// $("#lblEagle").click(function () {
//   $("#divEagleData").toggle();
// });

$("input[name=fltEagle]").click(function () {
  arEagleIDs = [];
  // @ts-ignore
  lyrEagleNests.refresh();
});

function returnRaptorById(id: number) {
  let arLayers = lyrRaptorNests.getLayers();
  for (let i = 0; i < arLayers.length; i++) {
    // @ts-ignore
    let featureId = arLayers[i].feature.properties.Nest_ID;
    // console.log({ featureId, id });
    if (featureId === Number(id)) {
      return arLayers[i];
    }
  }
  return false;
}

function testRaptorId(id: string) {
  if (arRaptorIDs.indexOf(id) < 0) {
    $("#divFindRaptor").addClass("has-error");
    $("#divRaptorError").html("Project ID not found");
    $("#btnFindRaptor").prop("disabled", true);
  } else {
    $("#divFindRaptor").removeClass("has-error");
    $("#divRaptorError").html("");
    $("#btnFindRaptor").prop("disabled", false);
  }
}

$("#txtFindRaptor").on("keyup paste", function () {
  let id = $("#txtFindRaptor").val();
  // console.log(id);
  testRaptorId(id as string);
});

$("#btnFindRaptor").click(function () {
  let id = $("#txtFindRaptor").val();
  let lyr = returnRaptorById(id as number) as L.GeoJSON;
  if (lyr) {
    if (lyrSearch) {
      lyrSearch.remove();
    }
    lyrSearch = L.geoJSON(lyr.toGeoJSON(), { style: { color: "red", weight: 10, opacity: 0.5 } }).addTo(map);
    map.fitBounds(lyr.getBounds().pad(1));
    // @ts-ignore
    let att = lyr?.feature?.properties;
    $("#divRaptorData").html(
      "<h4 class='text-center'>Attributes</h4><h5>Status: " +
        att.recentstatus +
        "</h5><h5>Species: " +
        att.recentspecies +
        "</h5><h5>Last Survey: " +
        att.lastsurvey +
        "</h5>"
    );
    $("#divRaptorError").html("");

    // fgpDrawnItems.clearLayers();
    // fgpDrawnItems.addLayer(lyr);
  } else {
    $("#divRaptorError").html("Project ID not found");
  }
});

$("#btnProjectFilterAll").click(function () {
  $("input[name=fltProject]").prop("checked", true);
});

$("#btnProjectFilterNone").click(function () {
  $("input[name=fltProject]").prop("checked", false);
});

$("#btnProjectFilter").click(function () {
  arProjectIDs = [];
  // @ts-ignore
  lyrClientLines.refresh();
});

function filterClientLines(json: { properties: any }) {
  let arProjectFilter: string[] = [];
  $("input[name=fltProject]").each(function () {
    if ((this as HTMLInputElement).checked) {
      arProjectFilter.push((this as HTMLInputElement).value);
    }
  });
  let att = json.properties;
  switch (att.type) {
    case "Pipeline":
      return arProjectFilter.indexOf("Pipeline") >= 0;
    case "Flowline":
      return arProjectFilter.indexOf("Flowline") >= 0;
    case "Flowline, est.":
      return arProjectFilter.indexOf("Flowline") >= 0;
    case "Electric Line":
      return arProjectFilter.indexOf("Electric") >= 0;
    case "Access Road - Confirmed":
      return arProjectFilter.indexOf("Road") >= 0;
    case "Access Road - Estimated":
      return arProjectFilter.indexOf("Road") >= 0;
    case "Extraction":
      return arProjectFilter.indexOf("Extraction") >= 0;
    default:
      return arProjectFilter.indexOf("Other") >= 0;
  }
}

function returnLength(arLL: { lat: number; lng: number }[]) {
  let total = 0;
  // console.log(arLL);
  for (let i = 1; i < arLL.length; i++) {
    // @ts-ignore
    total = total + arLL[i - 1].distanceTo(arLL[i]);
  }
  return total;
}

function returnMultiLength(arArLL: { lat: number; lng: number }[]) {
  let total = 0;
  for (let i = 0; i < arArLL.length; i++) {
    // @ts-ignore
    total = total + returnLength(arArLL[i]);
  }
  return total;
}

function stripSpaces(str: string) {
  return str.replace(/\s+/g, "");
}
