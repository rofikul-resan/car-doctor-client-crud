/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
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

  // google log in
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // load logged current user
  useEffect(() => {
    setLoading(true);
    const updateUser = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("car-token", data.token);
          });
      }
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
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
