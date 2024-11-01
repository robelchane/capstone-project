import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "../../../components/ui/button"; // Assuming you have a Button component
import { UserProfile } from '@clerk/clerk-react';
//import { useEffect, useState } from 'react';
//import { createUserIfNotExists } from '@/utils/createUser';
//import{currentUser} from '@clerk-react'

export default function EditProfile() {




  return(
    <div className='my-10 p-2 bg-slate-100'>
      <UserProfile />
    </div>
  )
    
  
}
