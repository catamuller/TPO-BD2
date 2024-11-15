db.cliente.aggregate([{
    $match: {
        nombre: 'Jacob',
        apellido: 'Cooper'
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
]);