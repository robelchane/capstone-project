import connectMongoDB from "../../../libs/mongodb";
import Favorite from "../../../models/favorite";
import { NextResponse } from "next/server";
import Property from "../../../models/favorite";

export default async function handler(req,res) {
    await connectMongoDB();

    if(req.method === "POST"){
        try {
            const { userId, propertyId } = req.body;
            // Check if the faviourte exists
            const existingFavorite = await Favorite.findOne({ userId, propertyId });
            if (existingFavorite) {
                return NextResponse.json({ error: "Property already saved" }, { status: 400 });
            }

                    // Create a new favorite entry

            const favorite = new Favorite({ userId, propertyId });
            await favorite.save();

            return NextResponse.json(favorite, { status: 201 });

        } catch (error) {
            console.error("Error saving property:", error);
            return NextResponse.json({ error: "Failed to save property" }, { status: 500 });
        }

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
