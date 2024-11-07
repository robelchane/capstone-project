'use client';
import { useEffect, useState } from "react";

export default function ComparePage() {
    // State to hold saved properties
    // Initialize with an empty array
    const [propertiesToCompare, setPropertiesToCompare] = useState([]);

    // UseEffect to get the selected properties from localStorage
    // and set the state
    // Run once when the component mounts
    useEffect(() => {
        const selected = JSON.parse(localStorage.getItem("propertiesToCompare")) || [];
        setPropertiesToCompare(selected);
    }, []); // Empty array as the second argument to run once



    if(propertiesToCompare.length!=2) {
        return <p> Please select two properties for comparison</p>
    }

    // Get the properties to compare
    const [property1, property2] = propertiesToCompare;

    return(
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold mb-4">Compare Properties</h1>
            <div className=" grid grid-cols-2 gap-8 w-full max-w-4xl">
                {/* Property 1  details*/}
                

                </div>
            </div>
            
        
    )


}

