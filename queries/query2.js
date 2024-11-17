/**
 * @param {ReturnType<import("mongodb").MongoClient["db"]>} db Mongo database
 * @returns The data
 */
export default async function query2(db) {
    const cliente = db.collection("cliente");

    return cliente
        .aggregate([
            {
                $match: {
                    nombre: "Jacob",
                    apellido: "Cooper"
                }
            },
            {
                $project: {
                    nro_cliente: "$_id",
                    nombre: 1,
                    apellido: 1,
                    telefonos: 1,
                    _id: 0
                }
            }
        ])
        .toArray();
}
