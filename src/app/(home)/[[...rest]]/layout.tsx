import { checkRoles } from "@/lib/checkingAdmin";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"

export default async function HomeLayout({
    children,
    mostPopular,
    newest
}: Readonly<{
    children: React.ReactNode;
    mostPopular: React.ReactNode;
    newest: React.ReactNode;
}>) {
    const role = await checkRoles()
    if (!role) {
        redirect('/sign-in')
    }
    return (
        <>
            <div className=" min-h-40">
                {mostPopular}
            </div>
            <div className=" min-h-40">
                {newest}
            </div>
            {children}
        </>
    );
}


