import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../api/queries'
import { CharactersData, CharactersVars } from '../api/types'
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
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <div className="Characters-List">
      {data &&
        data.characters.results.map(character => (
          <Character key={character.id} {...character} />
        ))}
    </div>
  )
}

export default List
