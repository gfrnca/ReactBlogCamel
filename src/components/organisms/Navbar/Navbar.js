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
          <NavLink to='/' className={({isActive}) => (isActive ? styles.active : '')}>
            Home
          </NavLink>
        </li>

        {/* About */}
        <li>
          <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : '')}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar