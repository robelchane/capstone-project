const Card2 = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">


            <main className="flex-grow p-8">
                
{/* Quality of Life Section */}
<section id="quality-of-life" className="py-10 bg-[#f4f4f4] mt-12">
    <div className="container mx-auto text-center px-6">
        <h2 className="text-[#001f3f] text-4xl font-serif mb-6">
            Quality of Life That Speaks Volumes
        </h2>
        <p className="text-black leading-relaxed text-lg mb-8">
            Imagine a city where urban sophistication meets breathtaking natural beauty:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                {
                    icon: "☀️",
                    title: "333 Days of Sunshine",
                    description: "Enjoy more sunshine annually than any other major Canadian city.",
                },
                {
                    icon: "⛰️",
                    title: "Rocky Mountains Access",
                    description: "World-class outdoor recreation at your doorstep.",
                },
                {
                    icon: "🚴",
                    title: "Extensive Pathway System",
                    description: "Over 1,000 kilometers of urban paths for walking, cycling, and more.",
                },
                {
                    icon: "🌟",
                    title: "Global Livability Ranking",
                    description: "Consistently ranked as one of the most livable cities worldwide.",
                },
            ].map((item, index) => (
                <div
                    key={index}
                    className="bg-white shadow-md p-6 rounded-md text-center hover:bg-[#001f3f] hover:text-white transition duration-300"
                >
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
</section>


<section id="economic-opportunity" className="py-12 bg-white">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 lg:pr-10">
            <h2 className="text-4xl font-serif text-[#001f3f] mb-6">
                Economic Opportunity and Stability
            </h2>
            <p className="text-gray-700 text-lg mb-4">
                Calgary isn't just a city – it's a land of opportunity. As the heart of Canada's energy sector and an emerging tech hub, Calgary offers:
            </p>
            <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                    <span className="text-2xl text-[#001f3f] mr-4">💼</span>
                    <span>Diverse job markets spanning energy, technology, agriculture, and finance.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-2xl text-[#001f3f] mr-4">💰</span>
                    <span>Lower provincial tax rates compared to other major Canadian cities.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-2xl text-[#001f3f] mr-4">🚀</span>
                    <span>A robust economy with numerous entrepreneurial opportunities.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-2xl text-[#001f3f] mr-4">📊</span>
                    <span>Competitive salaries and a lower cost of living compared to Vancouver and Toronto.</span>
                </li>
            </ul>
        </div>

        {/* Image/Graphic Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img 
                src="/images/economic-opportunity.jpg" 
                alt="Economic Opportunity in Calgary" 
                className="rounded-lg shadow-lg"
            />
        </div>
    </div>
</section>


                {/* Learn More Button */}
                <div className="flex justify-center mt-6">
                    <a 
                        href="#"
                        className="bg-[#09090b] text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-[#854d0e] hover:scale-105"
                    >
                        Learn More
                    </a>
                </div>
            </main>
        </div>
    );
};

export default Card2;
