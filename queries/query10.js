export default async function query10(db) {
    const factura = db.collection("factura");

    return factura.aggregate([
        {
            $lookup: {
                from: "cliente",
                localField: "nro_cliente",
                foreignField: "_id",
                as: "info_cliente"
            }
        },
        {
            $unwind: "$info_cliente"
        },
        {
            $group: {
                _id: "$nro_cliente",
                total_iva: { $sum: "$total_con_iva" },
                nombre: { $first: "$info_cliente.nombre" },
                apellido: { $first: "$info_cliente.apellido" }
            }
        },
        {
            $project: {
                _id: 0,
                nombre: 1,
                apellido: 1,
                total_iva: 1
            }
        }
    ]);
}
