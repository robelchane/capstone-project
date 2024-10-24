const Card3 = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-[#8B6331] text-white py-6 shadow-lg">
                <h1 className="text-4xl font-bold text-center tracking-wide">Community Park</h1>
            </header>
            <main className="flex-grow p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                    This page features Community Park, a lovely spot in Calgary where you can enjoy nature, picnics, and community events. 
                </p>
                <div className="flex justify-center mt-6">
                    <a 
                        href="#"
                        className="bg-[#09090b] text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-[#854d0e] hover:scale-105"
                    >
                        Explore More
                    </a>
                </div>
            </main>

        </div>
    );
};

export default Card3;
