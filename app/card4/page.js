const Card4 = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-[#8B6331] text-white py-6 shadow-lg">
                <h1 className="text-4xl font-bold text-center tracking-wide">Food Scene</h1>
            </header>
            <main className="flex-grow p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                    Discover Calgary's vibrant food scene, featuring diverse culinary offerings from local restaurants to food festivals. 
                    Whether you're a foodie or just looking for a great meal, Calgary has something for everyone.
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

export default Card4;
