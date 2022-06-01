import { Link } from 'react-router-dom'
import { Character as CharacterType } from '../api/types'

const Character = (character: CharacterType) => {
  return (
    <Link
      to={`character/${character.id}`}
      className="Character"
      key={character.id}
    >
      <img src={character.image} alt="" />
      <p>{character.name}</p>
    </Link>
  )
}

export default Character
