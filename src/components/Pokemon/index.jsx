import React from 'react'

export const Pokemon = (props) => {
  const { data } = props

  return (
    <>
      <h1>{data.name}</h1>
      <img src={data.img} alt={data.name}/>
    </>
  )
}