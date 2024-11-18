"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useUser, UserButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

export default function Header() {
  const router = useRouter();
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [blockTime, setBlockTime] = useState(0);
  const { user, isLoaded, isSignedIn } = useUser();

  const handleManagerAccess = () => {
    const currentTime = Date.now();
    
    // Check if currently blocked
    if (failedAttempts >= 3 && currentTime < blockTime) {
      const timeLeft = Math.ceil((blockTime - currentTime) / 1000); // Calculate seconds left
      alert(`Too many attempts. Please wait ${timeLeft} seconds before trying again.`);
      return;
    }

    const isManager = prompt("Are you a manager? (yes/no)").toLowerCase();
    if (isManager === "yes") {
      const managerID = prompt("What is your ID?");
      const passcode = prompt("What is your passcode?");
      
      // Example validation (replace with actual logic)
      if (managerID === "admin" && passcode === "pass") {
        setFailedAttempts(0); // Reset on successful login
        router.push("/manager");
      } else {
        alert("Invalid ID or passcode. Access denied.");
        setFailedAttempts(prev => prev + 1); // Increment failed attempts

        // Set block time after 3 failed attempts
        if (failedAttempts + 1 >= 3) {
          setBlockTime(Date.now() + 5 * 60 * 1000); // 5 minutes block
          alert("You have been blocked for 5 minutes due to multiple failed attempts.");
        }
      }
    } else {
      alert("Access denied. This is for managers only.");
    }
  };

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 px-7 py-3 bg-white text-black border-b border-gray-300">
      <div className="flex justify-between text-xl font-serif">
        <div className="flex items-center m-2">
          <Link href="/">
            {/* <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 mr-4 cursor-pointer"
            /> */}
            <FontAwesomeIcon icon={faGem} className="w-6 h-6 mr-4 mt-1 cursor-pointer" />
          </Link>
          <Link href="/">
            <p className="font-extrabold text-3xl bg-clip-text tracking-widest uppercase">
              Property Pros
            </p>
          </Link>
        </div>
        
        <div className="flex gap-10 m-2">
          {/* Properties Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="cursor-pointer text-xl font-medium transition-transform duration-300 hover:scale-105">
                Properties
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-48 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <DropdownMenuItem
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg"
                onClick={() => router.push("/seller")}
              >
                Seller
              </DropdownMenuItem>
              <DropdownMenuItem
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg"
                onClick={() => router.push("/listings")}
              >
                Buyer
              </DropdownMenuItem>
              <DropdownMenuItem
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg"
                onClick={handleManagerAccess}
              >
                Manager
              </DropdownMenuItem>
              <DropdownMenuItem
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg"
                onClick={() => router.push("/mortgage-calculator")}
              >
                Mortgage Calculator
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Discover Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="cursor-pointer text-xl font-medium transition-transform duration-300 hover:scale-105">
                Discover
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-48 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <DropdownMenuItem
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg"
                onClick={() => router.push("/about")}
              >
                About Us
              </DropdownMenuItem>
              <DropdownMenuItem
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg"
                onClick={() => router.push("/living-in-calgary")}
              >
                Living in Calgary
              </DropdownMenuItem>
              <DropdownMenuItem
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg"
                onClick={() => router.push("/events")}
              >
                Events
              </DropdownMenuItem>
              <DropdownMenuItem
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg"
                onClick={() => router.push("/review")}
              >
                Reviews
               </DropdownMenuItem>
               <DropdownMenuItem
                 className="block px-4 py-2 text-gray-800 hover:bg-gray-400 transition-colors rounded-lg"
                 onClick={() => router.push("/bookings")}
              >
                 Bookings
              </DropdownMenuItem>
              </DropdownMenuContent>
              </DropdownMenu>

          {/* User Profile or Get Started Button */}
          {isSignedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src={user?.imageUrl}
                  width={45}
                  height={45}
                  alt="user image"
                  className="rounded-full"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/account">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignOutButton>Logout</SignOutButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/sign-in">
              <p className="cursor-pointer mt-2 text-xl font-medium transition-transform duration-300 hover:scale-110">
                Get Started
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
