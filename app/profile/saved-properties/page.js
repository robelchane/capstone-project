"use client";
import { useEffect, useState } from "react";
//import { useUser } from "@clerk/nextjs"; // Import Clerk's useUser hook

export default function SavedPropertiesPage() {
  //const { user, isSignedIn } = useUser(); // Get the user from Clerk
  const [savedProperties, setSavedProperties] = useState([]);

  return (
    <div className="mt-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Saved Properties</h1>
      
    </div>
  );
}
