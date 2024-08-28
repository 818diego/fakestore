import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Layout from '../../components/Layout';
import ShopiContext from '../../components/context';
import Cart from '../../components/utils/Cart';
import AppRoutes from '../../components/AppsRoutes';

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
  );
}
