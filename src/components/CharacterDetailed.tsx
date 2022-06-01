import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_CHARACTER } from '../api/queries'
import { CharacterDetailedData, CharacterDetailedVars } from '../api/types'

const CharacterDetailed = () => {
  const { characterId } = useParams()
  const { data, loading, error } = useQuery<
    CharacterDetailedData,
    CharacterDetailedVars
  >(GET_CHARACTER, {
    variables: {
      id: characterId as string
    }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <>
      <div className="Character-Detail">
        <h1>{data?.character.name}</h1>
        <img src={data?.character.image} alt="" />
        <p>{data?.character.gender}</p>
        <p>Location: {data?.character.location.name}</p>
        <p>Origin: {data?.character.origin.name}</p>
        <p>Status: {data?.character.status}</p>
      </div>
      <Link to={'/'}>Go back</Link>
    </>
  )
}

export default CharacterDetailed
