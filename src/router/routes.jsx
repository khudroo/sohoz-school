import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Events from "../pages/Events";
import Contacts from "../pages/Contacts";
import Classes from "../pages/Classes";
import About from "../pages/About";

export const router = createBrowserRouter([
    {
      element: <AppLayout></AppLayout>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/gallery",
          element: <Gallery/>,
        },
        {
          path: "/events",
          element: <Events/>,
        },
        {
          path: "/contact",
          element: <Contacts/>,
        },
        {
          path: "/classes",
          element: <Classes/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
      ],
    },
  ]);
  