"use client"
import { useTransition } from "react"
import { DropdownMenuItem } from "../ui/dropdown-menu"
import { deleteProduct, toggleProductAvailability } from "@/app/(home)/admin/_actions/products";

export function ActiveToggleDropdownItem({
    id,
    isAvailableForPurchase
}: {
    id: string,
    isAvailableForPurchase: boolean
}) {
    const [isPending, startTransition] = useTransition();
    return (
        <DropdownMenuItem
            disabled={isPending}
            onClick={() => {
                startTransition(async () => {
                    await toggleProductAvailability(id, !isAvailableForPurchase)
                })
            }}>
            {isAvailableForPurchase ? "Deactivate" : "Activat"}
        </DropdownMenuItem>
    )
}

export function DeleteDropdownItem({ id, disabled }: { id: string, disabled: boolean }) {
    const [isPending, startTransition] = useTransition();
    return (
        <DropdownMenuItem
            disabled={isPending || disabled}
            onClick={() => {
                startTransition(async () => {
                    await deleteProduct(id)
                })
            }}>
            Delete
        </DropdownMenuItem>
    )
}

