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
  const [currentIndex, changeIndex] = useState(0)

  return (
    <>
      <Route path="/" exact>
        <Pokemon data={pokemons[currentIndex]}/>
        <button onClick={() => changeIndex(currentIndex + 1)}>Next Pokemon</button>
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
