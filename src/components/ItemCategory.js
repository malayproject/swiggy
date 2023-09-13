import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { VEG_CLASSIFIER } from "../utils/constants";
import VEG_ICON from "../images/Veg_symbol.svg";
import NONVEG_ICON from "../images/Non_veg_symbol.svg";
import UP_ICON from "../images/up-arrow-svgrepo-com.svg";
import DOWN_ICON from "../images/down-arrow-svgrepo-com.svg";
import { CDN_IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemCategory = (props) => {
  const { itemCategory, showCategory, onPanelClicked, collapsePanel } = props;
  const { itemCards = [], title } = itemCategory?.card?.card || {};
  const itemCount = itemCards.length;
  const dispatch = useDispatch();

  const handleItemClick = () => {};
  const handleAddItem = (item) => {
    console.log("dispatching action");
    dispatch(addItem(item?.card?.info));
  };

  return (
    <div className="w-full border-b-8 border-slate-100 px-2 py-4">
      <div
        className="w-full flex flex-row justify-between"
        onClick={showCategory ? collapsePanel : onPanelClicked}
      >
        <div className="text-lg font-bold">{`${title} (${itemCount})`}</div>
        <img
          src={showCategory ? UP_ICON : DOWN_ICON}
          width="16"
          className="cursor-pointer"
        />
      </div>
      {showCategory &&
        itemCards.map((item) => {
          const itemInfo = item?.card?.info;
          const { id, itemAttribute, name, price, imageId, description } =
            itemInfo || {};
          const isVeg = itemAttribute?.vegClassifier === VEG_CLASSIFIER;
          return (
            <div className="w-full flex flex-row border-b-[1px] py-4" key={id}>
              <div className="w-9/12">
                <img src={isVeg ? VEG_ICON : NONVEG_ICON} width="16" />
                <div className="font-semibold">{name}</div>
                <div>{price ? `\u20B9 ${price / 100}` : ""}</div>
                <div className="whitespace-normal pr-4 text-sm text-slate-400 mt-2">
                  {description}
                </div>
              </div>
              <div
                className="w-3/12 p-2 flex flex-col items-center cursor-pointer"
                onClick={handleItemClick}
              >
                {imageId && (
                  <img
                    className="rounded-lg w-52 h-32 object-cover"
                    src={`${CDN_IMAGE_URL}${imageId}`}
                  />
                )}
                <div
                  className="w-20 h-8 items-center flex justify-center mt-[-12] bg-white border-[1px] border-slate-300 rounded-md text-xs font-semibold text-green-300"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ItemCategory;
