
"use client";
import { useState, useEffect } from "react";


export default function AllAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);

    const 