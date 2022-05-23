import React from 'react';
import "./style.css"
import { MapProvider, Map, ZoomControl, KeyboardControl, MouseControl, MarkerLayer, Marker } from 'mapy-cz-react';

export const MapSection = () => {

  return (
    <div className="map">
      <MapProvider center={{ lat: 50.0755, lng: 14.4378 }} zoom={14}>
        <Map height="100%">
          <ZoomControl />
          <KeyboardControl />
          <MouseControl zoom pan wheel />
        </Map>
      </MapProvider>
    </div>
  )
}

