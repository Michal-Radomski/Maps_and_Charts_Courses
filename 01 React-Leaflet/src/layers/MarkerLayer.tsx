import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Card } from "antd";

import defaultIcon from "../icons/defaultIcon";

const PopupStatistics = ({ feature }: { feature: Feature }): JSX.Element => {
  const { name, adm0name, pop_max } = feature.properties;

  return (
    <React.Fragment>
      <Card type="inner" title="Name">
        {name}
      </Card>
      <Card type="inner" title="Population">
        {pop_max}
      </Card>
      <Card type="inner" title="Radius Filter">
        {adm0name}
      </Card>
    </React.Fragment>
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
              <PopupStatistics feature={feature} />
            </Popup>
          </Marker>
        );
      })}
    </React.Fragment>
  );
};

export default MarkerLayer;
