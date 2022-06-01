import { Character as CharacterType } from '../api/types'

const Character = (character: CharacterType) => {
  return (
    <div className="Character" key={character.id}>
      <p>{character.name}</p>
      <img src={character.image} alt="" />
    </div>
  )
}

export default Character
