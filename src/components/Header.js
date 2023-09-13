import React, { memo, useState, useContext } from "react";
import { Link } from "react-router-dom";

import Image from "../images/oie_jpBljfyksr4l.png";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import UserContext from "../contexts/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [signInBtn, setSignInBtn] = useState("Sign In");
  const [x, setX] = useState(false);
  const onlineStatus = useOnlineStatus();
  const onlineStatusIndicatorBgColor = onlineStatus
    ? "bg-green-600"
    : "bg-orange-600";

  const { userName } = useContext(UserContext);
  const items = useSelector((store) => store.cart.items);
  console.log("items", items);

  return (
    <div className="w-screen shadow-[0px_3px_15px_4px_rgba(0,0,0,0.05)]">
      <div className="flex flex-row justify-between items-center w-2/3 h-20 mx-auto pr-8 ">
        <div className="cursor-pointer">
          <img src={Image} width="35" />
        </div>
        <div className="flex flex-row flex-1 justify-end">
          <div className="min-w-[10%] flex flex-row">
            <div
              className={`w-3 h-3 rounded-[6px] ${onlineStatusIndicatorBgColor} self-center`}
            ></div>
            <div className="ml-2">Online Status</div>
          </div>
          <Link
            to="/"
            className="min-w-[6%] font-semibold text-gray-700 cursor-pointer bg-slate-50 text-center hover:text-orange-400"
          >
            Home
          </Link>
          <Link
            to="/grocery"
            className="min-w-[6%] font-semibold text-gray-700 cursor-pointer bg-slate-50 text-center hover:text-orange-400"
          >
            Grocery
          </Link>
          <Link
            to="/about"
            className="min-w-[9%] font-semibold text-gray-700 cursor-pointer bg-slate-50 text-center hover:text-orange-400"
          >
            About Us
          </Link>
          <button
            className="ml-2 min-w-[8%] font-semibold text-gray-700 cursor-pointer bg-slate-50 text-center border-[1px] border-[#c0c0c0] rounded-md hover:text-orange-400"
            onClick={(e) => {
              if (signInBtn === "Sign In") setSignInBtn("Sign Out");
              else setSignInBtn("Sign In");
            }}
          >
            {signInBtn}
          </button>
          <div className="ml-2 min-w-[8%] font font-semibold">{userName}</div>
          <div className="ml-2 min-w-[6%] font-semibold text-gray-700 cursor-pointer bg-slate-50 text-center hover:text-orange-400">
            Cart({items.length})
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
