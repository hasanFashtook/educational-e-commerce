"use server"

import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

const adminEmail = process.env.ADMIN_EMAIL

export async function ProtectingAdminRoute() {
    try {

        const user = await currentUser();

        const userEmail = user?.emailAddresses[0].emailAddress;

        if (userEmail != adminEmail) {
            redirect('/')
        }
    } catch (error) {
        return auth().redirectToSignIn()

    }
}