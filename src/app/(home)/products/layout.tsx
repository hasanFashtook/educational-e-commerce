import PageHeader from "@/components/app/PageHeader";
import { Button } from "@/components/ui/button";
import { checkRoles } from "@/lib/checkingAdmin";
import Link from "next/link";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const role = await checkRoles();
    return (
        <section>
            <div className="flex justify-between items-center gap-4">
                <PageHeader>Products</PageHeader>
                {role == 'admin' && (
                    <Button asChild>
                        <Link href="/admin/products/new">Add Product</Link>
                    </Button>
                )}
            </div>
            {children}
        </section>
    );
}