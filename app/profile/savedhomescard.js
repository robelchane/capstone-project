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
import { Button } from "../../components/ui/button";

export default function ViewedSavedPropertiesCard() {
  const router = useRouter();

  const handleSavedPropertiesClick = () => {
    console.log('Navigating to /profile/saved-properties');
    router.push('/profile/saved-properties');
  };

  return (
    <Card className="cursor-pointer max-w-md ml-4 mt-10">
      <CardHeader>
        <CardTitle>Viewed and Saved Properties</CardTitle>
        <CardDescription>
          Easily access your recently viewed and saved properties.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Keep track of the properties you've viewed and saved for later.</p>
      </CardContent>
      <CardFooter className="space-x-4">
        <Button onClick={handleSavedPropertiesClick}>Saved Properties</Button>
      </CardFooter>
    </Card>
  );
}
