interface Props {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
const InputSearch = ({ value, onChange, onEnter }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="Search">
      <input
        id="search"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onKeyDown={onEnter}
      />
      <label htmlFor="search">Press Enter to search</label>
    </div>
  )
}

export default InputSearch
