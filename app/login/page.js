//login/page.js
import React from 'react';
import { AuthProvider } from '../context/AuthContext'; // Adjust the path as necessary
import LoginPage from './loginpage';
import Layout from './layout';

const Page = () => {
  return (
    <AuthProvider>  {/* Wrap LoginPage with AuthProvider for context */}
      <Layout>
        <LoginPage />
      </Layout>
    </AuthProvider>
  );
};

export default Page;