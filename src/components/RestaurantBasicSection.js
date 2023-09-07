import React, { memo } from "react";
import GreenStar from "../images/Green_star_41-108-41.svg";
import ETA from "../images/ETA.svg";
import Cost from "../images/Cost.svg";

const RestaurantBasicSection = (props) => {
  console.log(props);
  const { basicDetails } = props;
  const {
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    areaName,
    sla,
    costForTwoMessage,
  } = basicDetails || {};
  console.log(
    "111",
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    areaName,
    sla,
    costForTwoMessage
  );
  return (
    <div className="w-full border-b-[1px]">
      <div className="w-full flex flex-row justify-between p-3 border-b-[2px] border-dashed">
        <div>
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <div className="text-[14px] mb-1 text-slate-500">
            {cuisines?.join(", ")}
          </div>
          <div className="text-[14px] text-slate-500">{`${areaName}, ${sla?.lastMileTravelString}`}</div>
        </div>
        <div className="border-[1px] rounded-lg w-20 p-2">
          <div className="w-11/12 flex flex-row justify-center align-middle h-9 border-b-[1px] m-auto pb-4">
            <img src={GreenStar} width="20" className="h-5"></img>
            <div className="text-[#3d9b6d] font-bold align-middle ml-1">
              {avgRatingString}
            </div>
          </div>
          <div className="w-full text-[10px] pt-3 text-center text-slate-400 font-semibold">
            {totalRatingsString}
          </div>
        </div>
      </div>
      <div className="flex flex-row p-3">
        <div className="flex flex-row mr-6">
          <img src={ETA} width="20px" className="mr-2"></img>
          <div className="font-semibold">{sla?.slaString}</div>
        </div>
        <div className="flex flex-row">
          <img src={Cost} width="20px" className="mr-2"></img>
          <div className="font-semibold">{costForTwoMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(RestaurantBasicSection);
