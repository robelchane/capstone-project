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
        `https://newsapi.org/v2/everything?q=Calgary%20Halloween%20OR%20Calgary%20fall&apiKey=3b4b34a7ee384111ad57c7eb96568199`
      );
      const data = await response.json();

      if (response.ok) {
        // Define positive keywords
        const positiveKeywords = ['season', 'great', 'success', 'positive', 'wonderful', 'happy', 'halloween', 'fall'];

        // Filter articles for positive content
        const filteredArticles = data.articles.filter(article =>
          positiveKeywords.some(keyword =>
            article.title.toLowerCase().includes(keyword) ||
            article.description?.toLowerCase().includes(keyword) // Use optional chaining to avoid errors
          )
        );

        // Update state with filtered articles
        setRecentNews(filteredArticles);
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
          <p className="text-white"> {/* Set text color to white */}
            Calgary is a vibrant and growing urban hub located at the foot of the Rocky Mountains. Known for its incredible outdoor activities, job opportunities, and family-friendly communities, it’s the perfect blend of urban living and natural beauty.
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
        <h2 className="text-[#7B5A2E] text-4xl font-bold mb-6" id="our-place"> {/* Increased font size and made it bold */}
          Perfect blend of urban life and nature
        </h2>
        <p className="text-gray-700 mb-4">
        Calgary’s unique blend of city life and natural beauty creates a welcoming atmosphere that appeals to anyone looking for both the excitement of urban living and the peace of the outdoors. This combination improves the quality of life for residents and fosters a strong sense of community and connection to nature. Whether you’re enjoying the attractions of downtown or exploring the nearby mountains, Calgary offers a vibrant lifestyle that truly showcases the best of both worlds, making it a fantastic place to call home!
        </p>

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
<section className="py-[70px] bg-gray-50" id="news">
  <div className="container mx-auto text-center px-4">
    <h2 className="text-4xl font-bold mb-6 text-[#8B6331]">
      Recent News
    </h2>

    {loading && <p className="text-lg text-gray-600">Loading news...</p>}
    {error && <p className="text-lg text-red-600">Error fetching news: {error}</p>}
    
    <div className="flex overflow-x-auto space-x-6 mt-6 max-w-full py-4">
      {recentNews.map((news, index) => (
        <div key={index} className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {news.urlToImage && (
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              <img
                src={news.urlToImage}
                alt={news.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </a>
          )}
          <h3 className="text-2xl font-semibold mt-4">{news.title}</h3>
        </div>
      ))}
    </div>
  </div>
</section>



    </div>
  );
};

export default LivingInCalgary;
