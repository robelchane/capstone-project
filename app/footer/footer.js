import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <main className="font-serif text-black">      
      
      <div className="flex justify-evenly text-lg font-serif bg-green-700 p-3 text-black" style={{ backgroundColor: '#001f3f' }}>
        <div className="m-1">
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">Property Pros</p>
        </div>
        <div className="m-1 ">
          <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300"> Contact us
            <hr className="flex border-t-2 border-white mb-5" />
          </div>
          <p className="hover:text-white hover:underline my-1">
            <a href="tel:000-000-0000" className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="w-5 text-white"/>
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">Tel: 000-000-0000</span>
            </a>
          </p>
          <p className="hover:text-white hover:underline my-1">
            <a href="mailto:robel@gmail.com" className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 text-white"/>
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">Email: propertypros@gmail.com</span>
            </a>
          </p>
          <p>            
            <span className="hover:text-white hover:underline my-1 flex gap-3 my-1">
              <FontAwesomeIcon icon={faLocationDot} className="w-5 text-white"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">1234 12 Ave SW, Calgary, AB</span>
            </span>
          </p>
        </div>

        <div className="m-1">
          <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">Working Hours
            <hr className="flex border-t-2 border-white mb-5" />
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
