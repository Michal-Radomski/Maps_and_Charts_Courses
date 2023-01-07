import React from "react";
import { List } from "antd";
import { GeoJsonObject } from "geojson";

const ShowActiveFiltersControl = ({
  getFilters,
}: {
  getFilters: () => {
    geoFilter: GeoJsonObject;
    radiusFilter: RadiusFilter;
  };
}) => {
  const { geoFilter, radiusFilter }: { geoFilter: GeoJsonObject; radiusFilter: RadiusFilter } = getFilters();
  // console.log("getFilters():", getFilters());

  const getDisplayFilters = () => {
    const filtersToDisplay = [];

    const round = (num: number) => Math.round(num * 100) / 100;

    if (geoFilter) {
      // @ts-ignore
      filtersToDisplay.push(geoFilter.properties.CONTINENT);
    }

    if (radiusFilter) {
      const { coordinates } = radiusFilter.feature.geometry;
      const { radius } = radiusFilter;
      const radiusFilterToDisplay = `
          Center: (Lat: ${round(coordinates[1])}, Lon: ${round(coordinates[0])});
          Radius: ${radius} km`;
      filtersToDisplay.push(radiusFilterToDisplay);
    }

    return filtersToDisplay.length > 0 ? filtersToDisplay : ["No Filter Active"];
  };

  const RenderActiveFilters = () => {
    return (
      <List
        size="small"
        header={
          <div>
            <b>Active Filters</b>
          </div>
        }
        bordered
        dataSource={getDisplayFilters()}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    );
  };

  return (
    <React.Fragment>
      <div className="leaflet-bottom leaflet-left">
        <div className="leaflet-control leaflet-bar leaflet-control-layers">
          <RenderActiveFilters />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowActiveFiltersControl;
