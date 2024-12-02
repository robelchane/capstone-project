const Card2 = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            <main className="flex-grow p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                    Discover the vibrant urban life and cultural experiences that make Calgary unique.
                </p>
                
                {/* Quality of Life Section */}
                <section id="quality-of-life" className="py-10 bg-[#f4f4f4] mt-12">
                    <div className="container mx-auto text-center px-6">
                        <h2 className="text-[#001f3f] text-4xl font-serif mb-6">
                            Quality of Life That Speaks Volumes
                        </h2>
                        <p className="text-black leading-relaxed text-lg mb-8">
                            Imagine a city where urban sophistication meets breathtaking natural beauty:
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
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
                                    className="bg-white shadow-md p-6 rounded-md max-w-[300px] text-center hover:bg-[#001f3f] hover:text-white transition duration-300"
                                >
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                                    <p className="text-sm">{item.description}</p>
                                </div>
                            ))}
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
