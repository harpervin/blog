import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
    try {
        console.log("authenticate Token running");

        const bearerToken = req.headers.authorization;
        // const token = req.cookies.jwt;

        if (!bearerToken) {
            return res.status(401).json({ error: "Access Denied" });
        }

        const token = bearerToken.split(" ")[1]; // Extract the token part

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                console.log(err);
                return res.status(403).json({ error: "Invalid token" });
            }
            // what does this mean
            // Verified
            req.user = user;

            next();
        });
    } catch (e) {
        console.log(e);
    }
}

export default authenticateToken;
