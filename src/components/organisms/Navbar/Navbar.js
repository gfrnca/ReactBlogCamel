// General
import { NavLink } from 'react-router-dom';

// CSS
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>
        <span>Camel</span>
      </NavLink>

      <ul>
        <li>
          <NavLink to='/'>

          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar