import connectMongoDB from "@/libs/mongodb";
import Favorite from "@/models/favorite";
import { NextResponse } from "next/server";
import Property from "@/models/property";

export async function POST(request) {
    try{
        const {userId, propertyId} = await request.json();
        await connectMongoDB();

        // Check if the favorite already exists
        const existingFavorite = await Favorite.findOne({userId, propertyId});
        if(existingFavorite){
            return NextResponse.json({message: "Favorite already exists"}, {status: 400});
        }

        const favorite = new Favorite({ userId, propertyId });
        await favorite.save()

        return NextResponse.json({message: "Favorite added"}, {status: 201});
    } catch (error) {
        console.error("Error adding favorite:", error);
        return NextResponse.json({error: "Failed to add favorite"}, {status: 500});
    }

    
}



// Get request to fetch all favorites
export async function GET(request) {
    try {
        const userId = request.nextUrl.searchParams.get("userId");
        await connectMongoDB();

        // Fetch favorites and populate property details
        const favorites = await Favorite.find({ userId }).populate("propertyId");
        return NextResponse.json(favorites, { status: 200 });
    } catch (error) {
        console.error("Error fetching saved properties:", error);
        return NextResponse.json({ error: "Failed to fetch saved properties" }, { status: 500 });
    }
}
