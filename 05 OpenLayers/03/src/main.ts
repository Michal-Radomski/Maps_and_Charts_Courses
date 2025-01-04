import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Attribution, defaults as defaultControls } from "ol/control.js";
import GeoJSON from "ol/format/GeoJSON.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import VectorImageLayer from "ol/layer/VectorImage.js";
import MVT from "ol/format/MVT.js";
import OGCVectorTile from "ol/source/OGCVectorTile.js";
import VectorTileLayer from "ol/layer/VectorTile.js";

import "./style.scss";

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

      //* Vector Tile Example
      new VectorTileLayer({
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

  //* Vector Layer Example
  const vectorLayer = new VectorLayer({
    opacity: 0.5,
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
    opacity: 0.5,
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
