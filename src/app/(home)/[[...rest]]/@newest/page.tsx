import { ProductGridSection } from "@/components/app/ProductGridSection";
import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { cache } from "@/lib/cache";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function NewestProductsPage() {
    const data = await newestProducts()
    return <div className=" space-y-4">
        <div className=" flex justify-between gap-4">
            <h2 className=" text-3xl font-bold">Newest Products</h2>
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

const newestProducts = cache(
    () => {
      return db.product.findMany({
        where: {
            isAvailableForPurchase: true
        },
        orderBy: {
            createdAt: "desc"
        },
        take: 6
    })
    },
    ["/", "newestProducts"],
    { revalidate: 60 * 60 * 24 }
  );