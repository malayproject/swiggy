import React, { memo } from "react";
import _ from "lodash";
import Star from "../images/Featured_Star_green.svg";
import { CDN_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantInfo } = props;
  return (
    <div className="basis-72 h-100 rounded-t-xl m-4 hover:cursor-pointer">
      <div className="w-full h-44 rounded-xl shadow-[0_0_10px_3px_rgba(0,0,0,0.08)]">
        <img
          src={`${CDN_IMAGE_URL}${restaurantInfo?.info?.cloudinaryImageId}`}
          className="w-full h-full rounded-xl"
        ></img>
      </div>
      <div className="pl-3 w-full">
        <p className="text-lg font-semibold pt-2 line-clamp-1 w-full">
          {restaurantInfo?.info?.name}
        </p>
        <div className="flex">
          <img src={Star} width="24" height="auto"></img>
          <span className="ml-2 font-medium">
            {restaurantInfo?.info?.avgRatingString}
          </span>
        </div>
        <div className="line-clamp-1 text-slate-500">
          {restaurantInfo?.info?.cuisines.join(", ")}
        </div>
        <div className="line-clamp-1 text-slate-500">
          {restaurantInfo?.info?.locality}
        </div>
      </div>
    </div>
  );
};

export default memo(RestaurantCard);
