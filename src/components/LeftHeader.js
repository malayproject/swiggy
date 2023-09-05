import React from "react";

const LeftHeader = (props) => {
  const { children } = props;
  return <h1 className="text-gray-500 font-bold text-xl mt-1">{children}</h1>;
};

export default React.memo(LeftHeader);
