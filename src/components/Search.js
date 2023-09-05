import React, { memo } from "react";
import SearchIcon from "../images/1024px-Search_Icon.svg.png";

const Search = (props) => {
  const { searchVal, changeHandler } = props;
  return (
    <div className=" flex flex-row items-center w-56 justify-between h-8 border-[1px] border-slate-300 rounded-md shadow-[0_0_4px_2px_rgba(0,0,0,0.1)]">
      <input
        value={searchVal}
        onChange={changeHandler}
        className="outline-none pl-2 text-base font-medium text-gray-500 w-44"
      ></input>
      <img src={SearchIcon} className="w-5 h-5 mr-1"></img>
    </div>
  );
};

export default memo(Search);
