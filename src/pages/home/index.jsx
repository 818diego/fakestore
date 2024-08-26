import { useContext } from 'react'
import Card from '../../components/utils/Card'
import { ShopiCartContext } from '../../components/context/index'
import ProductoDetail from '../../components/utils/ProductDetail'

export default function Home() {
  const context = useContext(ShopiCartContext)
  console.log(context.items)

  return (
    <>
      <div className='font-bold '> Home </div>
      <div className='grid grid-cols-5 w-full max-w-screen-xl '>
        {context.items.map((product, index) => {
          return <Card onClick={() => context.openDetail(product)} key={index} data={product}>{product.title}</Card>
        })}
      </div>
      <ProductoDetail />
    </>
  )
}
