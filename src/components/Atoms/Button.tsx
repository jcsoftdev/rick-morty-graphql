import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  to?: string
  title?: string
}

const Button = ({ children, onClick, to, className, title }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(e)
    }
  }

  if (to) {
    return (
      <Link className={`Button ${className}`} to={to}>
        {children}
      </Link>
    )
  }
  return (
    <button
      className={`Button ${className}`}
      onClick={handleClick}
      title={title}
    >
      {children}
    </button>
  )
}

export default Button
