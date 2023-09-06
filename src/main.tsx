import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { SignUp } from "./pages/signUp/SignUp";
import { Login } from "./pages/login/Login";
import { Overview } from "./pages/overview/Overview";
import { Admin } from "./pages/admin/Admin";
import { User } from "./pages/user/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/overview/:overviewid",
    element: <Overview />,
  },
  {
    path: "/login/:loginid",
    element: <Login />,
  },
  {
    path: "/admin/:adminid",
    element: <Admin />,
  },
  {
    path: "/ser/:userid",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
