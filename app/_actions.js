'use server'

import { createGuestbookEntry } from "@/lib/mongo/guestbook";
import { GuestbookEntrySchema } from "@/lib/schema";
import { revalidatePath } from "next/cache";

export async function addEntry(data) {
    const { firstName, lastName, message } = Object.fromEntries(data);

    // if(!firstName || !lastName || !message) throw new Error("Invalid input.");

    const {error: zodError} = GuestbookEntrySchema.safeParse({firstName, lastName, message})
    if(zodError){
        return {error: zodError.format()}
    }

    const results  = await createGuestbookEntry({ firstName, lastName, comment: message });
    console.log("[_actions.js] results",results)

    revalidatePath('/guestbook')
}