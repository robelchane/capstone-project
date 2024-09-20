import Link from "next/link";
import SearchBar from "./searchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="font-serif overflow-y-auto text-black">
      {/* Fixed Header */}
<<<<<<< HEAD
      <div className="fixed top-0 left-0 right-0 z-50 shadow-md">

      <div className="flex justify-between text-xl font-serif bg-teal-900 p-3 text-black">


          <div className="m-2">
          <p className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-300 to-blue-300 tracking-widest uppercase">
  Property Pros
</p>
</div>
          <div className="flex gap-10 m-2">
          <p className="hover:text-gray-500 hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
    <Link href="#residencies">Residencies</Link>
  </p>
          <p className="hover:text-gray-500 hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
    <Link href="#value">Our value</Link>
  </p>
          <p className="hover:text-gray-500 hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
    <Link href="#contact">Contact us</Link>
  </p>
         <p className="hover:text-gray-500 hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
    <Link href="#get-start">Get start</Link>
  </p>
        <p className="hover:text-gray-500 hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
    <Link href="/login">Login</Link>
  </p>
</div>

=======
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between text-xl font-serif bg-green-500 p-3 text-black">
          <div className="m-2">
            <p className="font-bold">Property Pros.</p>
          </div>
          <div className="flex justify-between text-xl font-serif bg-green-500 p-3 text-black">
            <p className="hover:text-gray-500 hover:underline">
            <Link href="/listings">Listings</Link>
            </p>
            </div>
          
          <div className="flex gap-10 m-2">
            <p className="hover:text-gray-500 hover:underline">
              <Link href="#residencies">Residencies</Link>
            </p>
            <p className="hover:text-gray-500 hover:underline">
              <Link href="#value">Our Values</Link>
            </p>
            <p className="hover:text-gray-500 hover:underline">
              <Link href="#contact">Contact us</Link>
            </p>
            <p className="hover:text-gray-500 hover:underline">
              <Link href="#get-start">Get started</Link>
            </p>
            <p className="hover:text-gray-500 hover:underline w-7">
              <Link href="/login">
              <FontAwesomeIcon icon={faCircleUser} />
              </Link>
            </p>
          </div>
>>>>>>> bcdfa42ffbddf35435ca81c03fa1925fd06ae1b3
        </div>
      </div>

      {/* Content Section */}
      <div className="flex justify-center font-serif mt-20">
        <div className="w-1/2 m-10">
          <div className="font-bold text-black m-5 text-5xl gap-5">
            <p>Discover</p>
            <p className="my-2">Most Suitable</p>
            <p>Property</p>

          </div>
          <div className="my-10 text-lg">
            <p>Find a variety of properties that suit you very easilty
            Forget all difficulties in finding a residence for you </p>
          </div>
          
          <SearchBar />
         
          <div className="flex justify-between text-4xl mt-10">
            <p>
              9,000 <span className="text-orange-500">+</span>
            </p>
            <p>
              2,000 <span className="text-orange-500">+</span>
            </p>
            <p>
              28 <span className="text-orange-500">+</span>
            </p>
          </div>

          <div className="flex justify-between text-base mb-10">
            <p>Premium Product</p>
            <p>Happy Customer</p>
            <p>Awards Winning</p>
          </div>
        </div>

        <div className="w-1/3 m-10 ">
          <img src={"/home.png"} alt="Profile picture" />
        </div>
      </div>

    </main>
  );
}