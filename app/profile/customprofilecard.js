'use client';
import { useRouter } from 'next/navigation'; // For client-side navigation
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
  const router = useRouter(); // Next.js router for client-side navigation

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
