import { memo, useContext } from "react";
import UserContext from "../contexts/UserContext";

const Grocery = () => {
  return (
    <div className="text-lg font-semibold">
      <span>{`Hey ${useContext(UserContext).userName}, `}</span>
      This is Grocery page. Assume that this tab has lot more components that
      need to be lazy loaded for reducing the initial bundle size.
    </div>
  );
};
export default Grocery;
