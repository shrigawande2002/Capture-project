import React from "react";
import ReactDOM from "react-dom/client";
import MovieDeatil from "./pages/MovieDetail/MovieDetail.jsx";
import "./index.css";
import Ourwork from "./components/Ourwork.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Globle from "./components/GlobleStyle.js";
import Layout from "./Layout.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",

        index: true,
        element: <About />,
      },
      {
        path: "/work",
        index: true,
        element: <Ourwork />,
      },
      {
        path: "/work/:id",
        index: true,
        element: <MovieDeatil />,
      },
      {
        path: "/contact",
        index: true,
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <Globle />
      <RouterProvider router={router} />
   
  </React.StrictMode>
);
