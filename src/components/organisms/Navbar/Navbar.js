// General
import { NavLink } from 'react-router-dom';

// CSS
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to='/'>
        <span>Camel</span>
      </NavLink>

      <ul>
        {/* Home */}
        <li>
          <NavLink to='/'>
            Home
          </NavLink>
        </li>

        {/* About */}
        <li>
          <NavLink to='/about'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar