/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebaseApp from "../firebase/firebase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(firebaseApp);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log Out user
  const logOut = () => signOut(auth);

  // load logged current user
  useEffect(() => {
    const updateUser = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => updateUser();
  }, []);

  const authValue = {
    user,
    loading,
    setLoading,
    createUser,
    login,
    logOut,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
