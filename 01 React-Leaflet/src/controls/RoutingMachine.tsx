import React from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

import defaultIcon from "../icons/defaultIcon";

const WAYPOINT_FROM = [38.725267, -9.150019];
const WAYPOINT_TO = [59.437222, 24.745278];

const RoutingMachine = (): JSX.Element => {
  const map = useMap();

  // @ts-ignore
  React.useEffect(() => {
    if (!map) return;

    const waypoints = [L.latLng(WAYPOINT_FROM as [number, number]), L.latLng(WAYPOINT_TO as [number, number])];

    const routingControl = L.Routing.control({
      waypoints,
      // @ts-ignore
      createMarker: function (_i: number, waypoint: { latLng: L.LatLngExpression }, _n: number) {
        L.marker(waypoint.latLng, {
          icon: defaultIcon,
        });
      },
      routeWhileDragging: true,
      show: true,
      addWaypoints: false,
      draggableWaypoints: true,
      fitSelectedRoutes: false,
      showAlternatives: true,
    }).addTo(map);
    return () => map.removeControl(routingControl);
  }, [map]);

  return null as any;
};

export default RoutingMachine;
