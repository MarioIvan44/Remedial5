import jwt from "jsonwebtoken";
import { config } from "../../config.js";

export const validateAuthCookie = (allowedTypes = []) => {
    return(req, res, next) => {
        try {
            const {authCookie} = req.cookies;

            if(!authCookie) {
                return res.status(401).json({message: "No auth cookie found, Authorization required"});
            }

            //Extract all the cookie information
            const decoded = jwt.verify(authCookie, config.JWT.secret);

            if(!allowedTypes.includes(decoded.userType)) {
                return res.status(403).json({message: "User type not allowed"});
            }

            next(); //If everything is fine, we call next() to continue with the request
        }
        catch (error) {
            console.error("error: " + error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}