// General
import { useState, useEffect } from 'react';

// CSS 
import styles from './Register.module.css'



const Register = () => {
  return (
    <>
      <div className={styles.register}>
        <form>
          <h1>Start your <span>journey</span></h1>

          <div className={styles.inputs}>
            {/* Display name */}
            <label>Username</label>
            <input className='input-data' type="text" name="displayName" required placeholder="How do you want to be called?"/>

            {/* E-mail */}
            <label>E-mail</label>
            <input className='input-data' type="e-mail" name="email" required placeholder="Type your best e-mail here"/>

            {/* Password */}
            <label>Password</label>
            <input className='input-data' type="password" name="confirmPassword" required placeholder="Your super strong password here"/>

            {/* Confirm password */}
            <label>Confirm your password</label>
            <input className='input-data' type="password" name="password" required placeholder="Make sure you don't forget it"/>
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