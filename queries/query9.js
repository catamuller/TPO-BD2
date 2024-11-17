export default async function query9(mongo, redis) {
    const productIds = [];

    const keys = await redis.keys("marca:*Ipsum*");

    for (let key in keys) {
        productIds.push(await redis.smembers(key));
    }

    const database = mongo.db("test");
    const factura = database.collection("factura");

    return factura.find(
        {
            "detalle.codigo_producto": { $in: productIds }
        },
        {
            nro_facutra: "$_id",
            _id: 0,
            fecha: 1,
            total_sin_iva: 1,
            iva: 1,
            total_con_iva: 1,
            nro_cliente: 1,
            detalle: 1
        }
    );
}
