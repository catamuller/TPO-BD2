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
        const producto = database.collection("producto");

        let productos = await producto
            .find({
                _id: {
                    $in: await factura.distinct("productos.codigo")
                }
            })
            .toArray();

        for (let i = 0; i < productos.length; i++) {
            productos[i] = {
                ...productos[i],
                ...(await redis.hGetAll(`producto:${productos[i]._id}`))
            };
        }

        return productos;
    } finally {
        redis.quit();
    }
}
