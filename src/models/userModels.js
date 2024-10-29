//import { verify } from "crypto";
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    isVerfied: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
    },
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;



