import express from "express";
import { createClient } from "redis";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.static("public"));

const redis = createClient({
    url: "redis://redis:6379"
});

const mongo = new MongoClient("mongodb://mongo:27017");

app.get("/", (req, res) => {
    res.sendFile("/public/index.html", { root: import.meta.dirname });
});

app.get("/debugger", async (req, res) => {
    redis.connect();
    res.send(await redis.keys("marca:*"));
    res.end();
    redis.quit();
});

app.get("/:n", async (req, res) => {
    try {
        const n = parseInt(req.params.n);
        // const data = await mongoExecute(n);
        res.send("data").status(200);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

redis.on("error", (err) => console.log("Redis Client Error", err));
