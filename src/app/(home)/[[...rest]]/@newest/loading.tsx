import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCardSkeleton } from "@/components/app/ProductCard"

export default function Component() {
    return (
        <div className=" space-y-4">
            <div className=" flex justify-between gap-4">
                <h2 className=" text-3xl font-bold">Newest Products</h2>
                <Button asChild variant={"outline"}>
                    <Link href={'/products'}>
                        <span>View All</span>
                        <ArrowRight className="size-4 ml-2" />
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
            </div>
        </div>
    )
}