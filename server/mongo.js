import { exec } from "node:child_process";
import { stat } from "node:fs/promises";

/**
 * Load a file into the mongo shell
 *
 * @param {number} n - The number of the query to execute
 * @returns {Promise<any>} The result of the mongo shell command
 */
export default function mongo(n) {
    return new Promise(async (resolve, reject) => {
        const path = `${import.meta.dirname}/../queries/query${n}.mongodb.js`;

        try {
            await stat(path);
        } catch (error) {
            reject(error);
        }

        exec(
            `mongosh mongodb://mongo --quiet --eval "const x = load('${path}')"`,
            (error, stdout, stderr) => {
                if (error || stderr) {
                    reject(error ?? stderr);
                }

                if (!stdout) {
                    reject("No data returned");
                }

                resolve(eval(`(${stdout})`));
            }
        );
    });
}
