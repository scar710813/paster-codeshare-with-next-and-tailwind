// src/app/api/protected/route.js
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectToDatabase from "@/dbconfig/dbconfig";  // Adjust the path as necessary
import User from "@/models/userModels";  // Adjust the path as necessary

// Connect to the database
connectToDatabase();

export async function POST(request) {
    try {
        const { token } = await request.json();

        // Check if the token is provided
        if (!token) {
            return NextResponse.json({ message: "Token is required" }, { status: 401 });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        
        // Fetch the user from the database using the ID from the token
        const user = await User.findById(decoded.id);
        if (!user) {
            return NextResponse.json({ valid: false, message: "User not found" }, { status: 401 });
        }

        // Return success response with user data
        return NextResponse.json({ valid: true, user });
    } catch (error) {
        console.error("Error verifying token:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 200 });
    }
}