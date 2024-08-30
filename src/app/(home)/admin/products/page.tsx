import PageHeader from '@/components/app/PageHeader'
import { ProductsTable } from '@/components/app/ProductsTable'
import { Button } from '@/components/ui/button'
import db from '@/db/db'
import { Product } from '@/lib/types'

import Link from 'next/link'
import React from 'react'

export default async function AdminProductsPage() {
  let products: Product[];

  try {
    products = await getProducts();
  } catch (err) {
    throw new Error("Can't find any products")
  }


  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>
      <ProductsTable products={products} />
    </>
  )
}


async function getProducts() {
  const data = await db.product.findMany({
    select: {
      id: true,
      name: true,
      priceInCents: true,
      isAvailableForPurchase: true,
      _count: { select: { orders: true } },
    },
    orderBy: { name: "asc" },
  });

  return data
}