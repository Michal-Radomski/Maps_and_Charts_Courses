import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Card } from "antd";

import defaultIcon from "../icons/defaultIcon";

interface Feature {
  geometry: { coordinates: Array<number> };
}

const PopupStatistics = (): JSX.Element => {
  return (
    <Card type="inner" title="Name" style={{ marginTop: 16 }}>
      <div style={{ color: "blue" }}>
        Marker for a city. <br /> For a capital.
      </div>
    </Card>
  );
};

const MarkerLayer = ({ data }: { data: { features: Feature[] } }): JSX.Element => {
  return (
    <React.Fragment>
      {data.features.map((feature: Feature) => {
        const { coordinates } = feature.geometry;

        return (
          <Marker key={String(coordinates)} position={[coordinates[1], coordinates[0]]} icon={defaultIcon}>
            <Popup>
              {/* Marker for a city. <br /> For a capital. */}
              <PopupStatistics />
            </Popup>
          </Marker>
        );
      })}
    </React.Fragment>
  );
};

export default MarkerLayer;
