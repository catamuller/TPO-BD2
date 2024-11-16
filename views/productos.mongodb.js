// Se necesita una vista que devuelva todos los productos que aún no han sido facturados.

import getProducts from "../redis/functions";

export default async function ( mongo, redis ) {

    const codigo_productos = await redis.keys("product:*");
    const codigo_productos_facturados = db.factura.distinct("detalle.codigo_producto");

    const result = codigo_productos.filter(x => !codigo_productos_facturados.includes( parseInt(x.split(":")[1], 10) ));

    printjson( await getProducts(result) );

}