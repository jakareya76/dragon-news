import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

import AuthPrivateRoute from "./AuthPrivateRoute";
import NewsDetails from "../components/NewsDetails";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/data/news.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/login",
        element: (
          <AuthPrivateRoute>
            <Login />
          </AuthPrivateRoute>
        ),
      },
      {
        path: "/sign-up",
        element: (
          <AuthPrivateRoute>
            <SignUp />
          </AuthPrivateRoute>
        ),
      },
    ],
  },
]);
