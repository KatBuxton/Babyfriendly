import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup, NavigationControl, FlyToInterpolator } from 'react-map-gl';
import globeUrl from '../../img/globe.svg';
import facebookUrl from '../../img/facebook.svg';
import instagramUrl from '../../img/instagram.svg';

const initialCoords = {
  latitude: 50.08854,
  longitude: 14.42991,
  zoom: 13,
};

export const Map = ({ selectedLocation, filteredItems, setSelectedLocation, invert }) => {
  const [viewport, setViewport] = useState(initialCoords);

  const notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {
      if (filteredItems.length > 0) {
        setViewport({
          latitude: filteredItems[0].latitude,
          longitude: filteredItems[0].longitude,
          zoom: 13,
          transitionDuration: 'auto',
          transitionInterpolator: new FlyToInterpolator(),
        });
      }
    } else {
      notInitialRender.current = true;
    }
  }, [filteredItems]);

  useEffect(() => {
    if (selectedLocation) {
      setViewport({
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
        zoom: 13,
        transitionDuration: 'auto',
        transitionInterpolator: new FlyToInterpolator(),
      });
    }
  }, [selectedLocation]);

  const invertStyle = invert ? { filter: 'invert(0.95) grayscale(0.5)' } : undefined;

  const navControlStyle = {
    right: 10,
    bottom: 40,
  };

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        style={invertStyle}
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
        {filteredItems.map((place) => (
          <Marker
            latitude={place.latitude}
            longitude={place.longitude}
            offsetLeft={-25}
            offsetTop={-50}
            key={place.index}
          >
            <button className="marker-button" onClick={() => setSelectedLocation(place)}></button>
          </Marker>
        ))}
        {selectedLocation && (
          <div className="popup-wrapper">
            <Popup
              latitude={selectedLocation.latitude}
              longitude={selectedLocation.longitude}
              key={selectedLocation.index}
              offsetTop={-60}
              onClose={() => setSelectedLocation(null)}
            >
              <div className="popup">
                <div
                  className={selectedLocation.category}
                  style={{
                    backgroundImage: `url(${selectedLocation.preview})`,
                  }}
                ></div>
                <div className="address">{selectedLocation.address}</div>
                <div className="place-name">{selectedLocation.name}</div>
                <div className="category-name">{selectedLocation.categoryName}</div>
                {selectedLocation.changingStation === 'changing-station' ? (
                  <div className="equipment">Přebalovací pult</div>
                ) : null}
                {selectedLocation.mat === 'mat' ? (
                  <div className="equipment">Čistý koberec/podložka</div>
                ) : null}
                {selectedLocation.barrierFree === 'barrier-free' ? (
                  <div className="equipment">Bez bariér</div>
                ) : null}
                <div className="social-icons">
                  {selectedLocation.instagram !== null ? (
                    <a
                      href={selectedLocation.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <img src={instagramUrl} alt="ikona instagram" />
                    </a>
                  ) : null}
                  {selectedLocation.facebook !== null ? (
                    <a
                      href={selectedLocation.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <img src={facebookUrl} alt="ikona facebooku" />
                    </a>
                  ) : null}
                  {selectedLocation.web !== null ? (
                    <a
                      href={selectedLocation.web}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <img src={globeUrl} alt="ikona globu" />
                    </a>
                  ) : null}
                </div>
              </div>
            </Popup>
          </div>
        )}
        <div className="instagram">
          <a href="https://www.instagram.com/baby_friendly_cz/" target="_blank" rel="noreferrer">
            Pro víc inspirace<br></br>sledujte<br></br>
            <img src={instagramUrl} alt="ikona instagram" />
            <br></br>@baby_friendly_cz
          </a>
        </div>
        <NavigationControl style={navControlStyle} showZoom={true} />
      </ReactMapGL>
    </div>
  );
};
