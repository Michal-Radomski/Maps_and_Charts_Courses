import { GeoJsonObject } from "geojson";
import React from "react";
import { GeoJSON, LayersControl } from "react-leaflet";

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

  const Layer = () => {
    return (
      <React.Fragment>
        <GeoJSON
          key="geo-json-layer"
          data={data}
          eventHandlers={{
            click: (event) =>
              setGeoFilter((prevState: GeoJsonObject) => {
                const theSame = prevState === event.propagatedFrom.feature;
                return theSame ? null : event.propagatedFrom.feature;
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

  return (
    <LayersControl.Overlay checked name="Continents">
      <Layer />
    </LayersControl.Overlay>
  );
};

export default ContinentsPolygonLayer;
