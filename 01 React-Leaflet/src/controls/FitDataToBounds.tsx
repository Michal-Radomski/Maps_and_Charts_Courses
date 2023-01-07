import React from "react";
import ReactDOM from "react-dom/client";

import { Button } from "antd";
import { BorderInnerOutlined, BorderOuterOutlined } from "@ant-design/icons";

import { createControlComponent } from "@react-leaflet/core";
import { Control, DomUtil, LatLng, LatLngBounds, Layer, Map } from "leaflet";

const node = DomUtil.create("div");
const root = ReactDOM.createRoot(node);

interface CustomLayer extends Layer {
  _latlng?: LatLng;
  getLatLng?: () => LatLngBounds;
  options?: { doFitToBounds: () => void };
}

// @ts-ignore
Control.Zoom = Control.extend({
  options: {
    position: "topleft",
  },

  onAdd: function (map: Map) {
    // console.log({ map });
    const doFitDataToBounds = () => {
      const latLngs: any[] | LatLngBounds = [];
      map.eachLayer((layer: CustomLayer) => {
        // console.log({layer});

        //* It doesn't work
        // const latLng = layer.options?.doFitToBounds && layer.getLatLng!();
        const latLng = layer._latlng;
        // console.log({latLng});
        if (latLng) {
          latLngs.push(latLng);
        }
      });
      if (latLngs.length > 0) {
        map.fitBounds(latLngs);
      }
      console.log({ latLngs });
    };
    const styleProps = {
      className: "leaflet-control-layers",
      style: { width: "auto", height: "33px" },
    };
    root.render(
      <div className="fit-bounds-control-container">
        <React.Fragment>
          <Button
            {...styleProps}
            title="Fit bounds to data"
            icon={<BorderInnerOutlined />}
            onClick={() => doFitDataToBounds()}
          >
            Fit to Data
          </Button>
          <Button {...styleProps} title="Fit bounds to world" icon={<BorderOuterOutlined />} onClick={() => map.fitWorld()}>
            Fit to World
          </Button>
        </React.Fragment>
      </div>
    );
    return node;
  },
  // onRemove: function (map) {
  //   console.log({ map });
  // },
});

const FitDataToBounds = createControlComponent((props) => new Control.Zoom(props));
// console.log({ FitDataToBounds });

export default FitDataToBounds;
