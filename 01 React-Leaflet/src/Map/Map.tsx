import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { cities } from "../data/cities";
import { mountains } from "../data/mountains";
import defaultIcon from "../icons/defaultIcon";
import MarkerLayer from "../layers/MarkerLayer";
import MarkerLayerTooltips from "../layers/MarkerLayerTooltips";

interface Data {
  features: Feature[];
}

const Map = (): JSX.Element => {
  const position = [54.3475, 18.645278] as [number, number];

  const [radiusFilter, setRadiusFilter] = React.useState<object | null>(null);
  // console.log({ radiusFilter });
  const getRadiusFilter = () => radiusFilter;

  return (
    <React.Fragment>
      <MapContainer center={position} zoom={3} scrollWheelZoom={false} preferCanvas={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            Gdansk. <br /> Beautiful Gdansk.
          </Popup>
        </Marker>
        <MarkerLayer data={cities as Data} setRadiusFilter={setRadiusFilter} getRadiusFilter={getRadiusFilter} />
        <MarkerLayerTooltips data={mountains} />
      </MapContainer>
    </React.Fragment>
  );
};

export default Map;