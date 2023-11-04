import React, { useRef, useCallback, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
const libraries = ['drawing'];




const G_Map = ({API}) => {

  const [selectedLocation, setSelectedLocation] = useState({
    lat: 24.8607,
    lng: 67.0011,
  });

  
  const [postalCode,setpostalCode] = useState(useSelector((state) => state.ptCode.value));

  function getLatLongFromPostalCode(postalCode) {
    const geocodingEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode}&key=${API}`;
  
    fetch(geocodingEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          const location = data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;

          const updatedLocation = {
            lat: latitude,
            lng: longitude,
          };

          setSelectedLocation(updatedLocation)

          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        } else {
          console.error('Geocoding request failed.');
        }
      })
      .catch((error) => {
        console.error('Error fetching geocoding data:', error);
      });
  }
   
    useEffect(()=>{
      getLatLongFromPostalCode(postalCode);
      console.log(postalCode);
    },[postalCode]);

  // --------------------------------------------------------------------------------


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API,
    libraries,
  });

  const mapRef = useRef();
  const drawingManagerRef = useRef(null);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    if (isLoaded) {
      initializeDrawingManager(map);
    }
  }, [isLoaded]);

  const initializeDrawingManager = (map) => {
  const drawingManager = new window.google.maps.drawing.DrawingManager({
    drawingControl: true,
    drawingControlOptions: {
      position: window.google.maps.ControlPosition.RIGHT_CENTER,
      drawingModes: [window.google.maps.drawing.OverlayType.POLYLINE],
    },
    polylineOptions: {
      clickable: true,
      strokeColor: "#0000FF", // Blue color for the line
      strokeOpacity: 1,
      strokeWeight: 2,
      icons: [
        {
          icon: {
            path: "M 0,-1 0,1",
            strokeOpacity: 1,
            scale: 4, // Adjust scale for longer dashes
          },
          offset: "0",
          repeat: "10px", // Adjust the distance between dots
        },
      ],
    },
  });

  drawingManager.setMap(map);

  let currentPolyline = null;
  let startingPointMarker = null;
  let endingPointMarker = null;

  window.google.maps.event.addListener(drawingManager, "overlaycomplete", (event) => {
    if (event.type === window.google.maps.drawing.OverlayType.POLYLINE) {
      if (currentPolyline) {
        currentPolyline.setMap(null); // Remove the previous line
        startingPointMarker.setMap(null); // Remove the previous starting point marker
        endingPointMarker.setMap(null); // Remove the previous ending point marker
      }

      const path = event.overlay.getPath();
      const pathLength = path.getLength();
      let lengthInMeters = 0;

      for (let i = 0; i < pathLength - 1; i++) {
        const start = path.getAt(i);
        const end = path.getAt(i + 1);
        lengthInMeters += window.google.maps.geometry.spherical.computeDistanceBetween(start, end);
      }

      // Convert length to feet (1 meter ≈ 3.28084 feet)
      const lengthInFeet = lengthInMeters * 3.28084;

      const midPointIndex = Math.floor(pathLength / 2);
      const midPoint = path.getAt(midPointIndex);

      startingPointMarker = new window.google.maps.Marker({
        position: path.getAt(0),
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 5,
          fillColor: "red",
          fillOpacity: 1,
          strokeColor: "red",
          strokeWeight: 1,
        },
        map: map,
      });

      endingPointMarker = new window.google.maps.Marker({
        position: path.getAt(pathLength - 1),
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 5,
          fillColor: "yellow",
          fillOpacity: 1,
          strokeColor: "yellow",
          strokeWeight: 1,
        },
        map: map,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `Length: ${lengthInFeet.toFixed(2)} feet`,
      });

      infoWindow.setPosition(midPoint);
      infoWindow.open(map);

      currentPolyline = event.overlay; // Store the current polyline
    }
  });

  drawingManagerRef.current = drawingManager;
};

  if (loadError) return 'Error';
  if (!isLoaded) return 'Maps';

  return (
    <div className="z-0 border-black border w-full">
      <GoogleMap
        mapContainerStyle={{
          height: '480px',
        }}
        mapTypeId="satellite"
        center={selectedLocation}
        zoom={25}
        onLoad={onMapLoad}
      />
    </div>
  );
};

export default G_Map;






