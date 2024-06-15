'use client'


import { useState, useRef } from "react";
import { addEntry } from "../_actions";

const GuestbookEntryForm = () => {

    const formRef = useRef(null)
    const [validationError, setValidationError] = useState(null)

    async function action(data){
        const results = await addEntry(data)
        if(results?.error){
            setValidationError(results.error)
        }else{
            setValidationError(null)
            formRef.current.reset()
        }
    }


    return (
        <div className='py-2 border-t-2 border-b-2'>
            
            <h3>New Entry Form</h3>

            <form className="max-w-md mx-auto" action={action} ref={formRef}>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            className="rounded border bg-transparent px-3 py-1 dark:border-gray"
                        />
                        {validationError?.firstName && <p>{validationError.firstName._errors.join(', ')}</p>}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            className="rounded border bg-transparent px-3 py-1 dark:border-gray"
                        />
                        {validationError?.lastName && <p>{validationError.lastName._errors.join(', ')}</p>}
                    </div>
                </div>

                
                <textarea name="message" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." ></textarea>
                {validationError?.message && <p>{validationError.message._errors.join(', ')}</p>}

                {/* <button disabled={isMutating} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Submit</button> */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Submit</button> 
            </form>

        </div>
    )
}

export default GuestbookEntryForm