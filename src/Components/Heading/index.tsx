import React from 'react'

interface HeadingProps{
    children: string
}

const Heading = ({children}:HeadingProps) => {
    return (
        <h1 className='text-white text-5xl uppercase font-medium'>{children}</h1>
    )
}

export default Heading