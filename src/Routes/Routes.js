import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/404/NotFound";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Services from "../Pages/Services/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService/AddService";
import MyReviews from "../Pages/MyReviews/MyReviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-risaadodx.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
