import { useRoutes } from "react-router-dom";
import Home from "../pages/home/index";
import MyOrder from "../pages/myOrder/index";
import MyOrders from "../pages/myOrders/index";
import OrderPreview from "../pages/orderPreview/index";
import NotFound from "../pages/notFound/index";
import Hero from "./Hero";

export default function AppRoutes() {
    const routes = useRoutes([
        { path: "/", element: <Hero /> },
        { path: "/clothes", element: <NotFound /> },
        { path: "/electronics", element: <NotFound /> },
        { path: "/myOrders", element: <MyOrders /> },
        { path: "/myOrder/:id", element: <MyOrder /> },
        { path: "/order-preview", element: <OrderPreview /> },
        { path: "/*", element: <NotFound /> },
        {path: "/all", element: <Home />},
    ]);

    return routes;
}
