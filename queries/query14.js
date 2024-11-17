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
 * @param {ReturnType<import("redis").createClient>} redis
 * @param {Product} body The data
 * @return {Promise<boolean>} True if inserted, false if updated
 */
export default async function query14(redis, body) {
    try {
        await redis.connect();

        const before = await redis.hGetAll(`producto:${body.id}`);

        await redis.hSet(`producto:${body.id}`, {
            name: body.name,
            brand: body.brand,
            description: body.description,
            price: body.price,
            stock: body.stock
        });

        await redis.sAdd(`marca:${body.brand}`, `${body.id}`);
        await redis.sAdd("all", `${body.id}`);

        if (before.brand && body.brand !== before.brand) {
            await redis.sRem(`marca:${before.brand}`, `${body.id}`);
        }

        return !before.name;
    } finally {
        await redis.quit();
    }
}
