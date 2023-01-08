import React from "react";
import { LayerGroup, LayersControl, Marker, Tooltip, useMap } from "react-leaflet";
import proj4 from "proj4";

import defaultIcon from "../icons/defaultIcon";

const ITM = "EPSG:2157";
const WGS = "EPSG:4326";

proj4.defs(
  ITM,
  "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=0.99982 +x_0=600000 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
);
proj4.defs(WGS, "+proj=longlat +datum=WGS84 +no_defs");

const MarkerLayerTooltipsReProject = ({ data }: { data: Data }): JSX.Element => {
  const leafletMap = useMap();

  const layer = data.features.map((feature: Feature) => {
    const { coordinates } = feature.geometry;
    const { name } = feature.properties;

    const reProjectedCoordinates = proj4(ITM, WGS, coordinates);

    return (
      <Marker
        key={String(coordinates)}
        position={[reProjectedCoordinates[1], reProjectedCoordinates[0]]}
        icon={defaultIcon}
        eventHandlers={{
          click: (event) => leafletMap.panTo(event.latlng),
          dblclick: (event) => console.log({ event }),
        }}
      >
        <Tooltip permanent={true}>
          <h3>{name}</h3>
        </Tooltip>
      </Marker>
    );
  });

  return (
    <React.Fragment>
      <LayersControl.Overlay checked={false} name="Irish Cities ReProject">
        <LayerGroup>{layer}</LayerGroup>
      </LayersControl.Overlay>
    </React.Fragment>
  );
};

export default MarkerLayerTooltipsReProject;
