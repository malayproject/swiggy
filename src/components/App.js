import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import UseMemoPractice from "../../hooks_practice/UseMemo_practice";
// import UseCallbackPractice from "../../hooks_practice/UseCallbackPractice";
import Header from "./Header";
import Body from "./Body";
import AboutUs from "./AboutUs";
import ErrorPage from "./ErrorPage";
import ContactPage from "./ContactPage";
import RestaurantDetail from "./RestaurantDetail";

const Grocery = React.lazy(() => import("./Grocery"));

const App = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Header />
      <Outlet />
    </div>
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
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
