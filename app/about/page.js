// pages/about.js
'use client';
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 mt-32">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        At Property Pros, we are dedicated to connecting people with their dream homes. 
        Our team of experienced professionals understands the Calgary real estate market 
        and is committed to providing exceptional service to property buyers, sellers, 
        and renters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
        {/* Team Member 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/team-member-1.jpg" alt="Team Member 1" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Miebaka Semenitari</h2>
          <p className="text-gray-600">...</p>
          <p className="mt-2 text-gray-700">
            John has over 15 years of experience in the real estate industry. 
            His passion for helping clients find their perfect homes drives the 
            mission of Property Pros.
          </p>
        </div>
        
        {/* Team Member 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/team-member-2.jpg" alt="Team Member 2" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Robel Chane</h2>
          <p className="text-gray-600">...</p>
          <p className="mt-2 text-gray-700">
            Jane oversees all marketing initiatives at Property Pros, ensuring 
            our listings reach the right audience and our brand is well represented.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/team-member-3.jpg" alt="Team Member 3" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Gaon Sun</h2>
          <p className="text-gray-600">...</p>
          <p className="mt-2 text-gray-700">
            Mark is an expert negotiator and is dedicated to getting the best deals for our clients.
            His extensive knowledge of the market helps clients make informed decisions.
          </p>
        </div>

        {/* Team Member 4 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/team-member-4.jpg" alt="Team Member 4" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Asenai Shiberim</h2>
          <p className="text-gray-600">...</p>
          <p className="mt-2 text-gray-700">
            Sarah is passionate about providing exceptional customer service, ensuring that every client feels valued and heard.
          </p>
        </div>

        {/* Team Member 5 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/team-member-5.jpg" alt="Team Member 5" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Tanzela Fatema Ali</h2>
          <p className="text-gray-600">...</p>
          <p className="mt-2 text-gray-700">
            David specializes in property management and is dedicated to maintaining high standards for our listings.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Our mission is to provide a seamless and enjoyable real estate experience for 
        our clients. Whether you are buying, selling, or renting, we are here to guide 
        you every step of the way.
      </p>

      <Link href="/" className="bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-800 transition duration-300">
        Back to Home
      </Link>
    </div>
  );
};

export default About;
