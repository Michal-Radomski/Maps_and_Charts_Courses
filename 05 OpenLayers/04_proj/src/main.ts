import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Fill, Stroke, Style, Circle, Text } from "ol/style";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import { MapBrowserEvent } from "ol";
import { FeatureLike } from "ol/Feature";
import { Coordinate } from "ol/coordinate";

import "./style.scss";

window.onload = init;

function init(): void {
  const map = new Map({
    view: new View({
      center: [15091875.539375868, -2890099.0297847847],
      zoom: 1,
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

    const styles = [
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
  // const cityNameElement = document.getElementById("cityname");
  // const cityImageElement = document.getElementById("cityimage");

  const mapView: View = map.getView();

  map.on("singleclick", function (evt: MapBrowserEvent<any>) {
    console.log("evt.coordinate:", evt.coordinate);

    map.forEachFeatureAtPixel(evt.pixel, function (feature: FeatureLike): void {
      const featureName = feature.get("Cityname") as string;
      const navElement = navElements.children.namedItem(featureName) as HTMLAnchorElement;
      mainLogic(feature, navElement);
    });
  });

  function mainLogic(feature: FeatureLike, clickedAnchorElement: Element): void {
    // Re-assign active class to the clicked element
    const currentActiveStyledElement = document.querySelector(".active") as HTMLAnchorElement;
    currentActiveStyledElement.className = currentActiveStyledElement.className.replace("active", "");
    clickedAnchorElement.className = "active";

    // Change the view based on the feature
    const featureCoordinates = feature.get("geometry").getCoordinates() as Coordinate;
    // console.log("featureCoordinates:", featureCoordinates);
    mapView.animate({ center: featureCoordinates }, { zoom: 5 });
  }
}
