import express from "express";
import cors from "cors";
import { config } from "dotenv";
import routes from "./routes/index.js";
import connectToMongoDB from "./db/index.js";
import cookieParser from "cookie-parser";

config();
const app = express();
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://172.20.10.7:3000/",
            "http://127.0.0.1:3000",
        ],
        credentials: true, // Allow cookies to be sent with requests
    })
);

app.use("/api", routes);

async function startServer() {
    // Connect to MongoDB Database
    await connectToMongoDB();

    // Run Express server
    app.listen(port, () => {
        console.log(`Express app is running on http://localhost:${port}`);
    });
}

startServer();
