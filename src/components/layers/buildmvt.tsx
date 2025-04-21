import {Deck} from '@deck.gl/core';
import {MVTLayer, MVTLayerPickingInfo} from '@deck.gl/geo-layers';
import type {Feature, Geometry} from 'geojson';

type PropertiesType = {
  name?: string;
  rank: number;
  layerName: string;
  class: string;
};


const buildMVTLayer = () => {

    const layer = new MVTLayer<PropertiesType>({
      id: 'MVTLayer',
      data: [
        'https://tiles-a.basemaps.cartocdn.com/vectortiles/carto.streets/v1/{z}/{x}/{y}.mvt'
      ],
      minZoom: 0,
      maxZoom: 14,
      getFillColor: (f: Feature<Geometry, PropertiesType>) => {
        switch (f.properties.layerName) {
          case 'poi':
            return [255, 0, 0];
          case 'water':
            return [120, 150, 180];
          case 'building':
            return [218, 218, 218];
          default:
            return [240, 240, 240];
        }
      },
      getLineWidth: (f: Feature<Geometry, PropertiesType>) => {
        switch (f.properties.class) {
          case 'street':
            return 6;
          case 'motorway':
            return 10;
          default:
            return 1;
        }
      },
      getLineColor: [192, 192, 192],
      getPointRadius: 2,
      pointRadiusUnits: 'pixels',
      stroked: false,
      picking: true
    });
    
    return layer
}


export default buildMVTLayer