// pages/about.js
'use client';
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div 
      className="flex flex-col items-center text-white" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/about0.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        }}
    >
        <h1 className="mt-56 text-4xl font-serif mb-10">About Us</h1>
        <p className="text-xl mb-32 text-center max-w-4xl">
          At Property Pros, we connect people to their ideal homes with a blend of market insight and a client-first approach.
          With a strong understanding of Calgary's diverse real estate landscape, our experienced team guides buyers, sellers, 
          and renters through every phase of their property journey. We believe in making the real estate process straightforward 
          and efficient, ensuring that each client finds not just a property, but a place they can truly call home.
        </p>

        <div className="left-0 right-0 grid grid-cols-1 lg:grid-cols-6 w-full mb-48">      
          {/* Box 1 */}
          <div className="cursor-pointer p-8 bg-[#AE905E] text-white transition duration-300 hover:bg-[#A98B59] hover:scale-105 transition-transform duration-300">
            <h3 className="text-center text-shadow font-serif text-2xl mb-5">Client-Centric Approach</h3>
            <p className="text-center text-shadow">We tailor solutions to meet each client's unique needs.</p>
          </div>
          
          {/* Box 2 */}
          <div className="cursor-pointer p-8 bg-[#A98B59] text-white transition duration-300 hover:bg-[#A48654]  hover:scale-105 transition-transform duration-300">
            <h3 className="text-center text-shadow font-serif text-2xl mb-5">Local <br/>Expertise</h3>
            <p className="text-center text-shadow">Deep knowledge of Calgary's market to guide your journey.</p>
          </div>
          
          {/* Box 3 */}
          <div className="cursor-pointer p-8 bg-[#A48654] text-white transition duration-300 hover:bg-[#9F814F] hover:scale-105 transition-transform duration-300">
            <h3 className="text-center text-shadow font-serif text-2xl mb-5">Continuous Innovation</h3>
            <p className="text-center text-shadow">We streamline real estate services for efficiency.</p>
          </div>
          
          {/* Box 4 */}
          <div className="cursor-pointer p-8 bg-[#9F814F] text-white transition duration-300 hover:bg-[#957745] hover:scale-105 transition-transform duration-300">
            <h3 className="text-center text-shadow font-serif text-2xl mb-5">Transparent Communication</h3>
            <p className="text-center text-shadow">Honest updates at every stage of your process.</p>
          </div>
          
          {/* Box 5 */}
          <div className="cursor-pointer p-8 bg-[#957745] text-white transition duration-300 hover:bg-[#906D3B] hover:scale-105 transition-transform duration-300">
            <h3 className="text-center text-shadow font-serif text-2xl mb-5">Dedicated <br/>Support</h3>
            <p className="text-center text-shadow">Our team is here to support you throughout.</p>
          </div>
          
          {/* Box 6 */}
          <div className="cursor-pointer p-8 bg-[#906D3B] text-white transition duration-300 hover:bg-[#8B6331] hover:scale-105 transition-transform duration-300">
            <h3 className="text-center text-shadow font-serif text-2xl mb-5">Strong Community Ties</h3>
            <p className="text-center text-shadow">Building connections to find the right opportunities.</p>
          </div>
        </div>

        <h1 className="text-4xl font-serif mb-10">Our Mission</h1>
        <p className="text-xl mb-10 text-center max-w-4xl">
          Our mission is to provide a seamless and enjoyable real estate experience for 
          our clients. <br/>Whether you are buying, selling, or renting, we are here to guide 
          you every step of the way.
        </p>
        <div className="flex gap-4 mb-48">
          <Link href="/living-in-calgary">
            <button className="px-5 py-3 bg-transparent text-white text-xl border border-white hover:border-yellow-200 transition-colors duration-300">
              Read More
            </button>
          </Link>
        </div>

        <h1 className="text-4xl font-serif mb-10">What We Offer</h1>
        <div className="grid grid-cols-1 gap-6 w-full">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-stretch">
            <img src="/about.jpg" alt="Section Image 1" className="w-full md:w-1/2 h-full object-cover" />
            <div className="md:w-1/2 w-full h-full text-white bg-black flex flex-col justify-center p-10">
              <h1 className="text-2xl mb-7">I am a good fit for...</h1>
              <h1 className="text-3xl font-serif">Selling</h1>
              <p className="mt-48 text-xl">
                At our core, we believe that every home has a unique story, and we are here to help you share yours with potential buyers. 
                Our team is dedicated to understanding your specific needs and goals, ensuring a tailored approach that highlights the 
                best features of your property. With our extensive market knowledge and innovative marketing strategies, we will 
                guide you through the selling process, making it as seamless and rewarding as possible. Let us help you achieve the 
                best possible outcome for your sale, turning your real estate dreams into reality.
              </p>
              <div className="flex gap-4 mt-10">
                <Link href="/seller">
                  <button className="mr-5 border border-white px-6 py-2 bg-transparent text-white text-xl hover:border-yellow-200 transition-colors duration-300">
                    Seller Form
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border border-white px-6 py-2 bg-transparent text-white text-xl hover:border-yellow-200 transition-colors duration-300">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 w-full">
          {/* Section 2 */}
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/2 w-full h-full text-white bg-black flex flex-col justify-center p-10">
              <h1 className="text-2xl mb-7">I am a good fit for...</h1>
              <h1 className="text-3xl font-serif">Buying</h1>
              <p className="mt-48 text-xl">
                Purchasing a home is one of the most significant decisions you'll ever make, and our team is committed to making that 
                journey as smooth and enjoyable as possible. We take the time to listen to your needs and preferences, guiding you 
                through a comprehensive search to find the perfect property that fits your lifestyle and budget. With our expertise in 
                negotiations and a deep understanding of the real estate market, we will empower you with the knowledge and confidence 
                to make informed decisions. From initial consultation to closing the deal, we are here to support you every step of the way.
              </p>
              <div className="flex gap-4 mt-10">
                <Link href="/contact">
                  <button className="mr-5 px-6 py-2 border border-white bg-transparent text-white text-xl hover:border-yellow-200 transition-colors duration-300">
                    Get In Touch
                  </button>
                </Link>
                <Link href="/listings">
                  <button className="px-6 py-2 border border-white bg-transparent text-white text-xl hover:border-yellow-200 transition-colors duration-300">
                    Explore Property
                  </button>
                </Link>
              </div>
            </div>
            <img src="/about2.jpg" alt="Section Image 2" className="w-full md:w-1/2 h-full object-cover" />
          </div>
        </div>

        <h1 className="text-4xl font-serif mt-48 mb-10">Meet The Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 max-w-7xl w-full mb-48">
          {/* Team Member 1 */}
          <div className="cursor-pointer bg-black shadow-md p-10">
            <img src="/team-member-1.jpg" alt="Team Member 1" className="w-full h-48 object-cover mb-4" />
            <h2 className="text-center text-2xl font-semibold text-white">Miebaka Semenitari</h2>
            <p className="text-center text-gray-600">...</p>
            <p className="text-center mt-2 text-white">
              Miebaka has over 15 years of experience in the real estate industry. 
              Her passion for helping clients find their perfect homes drives the 
              mission of Property Pros.
            </p>
          </div>
          
          {/* Team Member 2 */}
          <div className="cursor-pointer bg-black shadow-md p-10">
            <img src="/team-member-2.jpg" alt="Team Member 2" className="w-full h-48 object-cover mb-4" />
            <h2 className="text-center text-2xl font-semibold text-white">Robel Chane</h2>
            <p className="text-center text-gray-600">...</p>
            <p className="text-center mt-2 text-white">
              Robel oversees all marketing initiatives at Property Pros, ensuring 
              our listings reach the right audience and our brand is well represented.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="cursor-pointer bg-black shadow-md p-10">
            <img src="/team-member-3.jpg" alt="Team Member 3" className="w-full h-48 object-cover mb-4" />
            <h2 className="text-center text-2xl font-semibold text-white">Gaon Sun</h2>
            <p className="text-center text-gray-600">...</p>
            <p className="text-center mt-2 text-white">
              Gaon is an expert negotiator and is dedicated to getting the best deals for our clients.
              Her extensive knowledge of the market helps clients make informed decisions.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="cursor-pointer bg-black shadow-md p-10">
            <img src="/team-member-4.jpg" alt="Team Member 4" className="w-full h-48 object-cover mb-4" />
            <h2 className="text-center text-2xl font-semibold text-white">Asenai Shiberim</h2>
            <p className="text-center text-gray-600">...</p>
            <p className="text-center mt-2 text-white">
              Asenai is passionate about providing exceptional customer service, ensuring that every client feels valued and heard.
            </p>
          </div>

          {/* Team Member 5 */}
          <div className="cursor-pointer bg-black shadow-md p-10">
            <img src="/team-member-5.jpg" alt="Team Member 5" className="w-full h-48 object-cover mb-4" />
            <h2 className="text-center text-2xl font-semibold text-white">Tanzela Fatema Ali</h2>
            <p className="text-center text-gray-600">...</p>
            <p className="text-center mt-2 text-white">
              Tanzela specializes in property management and is dedicated to maintaining high standards for our listings.
            </p>
          </div>
        </div>
      </div>
  );
};

export default About;

