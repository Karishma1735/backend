import jwt from 'jsonwebtoken'
import 'dotenv/config';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]

    const token = authHeader.split(" ")[1]
    console.log(token)
    if (!token)
        return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send("Invalid token");
        req.user = user;
        next();
    })
}