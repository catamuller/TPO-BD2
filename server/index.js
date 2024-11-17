import express from "express";
import { createClient } from "redis";
import { MongoClient } from "mongodb";
import query1 from "../queries/query1.js";
import query2 from "../queries/query2.js";
import query3 from "../queries/query3.js";
import query4 from "../queries/query4.js";
import query5 from "../queries/query5.js";
import query6 from "../queries/query6.js";
import query7 from "../queries/query7.js";
import query8 from "../queries/query8.js";
import query9 from "../queries/query9.js";
import query10 from "../queries/query10.js";

const app = express();
app.use(express.static("public"));

const redis = createClient({
    url: "redis://redis:6379"
});

const mongo = new MongoClient("mongodb://mongo:27017");

const queries = {
    1: () => query1(mongo.db("facturacion")),
    2: () => query2(mongo.db("facturacion")),
    3: () => query3(mongo.db("facturacion")),
    4: () => query4(mongo.db("facturacion")),
    5: () => query5(mongo.db("facturacion")),
    6: () => query6(mongo.db("facturacion")),
    7: () => query7(mongo.db("facturacion")),
    8: () => query8(mongo, redis),
    9: () => query9(mongo, redis),
    10: () => query10(mongo.db("facturacion"))
};

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
        const data = (await queries[req.params.n]?.()) ?? "Query not found";
        res.send(data).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

redis.on("error", (err) => console.log("Redis Client Error", err));
