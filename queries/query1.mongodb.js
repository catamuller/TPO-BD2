const result = db.cliente.aggregate([
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
]);

printjson(result.toArray());
