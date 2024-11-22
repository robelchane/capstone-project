"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link"; 

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
    <div className="bg-[#001f3f]">

      {/* Logo Section */}
      <section id="logo" className="pt-[170px] pb-0">
        <div className="max-w-[1310px] mx-auto">
          <div className="flex justify-end">
            <div className="max-w-[700px] ml-auto border-b border-[#fafafa] flex items-center justify-end">
              <div className="inline-block ml-auto text-right">
                <h1 className="text-5xl uppercase text-[#fafafa] text-shadow font-serif mb-5">
                  Calgary awaits you
                </h1>
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
          <p className="text-white text-shadow ml-8 text-xl"> {/* Set text color to white */}
            A vibrant and growing urban hub located at the foot of the Rocky Mountains. Known for its incredible outdoor activities, job opportunities, and family-friendly communities, it’s the perfect blend of urban living and natural beauty.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Our Place Section */}
<section className="bg-white" id="our_place">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <img src="/cal1.jpg" alt="Image" className="w-full" />
      </div>
      <div className="lg:w-1/2 bg-white/90 p-8">
        <h2 className="text-[#001f3f] text-4xl font-serif mb-6" id="our-place"> {/* Increased font size and made it bold */}
          Perfect blend of urban life and nature
        </h2>
        <p className="text-black mb-4">
        Calgary’s unique blend of city life and natural beauty creates a welcoming atmosphere that appeals to anyone looking for both the excitement of urban living and the peace of the outdoors. This combination improves the quality of life for residents and fosters a strong sense of community and connection to nature. Whether you’re enjoying the attractions of downtown or exploring the nearby mountains, Calgary offers a vibrant lifestyle that truly showcases the best of both worlds, making it a fantastic place to call home!
        </p>

      </div>
    </div>
  </div>
</section>



{/* Section 4 */}
<section id="section_4">
  <div className="container mx-auto">
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="lg:w-1/2 bg-white p-8 h-full shadow-md flex flex-col justify-between"> {/* Added flex properties */}
        <div>
          <h2 className="text-[#001f3f] mb-10 text-4xl font-serif" id="fusce-a-porttitor-augue">
            Why Calgary Is the Perfect Home
          </h2>
          <p className="text-black leading-relaxed mb-24">
            Calgary is not just a place to live; it’s a lifestyle choice that combines opportunity, adventure, and community in a way that few other cities can match. Imagine stepping into a city with a booming job market, especially in sectors like technology, energy, and finance, where your career can truly thrive without breaking the bank on living costs. Beyond professional opportunities, Calgary offers unparalleled access to the breathtaking Rocky Mountains, where outdoor enthusiasts can indulge in hiking, skiing, and countless adventures right at their doorstep. The city pulses with a vibrant cultural scene, featuring exciting events, festivals, and a culinary landscape that caters to every palate, ensuring you’ll always find something new to explore. Families will appreciate the top-rated schools and welcoming neighborhoods, creating a sense of belonging that makes raising children a joy. With a strong commitment to sustainability and quality of life, Calgary isn’t just a place to settle; it’s an invitation to embrace a fulfilling and enriching life. Choose Calgary, and discover a city that truly feels like home.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src="/cal2.jpg" alt="Image" className="w-full h-full object-cover" /> {/* Set image to fill the height */}
      </div>
    </div>
  </div>
</section>


{/* Affordability Tool Section */}
<section className="py-[70px] bg-[#f4f4f4]" id="affordability-tool">
  <div className="container mx-auto text-center">
    <h2 className="text-[#001f3f] text-4xl font-serif mb-6">
      Find Out What You Can Afford in Calgary
    </h2>
    <p className="text-black leading-relaxed text-lg mb-6">
      Use our affordability tool to get a better understanding of what you can afford when considering moving to Calgary. It’s an easy way to plan your future in this amazing city!
    </p>
    <Link href="/affordability" className="inline-block bg-[#001f3f] text-white text-xl font-serif py-3 px-6 rounded-lg shadow-md hover:bg-[#00416A]">
      Check Your Affordability
    </Link>
  </div>
</section>



{/* Discover Calgary's Highlights Section */}
<section className="py-[115px] pb-[110px]" id="highlights">
  <div className="container mx-auto">
    <div className="mb-[30px] text-right">
      <h2 className="text-4xl text-[#fafafa] mr-20 font-serif text-shadow" id="calgary-highlights">Discover Calgary's Highlights</h2>
    </div>
    <div className="flex gap-6 justify-center mb-10">
      {[
        { imgSrc: 'CalgaryStampede.jpg', title: 'Events and Festivals', description: 'The greatest outdoor show on Earth' },
        { imgSrc: 'cal3.jpg', title: 'Explore Urban Living', description: 'Discover the excitement of downtown Calgary, where culture, art, and business thrive around landmarks' },
        { imgSrc: 'cal4.jpg', title: 'Family Life & Community', description: 'Explore Calgary’s family-friendly neighborhoods, parks, and community spaces' },
        { imgSrc: 'cal5.jpg', title: 'Food & Friends', description: 'Calgary’s diverse culinary scene, featuring local favorites, trendy restaurants, and lively food festivals' }
      ].map((card, index) => (
        <Link key={index} href={`/card${index + 1}`}>
          <figure className="relative overflow-hidden transition-transform duration-300 group h-64 w-80 cursor-pointer">
            <img
              src={`/${card.imgSrc}`} // for images that are in the public folder
              alt={card.title}
              className="transition-transform duration-500 ease-in-out transform scale-100 group-hover:opacity-10 group-hover:scale-125 w-full h-full object-cover" // Smooth zoom on hover
            />
            <div className="absolute bottom-0 left-0 m-5 p-5 border-2 border-white transition-opacity duration-300 transform scale-75 origin-bottom opacity-0 group-hover:scale-100 group-hover:opacity-100">
              <h2 className="text-lg text-white font-semibold transition-transform duration-300 transform scale-75 origin-bottom group-hover:scale-100">
                {card.title}
              </h2>
              <p className="text-sm text-gray-300 opacity-0 transition-opacity duration-300 transform scale-75 origin-bottom group-hover:opacity-100 group-hover:scale-100">
                {card.description}
              </p>
            </div>
          </figure>
        </Link>
      ))}
    </div>
  </div>
</section>



{/* News Section */}
<section className="py-[70px] bg-white" id="news">
  <div className="container mx-auto text-center px-4">
  <h2 className="text-4xl font-serif mb-6 text-black bg-white p-4 tracking-wide">
  Calgary's Top Picks Today
</h2>


    {loading && <p className="text-lg text-gray-600">Loading news...</p>}
    {error && <p className="text-lg text-red-600">Error fetching news: {error}</p>}

    <div className="flex overflow-x-auto space-x-6 mt-6 max-w-full py-4 px-4 mr-4">
      {recentNews.map((news, index) => (
        <div key={index} className="min-w-[300px] bg-white shadow-lg hover:bg-[#001f3f] hover:text-white transition-colors duration-300">
          {news.urlToImage && (
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              <img
                src={news.urlToImage}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
            </a>
          )}
          <h3 className="text-xl py-5 font-serif mt-4 px-4">
            <a href={news.url} target="_blank" rel="noopener noreferrer" className="no-underline">
              {news.title}
            </a>
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default LivingInCalgary;
