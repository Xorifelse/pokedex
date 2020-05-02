import React from "react";
import "./App.css";

function App(props) {
  const pokemon = props.pokemons[0]
  return <div className="App">{pokemon.name}</div>;
}

export default App;
