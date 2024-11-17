/**
 * @param {ReturnType<import("mongodb").MongoClient["db"]>} db Mongo database
 * @returns The data
 */
export default async function query11(db) {
    const facturas_por_fecha = db.collection("facturas_por_fecha");

    return facturas_por_fecha.find().toArray();
}
