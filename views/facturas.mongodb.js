db.createView("facturas_por_fecha", "factura", [
    {
        $sort: {
            fecha: 1
        }
    }
]);

db.facturas_por_fecha.find();
