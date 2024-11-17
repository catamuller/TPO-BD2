/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} brand
 * @property {string} description
 * @property {number} price
 * @property {number} stock
 */

/**
 * @param {import("mongodb").MongoClient} mongo
 * @param {ReturnType<import("redis").createClient>} redis
 * @param {Product} body The data
 * @return {Promise<boolean>} True if inserted, false if updated
 */
export default async function query14(mongo, redis, body) {
    try {
        await redis.connect();

        const existed = await redis.exists(`producto:${body.id}`);

        await redis.hSet(`producto:${body.id}`, {
            price: body.price,
            stock: body.stock
        });

        const database = mongo.db("facturacion");
        const producto = database.collection("producto");

        await producto.updateOne(
            {
                // @ts-ignore
                _id: body.id
            },
            {
                $set: {
                    nombre: body.name,
                    marca: body.brand,
                    descripcion: body.description
                }
            },
            {
                upsert: true
            }
        );

        return !existed;
    } finally {
        await redis.quit();
    }
}
