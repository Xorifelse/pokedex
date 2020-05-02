import React, {useState} from "react";
import {Route, useRouteMatch, useHistory, Link } from 'react-router-dom'

import "./App.css";

const Pokemon = ({ data }) => (
  <>
    <h1>{data.name}</h1>
    <img src={data.img} alt={data.name} />
  </>
)

const Details = ({ pokemons }) => {
  const match = useRouteMatch()

  return <Pokemon data={pokemons[match.params.id]} />
}

const List = ({ pokemons }) => pokemons.map(pokemon => (
  <div>
    <Link to={`/list/${pokemon.id}`}>{pokemon.name}</Link>
  </div>
))

function App({pokemons, types}) {
  const [searchType, setSearchType] = useState([])
  const [search, setSearch] = useState("")
  const history = useHistory(); // we need this to change the front end router url

  // This is to filter the pokemon name by search input
  const filtered = pokemons.filter(pokemon => {
    const name = pokemon.name.toLowerCase()
    const includes = name.includes(search)
    return includes
  })

  return (
    <>
      <h1><Link to="/">Pokedex</Link></h1>
      <Route path="*">
        <input type="text" value={search} onChange={e => {
          history.push('/') // Send user back to path '/'.
          setSearch(e.target.value) // update the current search value
        }}
        />
        <select onChange={e => setSearchType(e.target.value)}>
          {types.map(type => (
            <option>{type}</option>
          ))}
        </select>
      </Route>
      <Route path="/" exact>
        <h2>Types:</h2>
        <List pokemons={pokemons.filter(pokemon => pokemon.type.includes(searchType))} />

        <h2>Search:</h2>
        <List pokemons={filtered} />
      </Route>
      <Route path="/list" exact>
        <List pokemons={pokemons}/>
      </Route>
      <Route path="/list/:id" exact>
        <Details pokemons={pokemons} />
      </Route>
    </>
  )
}

export default App;
