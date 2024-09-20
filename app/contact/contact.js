import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <main className="font-serif overflow-y-auto text-black" id="contact">

      {/* Content Section */}
      <div className="flex justify-center font-serif mt-20">
        <div className="flex flex-col w-1/2 m-10">
          <div>
            <p className="text-orange-500 text-2xl font-bold">Our Contact Us</p>
            <p className="text-black text-4xl font-bold my-2">Easy to contact us</p>
          </div>
          <div className="my-5 text-lg">
            <p>We always ready to help by providing the best services 
                for you. We believe a good place to live can make 
                your life better </p>
          </div>

          <div className="items-center text-xl">
            <p className="m-10 hover:text-gray-500 hover:underline">
              <a href="tel:000-000-0000" className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="w-5"/>
                <span className="ml-2">Tel: 000-000-0000</span>
              </a>
            </p>
            <p className="m-10 hover:text-gray-500 hover:underline">
              <a href="mailto:robel@gmail.com" className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-5"/>
                <span className="ml-2">Email: robel@gmail.com</span>
              </a>
            </p>
            <p className="m-10 hover:text-gray-500 hover:underline">            
              <a className="flex gap-3 my-3">
                <FontAwesomeIcon icon={faLocationDot} className="w-5"/>
                1234 12 Ave SW, Calgary, AB
              </a>
            </p>
          </div>
        </div>

        <div className="w-1/2 m-10 ">
          <img src={"/contact.jpg"} alt="Profile picture" />
        </div>
      </div>
    </main>
  );
}