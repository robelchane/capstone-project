"use client";


import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setNumber('');
    setMessage('');
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer property management, tenant placement, and maintenance services."
    },
    {
      question: "How can I contact you?",
      answer: "You can contact us via email or phone as listed above."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Calgary and surrounding areas."
    },
    {
      question: "What are your office hours?",
      answer: "Our office hours are Mon - Sat: 8AM to 5PM and Closed on Sunday."
    },
    {
      question: "How do I schedule a viewing?",
      answer: "You can schedule a viewing by contacting us through the form above or by phone."
    }
  ];

  return (
    <div className="font-serif min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 z-50 m-4 p-2 cursor-pointer">
        <Link href="./">
          <FontAwesomeIcon icon={faHouse} size="2x" className="text-blue-500 hover:text-blue-600" />
        </Link>
      </div>
      
      {/* Information Section */}
      <div className="w-full py-10 px-5 mb-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl font-bold text-yellow-800 mb-3">
            Here to Help
          </p>
          <h1 className="text-4xl font-bold mb-5">
            Contact Us
          </h1>
          <hr className="flex border-t-1 border-gray-400 mb-10" />
          <p className="text-xl">
            Managing your property just got easier! Whether you're a homeowner, tenant, or property manager, 
            we're here to help streamline your experience. Have questions or need support? 
            Get in touch with us—we’re ready to assist!
          </p>
        </div>
      </div>

      <div className="flex flex-col m-7 md:flex-row justify-center space-y-8 md:space-y-0">
            {/* Section for Homeowners */}
            <div className="p-6 rounded-l shadow-lg flex-1 cursor-pointer">
              <h3 className="text-2xl text-center font-bold mb-4">For Homeowners</h3>
              <hr className="flex border-t-1 border-gray-400 mb-10" />
              <p className="text-gray-900">
                As a homeowner, you can benefit from our expert property management services, ensuring your property is well-maintained, rented at competitive rates, and compliant with local regulations. 
              </p>
            </div>

            {/* Section for Tenants */}
            <div className="p-6 shadow-lg flex-1 cursor-pointer">
              <h3 className="text-2xl text-center font-bold mb-4">For Tenants</h3>
              <hr className="flex border-t-1 border-gray-400 mb-10" />
              <p className="text-gray-900">
                Tenants can rely on us for quick responses to inquiries, maintenance requests, and guidance throughout the rental process. 
                Our dedicated team is here to ensure your living experience is as smooth and enjoyable as possible.
              </p>
            </div>

            {/* Section for Property Managers */}
            <div className="p-6 rounded-r shadow-lg flex-1 cursor-pointer">
              <h3 className="text-2xl text-center font-bold mb-4">For Property Managers</h3>
              <hr className="flex border-t-1 border-gray-400 mb-10" />
              <p className="text-gray-900">
                We provide comprehensive support for property managers, from tenant screening to maintenance coordination. 
                Our services are designed to help you maximize occupancy and streamline operations, allowing you to focus on growing your business.
              </p>
            </div>
          </div>

      {/* Info Boxes Section */}
      <div className="flex flex-col justify-center mt-20">
        <span className="text-2xl font-bold mb-5">
          Contact Information
        </span>

      </div>

      <div className="flex justify-center w-full max-w-4xl mt-6 mb-16 space-x-8 mx-10">
        {/* Phone Number */}
        <div className="bg-gray-100 shadow-[0_4px_20px_rgba(104,104,0,0.3)] p-6 rounded-l transition-transform transform hover:bg-black hover:bg-opacity-80 hover:scale-105 group flex-grow">
          <h1 className="text-black text-xl font-bold mb-2 group-hover:text-white whitespace-nowrap">Voicemail:</h1> 
          <p className="text-gray-500 group-hover:text-white whitespace-nowrap">Tel: +1 000 000 0000</p>
        </div>

        {/* Email */}
        <div className="bg-gray-100 shadow-[0_4px_20px_rgba(104,104,0,0.3)] p-6 transition-transform transform hover:bg-black hover:bg-opacity-80 hover:scale-105 group flex-grow">
          <h1 className="text-black text-xl font-bold mb-2 group-hover:text-white whitespace-nowrap">Email:</h1>
          <p className="text-gray-500 group-hover:text-white whitespace-nowrap">propertypros@gmail.com</p>
        </div>

        {/* Company Location */}
        <div className="bg-gray-100 shadow-[0_4px_20px_rgba(104,104,0,0.3)] p-6 transition-transform transform hover:bg-black hover:bg-opacity-80 hover:scale-105 group flex-grow">
          <h1 className="text-black text-xl font-bold mb-2 group-hover:text-white whitespace-nowrap">Location:</h1>
          <p className="text-gray-500 group-hover:text-white whitespace-nowrap">1234 12 Ave SW, Calgary, AB</p>
        </div>

        {/* Hours */}
        <div className="bg-gray-100 shadow-[0_4px_20px_rgba(104,104,0,0.3)] p-6 rounded-r transition-transform transform hover:bg-black hover:bg-opacity-80 hover:scale-105 group flex-grow">
          <h1 className="text-black text-xl font-bold mb-2 group-hover:text-white whitespace-nowrap">Hours:</h1>
          <p className="text-gray-500 group-hover:text-white whitespace-nowrap">Mon - Sat: 8AM to 5PM<br/>Sunday: Closed</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col justify-center mt-20">
        <span className="text-2xl font-bold mb-1 mt-5">
          Get In Touch
        </span>
      </div>

      <div className="flex justify-center w-full max-w-4xl mb-16 space-x-8 mx-10">

        {/* FAQ Section */}
        <div className="bg-white p-8 mt-10 mr-10 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-center mb-14">FAQ</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full mb-5 text-left bg-gray-100 p-3 border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
              >
                {faq.question}
              </button>
              {activeFAQ === index && (
                <p className="mb-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 mt-10 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          
          {submitted && (
            <p className="text-yellow-800 text-center mb-4">Thank you, we will be in touch with you shortly.</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-900 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border bg-gray-100 rounded-lg p-2"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-900 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border bg-gray-100 rounded-lg p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-900 mb-2" htmlFor="number">
                  Phone Number
              </label>
              <input
                type="tel"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full border bg-gray-100 rounded-lg p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-900 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border bg-gray-100 rounded-lg p-2"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-700 text-white rounded p-3 hover:bg-yellow-800 hover:scale-105 transition-transform duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
