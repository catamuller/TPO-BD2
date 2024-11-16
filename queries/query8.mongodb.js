const result = db.factura.aggregate([
	{ 	$unwind: "$detalle" },
	{ 	$group: { "_id": "$detalle.codigo_producto"} },
	{ 	$project: { 
			"_id":0,
			"codigo_producto": "$_id"  } }
]);

printjson(result.toArray());
