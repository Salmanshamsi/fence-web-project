import React, { useRef, useCallback, useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { totalDrawLength } from "../../redux/slices/FencePrice";
import { useNavigate } from "react-router-dom/dist";
import { captureDesignFromMap } from "../../redux/slices/captureDesign";

const libraries = ["drawing"];

const G_Map = ({ API , linesDrawn , setLinesDrawn }) => {
  const [postalCode, setPostalCode] = useState(
    useSelector((state) => state.ptCode.value)
  );
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 24.8607,
    lng: 67.0011,
  });

  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstModalVal , setFirstModalVal] = useState('');
  const [secondModalVal , setSecondModalVal] = useState('');
  const [modalBtnVal , setModalBtnVal] = useState('');
  
  // const [linesDrawn, setLinesDrawn] = useState(false); // Track whether lines have been drawn

  const currentUrl = window.location.href;

  // navigate to canavas

  const navigate = useNavigate();

  const nToC = () => {
    if (currentUrl === "http://localhost:5173/map") {
      if (linesDrawn) {
        // If no lines drawn, directly navigate
        navigate("/canvas");
      } else {
        setShowModal(true);
        setFirstModalVal("Are you sure you want to leave without lines drawn?");
        setSecondModalVal("Choose 'Yes' if you still want to leave.");
        setModalBtnVal("Yes");

      }
    }
  };

  const modalBtnChooseYes = () => {
    setShowModal(false);
    if (linesDrawn) {
      // If lines were drawn, perform additional actions
      // console.log("Lines drawn on the map!");
    }
    navigate("/canvas");
  }

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
        if (data.status === "OK") {
          const location = data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;

          const updatedLocation = {
            lat: latitude,
            lng: longitude,
          };

          setSelectedLocation(updatedLocation);

          // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        } else {
          console.error("Geocoding request failed.");
        }
      })
      .catch((error) => {
        console.error("Error fetching geocoding data:", error);
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

    

    window.google.maps.event.addListener(
      drawingManager,
      "overlaycomplete",
      (event) => {
        try {
          if (event.type === window.google.maps.drawing.OverlayType.POLYLINE) {
            const path = event.overlay.getPath();
            const pathLength = path.getLength();
            let lengthInMeters = 0;


            const coordinates = [];

            for (let i = 0; i < path.getLength(); i++) {
              const point = path.getAt(i);
              coordinates.push({ lat: point.lat(), lng: point.lng() });
            }
    
            // Now, the `coordinates` array contains the lat/lng pairs of the drawn polyline
            // console.log("Drawn Polyline Coordinates:", coordinates);


            // Convert LatLng to pixel coordinates
        const pixelCoordinates = coordinates.map((coord) => {
          const latLng = new window.google.maps.LatLng(coord.lat, coord.lng);
          const pixel = mapRef.current.getProjection().fromLatLngToPoint(latLng);
          return { x: pixel.x, y: pixel.y };
        });

        // console.log("Drawn Polyline Coordinates (Pixel):", pixelCoordinates);

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

              lengthInMeters +=
                window.google.maps.geometry.spherical.computeDistanceBetween(
                  start,
                  end
                );
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

            const infoWindowContent = `<div style="font-weight: bold;">Length: ${lengthInFeet.toFixed(
              2
            )} feet</div>`;

            const infoWindow = new window.google.maps.InfoWindow({
              content: infoWindowContent,
              position: centerMarker.getPosition(),
              pixelOffset: new google.maps.Size(0, -10), // Adjust the vertical offset as needed
              disableAutoPan: true, // Disable automatic panning
            });

            infoWindow.addListener("domready", () => {
              // Remove the close button from the InfoWindow
              const closeBtn = document.querySelector(".gm-ui-hover-effect");
              if (closeBtn) {
                closeBtn.style.display = "none";
              }
            });

            infoWindow.open(map);

            // Update the sum of line lengths
            const sumLength = Math.round(
              drawnLinesLengths.reduce((acc, length) => acc + length, 0)
            );
            // console.log("Sum of Line Lengths (Feet):", Math.round(sumLength));
            dispatch(totalDrawLength(sumLength));




// ...............................................

function convertToPixels(startX, startY, endX, endY, canvasWidth, canvasHeight, mapBounds) {
  // Assuming mapBounds is an object containing the minimum and maximum latitude and longitude values
  const { minLat, maxLat, minLng, maxLng } = mapBounds;

  // Convert geographic coordinates to pixel values
  const startXPixel = (startX - minLng) / (maxLng - minLng) * canvasWidth;
  const startYPixel = (maxLat - startY) / (maxLat - minLat) * canvasHeight;
  const endXPixel = (endX - minLng) / (maxLng - minLng) * canvasWidth;
  const endYPixel = (maxLat - endY) / (maxLat - minLat) * canvasHeight;


  // Dispatch the action with adjusted coordinates and angle
  dispatch(
      captureDesignFromMap({
          startX: startXPixel,
          startY: startYPixel,
          endX: endXPixel,
          endY: endYPixel,
      })
  );
}

                const startX = path.getAt(0).lng();
                const startY =  path.getAt(0).lat();
                const endX = path.getAt(pathLength - 1).lng();
                const endY = path.getAt(pathLength - 1).lat();

                // Get the bounds of the map
                const bounds = map.getBounds();

                // Extract the minimum and maximum latitude and longitude values
                const minLat = bounds.getSouthWest().lat();
                const maxLat = bounds.getNorthEast().lat();
                const minLng = bounds.getSouthWest().lng();
                const maxLng = bounds.getNorthEast().lng();

                const mapBounds = {minLat,maxLat,minLng,maxLng};

                let canvasHeight = 0;
                let canvasWidth = 0;

                // Adjust canvas dimensions based on window size
                if (window.innerHeight <= 1100 && window.innerWidth <= 800) {
                canvasWidth = window.innerWidth / 2;
                canvasHeight = window.innerHeight / 2 ;
                convertToPixels(startX,startY,endX,endY,canvasWidth,canvasHeight,mapBounds)
                } else {
                canvasWidth = window.innerWidth / 2;
                canvasHeight = window.innerHeight / 2 ;
                convertToPixels(startX,startY,endX,endY,canvasWidth,canvasHeight,mapBounds)
                }

                // console.log(canvasWidth,canvasHeight)
                // ...............................................

            // Set the state to indicate lines have been drawn
            setLinesDrawn(true);
          }
        } catch (error) {
          console.error("Error in overlaycomplete event :", error);
        }
      }
    );

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

  const onMapLoad = useCallback(
    (map) => {
      mapRef.current = map;
      if (isLoaded) {
        initializeDrawingManager(map);
      }
    },
    [isLoaded]
  );

  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <>
    <div className="gmap-cBtn-cont">
      <div className="gmap-cbtn" style={{display:"flex" , justifyContent:"right" , marginTop:"-1rem" , marginBottom:".5rem"}}>
        <button style={{backgroundColor:  "#009a3d" ,  padding: ".4rem 1.5rem" , borderRadius: "20px" ,  outline: "none" , border: "none" , color: "#fff"}} onClick={nToC}>Continue</button>
      </div>
    </div>
    {
        showModal ?   <div className="modal-container">
        <div className="modal-box">
             <div className="m-header">
                <p>{firstModalVal}</p>
             </div>
             <div className="m-txt">
                <p>{secondModalVal}</p>
                <button onClick={modalBtnChooseYes}>{modalBtnVal}</button>
             </div>
        </div>
       </div> : null
     }
    <div className="z-0 border-black border w-full">
      <GoogleMap
        mapContainerStyle={{
          height: "480px"
        }}
        mapTypeId="satellite"
        center={selectedLocation}
        zoom={25}
        onLoad={onMapLoad}
      />
    </div>

  
    </>
  );
};

export default G_Map;
