import jwt from "jsonwebtoken"
import { SECRET_TOKEN } from "../config.js";

export function createAccessToken(randomToken) {
    return new Promise((resolve, reject) => {
    jwt.sign(
        randomToken,
        SECRET_TOKEN,
        {expiresIn:"1d"},
        (err, token) => {
            if (err) reject(err);
            resolve(token)
        })          
    })
}