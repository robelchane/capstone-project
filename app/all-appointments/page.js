
"use client";
import { useState, useEffect } from "react";


export default function AllAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAppointments = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/appointments");
            const data = await response.json();
            setAppointments(data.appointments || []);
        } catch (error) {
            
        }
            


    }