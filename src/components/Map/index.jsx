import React, { useState } from 'react';
import "./style.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import pinUrl from '../../img/pin.svg';
import data from '../../data.js';
import { Placeholder } from 'react-bootstrap';


export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.08854,
    longitude: 14.42991,
    zoom: 15,
  })
  const [popupOpen, setPopupOpen] = useState(false)

  const navControlStyle = {
    right: 10,
    top: 10
  }

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle={{
          version: 8,
          sources: {
            'raster-tiles': {
              type: 'raster',
              tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
              tileSize: 256,
              attribution:
                'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
            },
          },
          layers: [
            {
              id: 'simple-tiles',
              type: 'raster',
              source: 'raster-tiles',
              minzoom: 0,
              maxzoom: 18,
            },
          ],
        }}
      >
        {data.map((place) =>
          <Marker
            latitude={place.latitude}
            longitude={place.longitude}
            offsetLeft={-25}
            offsetTop={-50}
            key={place.index}>
            <button className="marker-button"
              onClick={() => setPopupOpen(true)}>
              <img src={pinUrl} width={50} height={50} alt={place.name} />
            </button>
          </Marker>
        )}
        {popupOpen &&
          data.map((place) =>
            <Popup
              latitude={place.latitude}
              longitude={place.longitude}
              key={place.index}
              offsetTop={-60}
              onClose={() => setPopupOpen(false)}>
              {place.name}
            </Popup>
          )
        }
        <NavigationControl style={navControlStyle} showZoom={true} />
      </ReactMapGL>
    </div >
  )
}