import React from 'react'
import {Link} from 'react-router-dom'

export const PokemonList = (props) => {
  console.log(props)
  const pokemons = props.pokemons

  return pokemons.map(pokemon => (
    <div>
        <Link to={`/list/${pokemon.id}`}>{pokemon.name}</Link>
    </div>
  ))
}