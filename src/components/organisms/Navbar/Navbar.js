// General
import { NavLink } from 'react-router-dom';

import { useAuthentication } from '../../../hooks/useAuthentication';

import { useAuthValue } from '../../../context/AuthContext';

// CSS
import styles from './Navbar.module.css';

const Navbar = () => {
  const {user} = useAuthValue();

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
        <li>

        {!user && (
          <>
            <NavLink to='/login'>
              <button className='btn-cta'>
                Join
              </button>
            </NavLink>
          </>
        )}

        </li>
      </ul>
    </nav>
  )
}

export default Navbar