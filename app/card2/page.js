import Head from 'next/head';

const Card2 = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Head>
                <title>Card 2 - The Bow</title>
                <meta name="description" content="Discover Calgary's iconic building." />
            </Head>
            <header className="bg-green-600 text-white py-4">
                <h1 className="text-3xl text-center">The Bow</h1>
            </header>
            <main className="flex-grow p-6">
                <p className="text-gray-700">This is the page for The Bow, Calgary's iconic building.</p>
            </main>
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>© 2024 Your Name</p>
            </footer>
        </div>
    );
};

export default Card2;
