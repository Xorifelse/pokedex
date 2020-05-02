import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from 'react-router-dom'

const pokedata = require('./pokedata.json')

const types = []

// we want a list of all unique pokemon types
// loop over all the pokemons
pokedata.pokemons.map(pokemon => {
  // map over all the current pokemon type
  return pokemon.type.map(type => {
    // if our current current is not already added to types, add it.
    if(!types.includes(type)){
      types.push(type)
    }

    return null // need to return something
  })
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App pokemons={pokedata.pokemons} types={types} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA