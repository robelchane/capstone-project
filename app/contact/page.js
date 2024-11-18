"use client";

import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // An object containing user input
    const formData = {
      name,
      email,
      number,
      message,
    };

    try {
      // Send an email by sending a POST request to the api/contact endpoint
      const response = await axios.post('/api/contact', formData);

      if (response.status === 200) {
        console.log('Email sent successfully');
        setSubmitted(true);
        // Resetting input values
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
      } else {
        console.error('Failed to send email:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
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
    <div 
      className="flex flex-col items-center text-white" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/contactbackground.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        }}
    >  
      {/* Information Section */}
      <div className="w-full py-10 px-5 mt-40 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif mb-10">
            Contact Us
          </h1>
          <p className="text-xl mb-24">
            Managing your property just got easier! Whether you're a homeowner, tenant, or property manager, 
            we're here to help streamline your experience. Have questions or need support? 
            Get in touch with us—we’re ready to assist!
          </p>
        </div>
      </div>

      <div className="flex flex-col m-7 md:flex-row justify-center space-y-8 md:space-y-0">
            {/* Section for Homeowners */}
            <div className="p-6 shadow-lg flex-1 cursor-pointer border border-gray-400 mr-5 hover:border-yellow-200 transition-colors duration-300 group">
              <h3 className="text-2xl text-center font-serif mb-4">For Homeowners</h3>
              <hr className="flex border-t-1 border-gray-400 mb-10 group-hover:border-yellow-200 transition-colors duration-300" />
              <p className="text-white text-center text-xl">
                As a homeowner, you can benefit from our expert property management services, ensuring your property is well-maintained, rented at competitive rates, and compliant with local regulations. 
              </p>
            </div>

            {/* Section for Tenants */}
            <div className="p-6 shadow-lg flex-1 cursor-pointer border border-gray-400 mr-5 hover:border-yellow-200 transition-colors duration-300 group">
              <h3 className="text-2xl text-center font-serif mb-4">For Tenants</h3>
              <hr className="flex border-t-1 border-gray-400 mb-10 group-hover:border-yellow-200 transition-colors duration-300" />
              <p className="text-white text-center text-xl">
                Tenants can rely on us for quick responses to inquiries, maintenance requests, and guidance throughout the rental process. 
                Our dedicated team is here to ensure your living experience is as smooth and enjoyable as possible.
              </p>
            </div>

            {/* Section for Property Managers */}
            <div className="p-6 shadow-lg flex-1 cursor-pointer border border-gray-400 mr-5 hover:border-yellow-200 transition-colors duration-300 group">
              <h3 className="text-2xl text-center font-serif mb-4">For Property Managers</h3>
              <hr className="flex border-t-1 border-gray-400 mb-10 group-hover:border-yellow-200 transition-colors duration-300" />
              <p className="text-white text-center text-xl">
                We provide comprehensive support for property managers, from tenant screening to maintenance coordination. 
                Our services are designed to help you maximize occupancy and streamline operations, allowing you to focus on growing your business.
              </p>
            </div>
          </div>

      {/* Info Boxes Section */}
      <div className="flex flex-col justify-center mt-40">
        <span className="text-4xl font-serif mb-10">
          Contact Info
        </span>

      </div>

      <div className="flex justify-center w-full max-w-6xl mt-6 mb-16 space-x-8 mx-8">
        {/* Phone Number */}
        <div className="bg-black opacity-90 shadow-[0_4px_20px_rgba(104,104,0,0.3)] p-8 transition-transform transform hover:bg-white hover:scale-105 group flex-grow">
          <h1 className="text-white text-shadow text-2xl font-serif mb-10 group-hover:text-black whitespace-nowrap">Voicemail:</h1> 
          <p className="text-xl text-white text-shadow group-hover:text-black whitespace-nowrap">Tel: +1 000 000 0000</p>
        </div>

        {/* Email */}
        <div className="bg-black opacity-90 shadow-[0_4px_20px_rgba(104,104,0,0.3)] p-8 transition-transform transform hover:bg-white hover:scale-105 group flex-grow">
          <h1 className="text-white text-shadow text-2xl font-serif mb-10 group-hover:text-black whitespace-nowrap">Email:</h1>
          <p className="text-xl text-white text-shadow group-hover:text-black whitespace-nowrap">propertypros@gmail.com</p>
        </div>

        {/* Company Location */}
        <div className="bg-black opacity-90 shadow-[0_4px_20px_rgba(104,104,0,0.3)] p-8 transition-transform transform hover:bg-white hover:scale-105 group flex-grow">
          <h1 className="text-white text-shadow text-2xl font-serif mb-10 group-hover:text-black whitespace-nowrap">Location:</h1>
          <p className="text-xl text-white text-shadow group-hover:text-black whitespace-nowrap">1234 12 Ave SW, Calgary, AB</p>
        </div>

        {/* Hours */}
        <div className="bg-black opacity-90 shadow-[0_4px_20px_rgba(104,104,0,0.3)] p-8 transition-transform transform hover:bg-white hover:scale-105 group flex-grow">
          <h1 className="text-white text-shadow text-2xl font-serif mb-10 group-hover:text-black whitespace-nowrap">Hours:</h1>
          <p className="text-xl text-white text-shadow group-hover:text-black whitespace-nowrap">Mon - Sat: 8AM to 5PM<br/>Sunday: Closed</p>
        </div>
      </div>

        {/* FAQ Section */}
        <div className="flex flex-col justify-center mt-40">
          <span className="text-4xl font-serif">
            FAQ
          </span>
        </div>

        <div className="flex justify-center p-10 w-full max-w-6xl mb-10">

          <div className="p-8 mr-10 shadow-lg max-w-l w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full mb-4 text-left text-white font-serif border border-gray-400 p-5 text-xl focus:outline-none hover:border-yellow-200 transition-colors duration-300"
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                >
                  {faq.question}
                </button>
                {activeFAQ === index && (
                  <p className="mb-2 text-white p-4 text-xl">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      {/* Contact Form Section */}
      <div className="flex flex-col justify-center mt-40">
        <span className="text-4xl font-serif">
          Let's Talk
        </span>
      </div>

      <div className="flex justify-center p-10 w-full max-w-5xl mb-16">
        <div className="bg-black shadow-[0_4px_20px_rgba(104,104,0,0.3)] mt-5 p-14 shadow-lg max-w-l w-full">

          <form onSubmit={handleSubmit}>
            <div className="mb-8 text-black">
              <label className="text-xl block text-gray-200 font-serif mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border bg-white p-2"
                required
              />
            </div>
            
            <div className="mb-8 text-black">
              <label className="text-xl block text-gray-200 font-serif mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border bg-white p-2"
                required
              />
            </div>

            <div className="mb-8 text-black">
              <label className="text-xl block text-gray-200 font-serif mb-2" htmlFor="number">
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full border bg-white p-2"
                required
              />
            </div>

            <div className="mb-8 text-black">
              <label className="text-xl block text-gray-200 font-serif mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border bg-white p-2"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="text-xl w-full bg-transparent border border-white text-white p-3 mt-5 hover:border-yellow-200 transition-colors duration-300"
            >
              Submit
            </button>

            {submitted && (
            <p className="text-xl text-white text-semibold text-center mt-10">Thank you, we will be in touch with you shortly.</p>
          )}

          </form>
        </div>
      </div>
    </div>
  );
}