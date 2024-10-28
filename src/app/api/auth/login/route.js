import connectToDatabase from "@/dbconfig/dbconfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import axios from "axios";

connectToDatabase();

export async function POST(request) {
    try {

        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log(reqBody);

        let user = await User.findOne({ email })

        if (!user) {
            const newUser = new User({
                email,
                isVerified: true
            })
    
            const savedUser = await newUser.save()
            console.log(savedUser);
            user = await User.findOne({ email });
        }

        console.log("user exists");

        const tokenData = {
            id: user._id,
            email: user.email
        }

        //after authentication we send use a toke with certain information in cookies of the user
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            user: {
                id: user._id,
                email: user.email,
            },
            token, 
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;
    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}