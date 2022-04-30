import { useRoutes, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/dashboard";
import DashboardPage from "./pages/Dashboard/DashbordPage";
import { InfoCompany } from "./pages/InfoCompany/InfoCompany";
import { Page404 } from "./pages/404/Page404";

export default function Router() {
  return useRoutes([
    {
      path: "",
      element: <DashboardLayout />,
      children: [
        { path: "/", element: <Navigate to="/spaceX/dashboard" /> },
        { path: "/spaceX/dashboard", element: <DashboardPage /> },
        { path: "/spaceX/info/:nameCompany", element: <InfoCompany /> },
        { path: "/spaceX/404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/spaceX/404" /> },
      ],
    },
  ]);
}
