//Refrences
//https://clerk.com/docs/customization/user-profile
//https://www.youtube.com/watch?v=sXrwh4I229Q
//ChatGPT
'use client';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button"; 
import { UserProfile } from '@clerk/clerk-react';

export default function CustomProfileCard() {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const handleCustomizeClick = () => {
    // Set the state to show the user profile
    setShowUserProfile(true);
  };

  // Conditionally render <UserProfile /> based on the state
  return (
    <div>
      {showUserProfile ? (
        <UserProfile  />
      ) : (
        <Card className="cursor-pointer max-w-md ml-4 mt-10" onClick={handleCustomizeClick}>
          <CardHeader>
            <CardTitle>Customize Profile</CardTitle>
            <CardDescription>Click to edit your profile information.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={handleCustomizeClick}>Edit Profile</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

// saved-properties
// custom-profile-card.js
/*
'use client';
import { useRouter } from 'next/navigation'; 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button"; // Assuming you have a button component from the same library

export default function CustomProfileCard() {
  const router = useRouter(); 

  const handleCustomizeClick = () => {
    console.log('Navigating to /profile/edit-profile');
    router.push('/profile/edit-profile');
  };
  

  return (
    <Card className="cursor-pointer max-w-md ml-4 mt-10" onClick={handleCustomizeClick}>
      <CardHeader>
        <CardTitle>Customize Profile</CardTitle>
        <CardDescription>Click to edit your profile information.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Manage your account details and preferences here.</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleCustomizeClick}>Edit Profile</Button>
      </CardFooter>
    </Card>
  );
}
*/
