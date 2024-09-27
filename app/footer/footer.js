//Added Meet The Team Section above the Footer Section

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <main className="font-serif text-black">   

      {/* Meet The Team */}
      <div className="bg-gray-100 py-16">
        <h2 className="text-center text-4xl font-bold mb-10">Meet The Team</h2>
        <div className="flex justify-center gap-12">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center h-full">
            <img
              src="/team1.jpg"
              alt="Team Member 1"
              className="w-40 h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Miebaka <br/>Semenitari</h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center h-full">
            <img
              src="/team2.jpg"
              alt="Team Member 2"
              className="w-40 h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Robel <br/>Chane</h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center h-full">
            <img
              src="/team3.jpg"
              alt="Team Member 3"
              className="w-40 h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Asenai <br/>Shiberim</h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center h-full">
            <img
              src="/team4.jpg"
              alt="Team Member 4"
              className="w-40 h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Gaon <br/>Sun</h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center h-full">
            <img
              src="/team5.jpg"
              alt="Team Member 5"
              className="w-40 h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Tanzela <br/>Fatema Ali</h3>
          </div>
        </div>
      </div>   
      
      {/* Footer */}
      <div className="flex justify-evenly text-lg font-serif p-3 text-black" style={{ backgroundColor: '#001f3f' }}>
        <div className="m-1">
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">Property Pros</p>
        </div>
        <div className="m-1 ">
          <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300"> Contact us
            <hr className="flex border-t-2 border-gray-300 mb-5" />
          </div>
          <p className="hover:text-white hover:underline my-1">
            <a href="tel:000-000-0000" className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="w-5 text-gray-300"/>
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">Tel: 000-000-0000</span>
            </a>
          </p>
          <p className="hover:text-white hover:underline my-1">
            <a href="mailto:robel@gmail.com" className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 text-gray-300"/>
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">Email: propertypros@gmail.com</span>
            </a>
          </p>
          <p>            
            <span className="hover:text-white hover:underline my-1 flex gap-3 my-1">
              <FontAwesomeIcon icon={faLocationDot} className="w-5 text-gray-300"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">1234 12 Ave SW, Calgary, AB</span>
            </span>
          </p>
        </div>

        <div className="m-1">
          <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">Working Hours
            <hr className="flex border-t-2 border-gray-300 mb-5" />
          </div>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">Monday - Saturday: 8AM to 5PM</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">Sunday: Closed</p>           
        </div> 
      </div>

      <div className="flex justify-between bg-black">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCopyright} className="w-5 text-white"/>          
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">Copyright 2024 Property Pros</span>
        </p>
      </div>
    </main>
  );
}
