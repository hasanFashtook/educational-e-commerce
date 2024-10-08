"use client"

import { formatCurrency } from "@/lib/formatters"
import { useState } from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useFormState, useFormStatus } from "react-dom"
import { Textarea } from "../ui/textarea"
import { AddProduct } from "@/app/(home)/admin/_actions/products"

export function ProductForm() {
    const [error, action] = useFormState(AddProduct, {})
    const [priceInCents, setPriceInCents] = useState<number>(0)

    return (
        <form
            className="space-y-8"
            action={action}>
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" required />
                {error.name && <div className="text-destructive">{error.name}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="priceInCents">Price In Cents</Label>
                <Input type="number" id="priceInCents" name="priceInCents" required value={priceInCents} onChange={e => setPriceInCents(Number(e.target.value || undefined))} />
                <div className="text-muted-foreground">{formatCurrency((priceInCents || 0) / 100)}</div>
                {error.priceInCents && <div className="text-destructive">{error.priceInCents}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" required />
                {error.description && <div className="text-destructive">{error.description}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="file">File</Label>
                <Input type="file" id="file" name="file" required />
                {error.file && <div className="text-destructive">{error.file}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="image">Image</Label>
                <Input type="file" id="image" name="image" required />
                {error.image && <div className="text-destructive">{error.image}</div>}
            </div>
            <SubmitButton />
        </form>)
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return <Button disabled={pending} type="submit">
        {pending ? 'Saving...' : "Save"}
    </Button>
}