import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Attribution, defaults as defaultControls } from "ol/control";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import VectorImageLayer from "ol/layer/VectorImage";
import MVT from "ol/format/MVT";
import OGCVectorTile from "ol/source/OGCVectorTile";
import VectorTileLayer from "ol/layer/VectorTile";
// import VectorTileSource from "ol/source/VectorTile";
// import { Fill, Icon, Stroke, Style, Text } from "ol/style";

// const { createMapboxStreetsV6Style } = window;

import "./style.scss";
// import { mapBoxKey } from "./keys";

function init(): void {
  const attribution = new Attribution({
    collapsible: true,
  });

  const map = new Map({
    view: new View({
      center: [0, 0],
      zoom: 1,
      projection: "EPSG:4326",
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
        visible: true,
        opacity: 0.1,
      }),

      //* OGC Vector Tile  Example
      new VectorTileLayer({
        opacity: 0.6,
        source: new OGCVectorTile({
          url: "https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:cultural:ne_10m_admin_0_countries/tiles/WorldCRS84Quad",
          format: new MVT(),
          projection: "EPSG:4326",
        }),
        background: "#d1d1d1",
        style: {
          // @ts-ignore
          "stroke-width": 0.6,
          "stroke-color": "#8c8b8b",
          "fill-color": "#f7f7e9",
        },
      }),
    ],
    target: "map",
    controls: defaultControls({ attribution: false }).extend([attribution]),
  });

  //* Vector Tile Layer MapBox Example
  // const openstreetMapVectorTile = new VectorTileLayer({
  //   declutter: true,
  //   source: new VectorTileSource({
  //     attributions:
  //       '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
  //       '© <a href="https://www.openstreetmap.org/copyright">' +
  //       "OpenStreetMap contributors</a>",
  //     format: new MVT(),
  //     url:
  //       "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/" + "{z}/{x}/{y}.vector.pbf?access_token=" + mapBoxKey,
  //   }),
  //   style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text),
  // });
  // map.addLayer(openstreetMapVectorTile);

  //* Vector Layer Example
  const vectorLayer = new VectorLayer({
    opacity: 0.4,
    source: new VectorSource({
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: new GeoJSON(),
    }),
    style: {
      "fill-color": ["string", ["get", "COLOR"], "#eee"],
    },
  });
  map.addLayer(vectorLayer);

  //* Vector Image Layer Example
  const vectorImageLayer = new VectorImageLayer({
    opacity: 0.4,
    source: new VectorSource({
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: new GeoJSON(),
    }),
    style: {
      "fill-color": ["string", ["get", "COLOR"], "#eee"],
    },
  });
  map.addLayer(vectorImageLayer);
}

window.onload = init;
