import React, { memo } from "react";
import { useParams } from "react-router-dom";
import RestaurantBasicSection from "./RestaurantBasicSection";
import useResTaurantBasicDetails from "../customHooks/useRestaurantBasicDetails";

const RestaurantDetail = () => {
  const { resId } = useParams();
  const resDetails = useResTaurantBasicDetails(resId);
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
