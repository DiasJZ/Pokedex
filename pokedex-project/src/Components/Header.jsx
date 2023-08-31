import { useState } from 'react'
import React from 'react'

function Header () {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className='text-center text-white'>Pokédex</h1>
        </>
    )
}

export default Header