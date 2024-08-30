import { ProductCardSkeleton } from "@/components/app/ProductCard"

function loading() {
  return (
    <div className=" grid gap-4 grid-cols-1 md:grid-col-2 lg:grid-cols-3">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  )
}


export default loading