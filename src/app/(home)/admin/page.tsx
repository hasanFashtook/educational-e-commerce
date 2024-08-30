import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import db from "@/db/db"
import { formatCurrency, formatNumber } from "@/lib/formatters"
import Link from "next/link"

async function getSalesData() {
    const data = await db.order.aggregate({
        _sum: { pricePaidInCents: true },
        _count: true
    })
    return {
        amount: (data._sum.pricePaidInCents || 0) / 100,
        numberOfSales: data._count
    }
}

async function getUsersData() {
    const [userCount, orderData] = await Promise.all([
        db.user.count(),
        db.order.aggregate({
            _sum: { pricePaidInCents: true }
        })]
    )
    return {
        userCount,
        averageValuePerUser: userCount === 0 ? 0 : (orderData._sum.pricePaidInCents || 0) / userCount / 100
    }
}

async function getProductsData() {
    const [activeCount, inActiveCount] = await Promise.all([
        db.product.count({ where: { isAvailableForPurchase: true } }),
        db.product.count({ where: { isAvailableForPurchase: false } })
    ])
    return {
        activeCount, inActiveCount
    }
}


export default async function page() {
    const [salesData, usersData, productsData] = await Promise.all([
        getSalesData(),
        getUsersData(),
        getProductsData()
    ]);

    return (
        <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <DashboardCard
                title="sales"
                subTitle={`${formatNumber(salesData.numberOfSales)} Order`}
                body={formatCurrency(salesData.amount)}
                pathToPage="admin/orders"
            />
            <DashboardCard
                title="Custmers"
                subTitle={`${formatCurrency(usersData.averageValuePerUser)} Average Value`}
                body={formatNumber(salesData.amount)}
                pathToPage="admin/users"
                />
            <DashboardCard
                title="Active Products"
                subTitle={`${formatNumber(productsData.inActiveCount)} Inactive`}
                body={formatNumber(productsData.activeCount)}
                pathToPage="admin/products"
            />
        </div>
    )
}


type DashboardCardProps = {
    title: string,
    subTitle: string,
    body: string,
    pathToPage: string
}

function DashboardCard({ title, subTitle, body, pathToPage }: DashboardCardProps) {
    return <Link href={pathToPage}>
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{subTitle}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{body}</p>
            </CardContent>
        </Card>
    </Link>
}