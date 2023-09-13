import { useState, useEffect } from "react";
import useGeoLocation from "./useGeoLocation";

const useResTaurantBasicDetails = (resId) => {
  const [resDetails, setResDetails] = useState(null);
  const location = useGeoLocation();
  if (location.error) return {};
  console.log("loc", location);

  const fetchResDetails = async () => {
    console.log("fetching details");
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${location.coordinates.latitude}&lng=${location.coordinates.longitude}&restaurantId=${resId}`
    );
    const data = await response.json();
    setResDetails(data?.data);
  };

  useEffect(() => {
    fetchResDetails();
  }, []);

  return resDetails;
};

export default useResTaurantBasicDetails;
