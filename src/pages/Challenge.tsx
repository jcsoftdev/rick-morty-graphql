import { selectFavorites } from '../store/reducers/favorites'
import { useAppSelector } from '../store/index'
import ListNicknames from '../challenge/ListNicknames'
import sum from '../challenge/sum'

const Reto = () => {
  const favoritesName = useAppSelector(selectFavorites).map(
    character => character.name
  )

  return (
    <div>
      <h1>Retos</h1>
      <p>Por favor ingrese a la carpeta challenge para mas detalle</p>

      <h2>Reto 1</h2>
      <pre>
        {`
          const sum = (numbers: number[]) => {
            const result = numbers.reduce((acc, number) => acc + number, 0)
            return (cb: (result: number) => void) => cb(result)
          }


          //excecute

          const numbers = [1, 2, 3, 4, 5]
          sum(numbers)(result => console.log(result))

          //result
          15
        `}
      </pre>
      <h2>Reto 2</h2>
      <p>se considera los favoritos para el componente a mostrar</p>
      <ListNicknames name={favoritesName} order="DESC" />
    </div>
  )
}

export default Reto
