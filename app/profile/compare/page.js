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
        <div>
            
        </div>
    )


}

