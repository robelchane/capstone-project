// import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import './global.css';

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <div className="min-h-screen h-fit">
        {children}
      </div>
    </AuthProvider>
  );
};

export default Layout;