const result = db.factura.aggregate([
    {
        $lookup: {
            from: "cliente",
            foreignField: "_id",
            localField: "nro_cliente",
            as: "info_cliente"
        }
    },
    {
        $unwind: "$info_cliente"
    },
    {
        $match: {
            "info_cliente.nombre": "Kai",
            "info_cliente.apellido": "Bullock"
        }
    },
    {
        $project: {
            _id: 1,
            fecha: 1,
            iva: 1,
            total_con_iva: 1,
            total_sin_iva: 1,
            nro_cliente: 1
        }
    }
]);

printjson(result.toArray());
