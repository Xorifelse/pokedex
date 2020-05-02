import React, {useState} from "react";
import {Route} from 'react-router-dom'
import { Pokemon } from './components/Pokemon'
import { PokemonList } from './components/PokemonList'

import "./App.css";



function App(props) {
  const pokemons = props.pokemons
  const [currentIndex, changeIndex] = useState(0)

  return (
    <>
      <Route path="/" exact>
        <Pokemon data={pokemons[currentIndex]}/>
        <button onClick={() => changeIndex(currentIndex + 1)}>Next Pokemon</button>
      </Route>
      <Route path="/list">
        <PokemonList pokemons={pokemons}/>
      </Route>
      <Route path="/list/:id">
        <PokemonDetails />
      </Route>
    </>
  )
}

export default App;
