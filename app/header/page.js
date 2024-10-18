'use client';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa'; // Import the user icon from Font Awesome
import { auth } from '../firebase/firebase'; // Import the Firebase auth instance directly
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged from Firebase Auth
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent
} from './../../components/ui/dropdown-menu';

const Header = () => {
  const router = useRouter(); // Ensure useRouter is at the top, in the client-side component
  const [scrollY, setScrollY] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      await auth.signOut();
      router.push('/');
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-90">
      <div className="flex justify-between text-xl font-serif text-white">
        <div className="flex items-center m-2">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 mr-4 cursor-pointer"
            />
          </Link>
          <Link href="/">
            <p className="font-extrabold text-white text-4xl text-shadow bg-clip-text tracking-widest uppercase">
              Property Pros
            </p>
          </Link>
        </div>
        <div className="flex gap-10 m-2">

          {/* Dropdown Menu for Properties */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="cursor-pointer text-white text-xl font-medium transition-transform duration-300 hover:scale-105">
                Properties
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-48 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <DropdownMenuItem 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg" 
                onClick={() => router.push('/seller')}
              >
                Seller
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg" 
                onClick={() => router.push('/listings')}
              >
                Buyer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Discover Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="cursor-pointer text-white text-xl font-medium transition-transform duration-300 hover:scale-105">
                Discover
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-48 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <DropdownMenuItem 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg" 
                onClick={() => router.push('/about')}
              >
                About Us
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg" 
                onClick={() => router.push('/living-in-calgary')}
              >
                Living in Calgary
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Get Started Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="cursor-pointer text-white text-xl font-medium transition-transform duration-300 hover:scale-105">
                Get Started
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-48 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <DropdownMenuItem 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg" 
                onClick={() => router.push('/login')}
              >
                Sign In
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-00 transition-colors rounded-lg" 
                onClick={() => router.push('/signup')}
              >
                Sign Up
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Conditional Rendering based on login status */}
          {user ? (
            // If user is logged in, show the user icon with a dropdown menu
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center">
                  <FaUser className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform duration-300" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 w-48 bg- rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <DropdownMenuItem 
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors rounded-lg" 
                  onClick={() => router.push('/account')}
                >
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors rounded-lg" 
                  onClick={signOut}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
