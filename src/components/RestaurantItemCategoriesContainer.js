import React, { memo, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import _ from "lodash";
import ItemCategory from "./ItemCategory";

const RestaurantItemCategoriesContainer = (props) => {
  const { itemCategories } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const { cards = [] } =
    itemCategories?.groupedCard?.cardGroupMap?.REGULAR || {};

  const itemCategoriesFiltered = cards.filter(
    (cardItem) =>
      cardItem?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="">
      {itemCategoriesFiltered.map((itemCategory, index) => (
        <ItemCategory
          itemCategory={itemCategory}
          key={uuidV4()}
          showCategory={index === activeIndex}
          onPanelClicked={() => setActiveIndex(index)}
          collapsePanel={() => setActiveIndex(null)}
        />
      ))}
    </div>
  );
};

export default memo(RestaurantItemCategoriesContainer);
