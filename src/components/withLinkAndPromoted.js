import { Link } from "react-router-dom";

const withLinkAndPromoted = (RestaurantCard) => {
  return (props) => {
    const { restaurantInfo } = props;
    console.log("resInfo", restaurantInfo);
    return (
      <Link
        to={`/restaurants/${restaurantInfo?.info?.id}`}
        key={restaurantInfo?.info?.id}
        className="basis-72 h-100 rounded-t-xl m-4 hover:cursor-pointer relative"
      >
        {restaurantInfo?.info?.aggregatedDiscountInfoV3?.header && (
          <div className="absolute top-[-1] left-[-4] bg-orange-500 py-1 px-2 shadow-2xl rounded-br-md font-semibold text-xs text-slate-200">{`${restaurantInfo?.info?.aggregatedDiscountInfoV3?.header}*`}</div>
        )}
        <RestaurantCard restaurantInfo={restaurantInfo} />
      </Link>
    );
  };
};

export default withLinkAndPromoted;
