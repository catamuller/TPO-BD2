export default async function query8(mongo, redis) {
    const productos = [];
    const database = mongo.db("facturacion");
    const factura = database.collection("factura");

    productos = await factura.distinct("detalle.codigo_producto");
    let productList = [];
    for (let productcode in productos) {
        productList.push(await redis.getAll(`producto:${productcode}`));
    }
    return productList;
}
