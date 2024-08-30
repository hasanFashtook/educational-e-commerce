export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" h-screen flex justify-center items-center">
            {children}
        </div>
    );
}