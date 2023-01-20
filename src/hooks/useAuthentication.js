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
}