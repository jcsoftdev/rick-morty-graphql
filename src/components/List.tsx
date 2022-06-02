import Character, { CharacterProps } from './Character'
interface Props {
  characters: CharacterProps[]
}
const List = ({ characters }: Props) => {
  const charactersData = [...characters]
  return (
    <div className="Characters-List">
      {charactersData?.map(character => (
        <Character key={character.id} {...character} />
      ))}
    </div>
  )
}

export default List
