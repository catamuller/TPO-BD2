/**
 * @param {import("mongodb").MongoClient} mongo
 * @returns The data
 */
export default async function query9(mongo) {
    const database = mongo.db("facturacion");
    const producto = database.collection("producto");
    const factura = database.collection("factura");

    const productos = (
        await producto
            .find({
                marca: { $regex: "Ipsum" }
            })
            .toArray()
    ).map((producto) => producto._id);

    return factura
        .find({
            "detalle.codigo_producto": {
                $in: productos
            }
        })
        .toArray();
}
