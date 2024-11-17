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
import query11 from "../queries/query11.js";
import query14 from "../queries/query14.js";
import query12 from "../views/productos.mongodb.js";

const app = express();
app.use(express.static("public"));
app.use(express.json());

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
    9: () => query9(mongo),
    10: () => query10(mongo.db("facturacion")),
    11: () => query11(mongo.db("facturacion")),
    12: () => query12(mongo, redis)
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

app.get("/product", (req, res) => {
    res.sendFile("/public/product.html", { root: import.meta.dirname });
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

app.post("/product", async (req, res) => {
    const body = req.body;

    if (typeof body.id !== "number" || body.id < 0) {
        res.status(400).send("Invalid id");
        return;
    }

    if (typeof body.name !== "string" || !body.name) {
        res.status(400).send("Invalid name");
        return;
    }

    if (typeof body.brand !== "string" || !body.brand) {
        res.status(400).send("Invalid brand");
        return;
    }

    if (typeof body.description !== "string" || !body.description) {
        res.status(400).send("Invalid description");
        return;
    }

    if (typeof body.price !== "number" || body.price < 0) {
        res.status(400).send("Invalid price");
        return;
    }

    if (typeof body.stock !== "number" || body.stock < 0) {
        res.status(400).send("Invalid stock");
        return;
    }

    try {
        const insert = await query14(mongo, redis, body);

        res.status(201).send(
            insert
                ? "Product added successfully"
                : "Product updated successfully"
        );
    } catch (error) {
        console.error(error);
        res.send(error).status(500);
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

redis.on("error", (err) => console.log("Redis Client Error", err));
