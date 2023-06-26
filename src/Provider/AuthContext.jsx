import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthPorvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  // const [dbUsers, setDbUsers] = useState([]);

  /** Database Users */

  /** conmmunication with firebase */
  const createUserWithEmailPassword = (email, password) => {
    setLoading();
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading();
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  const logInUserWithEmailPassword = (email, password) => {
    setLoading();
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading();
    return signOut(auth);
  };

  // const forgetPassword = (email) => {
  //   return sendPasswordResetEmail(auth, email);
  // };

  const profileUpdate = (name, photo) => {
    setLoading();
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscibe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    showPopup,
    setShowPopup,
    // forgetPassword,
    // dbUsers,
    createUserWithEmailPassword,
    logInUserWithEmailPassword,
    logOut,
    profileUpdate,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPorvider;
