/**
 * @param {ReturnType<import("mongodb").MongoClient["db"]>} db Mongo database
 * @returns The data
 */
export default async function query12(db) {
    const productos_no_facturados = db.collection("productos_no_facturados");

    return productos_no_facturados.find().toArray();
}
