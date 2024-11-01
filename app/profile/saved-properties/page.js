'use client';
import { useEffect,useState } from "react";


export default function SavedPropertiesPage() {

    const [savedProperties, setSavedProperties] = useState([]);
    




    return(
        <div>
            <h1 className="text-3xl font-bold">Saved Properties list</h1>
            <p>View your saved properties here.</p>
        </div>
    )
}