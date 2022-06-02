import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { GET_CHARACTERS } from '../api/queries'
import { CharactersData, CharactersVars } from '../api/types'
import Button from '../components/Atoms/Button'
import InputSearch from '../components/Atoms/InputSearch'
import { CharacterProps } from '../components/Molecules/Character'
import List from '../components/Organisms/List'
import { AppDispatch, useAppSelector } from '../store'
import {
  favoritesSlice,
  selectFavorites,
  selectSearchText
} from '../store/reducers/favorites'

const Home = () => {
  const searchText = useAppSelector(selectSearchText)
  const [search, setSearch] = useState(searchText)

  const { data, loading, error } = useQuery<CharactersData, CharactersVars>(
    GET_CHARACTERS,
    {
      variables: {
        page: 1,
        search: searchText
      }
    }
  )

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearch(e.currentTarget.value)
      dispatch(favoritesSlice.actions.setSearchText(e.currentTarget.value))
    }
  }

  const favorites = useAppSelector(selectFavorites)

  const dispatch = useDispatch<AppDispatch>()

  const charactersMapped =
    data?.characters.results.map(character => {
      const isFavorite = favorites.find(
        favorite => favorite.id === character.id
      )
      return {
        ...character,
        favorite: !!isFavorite
      }
    }) || []

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <>
      <InputSearch
        value={search}
        onChange={e => setSearch(e.target.value)}
        onEnter={handleEnter}
      />
      <List characters={charactersMapped} />
      <Button> More </Button>
    </>
  )
}

export default Home
