import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import Pokecard from './Pokecard'
import { Container, Grid } from '@mui/material'



function Header () {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
         getPokemons();
    }, [])
        const getPokemons = () => { 
        var endpoints = []
        for (var i = 1; i++; i<50 ) {
            endpoints.push(`https://pokeapi.com/api/v2/pokemon/${i}/`)
        }

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((res) => setPokemons(res.data.results))
    .catch((err) => console.log(err));
    };
    return (
    
        <>
            <h1 id='logo'>
                Pokédex
            </h1>
            <form action="form" className='form'>
                <input type="search" className='input_search' placeholder='Name or Number' required />
            </form>
            <Container maxWidth='xg'>
                <Grid container>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={3} key={key}>
                        <Pokecard name={pokemon.name} />
                    </Grid>
                    ))}
                    <Grid item xs={3}>
                        <Pokecard />
                    </Grid>
                    <Grid item xs={3}>
                        <Pokecard />
                    </Grid>
                    <Grid item xs={3}>
                        <Pokecard />
                    </Grid>
                    <Grid item xs={3}>
                        <Pokecard />
                    </Grid>
                </Grid>

            </Container>
            <div className='buttons'>
                <button className="button btn-prev">&lt; Prev</button>
                <button className="button btn-next">Next &gt;</button>
            </div>
        </>
    )
}

export default Header