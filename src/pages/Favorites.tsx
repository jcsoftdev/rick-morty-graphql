import List from '../components/Organisms/List'
import { useAppSelector } from '../store'
import { selectFavorites } from '../store/reducers/favorites'

const Favorites = () => {
  const favorites = useAppSelector(selectFavorites)
  return <List characters={favorites} />
}

export default Favorites
