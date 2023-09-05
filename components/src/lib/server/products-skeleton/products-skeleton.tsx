import { ProductList } from '../product-list/product-list'

export async function ProductsSkeleton() {
  const products = [
    { 
      name: '',
      id: 0,
      price: '',
      image: {
        product_url: ''
      }
    },
    { 
      name: '',
      id: 0,
      price: '',
      image: {
        product_url: ''
      }
    },
    { 
      name: '',
      id: 0,
      price: '',
      image: {
        product_url: ''
      }
    },
    { 
      name: '',
      id: 0,
      price: '',
      image: {
        product_url: ''
      }
    }
  ]
  return (
    <ProductList products={products} />
  )
}
