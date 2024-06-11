import React from 'react'

const AboutLayout = ({children}) => {
    return (
        <section>
            <h1 className=''>About Layout</h1>
            <div>{children}</div>
        </section>
    )
}

export default AboutLayout