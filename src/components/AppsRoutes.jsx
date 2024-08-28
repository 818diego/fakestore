import { useRoutes } from 'react-router-dom';
import Home from '../pages/home/index';
import MyOrder from '../pages/myOrder/index';
import NotFound from '../pages/notFound/index';

export default function AppRoutes() {
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/clothes', element: <Home /> },
        { path: '/electronics', element: <Home /> },
        { path: '/myorder', element: <MyOrder /> },
        { path: '/*', element: <NotFound /> },
    ]);

    return routes;
}
