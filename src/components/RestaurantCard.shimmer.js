import React, { memo } from "react";
import _ from "lodash";
import Star from "../images/Featured_Star_green.svg";

const RestaurantCardShimmer = () => {
  return (
    <div className="w-80 h-100 rounded-lg h-72  mx-2 mb-4 hover:cursor-pointer">
      <div className="w-11/12 h-40 rounded-lg bg-gray-100 m-auto mt-4"></div>
      <div className="pl-3 w-full">
        <p className="text-lg font-semibold pt-2 line-clamp-1 w-8/12 bg-gray-100 mt-4 h-4 rounded-sm"></p>
        <div className="w-5/12 bg-gray-100 rounded-sm h-3 mt-2"></div>
        <div className="w-5/12 bg-gray-100 rounded-sm h-3 mt-2"></div>
        <div className="w-5/12 bg-gray-100 rounded-sm h-3 mt-2"></div>
      </div>
    </div>
  );
};

export default memo(RestaurantCardShimmer);
