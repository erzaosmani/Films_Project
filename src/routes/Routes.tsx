import { RouteObject, useRoutes } from "react-router-dom";

import { Error404, Home, Login } from "../pages";
import { ForgotPassword } from "../pages/ForgotPassword";
import { SignUp } from "../pages/SignUp";

export const dashboardRoutes: RouteObject[] = [
  { path: "login", element: <Login /> },
  { path: "/", element: <Home /> },
  {path:"*", element:<Error404 />},
  {path:"SignUp", element:<SignUp />},
  {path:"ForgotPassword", element:<ForgotPassword />},
];

export const Routes = () => {
  const routes = useRoutes(dashboardRoutes);

  return routes;
};
