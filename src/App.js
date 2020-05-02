import React from "react";
import {Route} from 'react-router-dom'
import "./App.css";

const Pokemon = ({data}) => {
  console.log(data)
  return (
    <>
      <h1>{data.name}</h1>
      <img src={data.img} alt={data.name}/>
    </>
  )
}


function App(props) {
  return (
      <Route path={"/"}>
        <Pokemon data={props.pokemons[0]}/>
      </Route>
  )
}

export default App;
