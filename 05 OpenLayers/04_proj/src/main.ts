import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Fill, Stroke, Style, Circle, Text } from "ol/style";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import { MapBrowserEvent, Overlay } from "ol";
import Feature, { FeatureLike } from "ol/Feature";
import { Coordinate } from "ol/coordinate";
import { Geometry } from "ol/geom";

import "./style.scss";

window.onload = init;

function init(): void {
  const austrCenterCoordinate = [15091875.539375868, -2890099.0297847847];

  const map = new Map({
    view: new View({
      center: austrCenterCoordinate,
      zoom: 4,
      extent: [8700313.865909653, -9512187.262171041, 21430987.92760313, 2627132.2147866394],
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: "openlayers-map",
  });

  // Australian Cities GeoJSON
  const aussieCitiesStyle = function (feature: FeatureLike): Style[] {
    const cityID = feature.get("ID") as number;
    const cityIDString = cityID.toString() as string;
    // console.log({ cityID, cityIDString });

    const styles: Style[] = [
      new Style({
        image: new Circle({
          fill: new Fill({
            color: [77, 219, 105, 0.6],
          }),
          stroke: new Stroke({
            color: [6, 125, 34, 1],
            width: 2,
          }),
          radius: 12,
        }),
        text: new Text({
          text: cityIDString,
          scale: 1.5,
          fill: new Fill({
            color: [232, 26, 26, 1],
          }),
          stroke: new Stroke({
            color: [232, 26, 26, 1],
            width: 0.3,
          }),
        }),
      }),
    ];
    return styles;
  };

  const styleForSelect = function (feature: FeatureLike): Style[] {
    const cityID = feature.get("ID") as number;
    const cityIDString = cityID.toString() as string;
    const styles = [
      new Style({
        image: new Circle({
          fill: new Fill({
            color: [247, 26, 10, 0.5],
          }),
          stroke: new Stroke({
            color: [6, 125, 34, 1],
            width: 2,
          }),
          radius: 12,
        }),
        text: new Text({
          text: cityIDString,
          scale: 1.5,
          fill: new Fill({
            color: [87, 9, 9, 1],
          }),
          stroke: new Stroke({
            color: [87, 9, 9, 1],
            width: 0.5,
          }),
        }),
      }),
    ];
    return styles;
  };

  const austCitiesLayer = new VectorLayer({
    source: new VectorSource({
      format: new GeoJSON(),
      url: "./src/data/aust_cities.geojson",
    }),
    style: aussieCitiesStyle,
  });
  map.addLayer(austCitiesLayer);

  // Map Features Click Logic
  const navElements = document.querySelector(".column-navigation") as HTMLDivElement;
  const cityNameElement = document.getElementById("cityname") as HTMLParagraphElement;
  const cityImageElement = document.getElementById("cityimage") as HTMLImageElement;

  const mapView: View = map.getView();

  map.on("singleclick", function (evt: MapBrowserEvent<any>) {
    console.log("evt.coordinate:", evt.coordinate as Coordinate);

    map.forEachFeatureAtPixel(evt.pixel, function (feature: FeatureLike): void {
      const featureName = feature.get("Cityname") as string;
      const navElement = navElements.children.namedItem(featureName) as HTMLAnchorElement;
      mainLogic(feature, navElement);
    });
  });

  function mainLogic(feature: FeatureLike, clickedAnchorElement: HTMLElement): void {
    // Re-assign active class to the clicked element
    const currentActiveStyledElement = document.querySelector(".active") as HTMLAnchorElement;
    currentActiveStyledElement.className = currentActiveStyledElement.className.replace("active", "");
    clickedAnchorElement.className = "active";

    // Default style for all features
    const aussieCitiesFeatures = austCitiesLayer.getSource()?.getFeatures() as Feature<Geometry>[];
    aussieCitiesFeatures?.forEach(function (feature: Feature<Geometry>) {
      feature.setStyle(aussieCitiesStyle);
    });

    // Home Element : Change content in the menu to HOME
    if (clickedAnchorElement.id === "Home") {
      mapView.animate({ center: austrCenterCoordinate }, { zoom: 4 });
      cityNameElement.innerHTML = "Welcome to Australian Capital Cities Tour Map";
      cityImageElement.setAttribute("src", "./src/data/City_images/Australian_Flag.jpg");
    }
    // Change view, and content in the menu based on the feature
    else {
      (feature as Feature).setStyle(styleForSelect);
      const featureCoordinates = feature.get("geometry").getCoordinates();
      mapView.animate({ center: featureCoordinates }, { zoom: 5 });
      const featureName = feature.get("Cityname") as string;
      const featureImage = feature.get("Cityimage") as string;
      cityNameElement.innerHTML = "Name of the city: " + featureName;
      cityImageElement.setAttribute("src", "./src/data/City_images/" + featureImage + ".jpg");
    }
  }

  // Navigation Button Logic
  const anchorNavElements = document.querySelectorAll(".column-navigation > a") as NodeListOf<HTMLAnchorElement>;
  for (let anchorNavElement of anchorNavElements) {
    anchorNavElement.addEventListener("click", function (event: MouseEvent) {
      const clickedAnchorElement = event.currentTarget as HTMLAnchorElement;
      // console.log("clickedAnchorElement:", clickedAnchorElement);
      const clickedAnchorElementID = clickedAnchorElement?.id as string;
      const aussieCitiesFeatures = austCitiesLayer.getSource()?.getFeatures() as Feature<Geometry>[];
      aussieCitiesFeatures.forEach(function (feature: Feature<Geometry>) {
        const featureCityName = feature.get("Cityname") as string;
        if (clickedAnchorElementID === featureCityName) {
          mainLogic(feature, clickedAnchorElement);
        }
      });

      // Home Navigation Case
      if (clickedAnchorElementID === "Home") {
        mainLogic(undefined as any, clickedAnchorElement);
      }
    });
  }

  // Features Hover Logic
  const popoverTextElement = document.getElementById("popover-text") as HTMLParagraphElement;
  const popoverTextLayer = new Overlay({
    element: popoverTextElement,
    positioning: "bottom-center",
    stopEvent: false,
  });
  map.addOverlay(popoverTextLayer);

  map.on("pointermove", function (evt: MapBrowserEvent<any>) {
    const isFeatureAtPixel = map.hasFeatureAtPixel(evt.pixel);
    if (isFeatureAtPixel) {
      const featureAtPixel = map.getFeaturesAtPixel(evt.pixel);
      const featureName = featureAtPixel[0].get("Cityname");
      popoverTextLayer.setPosition(evt.coordinate);
      popoverTextElement.innerHTML = featureName;
      map.getViewport().style.cursor = "pointer";
    } else {
      popoverTextLayer.setPosition(undefined);
      map.getViewport().style.cursor = "";
    }
  });
}
