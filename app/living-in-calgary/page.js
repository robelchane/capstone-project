"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link"; // Keep the import for Link if you're using it

const LivingInCalgary = () => {
  const [recentNews, setRecentNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch news articles from the API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=Calgary%20events&apiKey=3b4b34a7ee384111ad57c7eb96568199`
        );
        const data = await response.json();

        if (response.ok) {
          setRecentNews(data.articles);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#8B6331] to-[#09090b]">

      {/* Logo Section */}
      <section id="logo" className="pt-[170px] pb-0">
        <div className="max-w-[1310px] mx-auto">
          <div className="flex justify-end">
            <div className="max-w-[700px] ml-auto border-b border-[#fafafa] flex items-center justify-end">
              <div className="inline-block ml-auto text-right">
                <h1 className="text-5xl uppercase text-[#fafafa] font-extrabold font-sans">
                  Calgary awaits you
                </h1>
                <p className="text-1xl text-[#09090b] font-bold font-sans">
                  content...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="my-[80px] tm-p-1-section-1" id="intro">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="tm-section-text-container">
                <p>
                  Lorem ipsum
                  Nullam eget dignissim orci. Donec tincidunt blandit libero iaculis
                  fermentum. Aliquam erat volutpat. Interger suscipit aliquam augue ac
                  rutrum. Phasellus sit amet erat id sapien efficitur euismod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Place Section */}
      <section className="py-[70px] bg-white" id="our_place">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img src="/cal1.jpg" alt="Image" className="w-full" />
            </div>
            <div className="lg:w-1/2 bg-white/90 p-8">
              <h2 className="text-[#7B5A2E] mb-6" id="our-place">Places to explore</h2>
              {/* Add any additional content for "Our Place" section here */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-[70px]" id="section_4">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 bg-white/90 p-8 h-full">
              <h2 className="text-[#8B5A2E] mb-6" id="fusce-a-porttitor-augue">
                Fusce a porttitor augue
              </h2>
              <p>
                Quisque rutrum dapibus odio vitae tincidunt. Etiam sollicitudin augue
                non porta interdum. Pellentesque placerat orci at libero ornare, nec
                viverra justo lobortis. Phasellus venenatis eros non.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img src="/cal2.jpg" alt="Image" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-[115px] pb-[110px]" id="gallery">
        <div className="container mx-auto">
          <div className="mb-[30px] text-right">
            <h2 className="text-3xl text-[#4B3D2E] font-bold" id="beautiful-rollovers">Gallery</h2>
            <hr className="border-black w-[50%] ml-auto" />
          </div>
          <div className="flex gap-6 justify-center">
            {['CalgaryStampede.jpg', 'cal3.jpg', 'cal4.jpg', 'cal5.jpg'].map((imgSrc, index) => (
              <Link key={index} href={`/card${index + 1}`}>
                <figure className="relative overflow-hidden transition-transform duration-300 group rounded-lg h-64 w-80 cursor-pointer">
                  <img
                    src={`/${imgSrc}`} // Assuming images are in the public folder
                    alt={`Image ${index + 1}`}
                    className="transition-transform duration-500 ease-in-out transform scale-100 group-hover:opacity-10 group-hover:scale-125 w-full h-full object-cover" // Smooth zoom on hover
                  />
                  <div className="absolute bottom-0 left-0 m-5 p-5 border-2 border-white transition-opacity duration-300 transform scale-75 origin-bottom opacity-0 group-hover:scale-100 group-hover:opacity-100">
                    <h2 className="transition-transform duration-300 transform scale-75 origin-bottom group-hover:scale-100">
                      Your Title {index + 1}
                    </h2>
                    <p className="opacity-0 transition-opacity duration-300 transform scale-75 origin-bottom group-hover:opacity-100 group-hover:scale-100">
                      Your description goes here.
                    </p>
                  </div>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-[70px]" id="news">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#65a30d' }}>
            Recent News
          </h2>

          {loading && <p className="text-lg text-gray-600">Loading news...</p>}
          {error && <p className="text-lg text-red-600">Error fetching news: {error}</p>}
          
          <div className="flex overflow-x-auto space-x-4 mt-4 max-w-full py-4">
            {recentNews.map((news, index) => (
              <div key={index} className="min-w-[300px] bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
                {news.urlToImage && (
                  <img
                    src={news.urlToImage}
                    alt={news.title}
                    className="w-full h-52 object-cover rounded-t"
                  />
                )}
                <h3 className="text-xl font-bold mt-2">{news.title}</h3>
                <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default LivingInCalgary;
