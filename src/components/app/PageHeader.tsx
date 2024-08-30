import React from "react"

function PageHeader({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <h1 className=" text-4xl mb-4">{children}</h1>
    )
}

export default PageHeader