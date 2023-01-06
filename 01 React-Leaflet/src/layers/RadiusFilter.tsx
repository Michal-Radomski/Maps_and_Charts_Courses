import { LeafletMouseEvent } from "leaflet";
import React from "react";
import { Circle, LayersControl } from "react-leaflet";

declare global {
  interface Window {
    L: { DomEvent: { stopPropagation: (arg0: LeafletMouseEvent) => void } };
  }
}

const RadiusFilter = ({
  radiusFilter,
  setRadiusFilter,
}: {
  radiusFilter: RadiusFilter;
  setRadiusFilter: Function;
}): JSX.Element => {
  if (radiusFilter) {
    const { coordinates } = radiusFilter.feature.geometry;

    const layer = () => {
      return (
        <React.Fragment>
          <Circle
            center={[coordinates[1], coordinates[0]]}
            radius={radiusFilter.radius * 1000}
            eventHandlers={{
              dblclick: (event) => {
                event.originalEvent.view!.L.DomEvent.stopPropagation(event);
                setRadiusFilter(null);
              },
            }}
            color={"gray"}
            weight={1}
            fillOpacity={0.4}
          />
        </React.Fragment>
      );
    };

    return (
      <LayersControl.Overlay checked name="Radius Filter">
        {layer()}
      </LayersControl.Overlay>
    );
  } else {
    return null as any;
  }
};

export default RadiusFilter;
