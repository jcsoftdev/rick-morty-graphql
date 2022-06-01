import { Link } from 'react-router-dom'
import { Character as CharacterType } from '../api/types'
import Button from './Atoms/Button'

interface Props extends CharacterType {
  favorite: boolean
}

const Character = (character: Props) => {
  const handleClickCharacter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    console.log(character)
  }

  return (
    <Link
      to={`character/${character.id}`}
      className="Character"
      key={character.id}
    >
      <Button
        className="Character-Add"
        title="Agregar a favoritos"
        onClick={handleClickCharacter}
      >
        +
      </Button>
      <img src={character.image} alt="" />
      <p className="Character-Name">{character.name}</p>
    </Link>
  )
}

export default Character
