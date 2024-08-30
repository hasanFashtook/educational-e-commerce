import { ProtectingAdminRoute } from "@/actions/check-admin";

export const dynamic = "force-dynamic"

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    await ProtectingAdminRoute();

    return (
        <div>
            {children}
        </div>
    );
}