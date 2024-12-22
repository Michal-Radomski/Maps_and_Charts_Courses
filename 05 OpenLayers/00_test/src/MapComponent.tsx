import React from "react";

import "ol/ol.css"; // Import OpenLayers CSS
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import { FullScreen, defaults as defaultControls } from "ol/control";

const MapComponent = (): JSX.Element => {
  const gdanskCoordinates = [18.645278, 54.3475]; // Longitude first
  const gdanskWebMercator = fromLonLat(gdanskCoordinates); // Convert to Web Mercator
  // console.log("gdanskWebMercator:", gdanskWebMercator);

  const mapElement: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const map = new Map({
      target: mapElement.current as HTMLDivElement,
      controls: defaultControls().extend([new FullScreen()]),
      layers: [
        new TileLayer({
          source: new OSM(), // Using OpenStreetMap as the base layer
        }),
      ],
      view: new View({
        center: gdanskWebMercator, // Set the initial center of the map
        zoom: 10, // Set the initial zoom level
      }),
    }) as Map;

    return () => {
      map.setTarget(null as any); // Cleanup on unmount
    };
  }, []);

  return (
    <React.Fragment>
      <div id="map" ref={mapElement as React.RefObject<HTMLDivElement>} />
    </React.Fragment>
  );
};

export default MapComponent;
