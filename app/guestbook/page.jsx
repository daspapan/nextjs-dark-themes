import React from 'react'
/* import {getGuestbookEntries} from '../../lib/mongo/guestbook.js.bak'

async function getData() {
    const {entries, error} = await getGuestbookEntries();

    if(!entries || error) throw new Error('Failed to fetch guestbook entries.');

    return entries
} */

const page = async() => {

    const entries = {} ; //await getData();

    return (
        <section className="py-24">
            <div className="container">
                <h1 className="text-3x1">
                    Guestbook Page
                </h1>

                <ul className="mt-8 flex flex-col gap-y-2">
                    Hello World
                    {/* {entries.map(entry => (
                        <li key={entry._id} className="bg-white shadow-md p-4">
                            <h2 className="text-xl font-bold">{entry.name}</h2>
                            <p className="mt-2">{entry.message}</p>
                        </li>
                    ))} */}
                </ul>
            </div>
        </section>
    )
}

export default page