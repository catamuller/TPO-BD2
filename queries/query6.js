/**
 * @param {ReturnType<import("mongodb").MongoClient["db"]>} db Mongo database
 * @returns The data
 */
export default async function query6(db) {
    const cliente = db.collection("cliente");

    return cliente
        .aggregate([
            {
                $lookup: {
                    from: "factura",
                    localField: "_id",
                    foreignField: "nro_cliente",
                    as: "facturas"
                }
            },
            {
                $project: {
                    nro_cliente: "$_id",
                    total_facturas: { $size: "$facturas" },
                    _id: 0
                }
            }
        ])
        .sort({ nro_cliente: 1 })
        .toArray();
}
