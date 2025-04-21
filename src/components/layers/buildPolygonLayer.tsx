import {GeoJsonLayer} from '@deck.gl/layers';
import type {Feature, Geometry} from 'geojson';

const buildPolygonLayer = () => {
    
    return new GeoJsonLayer<PropertiesType>({
        id: 'GeoJsonLayer',
        data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart.geo.json',
      
        stroked: false,
        filled: true,
        pointType: 'circle+text',
        pickable: true,
      
        getFillColor: [160, 160, 180, 200],
        getLineColor: (f: Feature<Geometry, PropertiesType>) => {
          const hex = f.properties.color;
          // convert to RGB
          return hex ? hex.match(/[0-9a-f]{2}/g).map(x => parseInt(x, 16)) : [0, 0, 0];
        },
        getText: (f: Feature<Geometry, PropertiesType>) => f.properties.name,
        getLineWidth: 20,
        getPointRadius: 4,
        getTextSize: 12
      });
}

export default buildPolygonLayer
