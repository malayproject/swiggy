import React from "react";

const HeaderShimmer = () => {
  return (
    <div className="w-full flex flex-row justify-between px-12 mt-12">
      <div className="w-72 bg-gray-100 h-8 rounded-md"></div>
      <div className="flex flex-row justify-end">
        <div className="w-56 bg-gray-100 h-8 rounded-md"></div>
        <div className="w-24 bg-gray-100 h-8 ml-4 rounded-md"></div>
      </div>
    </div>
  );
};

export default HeaderShimmer;
