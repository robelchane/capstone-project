'use client';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import Header from "../header/page";
import CustomProfileCard from "./customprofilecard";
import ViewedSavedPropertiesCard from "./savedhomescard";


export default function ProfilePage () {

  
  return (
    <main>
      <CustomProfileCard/>
      <ViewedSavedPropertiesCard />
      
    
      

      
  </main>
  );
}
