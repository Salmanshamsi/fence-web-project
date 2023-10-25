import React from "react";
// import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
// import { REACT_APP_GOOGLE_MAPS_KEY } from "../../assets/mapApiKey/mapApiKey";

const G_Map = ({ selectedLocation }) => {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  // });
  // const mapRef = React.useRef();
  // const onMapLoad = React.useCallback((map) => {
  //   mapRef.current = map;
  // }, []);
  // if (loadError) return "Error";
  // if (!isLoaded) return "Maps";

  return (
    <>
    {/* <div className="z-0 border-black border w-full">
      <GoogleMap
        mapContainerStyle={{
          height: "500px",
        }}
        center={selectedLocation}
        zoom={13}
        onLoad={onMapLoad}
      >
        <MarkerF
          position={selectedLocation}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        />
      </GoogleMap>
    </div> */}
    </>
  );
};

export default G_Map;