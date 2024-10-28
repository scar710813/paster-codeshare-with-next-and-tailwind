// src/utils/auth.js
import jwt from 'jsonwebtoken';

export const isTokenValid = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET); // Use the same secret as in your API
        return decoded; // Returns the decoded token if valid
    } catch (error) {
        return null; // Returns null if token is invalid
    }
};