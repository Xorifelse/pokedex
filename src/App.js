import React, {useState} from "react";
import {Route, useRouteMatch } from 'react-router-dom'
import { Pokemon } from './components/Pokemon'
import { PokemonList } from './components/PokemonList'

import "./App.css";

const Details = (props) => {
  const pokemons = props.pokemons
  const match = useRouteMatch()

  return <Pokemon data={pokemons[match.params.id]} />
}

function App(props) {
  const pokemons = props.pokemons
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [search, setSearch] = useState("")

  const filtered = pokemons.filter(pokemon => {
    const name = pokemon.name.toLowerCase()
    const includes = name.includes(search)
    return includes
  })

  const types = ["Psychic", "Flying", "Dragon", "Fire", "Electric", "Ice", "Normal", "Rock", "Water", "Bug", "Grass", "Ground", "Poison", "Fighting", "Ghost"]

  return (
    <>
      <Route path="*">
        <input type="text" onChange={e => setSearch(e.target.value)} value={search} />
        <select onChange={(e) => setPokemonTypes(e.target.value)}>
          {types.map(type => (
            <option>{type}</option>
          ))}
        </select>
      </Route>
      <Route path="/" exact>
        <PokemonList pokemons={pokemons.filter(pokemon => pokemon.type.includes(pokemonTypes))} />

        {filtered.map(pokemon => <Pokemon data={pokemon}/>)}
      </Route>
      <Route path="/list" exact>
        <PokemonList pokemons={pokemons}/>
      </Route>
      <Route path="/list/:id" exact>
        <Details pokemons={pokemons} />
      </Route>
    </>
  )
}

export default App;
