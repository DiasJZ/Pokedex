import { useState } from 'react'

function Pokecard () {
    return (
        <>
            <img src="pokemon" alt="pokemon__image" />

            <h1 className='pokemon_data'>
                <span className='pokemon_number'></span> -
                <span className='pokemon-name'></span>
            </h1>
        </>
    )
}

export default Pokecard