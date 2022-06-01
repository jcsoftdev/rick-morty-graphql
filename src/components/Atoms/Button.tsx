import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  to?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({ children, onClick, to }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(e)
    }
  }

  if (to) {
    return (
      <Link className="Button" to={to}>
        {children}
      </Link>
    )
  }
  return (
    <button className="Button" onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
