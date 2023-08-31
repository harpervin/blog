import express from "express";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.use(
    cors({
        origin: ["http://localhost:3000", "http://192.168.1.235:3000/"],
    })
);

app.use("/", routes);

app.listen(port, () => {
    console.log(`Express app is running on http://localhost:${port}`);
});
