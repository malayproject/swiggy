import React, { memo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantBasicSection from "./RestaurantBasicSection";

const RestaurantDetail = () => {
  const [resDetails, setResDetails] = useState(null);
  const { resId } = useParams();
  console.log("resDetails 6", resDetails);
  const fetchResDetails = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4146069&lng=76.9950503&restaurantId=${resId}`
    );
    const data = await response.json();
    console.log("resDetails 12", data);
    setResDetails(data?.data);
  };
  useEffect(() => {
    fetchResDetails();
  }, []);
  const basicDetails = resDetails?.cards[0]?.card?.card?.info;
  return (
    <div className="w-5/12 mt-12">
      <div>
        <span className="text-[10px] text-slate-400 font-medium">{`Home / ${basicDetails?.city} / `}</span>
        <span className="text-[10px] text-slate-600 font-medium">{`${basicDetails?.locality}`}</span>
      </div>

      <RestaurantBasicSection
        basicDetails={resDetails?.cards[0]?.card?.card?.info}
      />
    </div>
  );
};

export default memo(RestaurantDetail);
