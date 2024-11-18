"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ContactUs() {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/contact');
    };

    return (
        <div className="flex flex-col p-7 mb-16 items-center">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-serif text-[#001f3f] mt-20 mb-10">Contact Us Today</h1>
                <p className="text-xl">
                    We are the premier property management company in and around Calgary.
                    We guarantee results for our clients.
                </p>
                <p className="text-lg mb-10">
                    Contact us today for all your property management needs, not just home buying or selling.
                </p>
                <button
                    onClick={handleButtonClick}
                    className="px-6 py-3 border border-[#001f3f] bg-[#001f3f] text-white hover:bg-transparent hover:text-[#001f3f] transition-colors duration-300"
                >
                    Enquire Now
                </button>
            </div>
        </div>
    );
}