/**
 * @param {ReturnType<import("mongodb").MongoClient["db"]>} db Mongo database
 * @returns The data
 */
export default async function query1(db) {
    const cliente = db.collection("cliente");

    return cliente
        .aggregate([
            {
                $project: {
                    nro_cliente: "$_id",
                    _id: 0,
                    nombre: 1,
                    apellido: 1,
                    direccion: 1,
                    active: 1,
                    telefonos: 1
                }
            }
        ])
        .toArray();
}
