import React, { useEffect, useRef, useState } from "react";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../../assets/mapApiKey/mapApiKey";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url + `&callback=${callback}`;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const GooglePlaceSearch = ({ setSelectedLocation, API }) => {

  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);


  const handleScriptLoad = (updateQuery, autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      {
        types: ["(cities)"],
        componentRestrictions: { country: "IN" },
      }
    );

    autoComplete.addListener("place_changed", () => {
      handlePlaceSelect(updateQuery);
    });
  };

  const handlePlaceSelect = async (updateQuery) => {
    const addressObject = await autoComplete.getPlace();

    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log({ query });

    const latLng = {
      lat: addressObject?.geometry?.location?.lat(),
      lng: addressObject?.geometry?.location?.lng(),
    };

    console.log({ latLng });
    setSelectedLocation(latLng);
  };

  useEffect(() => {
    const callbackName = `initGooglePlacesAutocomplete_${Date.now()}`;
    window[callbackName] = () => handleScriptLoad(setQuery, autoCompleteRef);

    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${API}&libraries=places`,
      callbackName
    );

    return () => {
      // Remove the callback function when the component unmounts
      delete window[callbackName];
    };
  }, []);

  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="font-bold text-xl">Enter your address to begin:</h1>
      <input
        ref={autoCompleteRef}
        className="w-full border border-green-500 rounded-smy p-2"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Places ..."
        value={query}
      />
    </div>
  );
};

export default GooglePlaceSearch;
