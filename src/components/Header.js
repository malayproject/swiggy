import React, { memo, useState } from "react";
import Image from "../images/oie_jpBljfyksr4l.png";

export const Header = () => {
  const [signInBtn, setSignInBtn] = useState("Sign In");

  return (
    <div className="w-screen shadow-[0px_3px_15px_4px_rgba(0,0,0,0.05)]">
      <div className="flex flex-row justify-between items-center w-2/3 h-20 mx-auto pr-8 ">
        <div className="cursor-pointer">
          <img src={Image} width="35" />
        </div>
        <div className="flex flex-row flex-1 justify-end">
          <div className="min-w-[6%] font-semibold text-gray-700 cursor-pointer bg-slate-50 text-center hover:text-orange-400">
            Home
          </div>
          <div className="min-w-[7%] font-semibold text-gray-700 cursor-pointer bg-slate-50 text-center hover:text-orange-400">
            Orders
          </div>
          <div className="min-w-[9%] font-semibold text-gray-700 cursor-pointer bg-slate-50 text-center hover:text-orange-400">
            About Us
          </div>
          <div
            className="ml-2 min-w-[8%] font-semibold text-gray-700 cursor-pointer bg-slate-50 text-center border-[1px] border-[#c0c0c0] rounded-md hover:text-orange-400"
            onClick={(e) => {
              if (signInBtn === "Sign In") setSignInBtn("Sign Out");
              else setSignInBtn("Sign In");
            }}
          >
            {signInBtn}
          </div>
          <div className="ml-2 min-w-[6%] font-semibold text-gray-700 cursor-pointer bg-slate-50 text-center hover:text-orange-400">
            Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
