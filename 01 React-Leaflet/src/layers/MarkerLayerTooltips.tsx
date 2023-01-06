import React from "react";
import { LayersControl, Marker, Tooltip, useMap } from "react-leaflet";

import { mountainIcon } from "../icons/mountainIcon";

interface Feature {
  geometry: { coordinates: number[] };
  properties: { name: string; elevation: number; continent: string };
}

const MarkerLayerTooltips = ({ data }: { data: { features: Feature[] } }): JSX.Element => {
  const leafletMap = useMap();

  const layer = data.features.map((feature: Feature) => {
    const { coordinates } = feature.geometry;
    const { name, elevation, continent } = feature.properties;
    return (
      <Marker
        key={String(coordinates)}
        position={[coordinates[1], coordinates[0]]}
        icon={mountainIcon}
        eventHandlers={{
          click: (event) => leafletMap.panTo(event.latlng),
          dblclick: (event) => console.log({ event }),
        }}
      >
        <Tooltip permanent={true}>
          <h3>Mt. {name}</h3>
          Continent: <b>{continent}</b> <br />
          Elevation: <b>{elevation} m</b>
        </Tooltip>
      </Marker>
    );
  });

  return (
    <React.Fragment>
      <LayersControl.Overlay checked name="Highest Points">
        {layer}
      </LayersControl.Overlay>
    </React.Fragment>
  );
};

export default MarkerLayerTooltips;
