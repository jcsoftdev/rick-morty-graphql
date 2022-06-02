import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../api/queries'
import { CharactersData, CharactersVars } from '../api/types'
import Button from '../components/Atoms/Button'
import { CharacterProps } from '../components/Molecules/Character'
import List from '../components/Organisms/List'
import { useAppSelector } from '../store'
import { selectFavorites } from '../store/reducers/favorites'

const Home = () => {
  const { data, loading, error } = useQuery<CharactersData, CharactersVars>(
    GET_CHARACTERS,
    {
      variables: {
        page: 1
      }
    }
  )

  const favorites = useAppSelector(selectFavorites)

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
      <List characters={charactersMapped} />
      <Button> More </Button>
    </>
  )
}

export default Home
