import { useState } from 'react'
import React from 'react'
import Pokecard from './Pokecard'


function Header () {
    return (
        <>
            <h1 id='logo'>
                Pokédex
            </h1>
            <form action="form" className='form'>
                <input type="search" className='input_search' placeholder='Name or Number' required />
            </form>
            <Pokecard />
            <div className='buttons'>
                <button className="button btn-prev">&lt; Prev</button>
                <button className="button btn-next">Next &gt;</button>
            </div>
        </>
    )
}

export default Header