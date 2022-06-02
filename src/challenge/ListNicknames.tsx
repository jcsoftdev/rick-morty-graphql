interface Props {
  name: string[]
  order?: 'ASC' | 'DESC'
}
const ListNicknames = ({ name, order = 'ASC' }: Props) => {
  const sortedName = order === 'ASC' ? name.sort() : name.sort().reverse()
  return (
    <ul>
      {sortedName.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}

export default ListNicknames
