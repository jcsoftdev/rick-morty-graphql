import Character, { CharacterProps } from '../Molecules/Character'
interface Props {
  characters: CharacterProps[]
}
const List = ({ characters }: Props) => {
  return (
    <div className="Characters-List">
      {characters?.map(character => (
        <Character key={character.id} {...character} />
      ))}
    </div>
  )
}

export default List
