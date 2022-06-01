import { Link } from 'react-router-dom'
import { Character as CharacterType } from '../api/types'
import Button from './Atoms/Button'
import { AppDispatch } from '../store/index'
import { useDispatch } from 'react-redux'
import { favoritesSlice } from '../store/reducers/favorites'

interface Props extends CharacterType {
  favorite: boolean
}

const Character = (character: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  const addFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(favoritesSlice.actions.addFavorite(character))
  }

  const removeFavorite = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    dispatch(favoritesSlice.actions.removeFavorite(character.id))
  }

  return (
    <Link
      to={`character/${character.id}`}
      className="Character"
      key={character.id}
    >
      <Button
        className="Character-Add"
        title={
          character.favorite ? 'Remove from favorites' : 'Add to favorites'
        }
        onClick={character.favorite ? removeFavorite : addFavorite}
      >
        {character.favorite ? '★' : '☆'}
      </Button>
      <img src={character.image} alt="" />
      <p className="Character-Name">{character.name}</p>
    </Link>
  )
}

export default Character
