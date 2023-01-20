// General
import { db } from '../firebase/config';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth';

import {useState, useEffect} from 'react';

export const useAuthentication = () => {
  const [error , setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // Cleanup - Deal with memory leaks
  const [canceled , setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = () => {
    if(canceled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const {user} = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      await updateProfile(user, {
        displayName: data.displayName
      })

      return user

    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message)

      let systemErrorMessage;

      if(error.message.includes('Password')) {
        systemErrorMessage = "Password must contains at least 6 characters";
      } else if(error.message.includes('email-aready')) {
        systemErrorMessage = "E-mail already used"
      } else {
        systemErrorMessage = "An error ocurred, try again later"
      }

      setError(systemErrorMessage);
    }

    setLoading(false);
  };

  useEffect(() => {
    return() => setCancelled(true);
  })

  return {
    auth,
    createUser,
    error,
    loading,
  }
}