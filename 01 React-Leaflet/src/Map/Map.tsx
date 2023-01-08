import React from "react";
import { LayersControl, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { GeoJsonObject } from "geojson";

import { cities } from "../data/cities";
import { mountains } from "../data/mountains";
import { continents } from "../data/continents";
import defaultIcon from "../icons/defaultIcon";
import MarkerLayer from "../layers/MarkerLayer";
import MarkerLayerTooltips from "../layers/MarkerLayerTooltips";
import RadiusFilter from "../layers/RadiusFilter";
import ContinentsPolygonLayer from "../layers/ContinentsPolygonLayer";
import FitDataToBounds from "../controls/FitDataToBounds";
import ShowActiveFiltersControl from "../controls/ShowActiveFiltersControl";
import MarkerLayerTooltipsCluster from "../layers/MarkerLayerTooltipsCluster";
import MarkerLayerTooltipsReProject from "../layers/MarkerLayerTooltipsReProject";
import { irishCities2157 } from "../data/irish_cities_21157";

const Map = (): JSX.Element => {
  const position = [54.3475, 18.645278] as [number, number];

  const [radiusFilter, setRadiusFilter] = React.useState<RadiusFilter | null>(null);
  // console.log({ radiusFilter });
  const getRadiusFilter = () => radiusFilter;

  const [geoFilter, setGeoFilter] = React.useState<GeoJsonObject | null>(null);
  // console.log({ geoFilter });
  const getGeoFilter = () => geoFilter;

  const [asyncCities, setAsyncCities] = React.useState<{ features: Feature[] }>({ features: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places_simple.geojson"
      );
      const cities = await response.json();
      setAsyncCities(cities);
    };
    fetchData().catch((error) => console.error({ error }));
  }, []);

  return (
    <React.Fragment>
      <MapContainer center={position} zoom={3} scrollWheelZoom={false} preferCanvas={false}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OSM Streets">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="ESRI World Imagery">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="OpenTopoMap">
            <TileLayer
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
              maxZoom={17}
            />
          </LayersControl.BaseLayer>

          <Marker position={position} icon={defaultIcon}>
            <Popup>
              Gdansk. <br /> Beautiful Gdansk.
            </Popup>
          </Marker>
          <MarkerLayer
            // data={cities as Data}
            data={asyncCities}
            setRadiusFilter={setRadiusFilter}
            getRadiusFilter={getRadiusFilter}
            getGeoFilter={getGeoFilter}
          />
          <MarkerLayerTooltips data={mountains} />

          <MarkerLayerTooltipsCluster data={cities as Data} />
          <MarkerLayerTooltipsReProject data={irishCities2157 as unknown as Data} />

          <RadiusFilter radiusFilter={radiusFilter!} setRadiusFilter={setRadiusFilter} />
          <ContinentsPolygonLayer
            data={continents as GeoJsonObject}
            setGeoFilter={setGeoFilter}
            getGeoFilter={getGeoFilter}
          />
        </LayersControl>
        <FitDataToBounds />
        <ShowActiveFiltersControl getFilters={() => ({ geoFilter, radiusFilter } as any)} />
      </MapContainer>
    </React.Fragment>
  );
};

export default Map;
