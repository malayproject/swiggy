import React, { memo } from "react";
import { useParams } from "react-router-dom";
import RestaurantBasicSection from "./RestaurantBasicSection";
import useResTaurantBasicDetails from "../customHooks/useRestaurantBasicDetails";
import RestaurantItemCategoriesContainer from "./RestaurantItemCategoriesContainer";

const RestaurantDetail = () => {
  const { resId } = useParams();
  const resDetails = useResTaurantBasicDetails(resId);
  const basicDetails = resDetails?.cards[0]?.card?.card?.info;
  const restaurantMenuDetails = resDetails?.cards[2];
  console.log("basicDetails", resDetails?.cards[2]);
  return (
    <div className="w-6/12 mt-12">
      <div>
        <span className="text-[10px] text-slate-400 font-medium">{`Home / ${basicDetails?.city} / `}</span>
        <span className="text-[10px] text-slate-600 font-medium">{`${basicDetails?.locality}`}</span>
      </div>

      <RestaurantBasicSection
        basicDetails={resDetails?.cards[0]?.card?.card?.info}
      />
      <RestaurantItemCategoriesContainer
        itemCategories={restaurantMenuDetails}
      />
    </div>
  );
};

export default memo(RestaurantDetail);
