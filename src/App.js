import React, {useState} from "react";
import {Route, useRouteMatch } from 'react-router-dom'
import { Pokemon } from './components/Pokemon'
import { PokemonList } from './components/PokemonList'

import "./App.css";

const Details = (props) => {
  const pokemons = props.pokemons
  const match = useRouteMatch()

  console.log(match.params.id)

  return <Pokemon data={pokemons[match.params.id]} />
}

function App(props) {
  const pokemons = props.pokemons
  const [index, setIndex] = useState(0)
  const [search, setSearch] = useState("")

  console.log("search value", search)
 
  const filtered = pokemons.filter(pokemon => {
    console.log("name", pokemon.name)
    const name = pokemon.name.toLowerCase()
    const includes = name.includes(search)
    return includes
  })

  console.log(filtered)

  return (
    <>
      <Route path="*">
        <input type="text" onChange={e => setSearch(e.target.value)} value={search} />
      </Route>
      <Route path="/" exact>
        {filtered.map(pokemon => <Pokemon data={pokemon}/>)}
        
        <button onClick={() => setIndex(index + 1)}>Next Pokemon</button>
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
