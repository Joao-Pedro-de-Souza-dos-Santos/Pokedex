import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Page404 } from "../pages/Page404";
import { SearchPage } from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {path: "/", element: <Home />},
        {path: "/Details", element: <Details />},
        {path: "/Page404", element: <Page404 />},
        {path: "/SearchPage", element: <SearchPage />},
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
