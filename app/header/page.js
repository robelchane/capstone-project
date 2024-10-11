'use client';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useState, useEffect, use } from 'react';
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

  // Track scroll position for header color change
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Firebase Authentication State Change
  

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-500 ${scrollY > 0 ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}>
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
          <Link href="/listings">
            <p className="text-white text-shadow hover:scale-110 transition-transform duration-300 text-xl">Listings</p>
          </Link>
          <Link href="/seller">
            <p className="text-white text-shadow hover:scale-110 transition-transform duration-300 text-xl">Seller</p>
          </Link>
          <Link href="#residencies">
            <p className="text-white text-shadow hover:scale-110 transition-transform duration-300 text-xl">Residencies</p>
          </Link>
          <Link href="#value">
            <p className="text-white text-shadow hover:scale-110 transition-transform duration-300 text-xl">Our Values</p>
          </Link>

         {/* Conditional Rendering based on login status */}
         {user ? (
            // If user is logged in, show the user icon with a dropdown menu
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center">
                  
                  <FaUser className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform duration-300" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => router.push('/account')}>Account</DropdownMenuItem>
                <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            // If user is not logged in, show "Get Started" button
            <Link href="/login">
              <p className="text-white text-shadow hover:scale-110 transition-transform duration-300 text-xl">Get Started</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
