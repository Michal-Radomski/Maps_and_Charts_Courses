import { GeoJsonObject } from "geojson";
import React from "react";
import { GeoJSON } from "react-leaflet";

const ContinentsPolygonLayer = ({
  data,
  setGeoFilter,
  getGeoFilter,
}: {
  data: GeoJsonObject;
  setGeoFilter: Function;
  getGeoFilter: Function;
}): JSX.Element => {
  const geoFilter = getGeoFilter();
  return (
    <React.Fragment>
      <GeoJSON
        key="geo-json-layer"
        data={data}
        eventHandlers={{
          click: (event) =>
            setGeoFilter((prevState: GeoJsonObject) => {
              const same = prevState === event.propagatedFrom.feature;
              return same ? null : event.propagatedFrom.feature;
            }),
        }}
        style={(feature) => {
          return {
            color: geoFilter === feature ? "red" : "blue",
            weight: 0.5,
            fillOpacity: 0.4,
          };
        }}
      ></GeoJSON>
    </React.Fragment>
  );
};

export default ContinentsPolygonLayer;
