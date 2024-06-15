import { MONGODB_URI } from '@/lib/db';
import { Guestbook } from '@/lib/guestbookModel';
import { getGuestbookEntries, createGuestbookEntry, deleteGuestbookEntryById } from '@/lib/mongo/guestbook';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req) {
    console.log("Save a record inside Guestbook")
    try {
        // console.log(req.json());
        

        const { firstName, lastName, comment } = await req.json();
        console.log(firstName, lastName, comment)
        if(!firstName || !lastName || !comment) throw new Error('[Guestbook-POST]Please fill out all fields.');

        const { data } = await createGuestbookEntry({ firstName, lastName, comment });

        console.log("data",data)
        // console.error(error)

        // if(error) throw new Error('Failed to create guestbook entry.');

        return NextResponse.json({ message: 'Entry created successfully.', results: data }, { status: 201 });

    } catch (error) {
         
        return NextResponse.json({ message: 'Failed to create guestbook entry.', results: [] }, {status: 500});

    }
}


export async function DELETE(req){
    try {
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get('id');
        console.log("Guestbook entry id to delete is ", id)

        const {data} = await deleteGuestbookEntryById({id})

        return NextRequest.json({status: 200}, {message: 'Entry deleted successfully', results: data})
    } catch (error) {
        console.error(error)
        return NextRequest.json({status: 500}, {message: 'Failed to delete entry.', error: error.message})
    }
}


export async function GET() {
    try {
        const {entries, error} = await getGuestbookEntries();
        if(error) throw new Error(error)

        return NextResponse.json({ entries }, {status: 200});
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: error.message }, {status: 500 });
    }
}
