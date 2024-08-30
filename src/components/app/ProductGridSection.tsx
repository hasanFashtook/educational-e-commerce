import { Product } from '@prisma/client'
import { ProductCard } from "./ProductCard";

export function ProductGridSection({ products }: {
    products: Product[]
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}