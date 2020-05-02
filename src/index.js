import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const pokedata = require('./pokedata.json')

console.log(pokedata)

console.log(pokedata.id)
console.log(pokedata.pokemons)

ReactDOM.render(
  <React.StrictMode>
    <App pokemons={pokedata.pokemons} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA