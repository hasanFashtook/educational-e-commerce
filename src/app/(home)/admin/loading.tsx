import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function AdminLoading() {
    return (
        <div className=' grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            <Card className=' h-36 flex flex-col justify-between'>
                <CardHeader>
                    <CardTitle>
                        <Skeleton className=' h-6 w-32' />
                    </CardTitle>
                    <CardDescription>
                        <Skeleton className=' h-4 w-24' />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Skeleton className=' h-2 w-60' />
                </CardContent>
            </Card>
            <Card className=' h-36 flex flex-col justify-between'>
                <CardHeader>
                    <CardTitle>
                        <Skeleton className=' h-6 w-32' />
                    </CardTitle>
                    <CardDescription>
                        <Skeleton className=' h-4 w-24' />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Skeleton className=' h-2 w-60' />
                </CardContent>
            </Card>
            <Card className=' h-36 flex flex-col justify-between'>
                <CardHeader>
                    <CardTitle>
                        <Skeleton className=' h-6 w-32' />
                    </CardTitle>
                    <CardDescription>
                        <Skeleton className=' h-4 w-24' />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Skeleton className=' h-2 w-60' />
                </CardContent>
            </Card>
        </div>
    )
}

export default AdminLoading