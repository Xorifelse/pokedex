import React from 'react'

export const Pokemon = (props) => {
  const { data } = props

  return (
    <>
      <h6>{data.name}</h6>
      <img src={data.img} alt={data.name} height="100px" width="100px"/>
    </>
  )
}