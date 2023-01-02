import React from "react";
import { Marker, Popup } from "react-leaflet";

import defaultIcon from "../icons/defaultIcon";

interface Feature {
  geometry: { coordinates: Array<number> };
}

const MarkerLayer = ({ data }: { data: { features: Feature[] } }): JSX.Element => {
  return (
    <React.Fragment>
      {data.features.map((feature: Feature) => {
        const { coordinates } = feature.geometry;

        return (
          <Marker key={String(coordinates)} position={[coordinates[1], coordinates[0]]} icon={defaultIcon}>
            <Popup>
              Marker for a city. <br /> For a capital.
            </Popup>
          </Marker>
        );
      })}
    </React.Fragment>
  );
};

export default MarkerLayer;
