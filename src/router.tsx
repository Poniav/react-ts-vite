import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/orders",
    element: <Home />,
  },
  {
    path: "/docs",
    element: <Home />,
  },
  {
    path: "/invoices",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Home />,
  },
]);

export default router;
