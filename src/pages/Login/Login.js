// General
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";

// CSS
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <>
      <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          <h1>
            Are you <span>ready</span>?
          </h1>
          <p>Use your account to login</p>

          <div className={styles.inputs}>
            {/* E-mail */}
            <label>E-mail</label>
            <input
              className="input-data"
              type="e-mail"
              name="email"
              placeholder="The e-mail that you used to create this account"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password */}
            <label>Password</label>
            <input
              className="input-data"
              type="password"
              name="confirmPassword"
              placeholder="Whats your best secret?"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!loading && <button className="btn-cta">Let's start</button>}
          {loading && (
            <button className="btn-cta" disabled>
              Wait...
            </button>
          )}

          {error && <p className="error">{error}</p>}

          <p>
            Don't have an account?{" "}
            <NavLink to="/register">
              <span>Click here</span>
            </NavLink>{" "}
            to create.
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
