import Head from 'next/head';

const Card4 = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Head>
                <title>Card 4 - Food Scene</title>
                <meta name="description" content="Explore Calgary's diverse culinary offerings." />
            </Head>
            <header className="bg-green-600 text-white py-4">
                <h1 className="text-3xl text-center">Food Scene</h1>
            </header>
            <main className="flex-grow p-6">
                <p className="text-gray-700">Discover Calgary's vibrant food scene on this page.</p>
            </main>
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>© 2024 Your Name</p>
            </footer>
        </div>
    );
};

export default Card4;
