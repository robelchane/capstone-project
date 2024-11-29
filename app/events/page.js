"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EventsPage() {

    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        setShowConfirmation(true);
    };

    const [events] = useState([
        {
            id: 1,
            name: "Open houses and model home tours",
            description: "Share your open house schedule and tour the house in person.",
            location: "Riverstone Estates, Calgary",
            isReservable: false,
            link: "/register/open-house",
            imageUrl: "/event1.jpg"
        },
        {
            id: 2,
            name: "Real Estate Investment Seminar",
            description: "Learn about real estate investment opportunities and trends.",
            location: "Conference Center, Calgary",
            isReservable: false,
            link: "/register/investment-seminar",
            imageUrl: "/event2.jpg"
        },
        {
            id: 3,
            name: "Home Buying Basics Workshop",
            description: "A beginner’s guide to the home buying process, financing, and more.",
            location: "Online",
            isReservable: false,
            link: "/register/home-buying-basics",
            imageUrl: "/event3.jpg"
        },
        {
            id: 4,
            name: "Virtual Tour of Modern Homes",
            description: "Join a virtual tour of our latest modern home designs.",
            location: "Online",
            isReservable: false,
            link: "/register/virtual-tour",
            imageUrl: "/event4.jpg"
        },
        {
            id: 5,
            name: "Home Renovation Workshop",
            description: "Tips and tricks for home renovations with industry experts.",
            location: "Downtown Workshop Space, Calgary",
            isReservable: false,
            link: "/register/home-renovation",
            imageUrl: "/event5.jpg"
        },
        {
            id: 6,
            name: "Property Pros Networking Night",
            description: "An evening for investors, real estate professionals, and clients to connect.",
            location: "Calgary Networking Hall",
            isReservable: false,
            link: "/register/networking-night",
            imageUrl: "/event6.jpg"
        },
        {
            id: 7,
            name: "Long-term Rental and Leasing Seminar",
            description: "Learn about the ins and outs of long-term rentals and property leasing.",
            location: "Calgary Business Center",
            isReservable: false,
            link: "/resister/leasing-seminar",
            imageUrl: "/event7.jpg"
        },
        {
            id: 8,
            name: "Community Appreciation Event",
            description: "A special event to appreciate our community with giveaways and activities.",
            location: "Community Center, Calgary",
            isReservable: false,
            link: "/register/community-event",
            imageUrl: "/event8.jpg"
        },
        {
            id: 9,
            name: "Eco-friendly Home Solutions Workshop",
            description: "Discover sustainable building and renovation options for your home.",
            location: "Green Building HQ, Calgary",
            isReservable: false,
            link: "/register/eco-home-workshop",
            imageUrl: "/event9.jpg"
        },
        {
            id: 10,
            name: "Mortgage and Financial Planning Consultation",
            description: "One-on-one consultations with finance experts on mortgage options/planning.",
            location: "Finance Hub, Calgary",
            isReservable: false,
            link: "/register/financial-consultation",
            imageUrl: "/event10.jpg"
        }
    ]);

    return (
        <div className="font-roboto">
            <div className="mt-32 text-center max-w-3xl mx-auto">
                <h1 className="italic text-5xl font-serif text-[#001f3f] mb-5">Events</h1>
                <p className="text-xl font-serif">
                    Be part of something special. Our events bring people together to celebrate, connect, and make meaningful memories. Join us for exclusive experiences you won’t want to miss.
                </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 p-20">
                {events.map((event, index) => (
                    <li
                    key={index} 
                    className="mb-6 cursor-pointer hover:bg-[#001f3f] hover:text-white transition-colors duration-300"
                    onClick={() => router.push(`/events/${event.id}`)}
                    >
                        <img 
                            src={event.imageUrl} 
                            alt={event.name} 
                            className="w-full h-90 object-cover"
                        />
                        <div className="py-3 ml-3">
                            <h2 className="text-xl mb-2">{event.name}</h2>
                            <p>{event.description}</p>
                            <p>Location: {event.location || "TBA"}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}