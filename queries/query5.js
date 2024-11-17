// const result = db.cliente.find(
//     {
//         _id: {
//             $nin: db.factura.distinct("nro_cliente")
//         }
//     },
//     {
//         nro_cliente: "$_id",
//         _id: 0
//     }
// );

//opcion 2 (mete todos los ids en un array, pero igual devuelve un objeto con ese array)

export default async function query5(db) {
    const cliente = db.collection("cliente");
    const factura = db.collection("factura");

    return cliente.aggregate([
        {
            $match: {
                _id: {
                    $nin: factura.distinct("nro_cliente")
                }
            }
        },
        {
            $group: {
                _id: null,
                clientes: { $push: "$_id" }
            }
        },
        {
            $project: {
                clientes: 1,
                _id: 0
            }
        }
    ]);
}
