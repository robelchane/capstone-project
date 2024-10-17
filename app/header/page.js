'use client';

'use client';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useState, useEffect, use } from 'react';
import {useUser, UserButton, SignOutButton} from '@clerk/nextjs';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

const Header = () => {
  const router = useRouter(); // Ensure useRouter is at the top, in the client-side component
  const [scrollY, setScrollY] = useState(0);
  const {user, isSignedIn} = useUser();



  
  

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
        

        {/* Conditional Rendering based on login status */}
        {isSignedIn ? (
            <DropdownMenu>
             <DropdownMenuTrigger as child>
            <Image 
             src ={user?.imageUrl} 
             width={45} 
             height ={45} 
             alt="user image"
             className='rounded-full'/>
            </DropdownMenuTrigger>
             <DropdownMenuContent>
              <Link href="/account">
               <DropdownMenuLabel>Account</DropdownMenuLabel>
              </Link>
               <DropdownMenuSeparator />
               <DropdownMenuItem><SignOutButton>Logout</SignOutButton></DropdownMenuItem>

             </DropdownMenuContent>
           </DropdownMenu>
           
          ) : (
            <Link href={"/sign-in"}>
              <p className="text-white text-shadow hover:scale-110 transition-transform duration-300 text-xl">Get Started</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
