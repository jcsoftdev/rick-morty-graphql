import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../api/queries'
import { CharactersData, CharactersVars } from '../api/types'
import { useAppSelector } from '../store'
import { selectFavorites } from '../store/reducers/favorites'
import Character from './Character'

const List = () => {
  const { data, loading, error } = useQuery<CharactersData, CharactersVars>(
    GET_CHARACTERS,
    {
      variables: {
        page: 1
      }
    }
  )

  const favorites = useAppSelector(selectFavorites)

  const charactersMapped = data?.characters.results.map(character => {
    const isFavorite = favorites.find(favorite => favorite.id === character.id)
    return {
      ...character,
      favorite: !!isFavorite
    }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <div className="Characters-List">
      {charactersMapped?.map(character => (
        <Character key={character.id} {...character} />
      ))}
    </div>
  )
}

export default List
