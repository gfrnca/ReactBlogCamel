// General
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';
import { NavLink } from "react-router-dom";

// CSS 
import styles from './Register.module.css'



const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    console.log(loading)

    e.preventDefault();

    setError(''); 

    const user = {
      displayName,
      email,
      password,
    }

    if( password !== confirmPassword ) {
      setError('Passwords do not match');
      return
    }

    const res = await createUser(user)

    console.log(res);
  }

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <>
      <div className={styles.register}>
        <form onSubmit={handleSubmit}>
          <h1>Start your <span>journey</span></h1>
          <p>Create your account and share ideas</p>

          <div className={styles.inputs}>
            {/* Display name */}
            <label>Username</label>
            <input 
              className='data-input' 
              type="text"
              name="displayName" 
              placeholder="How do you want to be called?"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required 
            />

            {/* E-mail */}
            <label>E-mail</label>
            <input 
              className='data-input' 
              type="e-mail" 
              name="email"  
              placeholder="Type your best e-mail here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password */}
            <label>Password</label>
            <input 
              className='data-input' 
              type="password" 
              name="confirmPassword"  
              placeholder="Your super strong password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Confirm password */}
            <label>Confirm your password</label>
            <input 
              className='data-input' 
              type="password" 
              name="password" 
              placeholder="Make sure you don't forget it"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>

          {!loading && <button className='btn-cta'>Let's start</button>}
          {loading && <button className='btn-cta' disabled>Wait...</button>}

          {error && (
            <p className='error'>{error}</p>
          )}

          <p>
            Already have an account?
            <NavLink to="/login">
              <span> Click here </span>
            </NavLink>
            to sign in.
          </p>

        </form>
      </div>
    </>
  )
}
  
export default Register