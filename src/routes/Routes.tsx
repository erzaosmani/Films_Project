import { RouteObject, useRoutes } from "react-router-dom";

import { Error404, Home, Login } from "../pages";

export const dashboardRoutes: RouteObject[] = [
  { path: "login", element: <Login /> },
  { path: "/", element: <Home /> },
  {path:"*", element:<Error404 />},
];

export const Routes = () => {
  const routes = useRoutes(dashboardRoutes);

  return routes;
};
