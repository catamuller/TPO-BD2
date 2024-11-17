/**
 * @param {import("mongodb").MongoClient} mongo
 * @param {ReturnType<import("redis").createClient>} redis
 * @returns The data
 */

export default async function query12(mongo, redis) {
    try {
        redis.connect();

        const db = mongo.db("facturacion");
        const factura = db.collection("factura");

        const codigo_productos = await redis.sMembers("all");
        const codigo_productos_facturados = await factura.distinct(
            "detalle.codigo_producto"
        );

        const result = codigo_productos.filter(
            (x) => !codigo_productos_facturados.includes(parseInt(x))
        );

        const productList = [];
        for (let productCode of result) {
            productList.push(await redis.hGetAll("producto:" + productCode));
        }

        return productList;
    } finally {
        redis.quit();
    }
}
