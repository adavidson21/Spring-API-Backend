import React from "react";
import ReactDom from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContainer from "./containers/AppContainer";
import ComicTypesContainer from "./containers/ComicTypesContainer";
import AboutContainer from "./containers/AboutContainer";
import HomeContainer from "./containers/HomeContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        index: true,
        element: <HomeContainer />,
      },
      {
        path: "comicTypes",
        element: <ComicTypesContainer />,
      },
      {
        path: "about",
        element: <AboutContainer />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
