import React, { useState, useEffect, memo, useContext } from "react";
import _ from "lodash";

import RestaurantCard from "./RestaurantCard";
import useGeoLocation from "../customHooks/useGeoLocation";
import LeftHeader from "./LeftHeader";
import Search from "./Search";
import RestaurantContainerShimmer from "./RestaurantContainer.shimmer";
import HeaderShimmer from "./Header.shimmer";
import { FETCH_URL } from "../utils/constants";
import withLinkAndPromoted from "./withLinkAndPromoted";
import UserContext from "../contexts/UserContext";

const Body = () => {
  const location = useGeoLocation();
  if (location.error) return <p>{location?.error?.message}</p>;
  console.log("loc", location);

  const [restaurant_grid_listing, setRestaurant_grid_listing] = useState([]);
  const [pristineRestaurantList, setPristineRestaurantList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isHighRated, setIsHighRated] = useState(false);

  const { userName, setUserName } = useContext(UserContext);

  const scrollHandler = (event) => {
    const { clientHeight, scrollHeight, scrollTop } = event.currentTarget;
    console.log("scroll", clientHeight, scrollHeight, scrollTop);
    if (scrollHeight <= clientHeight + scrollTop + 1) {
      console.log("should refetch");
      fetchInitData();
    }
  };

  const fetchInitData = async () => {
    const res = await fetch(
      `${FETCH_URL}lat=${location.coordinates.latitude}&lng=${location.coordinates.longitude}`
    );
    const json = await res.json();
    const data = _.find(
      json?.data?.cards,
      (cardElement) =>
        cardElement?.card?.card?.["id"] === "restaurant_grid_listing"
    );
    const restaurants = _.get(
      data,
      "card.card.gridElements.infoWithStyle.restaurants"
    );
    setRestaurant_grid_listing([...restaurant_grid_listing, ...restaurants]);
    setPristineRestaurantList([...pristineRestaurantList, ...restaurants]);
  };

  useEffect(() => {
    console.log("restaurant", restaurant_grid_listing);
    const restaurantList = _.filter(pristineRestaurantList, (restaurant) =>
      _.includes(_.toLower(restaurant.info.name), _.toLower(searchVal))
    );
    setRestaurant_grid_listing(restaurantList);
  }, [searchVal]);

  useEffect(() => {
    fetchInitData();
  }, []);

  const handleInputChange = (e) => {
    console.log("|", e.target.value);
    setSearchVal(e.target.value);
  };

  const handleClick = () => {
    if (isHighRated) {
      setRestaurant_grid_listing(pristineRestaurantList);
    } else {
      const highRatedRestaurants = _.filter(
        pristineRestaurantList,
        (restaurant) => restaurant.info.avgRating > 4
      );
      setRestaurant_grid_listing(highRatedRestaurants);
    }
    setIsHighRated(!isHighRated);
    setSearchVal("");
  };

  if (!pristineRestaurantList.length)
    return (
      <div className="w-7/10 mx-auto">
        <HeaderShimmer />
        <RestaurantContainerShimmer />
      </div>
    );

  const LinkAndPromotedRestaurantCard = withLinkAndPromoted(RestaurantCard);

  return (
    <div
      className="w-screen bg-opacity-0 flex-1 overflow-scroll"
      onScroll={scrollHandler}
    >
      <div className="w-7/10 mx-auto">
        <div className="flex flex-row justify-between mx-8 mt-12">
          <LeftHeader>
            <span className="text-2xl text-slate-600">{`Hey ${userName}! `}</span>
            Restaurants with online food delivery near you
          </LeftHeader>
          <div className="flex flex-row justify-end">
            <Search searchVal={searchVal} changeHandler={handleInputChange} />
            <button
              onClick={handleClick}
              className="w-24 h-8 border-[1px] border-slate-300 rounded-md shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] bg-blue-200 px-2 ml-2"
            >
              {isHighRated ? "all" : "top rated"}
            </button>
            <label className="h-8 ml-2 self-center">User: </label>
            <input
              className="border-slate-300 border-[1px] rounded-md w-40 h-8 ml-2 pl-2"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
        <div
          id="restaurantContainer"
          className="flex flex-row flex-wrap justify-between w-full mt-4"
        >
          {_.map(restaurant_grid_listing, (restaurantInfo) => (
            <LinkAndPromotedRestaurantCard
              restaurantInfo={restaurantInfo}
              key={restaurantInfo?.info?.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Body);
