interface Feature {
  type: string;
  properties: {
    name: string;
    adm0name: string;
    latitude: number;
    longitude: number;
    pop_max: number;
    pop_min: number;
    pop_other: number;
    rank_max: number;
    rank_min: number;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
}

interface RadiusFilter {
  feature: Feature;
  radius: number;
}
