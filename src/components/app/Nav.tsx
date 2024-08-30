'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ComponentProps } from 'react'

export function Nav({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='bg-primary text-primary-foreground flex justify-center px-4'
        >
            {children}
        </div>
    )
}

export function NavLinks(props: Omit<ComponentProps<typeof Link>, "className">) {
    const pathName = usePathname()
    return <Link {...props} className={cn(`p-4 transition duration-300
        hover:bg-secondary hover:text-secondary-foreground
        focus-visible::bg-secondary focus-visible:text-secondary-foreground`,
        pathName === props.href && "bg-background text-foreground"
    )} />
}