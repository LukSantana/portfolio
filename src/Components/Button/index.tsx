import React from 'react'

interface ButtonProps {
    text: string
    onClick(): void
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className='text-white font-medium border-white rounded-lg border-2 w-[100%] py-2 bg-stone-900 transition ease-in-out hover:scale-105 hover:bg-stone-800'
        >
            {text}
        </button>
    )
}

export default Button