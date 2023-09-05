import React, { memo } from "react";
import RestaurantCardShimmer from "./RestaurantCard.shimmer";

const RestaurantContainerShimmer = () => {
  return (
    <div
      id="restaurantContainer"
      className="flex flex-row flex-wrap justify-between mx-auto mt-4"
    >
      {Array.from({ length: 8 }).map((el, i) => (
        <RestaurantCardShimmer key={i} />
      ))}
    </div>
  );
};

export default memo(RestaurantContainerShimmer);
