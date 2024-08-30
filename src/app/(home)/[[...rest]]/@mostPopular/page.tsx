import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGridSection } from "@/components/app/ProductGridSection";
import { cache } from "@/lib/cache";
import db from "@/db/db";



export default async function MostPopularPage() {
    const data = await mostPopularProducts()

    return <div className=" space-y-4">
        <div className=" flex justify-between gap-4">
            <h2 className=" text-3xl font-bold">Most Popular</h2>
            <Button asChild variant={"outline"}>
                <Link href={'/products'}>
                    <span>View All</span>
                    <ArrowRight className="size-4 ml-2" />
                </Link>
            </Button>
        </div>
        <ProductGridSection products={data} />
    </div>
}


const mostPopularProducts = cache(
    () => {
        return db.product.findMany({
            where: {
                isAvailableForPurchase: true
            },
            orderBy: {
                orders: {
                    _count: "desc"
                }
            },
            take: 6
        })
    },
    ["/", "newestProducts"],
    { revalidate: 60 * 60 * 24 }
);