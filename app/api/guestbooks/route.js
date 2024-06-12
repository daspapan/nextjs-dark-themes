import { MONGODB_URI } from '@/lib/db';
import { Guestbook } from '@/lib/guestbookModel';
import { getGuestbookEntries, createGuestbookEntry } from '@/lib/mongo/guestbook';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    try {
        const {entries, error} = await getGuestbookEntries();
        if(error) throw new Error(error)

        return NextResponse.json({ entries }, {status: 200});
    } catch (error) {
        return NextResponse.json({ error: error.message }, {status: 500 });
    }
}


export async function POST(req) {
    console.log("Save a record inside Guestbook")
    try {
        // console.log(req.json());
        

        const { firstName, lastName, comment } = await req.json();
        console.log(firstName, lastName, comment)
        if(!firstName || !lastName || !comment) throw new Error('[Guestbook-POST]Please fill out all fields.');
        
        const { insertedId, error } = await createGuestbookEntry({ firstName, lastName, comment });

        console.log(insertedId)
        console.error(error)

        if(error) throw new Error('Failed to create guestbook entry.');

        return NextResponse.json({ message: 'Entry created successfully.', results: { _id: insertedId } }, { status: 201 });

    } catch (error) {
         
        return NextResponse.json({ message: 'Failed to create guestbook entry.', results: [] }, {status: 500});

    }
}