/**
 * @param {import("mongodb").MongoClient} mongo
 * @param {ReturnType<import("redis").createClient>} redis
 * @returns The data
 */
export default async function query9(mongo, redis) {
    try {
        redis.connect();

        const productIds = [];
        const keys = await redis.keys("marca:*Ipsum*");
        console.log(keys);

        for (let key of keys) {
            productIds.push(...(await redis.sMembers(key)).map(Number));
        }

        console.log(productIds);

        const database = mongo.db("test");
        const factura = database.collection("factura");

        return factura
            .find(
                {
                    "detalle.codigo_producto": { $in: productIds }
                },
                {
                    // @ts-ignore
                    nro_factura: "$_id",
                    _id: 0,
                    fecha: 1,
                    total_sin_iva: 1,
                    iva: 1,
                    total_con_iva: 1,
                    nro_cliente: 1,
                    detalle: 1
                }
            )
            .toArray();
    } finally {
        redis.quit();
    }
}
