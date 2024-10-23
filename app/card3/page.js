import Head from 'next/head';

const Card3 = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Head>
                <title>Card 3 - Community Park</title>
                <meta name="description" content="Explore Community Park in Calgary." />
            </Head>
            <header className="bg-green-600 text-white py-4">
                <h1 className="text-3xl text-center">Community Park</h1>
            </header>
            <main className="flex-grow p-6">
                <p className="text-gray-700">This page features Community Park, a lovely spot in Calgary.</p>
            </main>
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>© 2024 Your Name</p>
            </footer>
        </div>
    );
};

export default Card3;
