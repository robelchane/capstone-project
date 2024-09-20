// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between text-xl font-serif bg-green-500 p-3 text-black">
        <div className="m-2">
            {/* Link to go back to the home page*/}
            <Link href="/">
          <p className="font-bold">ABC Inc.</p>
            </Link>
        </div>
        <div className="flex gap-10 m-2">
          <p className="hover:text-gray-500 hover:underline">
            <Link href="#residencies">Residencies</Link>
          </p>
          <p className="hover:text-gray-500 hover:underline">
            <Link href="#value">Our value</Link>
          </p>
          <p className="hover:text-gray-500 hover:underline">
            <Link href="#contact">Contact us</Link>
          </p>
          <p className="hover:text-gray-500 hover:underline">
            <Link href="#get-start">Get start</Link>
          </p>
          <p className="hover:text-gray-500 hover:underline">
            <Link href="/Login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
