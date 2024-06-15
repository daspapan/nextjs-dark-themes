import mongoose from 'mongoose';
import { MONGODB_URI } from "@/lib/db";
import { Guestbook } from "@/lib/guestbookModel";
import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';



export const getGuestbookEntries = async () => {

    console.log('[getGuestbookEntries] Fetching entries...')
    const perPage = 10
    const page = 0; // Math.max(0, req.params.page)

    try{

        await mongoose.connect(MONGODB_URI);
        console.log("Connect: ", mongoose.connection.readyState)

        const entries = await Guestbook
                        .find({})
                        .limit(perPage)
                        .skip(perPage * page)
                        .sort({date: -1});

        /* const entries = await guestbook
            .find({})
            .map(entry => ({...entry, _id: entry._id.toString()}))
            .toArray() */
        
        return {entries}
        
    }catch(error){
        console.log('[getGuestbookEntries] Failed to fetch guestbook.')
        console.error(error)
        throw new Error("[getGuestbookEntries] Failed to fetch guestbook.")
    }
}

export const createGuestbookEntry = async ({firstName, lastName, comment}) => {
    try {

        if(!firstName || !lastName || !comment) throw new Error('[createGuestbookEntry] Please fill out all fields.')

        const name = firstName + " " + lastName;
        const url = faker.image.avatar();
        const email = faker.internet.email({firstName, lastName}).toLowerCase()
        const rating = Math.ceil(Math.random() * 5)
        const status = Math.random() < 0.5 

        const guestbook = new Guestbook({ name, url, email, rating, comment, status });
        const data = await guestbook.save();
        return {data}

    }catch(error){
        throw new Error("[createGuestbookEntry] Failed to create guestbook entry.")
    }
}

export const deleteGuestbookEntryById = async({id}) => {
    try {

        if(!id) throw new Error('[deleteGuestbookEntryById] Please provide the entry id.')

        const data = await Guestbook.findByIdAndDelete(id)
        return {data}
        
    } catch (error) {
        throw new Error("[deleteGuestbookEntryById] Failed to delete guestbook entry.")
    }
}