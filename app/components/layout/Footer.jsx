import React from 'react'
import ContactButton from '../ui/ContactButton'

const Footer = () => {
    return (
        <footer className='bg-grey-50 p-4'>
            
            <div className='container'>
                
                <hr/>

                <br/>

                <div className='flex justify-between'>

                    <p>This is our Footer .... !!</p>

                    <ContactButton/>

                </div>
                
            </div>
            
        </footer>
    )
}

export default Footer