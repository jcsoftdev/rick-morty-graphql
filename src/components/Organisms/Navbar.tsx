import { NavLink } from 'react-router-dom'

const CLASS_NAME = 'Navbar-List-Item-Link'
const getClassName = (navData: { isActive: boolean }) =>
  navData.isActive ? CLASS_NAME + ' active' : CLASS_NAME

const Navbar = () => {
  return (
    <div className="Navbar-Container">
      <div className="AppWrapper">
        <nav className="Navbar ">
          <ul className="Navbar-List">
            <li className="Navbar-List-Item">
              <NavLink to="/" className={getClassName}>
                Home
              </NavLink>
            </li>
            <li className="Navbar-List-Item">
              <NavLink to="/favorites" className={getClassName}>
                Favorites
              </NavLink>
            </li>
            <li className="Navbar-List-Item">
              <NavLink to="/retos" className={getClassName}>
                Retos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
