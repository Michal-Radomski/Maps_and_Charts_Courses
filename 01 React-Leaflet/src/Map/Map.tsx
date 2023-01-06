import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { GeoJsonObject } from "geojson";

import { cities } from "../data/cities";
import { mountains } from "../data/mountains";
import { continents } from "../data/continents";
import defaultIcon from "../icons/defaultIcon";
import MarkerLayer from "../layers/MarkerLayer";
import MarkerLayerTooltips from "../layers/MarkerLayerTooltips";
import RadiusFilter from "../layers/RadiusFilter";
import ContinentsPolygonLayer from "../layers/ContinentsPolygonLayer";

interface Data {
  features: Feature[];
}

const Map = (): JSX.Element => {
  const position = [54.3475, 18.645278] as [number, number];

  const [radiusFilter, setRadiusFilter] = React.useState<RadiusFilter | null>(null);
  // console.log({ radiusFilter });
  const getRadiusFilter = () => radiusFilter;

  const [geoFilter, setGeoFilter] = React.useState<GeoJsonObject | null>(null);
  // console.log({ geoFilter });
  const getGeoFilter = () => geoFilter;

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
        <MarkerLayer
          data={cities as Data}
          setRadiusFilter={setRadiusFilter}
          getRadiusFilter={getRadiusFilter}
          getGeoFilter={getGeoFilter}
        />
        <MarkerLayerTooltips data={mountains} />
        <RadiusFilter radiusFilter={radiusFilter!} setRadiusFilter={setRadiusFilter} />
        <ContinentsPolygonLayer data={continents as GeoJsonObject} setGeoFilter={setGeoFilter} getGeoFilter={getGeoFilter} />
      </MapContainer>
    </React.Fragment>
  );
};

export default Map;
