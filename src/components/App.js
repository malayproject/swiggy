import React from "react";
import { createRoot } from "react-dom/client";
import UseMemoPractice from "../../hooks_practice/UseMemo_practice";
import UseCallbackPractice from "../../hooks_practice/UseCallbackPractice";
import Header from "./Header";
import Body from "./Body";

const App = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
