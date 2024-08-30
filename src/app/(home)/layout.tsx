import { Nav, NavLinks } from "@/components/app/Nav";
import { checkRoles } from "@/lib/checkingAdmin";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"

export default async function HomeLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const role = await checkRoles()
    if (!role) {
        redirect('/sign-in')
    }
    return (
        <>
            <div className="bg-primary text-primary-foreground flex justify-between px-4">
                <Nav>
                    <NavLinks href={'/'}>Home</NavLinks>
                    {role === 'admin' && (
                        <NavLinks href={'/admin'}>Dashboard</NavLinks>
                    )}
                    <NavLinks href={'/products'}>Products</NavLinks>
                    <NavLinks href={'/orders'}>My Orders</NavLinks>
                </Nav>
                {!!role && <>
                    <UserButton />
                </>}
            </div>
            <div className="container my-6">{children}</div>
        </>
    );
}

