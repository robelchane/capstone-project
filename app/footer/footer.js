import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <main className="font-serif text-black">      
      <div className="flex justify-evenly text-lg font-serif bg-black bg-opacity-90 p-5 text-white">
        <div className="m-1">
          <div className="flex items-center m-2">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-12 h-12 mr-4"
              />
              <p className="font-bold bg-clip-text text-white">
                Property Pros
              </p>
            </div>
          </Link>
          </div>
        </div>
        <div className="m-1 ">
          <div className="font-bold"> Contact us
            <hr className="flex border-t-2 border-white mb-5" />
          </div>
          <p className="hover:text-white hover:underline my-1">
            <a href="tel:000-000-0000" className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="w-5 text-white"/>
              <span className="ml-2">Tel: 000-000-0000</span>
            </a>
          </p>
          <p className="hover:text-white hover:underline my-1">
            <a href="mailto:robel@gmail.com" className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 text-white"/>
              <span className="ml-2">Email: propertypros@gmail.com</span>
            </a>
          </p>
          <p>            
            <span className="hover:text-white hover:underline my-1 flex gap-3 my-1">
              <FontAwesomeIcon icon={faLocationDot} className="w-5 text-white"/>
              <span>1234 12 Ave SW, Calgary, AB</span>
            </span>
          </p>
        </div>

        <div className="m-1">
          <div className="font-bold bg-clip-text">Working Hours
            <hr className="flex border-t-2 border-white mb-5" />
          </div>
          <p>Monday - Saturday: 8AM to 5PM</p>
          <p>Sunday: Closed</p>           
        </div> 
      </div>

      <div className="flex justify-between bg-white text-black">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCopyright} className="w-5 text-black"/>          
          <span className="ml-2">Copyright 2024 Property Pros</span>
        </p>
      </div>
    </main>
  );
}
