import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <main className="font-serif text-black">      
      
      <div className="flex justify-evenly text-lg font-serif bg-green-700 p-3 text-black">
        <div className="m-1">
          <p className="font-bold">Property Pros</p>
        </div>
        <div className="m-1 ">
          <div className="font-bold"> Contact us
            <hr className="flex border-t-2 border-black mb-5" />
          </div>
          <p className="hover:text-gray-500 hover:underline my-1">
            <a href="tel:000-000-0000" className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="w-5"/>
            <span className="ml-2">Tel: 000-000-0000</span>
            </a>
          </p>
          <p className="hover:text-gray-500 hover:underline my-1">
            <a href="mailto:robel@gmail.com" className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="w-5"/>
            <span className="ml-2">Email: robel@gmail.com</span>
            </a>
          </p>
          <p>            
            <span className="flex gap-3 my-1"><FontAwesomeIcon icon={faLocationDot} className="w-5"/>1234 12 Ave SW, Calgary, AB</span>
          </p>
        </div>

        <div className="m-1">
          <div className="font-bold">Working Hours
            <hr className="flex border-t-2 border-black mb-5" />
          </div>
          <p>Monday - Saturday: 8AM to 5PM</p>
          <p>Sunday: Closed</p>           
        </div> 
      </div>

      <div className="flex justify-between m-1 bg-white">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCopyright} className="w-5"/>          
          <span className="ml-2">Copyright 2024 Property Pros</span>
        </p>
        <p>Designed by: Robel Chane</p>
      </div>
    </main>
  );
}