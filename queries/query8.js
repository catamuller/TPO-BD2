/**
 * @param {import("mongodb").MongoClient} mongo
 * @param {ReturnType<import("redis").createClient>} redis
 * @returns The data
 */
export default async function query8(mongo, redis) {
    try {
        redis.connect();

        const database = mongo.db("facturacion");
        const factura = database.collection("factura");

        const productos = await factura.distinct("detalle.codigo_producto");

        let productList = [];
        for (let productcode of productos) {
            productList.push(await redis.hGetAll(`producto:${productcode}`));
        }

        return productList;
    } finally {
        redis.quit();
    }
}
