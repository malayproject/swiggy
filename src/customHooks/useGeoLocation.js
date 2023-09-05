import React, { useState, useEffect } from "react";
import { DEFAULT_LOCATION } from "../utils/constants";

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: DEFAULT_LOCATION,
  });

  const onError = (error) => {
    setLocation({ loaded: true, error });
  };

  const onSuccess = (position) => {
    setLocation({
      loaded: true,
      coordinates: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
    });
  };

  useEffect(() => {
    if (!window.navigator) {
      onError({ code: 0, message: "GeoLocation not supported!" });
    } else {
      console.log(window.navigator);
      window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  return location;
};

export default useGeoLocation;
