import { useRoutes } from "react-router-dom";
import Home from "../pages/home/index";
import MyOrder from "../pages/myOrder/index";
import MyOrders from "../pages/myOrders/index";
import OrderPreview from "../pages/orderPreview/index";
import NotFound from "../pages/notFound/index";

export default function AppRoutes() {
    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/clothes", element: <Home /> },
        { path: "/electronics", element: <Home /> },
        { path: "/myorders", element: <MyOrders /> },
        { path: "/myorder/:id", element: <MyOrder /> },
        { path: "/order-preview", element: <OrderPreview /> },
        { path: "/*", element: <NotFound /> },
    ]);

    return routes;
}
