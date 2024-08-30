import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { formatCurrency } from '@/lib/formatters'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@prisma/client'
import { Skeleton } from '../ui/skeleton'



export function ProductCard({
    id,
    name,
    description,
    imagePath,
    priceInCents
}: Product) {

    return (
        <div>
            <Card className='overflow-hidden h-full flex flex-col justify-between'>
                <div>
                    <div className='relative w-full h-auto aspect-video'>
                        <Image
                            src={imagePath}
                            fill
                            alt=''
                        />
                    </div>
                    <CardHeader className='flex flex-col'>
                        <CardTitle>{name}</CardTitle>
                        <CardDescription>{formatCurrency(priceInCents / 100)}</CardDescription>
                    </CardHeader>
                    <CardContent className='flex-grow'>
                        <p className='line-clamp-4'>{description}</p>
                    </CardContent>
                </div>
                <CardFooter>
                    <Button asChild size={'lg'} className='w-full'>
                        <Link href={`/products/${id}/purchase`}>Puchase</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export function ProductCardSkeleton() {
    return (
      <Card className="overflow-hidden flex flex-col animate-pulse">
        <Skeleton className="w-full aspect-video bg-gray-300" />
        <CardHeader>
          <CardTitle>
            <Skeleton className="w-3/4 h-6 rounded-full bg-gray-300" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="w-1/2 h-4 rounded-full bg-gray-300" />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="w-full h-4 rounded-full bg-gray-300" />
          <Skeleton className="w-full h-4 rounded-full bg-gray-300" />
          <Skeleton className="w-3/4 h-4 rounded-full bg-gray-300" />
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled size="lg"></Button>
        </CardFooter>
      </Card>
    )
  }
