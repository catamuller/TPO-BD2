/**
 * @param {ReturnType<import("mongodb").MongoClient["db"]>} db Mongo database
 * @returns The data
 */
export default async function query3(db) {
    const cliente = db.collection("cliente");

    return cliente
        .aggregate([
            { $unwind: "$telefonos" },
            {
                $project: {
                    codigo_area: "$telefonos.codigo_area",
                    nro_telefono: "$telefonos.nro_telefono",
                    tipo_telefono: "$telefonos.tipo",
                    nro_cliente: "$_id",
                    nombre: 1,
                    apellido: 1,
                    direccion: 1,
                    activo: 1
                }
            }
        ])
        .toArray();
}
