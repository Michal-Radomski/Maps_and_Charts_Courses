import React from "react";
import { LayerGroup, LayersControl, Marker, Popup } from "react-leaflet";
import { Button, Card, InputNumber, Space } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import L from "leaflet";
import { booleanPointInPolygon, Coord } from "@turf/turf";

import defaultIcon from "../icons/defaultIcon";

const DEFAULT_RADIUS = 3000;

const PopupStatistics = ({ feature, setRadiusFilter }: { feature: Feature; setRadiusFilter: Function }): JSX.Element => {
  const { name, adm0name, pop_max } = feature.properties;

  const [radius, setRadius] = React.useState<number>(DEFAULT_RADIUS);

  return (
    <React.Fragment>
      <Card type="inner" title="Name" style={{ marginTop: 10 }}>
        <b>{`${name}, ${adm0name}`}</b>
      </Card>
      <Card type="inner" title="Population" style={{ marginTop: 10 }}>
        <b>{`${pop_max}`}</b>
      </Card>
      <Card type="inner" title="Radius Filter" style={{ marginTop: 10 }}>
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
  getGeoFilter,
}: {
  data: { features: Feature[] };
  setRadiusFilter: Function;
  getRadiusFilter: Function;
  getGeoFilter: Function;
}): JSX.Element => {
  const radiusFilter = getRadiusFilter();
  // console.log({ radiusFilter });

  const geoFilter = getGeoFilter();
  // console.log({ geoFilter });

  let centerPoint: L.LatLng;
  if (radiusFilter) {
    const { coordinates } = radiusFilter.feature.geometry;
    centerPoint = L.latLng(coordinates[1], coordinates[0]);
  }

  const layer = data.features
    .filter((currentFeature: Feature) => {
      let filterByRadius = false || true;
      let filterByGeo = false || true;

      if (centerPoint) {
        const { coordinates } = currentFeature.geometry;
        const currentPoint = L.latLng(coordinates[1], coordinates[0]);
        filterByRadius = centerPoint.distanceTo(currentPoint) / 1000 < radiusFilter.radius;
      }

      if (geoFilter) {
        filterByGeo = booleanPointInPolygon(currentFeature as Coord, geoFilter);
      }

      let doFilter = true;
      if (geoFilter && radiusFilter) {
        // console.log({ filterByRadius, filterByGeo });
        doFilter = (filterByGeo && filterByRadius) as boolean;
      } else if (geoFilter && !radiusFilter) {
        doFilter = filterByGeo as boolean;
      } else if (radiusFilter && !geoFilter) {
        doFilter = filterByRadius as boolean;
      }
      return doFilter;
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
    });

  return (
    <LayersControl.Overlay checked name="World cities">
      <LayerGroup>{layer}</LayerGroup>
    </LayersControl.Overlay>
  );
};

export default MarkerLayer;
