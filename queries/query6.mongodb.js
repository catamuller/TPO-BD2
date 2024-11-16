const result = db.factura
    .aggregate([
        {
            $group: {
                _id: "$nro_cliente",
                total_facturas: { $count: {} }
            }
        },
        {
            $project: {
                nro_cliente: "$_id",
                total_facturas: 1,
                _id: 0
            }
        }
    ])
    .sort({ nro_cliente: 1 });

printjson(result.toArray());
