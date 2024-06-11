import React from 'react'

const AboutLayout = ({children}) => {
    return (
        <section>
            <div className="container">
                <h1 className=''>About Layout 1</h1>
                <div>{children}</div>
            </div>
        </section>
    )
}

export default AboutLayout