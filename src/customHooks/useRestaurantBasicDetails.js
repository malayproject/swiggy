import { useState, useEffect } from "react";

const useResTaurantBasicDetails = (resId) => {
  const [resDetails, setResDetails] = useState(null);

  const fetchResDetails = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9095462&lng=80.2003173&restaurantId=${resId}`
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
