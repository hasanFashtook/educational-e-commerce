import { Skeleton } from "../ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export function SkeletonTable() {
    return (
        <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-5 ">
                    <Skeleton className="h-4 sr-only w-[80px]" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-96" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-[100px]" />
                </TableHead>
                <TableHead className="text-right">
                    <Skeleton className="h-4 w-[80px]" />
                </TableHead>
                <TableHead className="">
                    <Skeleton className="h-4 sr-only w-[80px]" />
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>
                    <Skeleton className="h-6 w-6 rounded-full" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-96" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                </TableCell>
                <TableCell className="text-right">
                    <Skeleton className="h-4 w-[80px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-6 w-6 rounded-full ml-auto" />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Skeleton className="h-6 w-6 rounded-full" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-96" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                </TableCell>
                <TableCell className="text-right">
                    <Skeleton className="h-4 w-[80px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-6 w-6 rounded-full ml-auto" />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Skeleton className="h-6 w-6 rounded-full" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-96" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                </TableCell>
                <TableCell className="text-right">
                    <Skeleton className="h-4 w-[80px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-6 w-6 rounded-full ml-auto" />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Skeleton className="h-6 w-6 rounded-full" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-96" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                </TableCell>
                <TableCell className="text-right">
                    <Skeleton className="h-4 w-[80px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-6 w-6 rounded-full ml-auto" />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Skeleton className="h-6 w-6 rounded-full" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-96" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                </TableCell>
                <TableCell className="text-right">
                    <Skeleton className="h-4 w-[80px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-6 w-6 rounded-full ml-auto" />
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
    );
}