"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EventDetailPage() {

    const router = useRouter();
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        
        if (id) {
            const events = [
                {
                    id: 1,
                    name: "Open houses and model home tours",
                    description: "Join us for one of our open houses and model home tours to experience the appeal of our luxurious homes firsthand. Explore spaces that feature a variety of floor plans, stylish finishes, and the latest designs. Explore every nook and cranny of the home, hear interior tips and advice from our experts, and envision life in your new home. These tours are the first step toward making your dream home a reality.",
                    location: "Riverstone Estates, Calgary",
                    isReservable: false,
                    link: "",
                    imageUrl: "/event1.jpg"
                },
                {
                    id: 2,
                    name: "Real Estate Investment Seminar",
                    description: "A must-attend seminar for anyone interested in real estate investing. From current market trends to long-term investment strategies, real estate experts will analyze investment opportunities and share success stories based on real-world experience. Learn how to invest in real estate for a better future at this seminar, which is beneficial for both experienced investors and beginners alike.",
                    location: "Conference Center, Calgary",
                    isReservable: false,
                    link: "",
                    imageUrl: "/event2.jpg"
                },
                {
                    id: 3,
                    name: "Home Buying Basics Workshop",
                    description: "Does the process of buying a home seem overwhelming? This workshop will introduce you to the essential information first-time homebuyers need to know. Experts will help you every step of the way, including financial planning, mortgage options, and the home inspection process. It can be a complicated process, but it's more approachable when you have the knowledge you need. Get ready to buy your first home in this workshop.",
                    location: "Online",
                    isReservable: false,
                    link: "",
                    imageUrl: "/event3.jpg"
                },
                {
                    id: 4,
                    name: "Virtual Tour of Modern Homes",
                    description: "Experience the latest in modern home design from the comfort of your own home. These virtual tours showcase the latest interior trends and creative space-use ideas. Explore spaces with a mix of styles and themes, and get inspired for your future home. This tour, which you can take virtually from the comfort of your own home, is the perfect opportunity to get new interior ideas.",
                    location: "Online",
                    isReservable: false,
                    link: "",
                    imageUrl: "/event4.jpg"
                },
                {
                    id: 5,
                    name: "Home Renovation Workshop",
                    description: "Looking to freshen up your home? This workshop covers the basics and advanced techniques of remodeling. With hands-on tips from experts, you'll learn the key elements of a successful remodel, including managing your budget, designing your space, and using on-trend finishes. With practical advice and tips, you can start transforming your space into the space of your dreams.",
                    location: "Downtown Workshop Space, Calgary",
                    isReservable: false,
                    link: "",
                    imageUrl: "/event5.jpg"
                },
                {
                    id: 6,
                    name: "Property Pros Networking Night",
                    description: "We invite you to join us for an evening of connecting with real estate professionals, investors, and industry leaders. This networking event is a place to share experiences and explore opportunities for collaboration, and will help you build relationships with people from diverse backgrounds. Join us to share information and insights and build meaningful networks with people who are passionate about real estate.",
                    location: "Calgary Networking Hall",
                    isReservable: false,
                    link: "",
                    imageUrl: "/event6.jpg"
                },
                {
                    id: 7,
                    name: "Long-term Rental and Leasing Seminar",
                    description: "This seminar takes an in-depth look at the world of long-term rentals and leasing. We'll walk you through the laws and regulations involved, and how to best manage your rentals to generate reliable revenue. Discover the rights and obligations landlords and tenants need to know, tips for writing contracts, and more, and learn how to generate stable revenue from long-term rentals.",
                    location: "Calgary Business Center",
                    isReservable: false,
                    link: "",
                    imageUrl: "/event7.jpg"
                },
                {
                    id: 8,
                    name: "Community Appreciation Event",
                    description: "We invite you to join us for a special event to strengthen our bond with the local community. We'll have a variety of giveaways and activities to show our appreciation, and it's a chance to connect with local people and make warm memories. Feel part of the community and experience the joy of being together.",
                    location: "Community Center, Calgary",
                    isReservable: false,
                    link: "",
                    imageUrl: "/event8.jpg"
                },
                {
                    id: 9,
                    name: "Eco-friendly Home Solutions Workshop",
                    description: "This workshop introduces solutions for a sustainable living space. You'll learn how to make your home more energy efficient, use eco-friendly materials, reduce your carbon footprint, and take action for a sustainable lifestyle. This workshop will provide useful information and practical tips for anyone looking to transform their home into a greener space.",
                    location: "Green Building HQ, Calgary",
                    isReservable: false,
                    link: "",
                    imageUrl: "/event9.jpg"
                },
                {
                    id: 10,
                    name: "Mortgage and Financial Planning Consultation",
                    description: "Provides an opportunity to speak directly with an expert about financial planning and mortgages. You'll learn how to optimize your mortgage options and financial planning, putting you on a more stable financial footing. Through personalized counseling, we'll help you find solutions for your current situation and plan for the future.",
                    location: "Finance Hub, Calgary",
                    isReservable: false,
                    link: "",
                    imageUrl: "/event10.jpg"
                },
            ];

            const event = events.find(e => e.id === parseInt(id));
            setEventData(event);
        }
    }, [id]);


    if (!eventData) return <p>Loading...</p>;

    return (
        <div
            className="relative h-screen w-full bg-cover bg-center text-white mt-20"
            style={{ backgroundImage: `url(${eventData.imageUrl})` }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            
            <h1 className="absolute top-1 right-10 text-6xl font-serif mt-20">{eventData.name}</h1>
    
            <p className="absolute bottom-48 left-10 text-2xl max-w-4xl text-gray-200">
                {eventData.description}
            </p>
            <button
                className="absolute bottom-32 right-10 bg-[#001f3f] text-white text-xl py-4 px-5 border border-[#001f3f] hover:bg-transparent hover:text-white hover:border-white z-10 transition-colors duration-300"
                onClick={() => router.push('/bookings')}
            >
                Book an appointment
            </button>
        </div>
    );
       
}
