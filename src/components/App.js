import React, { useState, useEffect, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import UseMemoPractice from "../../hooks_practice/UseMemo_practice";
// import UseCallbackPractice from "../../hooks_practice/UseCallbackPractice";
import Header from "./Header";
import Body from "./Body";
import AboutUs from "./AboutUs";
import ErrorPage from "./ErrorPage";
import RestaurantDetail from "./RestaurantDetail";
import UserContext from "../contexts/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/AppStore";

const Grocery = React.lazy(() => import("./Grocery"));

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // authentication api call for validation
    const data = { userName: "Malay Sarkar" };
    setUserName(data.userName);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName, setUserName }}>
        <div className="flex flex-col h-screen w-screen items-center">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantDetail />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
