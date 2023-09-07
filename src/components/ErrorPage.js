import { memo } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("error 7", error);
  return (
    <>
      <div>OOPS!!</div>
      <div>{`${error.status}: ${error.statusText}`}</div>
      <div>Something went Wrong :(</div>
    </>
  );
};

export default memo(ErrorPage);
