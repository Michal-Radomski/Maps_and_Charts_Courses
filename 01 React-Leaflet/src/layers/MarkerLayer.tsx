import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Button, Card, InputNumber, Space } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import L from "leaflet";

import defaultIcon from "../icons/defaultIcon";

const DEFAULT_RADIUS = 3000;

const PopupStatistics = ({ feature, setRadiusFilter }: { feature: Feature; setRadiusFilter: Function }): JSX.Element => {
  const { name, adm0name, pop_max } = feature.properties;

  const [radius, setRadius] = React.useState<number>(DEFAULT_RADIUS);

  return (
    <React.Fragment>
      <Card type="inner" title="Name" style={{ marginTop: 16 }}>
        <b>{`${name}, ${adm0name}`}</b>
      </Card>
      <Card type="inner" title="Population" style={{ marginTop: 16 }}>
        <b>{`${pop_max}`}</b>
      </Card>
      <Card type="inner" title="Radius Filter" style={{ marginTop: 16 }}>
        <Space>
          <InputNumber
            defaultValue={DEFAULT_RADIUS}
            min={0}
            onChange={(event) => {
              setRadius(event!);
              // console.log({ event });
            }}
          ></InputNumber>
          <Button
            type="primary"
            shape="round"
            icon={<FilterOutlined />}
            onClick={() =>
              setRadiusFilter((prevState: { feature: Feature; radius: number }) => {
                let newFilter;
                if (prevState) {
                  if (radius === 0) {
                    newFilter = prevState;
                  } else {
                    const sameFeature = prevState.feature === feature;
                    const sameRadius = prevState.radius === radius;
                    if (!sameFeature || !sameRadius) {
                      newFilter = { feature, radius };
                    }
                  }
                } else if (radius !== 0) {
                  newFilter = { feature, radius };
                }
                return newFilter;
              })
            }
          >
            Filter by km
          </Button>
        </Space>
      </Card>
    </React.Fragment>
  );
};

const MarkerLayer = ({
  data,
  setRadiusFilter,
  getRadiusFilter,
}: {
  data: { features: Feature[] };
  setRadiusFilter: Function;
  getRadiusFilter: Function;
}): JSX.Element => {
  const radiusFilter = getRadiusFilter();
  // console.log({ radiusFilter });

  let centerPoint: L.LatLng;
  if (radiusFilter) {
    const { coordinates } = radiusFilter.feature.geometry;
    centerPoint = L.latLng(coordinates[1], coordinates[0]);
  }

  return (
    <React.Fragment>
      {data.features
        .filter((currentFeature: Feature) => {
          if (centerPoint) {
            const { coordinates } = currentFeature.geometry;
            const currentPoint = L.latLng(coordinates[1], coordinates[0]);
            return centerPoint.distanceTo(currentPoint) / 1000 < radiusFilter.radius;
          } else {
            return true;
          }
        })
        .map((feature: Feature) => {
          const { coordinates } = feature.geometry;
          return (
            <Marker key={String(coordinates)} position={[coordinates[1], coordinates[0]]} icon={defaultIcon}>
              <Popup>
                <PopupStatistics feature={feature} setRadiusFilter={setRadiusFilter} />
              </Popup>
            </Marker>
          );
        })}
    </React.Fragment>
  );
};

export default MarkerLayer;
