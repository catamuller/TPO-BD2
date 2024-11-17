/**
 * @typedef {Object} Client
 * @property {number} id
 * @property {string} name
 * @property {string} surname
 * @property {string} address
 * @property {number} active
 * @property {string} action
 */

/**
 * @param {ReturnType<import("mongodb").MongoClient["db"]>} db Mongo database
 * @param {Product} body The data
 * @return {Promise<boolean>} True if inserted, false if updated
 */
export default async function query13(db, body) {
    const cliente = db.collection("cliente");
    const before = await cliente.findOne({ _id: body.id });

    if (body.action === "upsert") {
        await db.updateOne(
            {
                _id: body.id
            },
            {
                $set: {
                    nombre: body.name,
                    apellido: body.surname,
                    direccion: body.address,
                    activo: body.active
                }
            },
            { upsert: true }
        );
    } else if (body.action === "delete") {
        await cliente.deleteOne({ _id: body.id });
    }

    return !before.id;
}
