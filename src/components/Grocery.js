import { memo } from "react";

const Grocery = () => {
  return (
    <div className="text-lg font-semibold">
      This is Grocery page. Assume that this tab has lot more components that
      need to be lazy loaded for reducing the initial bundle size.
    </div>
  );
};
export default Grocery;
