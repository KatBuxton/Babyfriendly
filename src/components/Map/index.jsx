import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup, NavigationControl, FlyToInterpolator } from 'react-map-gl';
import globeUrl from '../../img/globe.svg';
import facebookUrl from '../../img/facebook.svg';
import instagramUrl from '../../img/instagram.svg';
import reviewUrl from '../../img/review-icon.svg';
import closeUrl from '../../img/close.svg';
import ReactGA from 'react-ga';

const initialCoords = {
  latitude: 50.08854,
  longitude: 14.42991,
  zoom: 13,
};

const eventTracker = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export const Map = ({ selectedLocation, filteredItems, setSelectedLocation, invert }) => {
  const [viewport, setViewport] = useState(initialCoords);
  const [instaVisible, setInstaVisible] = useState(true);

  const notInitialRender = useRef(false);

  const hideInsta = () => {
    setInstaVisible((prev) => !prev);
  };

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
              tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution:
                'Map tiles by <a target="_top" rel="noopener" href="https://tile.openstreetmap.org/">OpenStreetMap tile servers</a>, under the <a target="_top" rel="noopener" href="https://operations.osmfoundation.org/policies/tiles/">tile usage policy</a>. Data by <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>',
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
            <button
              className="marker-button"
              onClick={() => {
                setSelectedLocation(place);
                eventTracker('Map', 'marker clicked', `${place.name}`);
              }}
            ></button>
          </Marker>
        ))}
        {selectedLocation && (
          <div className="popup-wrapper">
            <Popup
              latitude={selectedLocation.latitude}
              longitude={selectedLocation.longitude}
              key={selectedLocation.index}
              offsetTop={-60}
              onClose={() => {
                setSelectedLocation(null);
                eventTracker('Map', 'popup closed', `${selectedLocation.name}`);
              }}
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
                  {selectedLocation.instagram !== '' ? (
                    <a
                      href={selectedLocation.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <img src={instagramUrl} alt="ikona instagram" />
                    </a>
                  ) : null}
                  {selectedLocation.facebook !== '' ? (
                    <a
                      href={selectedLocation.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <img src={facebookUrl} alt="ikona facebooku" />
                    </a>
                  ) : null}
                  {selectedLocation.web !== '' ? (
                    <a
                      href={selectedLocation.web}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <img src={globeUrl} alt="ikona globu" />
                    </a>
                  ) : null}
                  {selectedLocation.review !== '' ? (
                    <a
                      href={selectedLocation.review}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <img src={reviewUrl} alt="ikona hodnoceni" />
                    </a>
                  ) : null}
                </div>
              </div>
            </Popup>
          </div>
        )}
        {instaVisible && (
          <div className="instagram">
            <img src={closeUrl} alt="zavrit" onClick={hideInsta} className="insta-close" />
            <a
              href="https://www.instagram.com/baby_friendly_cz/"
              target="_blank"
              rel="noreferrer"
              onClick={() => eventTracker('Map', 'instagram visited')}
            >
              Pro víc inspirace<br></br>sledujte<br></br>
              <img src={instagramUrl} alt="ikona instagram" className="insta-icon" />
              <br></br>@baby_friendly_cz
            </a>
          </div>
        )}
        <NavigationControl style={navControlStyle} showZoom={true} />
      </ReactMapGL>
    </div>
  );
};
