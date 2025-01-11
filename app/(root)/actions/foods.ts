"use server"

import { revalidatePath } from "next/cache"

export async function revalidatePages() {

    //re-renders server components
    revalidatePath("/")
    revalidatePath("/cart")
}