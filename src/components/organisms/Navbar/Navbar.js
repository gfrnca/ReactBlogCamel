// General
import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../../hooks/useAuthentication";

import { useAuthValue } from "../../../context/AuthContext";

// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        <span>Camel</span>
      </NavLink>

      <ul>
        {/* Home */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>

        {/* About */}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>

        {!user && (
          <>
            <li>
              <NavLink to="/login">
                <button className="btn-cta">Join</button>
              </NavLink>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <NavLink to="/posts/create">
                <button className="btn-cta">Create post</button>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard">
                <button className="btn-cta">Dashboard</button>
              </NavLink>
            </li>
          </>
        )}

        {user && (
          <li>
            <button onClick={logout} className="btn-cta">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
