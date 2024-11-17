/**
 * @param {ReturnType<import("mongodb").MongoClient["db"]>} db Mongo database
 * @returns The data
 */
export default async function query4(db) {
    const factura = db.collection("factura");

    return factura.distinct("nro_cliente");
}
