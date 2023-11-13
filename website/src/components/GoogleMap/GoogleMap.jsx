import React, { useRef, useCallback, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { totalDrawLength } from '../../redux/slices/FencePrice';

const libraries = ['drawing'];

const G_Map = ({ API }) => {


  const [postalCode, setPostalCode] = useState(useSelector((state) => state.ptCode.value));
  const dispatch = useDispatch()
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 24.8607,
    lng: 67.0011,
  });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API,
    libraries,
  });

  const mapRef = useRef();
  const drawingManagerRef = useRef(null);

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

          setSelectedLocation(updatedLocation);

          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        } else {
          console.error('Geocoding request failed.');
        }
      })
      .catch((error) => {
        console.error('Error fetching geocoding data:', error);
      });
  }

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
  
    let startingPointMarker = null;
    let endingPointMarker = null;
  
    // Array to capture the lengths of drawn lines
    const drawnLinesLengths = [];
  
    window.google.maps.event.addListener(drawingManager, "overlaycomplete", (event) => {
      try {
        if (event.type === window.google.maps.drawing.OverlayType.POLYLINE) {
          const path = event.overlay.getPath();
          const pathLength = path.getLength();
          let lengthInMeters = 0;
  
          // Snap to 90-degree angles
          for (let i = 0; i < pathLength - 1; i++) {
            const start = path.getAt(i);
            const end = path.getAt(i + 1);
            const dx = end.lng() - start.lng();
            const dy = end.lat() - start.lat();
  
            if (Math.abs(dx) > Math.abs(dy)) {
              end.lat(start.lat()); // Snap to horizontal
            } else {
              end.lng(start.lng()); // Snap to vertical
            }
  
            lengthInMeters += window.google.maps.geometry.spherical.computeDistanceBetween(start, end);
          }
  
          // Convert length to feet (1 meter ≈ 3.28084 feet)
          const lengthInFeet = lengthInMeters * 3.28084;

            // Capture the length in the array
            drawnLinesLengths.push(lengthInFeet);

            // Create markers after capturing the length
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

              // Calculate the center point of the line
              const centerIndex = Math.floor(pathLength / 2);
              const centerPoint = path.getAt(centerIndex);

              // Create a marker for the center point (invisible, just for the anchor)
              const centerMarker = new window.google.maps.Marker({
                position: centerPoint,
                map: map,
                icon: {
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 0, // Make the marker invisible
                },
              });

              const infoWindowContent = `<div style="font-weight: bold;">Length: ${lengthInFeet.toFixed(2)} feet</div>`;

              const infoWindow = new window.google.maps.InfoWindow({
                content: infoWindowContent,
                position: centerMarker.getPosition(),
                pixelOffset: new google.maps.Size(0, -10), // Adjust the vertical offset as needed
                disableAutoPan: true, // Disable automatic panning
              });
      
              infoWindow.addListener('domready', () => {
                // Remove the close button from the InfoWindow
                const closeBtn = document.querySelector('.gm-ui-hover-effect');
                if (closeBtn) {
                  closeBtn.style.display = 'none';
                }
              });
      
              infoWindow.open(map);
      
              // Update the sum of line lengths
              const sumLength =  Math.round(drawnLinesLengths.reduce((acc, length) => acc + length, 0));
              // console.log("Sum of Line Lengths (Feet):", Math.round(sumLength));
              dispatch(totalDrawLength(sumLength))

        }
      } catch (error) {
        console.error("Error in overlaycomplete event :", error);
      }
  });
  
    drawingManagerRef.current = drawingManager;
  
    // Function to capture and log all line lengths in feet
    const capture = () => {
      // console.log("All Line Lengths (Feet):", drawnLinesLengths);
    };
  
    return capture;
  };
  

  useEffect(() => {
    getLatLongFromPostalCode(postalCode);
  }, [postalCode]);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    if (isLoaded) {
      initializeDrawingManager(map);
    }
  }, [isLoaded]);

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