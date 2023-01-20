// General
import { useState, useEffect } from 'react';

// CSS 
import styles from './Register.module.css'



const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
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

    console.log(user);
  }


  return (
    <>
      <div className={styles.register}>
        <form onSubmit={handleSubmit}>
          <h1>Start your <span>journey</span></h1>
          <p>Create your account and share ideas</p>

          {error && (
            <p className='error'>Passwords don't match</p>
          )}

          <div className={styles.inputs}>
            {/* Display name */}
            <label>Username</label>
            <input 
              className='input-data' 
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
              className='input-data' 
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
              className='input-data' 
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
              className='input-data' 
              type="password" 
              name="password" 
              placeholder="Make sure you don't forget it"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>

          <button className='btn-cta'>
            Let's start
          </button>

        </form>
      </div>
    </>
  )
}
  
export default Register