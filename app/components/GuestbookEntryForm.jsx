'use client'

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const GuestbookEntryForm = () => {

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);
    const isMutating = isFetching || isPending

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const {firstName, lastName, message} = Object.fromEntries(formData);
        console.log("======================")
        console.log(Object.fromEntries(formData))
        console.log(firstName.trim(), lastName.trim(), message.trim())
        console.log("======================")
        

        if(!firstName || !lastName || !message) return;

        setIsFetching(true);

        const {error} = await fetch('/api/guestbooks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },  
            body: JSON.stringify({
                firstName: `${firstName.trim()}`,
                lastName: `${lastName.trim()}`, 
                comment: message.trim()
            }) 
        }) 

        form.reset();
        setIsFetching(false)
        startTransition(() => router.refresh())
    }


    return (
        <div className='py-2 border-t-2 border-b-2'>
            
            <h3>New Entry Form</h3>

            <form className="max-w-md mx-auto" onClick={handleSubmit}>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            className="rounded border bg-transparent px-3 py-1 dark:border-gray"
                        />
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            className="rounded border bg-transparent px-3 py-1 dark:border-gray"
                        />
                    </div>
                </div>

                
                <textarea name="message" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." ></textarea>

                <button disabled={isMutating} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Submit</button>
            </form>

        </div>
    )
}

export default GuestbookEntryForm