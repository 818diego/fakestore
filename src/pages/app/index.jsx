import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../home';
import Navbar from '../../components/Navbar';
import NotFound from '../notFound';
import Layout from '../../components/Layout';
import ShopiContext from '../../components/context';
import Cart from '../../components/utils/Cart';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
}

export default function App() {
  return (
    <ShopiContext>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
          <Cart />
        </Layout>
      </BrowserRouter>
    </ShopiContext>
  )
}
