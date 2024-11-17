/**
 * @typedef {Object} Client
 * @property {number} id
 * @property {string} name
 * @property {string} surname
 * @property {string} address
 * @property {number} active
 */

/**
 * @param {ReturnType<import("mongodb").MongoClient["db"]>} db Mongo database
 * @param {Client} body The data
 * @return {Promise<boolean>} True if inserted, false if updated
 */
export async function upsert(db, body) {
    const cliente = db.collection("cliente");

    const before = await cliente.findOne({
        // @ts-ignore
        _id: body.id
    });

    await cliente.updateOne(
        {
            // @ts-ignore
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

    return !before;
}

/**
 * @param {ReturnType<import("mongodb").MongoClient["db"]>} db Mongo database
 * @param {number} id The client ID
 * @return {Promise<boolean>} True if deleted, false if not found
 */
export async function remove(db, id) {
    const cliente = db.collection("cliente");

    return (
        (
            await cliente.deleteOne({
                // @ts-ignore
                _id: id
            })
        ).deletedCount > 0
    );
}
