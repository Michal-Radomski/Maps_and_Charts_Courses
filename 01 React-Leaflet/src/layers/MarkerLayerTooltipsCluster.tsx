import React from "react";
import { LayersControl, Marker, Tooltip, useMap } from "react-leaflet";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";

import defaultIcon from "../icons/defaultIcon";

const MarkerLayerTooltipsCluster = ({ data }: { data: Data }): JSX.Element => {
  const leafletMap = useMap();

  const layer = data.features.map((feature: Feature) => {
    const { coordinates } = feature.geometry;
    const { name } = feature.properties;
    return (
      <Marker
        key={String(coordinates)}
        position={[coordinates[1], coordinates[0]]}
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
      <LayersControl.Overlay checked={false} name="World Cities Cluster">
        {/* @ts-ignore */}
        <MarkerClusterGroup>{layer}</MarkerClusterGroup>
      </LayersControl.Overlay>
    </React.Fragment>
  );
};

export default MarkerLayerTooltipsCluster;
