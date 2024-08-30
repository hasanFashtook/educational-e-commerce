import { ProductGridSection } from '@/components/app/ProductGridSection'
import db from '@/db/db'
import { cache } from '@/lib/cache'
import React from 'react'


export default async function page() {
  const data = await allProducts();

  return (<>
    {!data?(
      <ProductGridSection products={data} />
    ):(
      <h1>No Products Found</h1>
    )}
  </>
  )
}


const allProducts = cache(
  () => {
    return db.product.findMany({
      where: {
        isAvailableForPurchase: true
      }
    })
  },
  ["/products", "newestProducts"],
  { revalidate: 60 * 60 * 24 }
);