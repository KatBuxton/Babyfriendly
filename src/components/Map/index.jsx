import React, { useState } from 'react';
import "./style.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import pinUrl from '/Users/katerina.tuckova/Desktop/daweb/babyfriendly/src/img/pin.svg';


export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.08854,
    longitude: 14.42991,
    zoom: 15,
  })
  const [popupOpen, setPopupOpen] = useState(false)


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
        <Marker latitude={50.08854} longitude={14.42991}>
          <button className="marker-button"
            onClick={() => setPopupOpen(true)}>
            <img src={pinUrl} width={50} height={50} offsetleft={-25} offsettop={-50} alt="Cacao" />
          </button>
        </Marker>
        {popupOpen &&
          <Popup latitude={50.08854} longitude={14.42991}
            onClose={() => setPopupOpen(false)}>
            Cacao
          </Popup>}
      </ReactMapGL>
    </div >
  )
}