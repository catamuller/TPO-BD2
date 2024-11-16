import express from "express";
import mongo from "./mongo.js";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("/public/index.html", { root: import.meta.dirname });
});

app.get("/debugger", (req, res) => {
    res.send(import.meta.dirname);
    res.end();
});

app.get("/:n", async (req, res) => {
    try {
        const n = parseInt(req.params.n);
        const data = await mongo(n);
        res.send(data).status(200);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
