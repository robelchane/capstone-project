"use client"; // This line indicates that the file is for client-side rendering

import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase/firebase";  // Ensure this path is correct
import { onAuthStateChanged, signOut } from "firebase/auth";
import { signIn, signUp, signInWithGoogle, resetPassword } from "../firebase/auth";  // Ensure this path is correct

// Create the AuthContext
const AuthContext = createContext();

// Hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component to provide auth state and methods
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);  // Track the user state
  const [userLoggedIn, setUserLoggedIn] = useState(false);  // Track if a user is logged in
  const [loading, setLoading] = useState(true);  // Loading state to manage async operations

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      initializeUser(user);
      console.log(user?.photoURL);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Initialize user based on auth state
  const initializeUser = (user) => {
    if (user) {
      setUser({
        displayName: user.displayName,  // Fetch the user's name
        photoURL: user.photoURL,        // Fetch the user's avatar
        email: user.email,
      });
      setUserLoggedIn(true);
    } else {
      setUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);  // Loading complete after auth state is resolved
  };

  // Function to handle login
  const login = async (email, password) => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.error("Error during login:", error);
      throw error;  // Propagate error for UI to handle
    }
  };

  // Function to handle registration
  const register = async (email, password) => {
    try {
      await signUp(email, password);
    } catch (error) {
      console.error("Error during signup:", error);
      throw error;  // Propagate error for UI to handle
    }
  };

  // Function to handle logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setUserLoggedIn(false);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Function to handle Google sign-in
  const loginWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error during Google login:", error);
      throw error;
    }
  };

  // function to handle Google sign-out
  

  // Function to reset user password
  const resetUserPassword = async (email) => {
    try {
      await resetPassword(email);
    } catch (error) {
      console.error("Error during password reset:", error);
      throw error;
    }
  };

  // Value to be provided to components using the AuthContext
  const value = {
    user,
    userLoggedIn,
    loading,
    login,
    register,
    logout,
    loginWithGoogle,
    resetUserPassword
  };

  // Only render children when loading is complete
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}  {/* Render children only when auth state is resolved */}
    </AuthContext.Provider>
  );
}

export { AuthContext };  // Export the AuthContext for use in other components
