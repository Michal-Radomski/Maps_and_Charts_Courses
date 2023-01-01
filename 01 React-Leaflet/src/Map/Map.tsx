import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = (): JSX.Element => {
  const position = [54.3475, 18.645278] as [number, number];

  return (
    <React.Fragment>
      <MapContainer center={position} zoom={12} scrollWheelZoom={false} preferCanvas={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Gdansk. <br /> Beautiful Gdansk.
          </Popup>
        </Marker>
      </MapContainer>
    </React.Fragment>
  );
};

export default Map;
