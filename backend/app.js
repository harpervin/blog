import express from "express";
import logger from "./logger/index.js";
import routes from "./routes/index.js";
import cors from "cors";
import connectToMongoDB from "./db/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.use(
    cors({
        origin: ["http://localhost:3000", "http://192.168.1.235:3000/"],
    })
);

app.use("/api", routes);

async function startServer() {
    // Connect to MongoDB Database
    await connectToMongoDB();

    // Run Express server
    app.listen(port, () => {
        logger.info(`Express app is running on http://localhost:${port}`);
    });
}

startServer();
