import React from "react";
import { Marker, Tooltip, useMap } from "react-leaflet";

import { mountainIcon } from "../icons/mountainIcon";

interface Feature {
  geometry: { coordinates: number[] };
  properties: { name: string; elevation: number; continent: string };
}

const MarkerLayerTooltips = ({ data }: { data: { features: Feature[] } }): JSX.Element[] => {
  const leafletMap = useMap();
  return data.features.map((feature: Feature) => {
    const { coordinates } = feature.geometry;
    const { name, elevation, continent } = feature.properties;
    return (
      <Marker
        key={String(coordinates)}
        position={[coordinates[1], coordinates[0]]}
        icon={mountainIcon}
        eventHandlers={{
          click: (event) => leafletMap.panTo(event.latlng),
        }}
      >
        <Tooltip>
          <h3>Mt. {name}</h3>
          Continent: <b>{continent}</b> <br />
          Elevation: <b>{elevation} m</b>
        </Tooltip>
      </Marker>
    );
  });
};

export default MarkerLayerTooltips;
