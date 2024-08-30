import { useContext } from 'react';
import Card from '../../components/utils/Card';
import { ShopiCartContext } from '../../components/context/index';
import ProductoDetail from '../../components/utils/ProductDetail';
import SearchBar from '../../components/utils/SearchBar';

export default function Home() {
  const { items, searchTerm, searchItemsByTitle } = useContext(ShopiCartContext);

  const handleSearchChange = (event) => {
    searchItemsByTitle(event.target.value);
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div className='grid grid-cols-5 gap-6 w-full max-w-screen-xl'>
        {items.map((product, index) => (
          <Card key={index} data={product}>
            {product.title}
          </Card>
        ))}
      </div>

      <ProductoDetail />
    </>
  );
}
