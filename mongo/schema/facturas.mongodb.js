// @ts-nocheck
/* global use, db */

use("facturacion");

db.factura.insertOne({
    _id: 1,
    fecha: "2016-05-28",
    total_sin_iva: 294369.60107421875,
    iva: 21.0,
    total_con_iva: 356187.2172998047,
    nro_cliente: 4,
    detalle: [
        {
            codigo_producto: 9,
            nro_item: 37,
            cantidad: 93.0
        },
        {
            codigo_producto: 13,
            nro_item: 29,
            cantidad: 67.0
        },
        {
            codigo_producto: 19,
            nro_item: 61,
            cantidad: 77.0
        },
        {
            codigo_producto: 35,
            nro_item: 145,
            cantidad: 10.0
        },
        {
            codigo_producto: 41,
            nro_item: 109,
            cantidad: 44.0
        },
        {
            codigo_producto: 44,
            nro_item: 159,
            cantidad: 48.0
        },
        {
            codigo_producto: 45,
            nro_item: 165,
            cantidad: 45.0
        },
        {
            codigo_producto: 58,
            nro_item: 162,
            cantidad: 59.0
        },
        {
            codigo_producto: 69,
            nro_item: 228,
            cantidad: 60.0
        },
        {
            codigo_producto: 73,
            nro_item: 283,
            cantidad: 10.0
        },
        {
            codigo_producto: 96,
            nro_item: 295,
            cantidad: 39.0
        },
        {
            codigo_producto: 100,
            nro_item: 209,
            cantidad: 77.0
        }
    ]
});
db.factura.insertOne({
    _id: 2,
    fecha: "2017-01-27",
    total_sin_iva: 218694.76943664553,
    iva: 21.0,
    total_con_iva: 264620.6710183411,
    nro_cliente: 22,
    detalle: [
        {
            codigo_producto: 8,
            nro_item: 4,
            cantidad: 71.0
        },
        {
            codigo_producto: 19,
            nro_item: 76,
            cantidad: 24.0
        },
        {
            codigo_producto: 24,
            nro_item: 97,
            cantidad: 36.0
        },
        {
            codigo_producto: 35,
            nro_item: 169,
            cantidad: 54.0
        },
        {
            codigo_producto: 40,
            nro_item: 146,
            cantidad: 35.0
        },
        {
            codigo_producto: 48,
            nro_item: 192,
            cantidad: 53.0
        },
        {
            codigo_producto: 62,
            nro_item: 119,
            cantidad: 80.0
        },
        {
            codigo_producto: 71,
            nro_item: 241,
            cantidad: 45.0
        }
    ]
});
db.factura.insertOne({
    _id: 3,
    fecha: "2016-06-05",
    total_sin_iva: 330372.8279296875,
    iva: 21.0,
    total_con_iva: 399751.12179492187,
    nro_cliente: 15,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 51,
            cantidad: 55.0
        },
        {
            codigo_producto: 2,
            nro_item: 33,
            cantidad: 52.0
        },
        {
            codigo_producto: 5,
            nro_item: 92,
            cantidad: 84.0
        },
        {
            codigo_producto: 11,
            nro_item: 35,
            cantidad: 30.0
        },
        {
            codigo_producto: 28,
            nro_item: 38,
            cantidad: 55.0
        },
        {
            codigo_producto: 48,
            nro_item: 174,
            cantidad: 18.0
        },
        {
            codigo_producto: 50,
            nro_item: 164,
            cantidad: 94.0
        },
        {
            codigo_producto: 53,
            nro_item: 126,
            cantidad: 87.0
        },
        {
            codigo_producto: 63,
            nro_item: 148,
            cantidad: 41.0
        },
        {
            codigo_producto: 68,
            nro_item: 213,
            cantidad: 87.0
        },
        {
            codigo_producto: 77,
            nro_item: 253,
            cantidad: 43.0
        },
        {
            codigo_producto: 80,
            nro_item: 291,
            cantidad: 38.0
        },
        {
            codigo_producto: 81,
            nro_item: 273,
            cantidad: 88.0
        },
        {
            codigo_producto: 82,
            nro_item: 220,
            cantidad: 33.0
        },
        {
            codigo_producto: 87,
            nro_item: 294,
            cantidad: 88.0
        }
    ]
});
db.factura.insertOne({
    _id: 4,
    fecha: "2017-02-09",
    total_sin_iva: 365977.9219635248,
    iva: 21.0,
    total_con_iva: 442833.28557586495,
    nro_cliente: 18,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 66,
            cantidad: 10.0
        },
        {
            codigo_producto: 5,
            nro_item: 48,
            cantidad: 25.0
        },
        {
            codigo_producto: 16,
            nro_item: 27,
            cantidad: 36.0
        },
        {
            codigo_producto: 20,
            nro_item: 94,
            cantidad: 58.0
        },
        {
            codigo_producto: 33,
            nro_item: 83,
            cantidad: 33.0
        },
        {
            codigo_producto: 39,
            nro_item: 130,
            cantidad: 84.0
        },
        {
            codigo_producto: 53,
            nro_item: 102,
            cantidad: 71.0
        },
        {
            codigo_producto: 64,
            nro_item: 105,
            cantidad: 81.0
        },
        {
            codigo_producto: 67,
            nro_item: 204,
            cantidad: 25.0
        },
        {
            codigo_producto: 69,
            nro_item: 262,
            cantidad: 81.0
        },
        {
            codigo_producto: 81,
            nro_item: 290,
            cantidad: 47.0
        },
        {
            codigo_producto: 96,
            nro_item: 256,
            cantidad: 84.0
        },
        {
            codigo_producto: 98,
            nro_item: 272,
            cantidad: 51.0
        },
        {
            codigo_producto: 99,
            nro_item: 231,
            cantidad: 83.0
        }
    ]
});
db.factura.insertOne({
    _id: 5,
    fecha: "2016-12-29",
    total_sin_iva: 127843.69975891113,
    iva: 21.0,
    total_con_iva: 154690.87670828245,
    nro_cliente: 20,
    detalle: [
        {
            codigo_producto: 12,
            nro_item: 42,
            cantidad: 50.0
        },
        {
            codigo_producto: 27,
            nro_item: 10,
            cantidad: 17.0
        },
        {
            codigo_producto: 30,
            nro_item: 45,
            cantidad: 21.0
        },
        {
            codigo_producto: 42,
            nro_item: 149,
            cantidad: 45.0
        },
        {
            codigo_producto: 56,
            nro_item: 113,
            cantidad: 16.0
        },
        {
            codigo_producto: 60,
            nro_item: 172,
            cantidad: 8.0
        },
        {
            codigo_producto: 62,
            nro_item: 198,
            cantidad: 71.0
        },
        {
            codigo_producto: 85,
            nro_item: 275,
            cantidad: 29.0
        }
    ]
});
db.factura.insertOne({
    _id: 6,
    fecha: "2017-03-28",
    total_sin_iva: 524431.2578697206,
    iva: 21.0,
    total_con_iva: 634561.8220223619,
    nro_cliente: 1,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 91,
            cantidad: 21.0
        },
        {
            codigo_producto: 12,
            nro_item: 95,
            cantidad: 30.0
        },
        {
            codigo_producto: 23,
            nro_item: 30,
            cantidad: 97.0
        },
        {
            codigo_producto: 34,
            nro_item: 114,
            cantidad: 76.0
        },
        {
            codigo_producto: 39,
            nro_item: 194,
            cantidad: 97.0
        },
        {
            codigo_producto: 42,
            nro_item: 100,
            cantidad: 27.0
        },
        {
            codigo_producto: 48,
            nro_item: 147,
            cantidad: 71.0
        },
        {
            codigo_producto: 53,
            nro_item: 103,
            cantidad: 7.0
        },
        {
            codigo_producto: 54,
            nro_item: 124,
            cantidad: 97.0
        },
        {
            codigo_producto: 56,
            nro_item: 189,
            cantidad: 97.0
        },
        {
            codigo_producto: 57,
            nro_item: 143,
            cantidad: 4.0
        },
        {
            codigo_producto: 63,
            nro_item: 134,
            cantidad: 69.0
        },
        {
            codigo_producto: 76,
            nro_item: 235,
            cantidad: 78.0
        },
        {
            codigo_producto: 83,
            nro_item: 255,
            cantidad: 7.0
        },
        {
            codigo_producto: 85,
            nro_item: 281,
            cantidad: 45.0
        },
        {
            codigo_producto: 92,
            nro_item: 276,
            cantidad: 96.0
        },
        {
            codigo_producto: 93,
            nro_item: 232,
            cantidad: 28.0
        }
    ]
});
db.factura.insertOne({
    _id: 7,
    fecha: "2016-12-08",
    total_sin_iva: 338123.7860046387,
    iva: 21.0,
    total_con_iva: 409129.7810656128,
    nro_cliente: 23,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 56,
            cantidad: 20.0
        },
        {
            codigo_producto: 6,
            nro_item: 23,
            cantidad: 13.0
        },
        {
            codigo_producto: 19,
            nro_item: 11,
            cantidad: 58.0
        },
        {
            codigo_producto: 23,
            nro_item: 64,
            cantidad: 58.0
        },
        {
            codigo_producto: 27,
            nro_item: 98,
            cantidad: 94.0
        },
        {
            codigo_producto: 33,
            nro_item: 60,
            cantidad: 65.0
        },
        {
            codigo_producto: 41,
            nro_item: 139,
            cantidad: 17.0
        },
        {
            codigo_producto: 60,
            nro_item: 168,
            cantidad: 53.0
        },
        {
            codigo_producto: 66,
            nro_item: 142,
            cantidad: 4.0
        },
        {
            codigo_producto: 73,
            nro_item: 293,
            cantidad: 12.0
        },
        {
            codigo_producto: 83,
            nro_item: 223,
            cantidad: 77.0
        },
        {
            codigo_producto: 87,
            nro_item: 242,
            cantidad: 93.0
        },
        {
            codigo_producto: 88,
            nro_item: 249,
            cantidad: 60.0
        },
        {
            codigo_producto: 92,
            nro_item: 208,
            cantidad: 6.0
        },
        {
            codigo_producto: 97,
            nro_item: 285,
            cantidad: 86.0
        },
        {
            codigo_producto: 98,
            nro_item: 216,
            cantidad: 8.0
        }
    ]
});
db.factura.insertOne({
    _id: 8,
    fecha: "2016-07-20",
    total_sin_iva: 253729.35178527836,
    iva: 21.0,
    total_con_iva: 307012.5156601868,
    nro_cliente: 22,
    detalle: [
        {
            codigo_producto: 31,
            nro_item: 63,
            cantidad: 38.0
        },
        {
            codigo_producto: 36,
            nro_item: 122,
            cantidad: 14.0
        },
        {
            codigo_producto: 38,
            nro_item: 136,
            cantidad: 38.0
        },
        {
            codigo_producto: 51,
            nro_item: 175,
            cantidad: 98.0
        },
        {
            codigo_producto: 62,
            nro_item: 182,
            cantidad: 83.0
        },
        {
            codigo_producto: 70,
            nro_item: 206,
            cantidad: 66.0
        },
        {
            codigo_producto: 73,
            nro_item: 260,
            cantidad: 24.0
        },
        {
            codigo_producto: 78,
            nro_item: 214,
            cantidad: 17.0
        },
        {
            codigo_producto: 79,
            nro_item: 300,
            cantidad: 94.0
        },
        {
            codigo_producto: 87,
            nro_item: 267,
            cantidad: 9.0
        }
    ]
});
db.factura.insertOne({
    _id: 9,
    fecha: "2016-03-27",
    total_sin_iva: 167792.96356201172,
    iva: 21.0,
    total_con_iva: 203029.4859100342,
    nro_cliente: 1,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 86,
            cantidad: 68.0
        },
        {
            codigo_producto: 11,
            nro_item: 40,
            cantidad: 5.0
        },
        {
            codigo_producto: 41,
            nro_item: 156,
            cantidad: 37.0
        },
        {
            codigo_producto: 45,
            nro_item: 191,
            cantidad: 5.0
        },
        {
            codigo_producto: 53,
            nro_item: 151,
            cantidad: 94.0
        },
        {
            codigo_producto: 67,
            nro_item: 298,
            cantidad: 38.0
        },
        {
            codigo_producto: 72,
            nro_item: 257,
            cantidad: 50.0
        },
        {
            codigo_producto: 74,
            nro_item: 297,
            cantidad: 5.0
        },
        {
            codigo_producto: 77,
            nro_item: 221,
            cantidad: 75.0
        },
        {
            codigo_producto: 86,
            nro_item: 277,
            cantidad: 26.0
        },
        {
            codigo_producto: 97,
            nro_item: 234,
            cantidad: 57.0
        }
    ]
});
db.factura.insertOne({
    _id: 10,
    fecha: "2016-12-14",
    total_sin_iva: 219496.86494750975,
    iva: 21.0,
    total_con_iva: 265591.2065864868,
    nro_cliente: 10,
    detalle: [
        {
            codigo_producto: 18,
            nro_item: 3,
            cantidad: 69.0
        },
        {
            codigo_producto: 26,
            nro_item: 12,
            cantidad: 54.0
        },
        {
            codigo_producto: 27,
            nro_item: 73,
            cantidad: 15.0
        },
        {
            codigo_producto: 28,
            nro_item: 24,
            cantidad: 43.0
        },
        {
            codigo_producto: 43,
            nro_item: 104,
            cantidad: 10.0
        },
        {
            codigo_producto: 56,
            nro_item: 106,
            cantidad: 26.0
        },
        {
            codigo_producto: 59,
            nro_item: 195,
            cantidad: 94.0
        },
        {
            codigo_producto: 65,
            nro_item: 196,
            cantidad: 2.0
        },
        {
            codigo_producto: 75,
            nro_item: 210,
            cantidad: 12.0
        },
        {
            codigo_producto: 84,
            nro_item: 271,
            cantidad: 95.0
        }
    ]
});
db.factura.insertOne({
    _id: 11,
    fecha: "2016-09-14",
    total_sin_iva: 335325.53523559566,
    iva: 21.0,
    total_con_iva: 405743.8976350707,
    nro_cliente: 9,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 90,
            cantidad: 21.0
        },
        {
            codigo_producto: 6,
            nro_item: 80,
            cantidad: 12.0
        },
        {
            codigo_producto: 15,
            nro_item: 41,
            cantidad: 20.0
        },
        {
            codigo_producto: 20,
            nro_item: 85,
            cantidad: 78.0
        },
        {
            codigo_producto: 32,
            nro_item: 18,
            cantidad: 31.0
        },
        {
            codigo_producto: 53,
            nro_item: 185,
            cantidad: 93.0
        },
        {
            codigo_producto: 58,
            nro_item: 125,
            cantidad: 20.0
        },
        {
            codigo_producto: 59,
            nro_item: 180,
            cantidad: 99.0
        },
        {
            codigo_producto: 61,
            nro_item: 157,
            cantidad: 91.0
        },
        {
            codigo_producto: 67,
            nro_item: 261,
            cantidad: 82.0
        },
        {
            codigo_producto: 71,
            nro_item: 287,
            cantidad: 22.0
        },
        {
            codigo_producto: 73,
            nro_item: 254,
            cantidad: 92.0
        },
        {
            codigo_producto: 91,
            nro_item: 274,
            cantidad: 16.0
        },
        {
            codigo_producto: 93,
            nro_item: 201,
            cantidad: 60.0
        }
    ]
});
db.factura.insertOne({
    _id: 12,
    fecha: "2017-01-14",
    total_sin_iva: 237517.565335083,
    iva: 21.0,
    total_con_iva: 287396.25405545044,
    nro_cliente: 7,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 93,
            cantidad: 100.0
        },
        {
            codigo_producto: 20,
            nro_item: 9,
            cantidad: 89.0
        },
        {
            codigo_producto: 37,
            nro_item: 138,
            cantidad: 5.0
        },
        {
            codigo_producto: 41,
            nro_item: 166,
            cantidad: 17.0
        },
        {
            codigo_producto: 43,
            nro_item: 183,
            cantidad: 8.0
        },
        {
            codigo_producto: 44,
            nro_item: 129,
            cantidad: 3.0
        },
        {
            codigo_producto: 76,
            nro_item: 259,
            cantidad: 6.0
        },
        {
            codigo_producto: 82,
            nro_item: 263,
            cantidad: 14.0
        },
        {
            codigo_producto: 88,
            nro_item: 288,
            cantidad: 73.0
        },
        {
            codigo_producto: 94,
            nro_item: 266,
            cantidad: 62.0
        },
        {
            codigo_producto: 97,
            nro_item: 226,
            cantidad: 4.0
        },
        {
            codigo_producto: 100,
            nro_item: 219,
            cantidad: 66.0
        }
    ]
});
db.factura.insertOne({
    _id: 13,
    fecha: "2016-08-17",
    total_sin_iva: 331612.31380462646,
    iva: 21.0,
    total_con_iva: 401250.899703598,
    nro_cliente: 16,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 53,
            cantidad: 92.0
        },
        {
            codigo_producto: 4,
            nro_item: 28,
            cantidad: 69.0
        },
        {
            codigo_producto: 24,
            nro_item: 1,
            cantidad: 46.0
        },
        {
            codigo_producto: 30,
            nro_item: 8,
            cantidad: 37.0
        },
        {
            codigo_producto: 32,
            nro_item: 72,
            cantidad: 95.0
        },
        {
            codigo_producto: 53,
            nro_item: 173,
            cantidad: 87.0
        },
        {
            codigo_producto: 61,
            nro_item: 155,
            cantidad: 71.0
        },
        {
            codigo_producto: 70,
            nro_item: 248,
            cantidad: 81.0
        },
        {
            codigo_producto: 83,
            nro_item: 230,
            cantidad: 92.0
        }
    ]
});
db.factura.insertOne({
    _id: 14,
    fecha: "2016-06-30",
    total_sin_iva: 183365.41443943977,
    iva: 21.0,
    total_con_iva: 221872.1514717221,
    nro_cliente: 21,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 36,
            cantidad: 72.0
        },
        {
            codigo_producto: 10,
            nro_item: 78,
            cantidad: 20.0
        },
        {
            codigo_producto: 48,
            nro_item: 144,
            cantidad: 40.0
        },
        {
            codigo_producto: 50,
            nro_item: 177,
            cantidad: 49.0
        },
        {
            codigo_producto: 51,
            nro_item: 133,
            cantidad: 68.0
        },
        {
            codigo_producto: 58,
            nro_item: 153,
            cantidad: 20.0
        },
        {
            codigo_producto: 74,
            nro_item: 224,
            cantidad: 11.0
        },
        {
            codigo_producto: 84,
            nro_item: 222,
            cantidad: 24.0
        },
        {
            codigo_producto: 91,
            nro_item: 229,
            cantidad: 70.0
        },
        {
            codigo_producto: 92,
            nro_item: 211,
            cantidad: 24.0
        },
        {
            codigo_producto: 94,
            nro_item: 250,
            cantidad: 32.0
        },
        {
            codigo_producto: 99,
            nro_item: 205,
            cantidad: 70.0
        }
    ]
});
db.factura.insertOne({
    _id: 15,
    fecha: "2016-10-29",
    total_sin_iva: 174369.00250396726,
    iva: 21.0,
    total_con_iva: 210986.4930298004,
    nro_cliente: 23,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 50,
            cantidad: 85.0
        },
        {
            codigo_producto: 7,
            nro_item: 2,
            cantidad: 89.0
        },
        {
            codigo_producto: 15,
            nro_item: 47,
            cantidad: 37.0
        },
        {
            codigo_producto: 24,
            nro_item: 49,
            cantidad: 52.0
        },
        {
            codigo_producto: 27,
            nro_item: 89,
            cantidad: 6.0
        },
        {
            codigo_producto: 34,
            nro_item: 178,
            cantidad: 60.0
        },
        {
            codigo_producto: 44,
            nro_item: 152,
            cantidad: 63.0
        },
        {
            codigo_producto: 48,
            nro_item: 188,
            cantidad: 27.0
        },
        {
            codigo_producto: 94,
            nro_item: 218,
            cantidad: 38.0
        }
    ]
});
db.factura.insertOne({
    _id: 16,
    fecha: "2016-05-21",
    total_sin_iva: 192966.8070594549,
    iva: 21.0,
    total_con_iva: 233489.83654194043,
    nro_cliente: 17,
    detalle: [
        {
            codigo_producto: 21,
            nro_item: 75,
            cantidad: 14.0
        },
        {
            codigo_producto: 24,
            nro_item: 70,
            cantidad: 82.0
        },
        {
            codigo_producto: 26,
            nro_item: 15,
            cantidad: 27.0
        },
        {
            codigo_producto: 52,
            nro_item: 150,
            cantidad: 38.0
        },
        {
            codigo_producto: 53,
            nro_item: 115,
            cantidad: 32.0
        },
        {
            codigo_producto: 64,
            nro_item: 127,
            cantidad: 67.0
        },
        {
            codigo_producto: 75,
            nro_item: 237,
            cantidad: 3.0
        },
        {
            codigo_producto: 76,
            nro_item: 265,
            cantidad: 36.0
        },
        {
            codigo_producto: 77,
            nro_item: 236,
            cantidad: 81.0
        },
        {
            codigo_producto: 99,
            nro_item: 225,
            cantidad: 13.0
        }
    ]
});
db.factura.insertOne({
    _id: 17,
    fecha: "2016-06-01",
    total_sin_iva: 265939.5978286743,
    iva: 21.0,
    total_con_iva: 321786.9133726959,
    nro_cliente: 4,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 58,
            cantidad: 21.0
        },
        {
            codigo_producto: 14,
            nro_item: 13,
            cantidad: 56.0
        },
        {
            codigo_producto: 18,
            nro_item: 52,
            cantidad: 36.0
        },
        {
            codigo_producto: 23,
            nro_item: 54,
            cantidad: 27.0
        },
        {
            codigo_producto: 34,
            nro_item: 117,
            cantidad: 35.0
        },
        {
            codigo_producto: 56,
            nro_item: 154,
            cantidad: 42.0
        },
        {
            codigo_producto: 66,
            nro_item: 128,
            cantidad: 79.0
        },
        {
            codigo_producto: 75,
            nro_item: 270,
            cantidad: 87.0
        },
        {
            codigo_producto: 77,
            nro_item: 246,
            cantidad: 100.0
        },
        {
            codigo_producto: 80,
            nro_item: 217,
            cantidad: 57.0
        },
        {
            codigo_producto: 89,
            nro_item: 264,
            cantidad: 58.0
        },
        {
            codigo_producto: 95,
            nro_item: 203,
            cantidad: 78.0
        },
        {
            codigo_producto: 98,
            nro_item: 202,
            cantidad: 16.0
        }
    ]
});
db.factura.insertOne({
    _id: 18,
    fecha: "2016-08-10",
    total_sin_iva: 198124.46148376467,
    iva: 21.0,
    total_con_iva: 239730.59839535525,
    nro_cliente: 3,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 69,
            cantidad: 89.0
        },
        {
            codigo_producto: 12,
            nro_item: 31,
            cantidad: 28.0
        },
        {
            codigo_producto: 17,
            nro_item: 88,
            cantidad: 27.0
        },
        {
            codigo_producto: 28,
            nro_item: 81,
            cantidad: 6.0
        },
        {
            codigo_producto: 32,
            nro_item: 25,
            cantidad: 14.0
        },
        {
            codigo_producto: 33,
            nro_item: 100,
            cantidad: 38.0
        },
        {
            codigo_producto: 54,
            nro_item: 176,
            cantidad: 16.0
        },
        {
            codigo_producto: 61,
            nro_item: 179,
            cantidad: 57.0
        },
        {
            codigo_producto: 69,
            nro_item: 212,
            cantidad: 88.0
        },
        {
            codigo_producto: 88,
            nro_item: 207,
            cantidad: 27.0
        }
    ]
});
db.factura.insertOne({
    _id: 19,
    fecha: "2016-05-21",
    total_sin_iva: 253521.36583862305,
    iva: 21.0,
    total_con_iva: 306760.8526647339,
    nro_cliente: 1,
    detalle: [
        {
            codigo_producto: 16,
            nro_item: 84,
            cantidad: 1.0
        },
        {
            codigo_producto: 23,
            nro_item: 39,
            cantidad: 32.0
        },
        {
            codigo_producto: 33,
            nro_item: 67,
            cantidad: 69.0
        },
        {
            codigo_producto: 36,
            nro_item: 167,
            cantidad: 31.0
        },
        {
            codigo_producto: 45,
            nro_item: 116,
            cantidad: 58.0
        },
        {
            codigo_producto: 72,
            nro_item: 251,
            cantidad: 63.0
        },
        {
            codigo_producto: 83,
            nro_item: 299,
            cantidad: 22.0
        },
        {
            codigo_producto: 92,
            nro_item: 284,
            cantidad: 89.0
        },
        {
            codigo_producto: 93,
            nro_item: 227,
            cantidad: 94.0
        },
        {
            codigo_producto: 98,
            nro_item: 245,
            cantidad: 15.0
        }
    ]
});
db.factura.insertOne({
    _id: 20,
    fecha: "2016-04-20",
    total_sin_iva: 116308.97188110353,
    iva: 21.0,
    total_con_iva: 140733.85597613527,
    nro_cliente: 22,
    detalle: [
        {
            codigo_producto: 23,
            nro_item: 79,
            cantidad: 95.0
        },
        {
            codigo_producto: 39,
            nro_item: 171,
            cantidad: 42.0
        },
        {
            codigo_producto: 52,
            nro_item: 140,
            cantidad: 24.0
        },
        {
            codigo_producto: 57,
            nro_item: 186,
            cantidad: 23.0
        },
        {
            codigo_producto: 63,
            nro_item: 158,
            cantidad: 31.0
        },
        {
            codigo_producto: 82,
            nro_item: 238,
            cantidad: 76.0
        }
    ]
});
db.factura.insertOne({
    _id: 21,
    fecha: "2017-02-09",
    total_sin_iva: 390131.96190490713,
    iva: 21.0,
    total_con_iva: 472059.67390493763,
    nro_cliente: 14,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 19,
            cantidad: 66.0
        },
        {
            codigo_producto: 4,
            nro_item: 74,
            cantidad: 42.0
        },
        {
            codigo_producto: 16,
            nro_item: 55,
            cantidad: 72.0
        },
        {
            codigo_producto: 26,
            nro_item: 43,
            cantidad: 64.0
        },
        {
            codigo_producto: 32,
            nro_item: 26,
            cantidad: 48.0
        },
        {
            codigo_producto: 34,
            nro_item: 120,
            cantidad: 82.0
        },
        {
            codigo_producto: 36,
            nro_item: 181,
            cantidad: 41.0
        },
        {
            codigo_producto: 40,
            nro_item: 141,
            cantidad: 57.0
        },
        {
            codigo_producto: 61,
            nro_item: 135,
            cantidad: 50.0
        },
        {
            codigo_producto: 66,
            nro_item: 111,
            cantidad: 26.0
        },
        {
            codigo_producto: 70,
            nro_item: 292,
            cantidad: 99.0
        },
        {
            codigo_producto: 84,
            nro_item: 244,
            cantidad: 34.0
        },
        {
            codigo_producto: 97,
            nro_item: 243,
            cantidad: 16.0
        }
    ]
});
db.factura.insertOne({
    _id: 22,
    fecha: "2016-05-31",
    total_sin_iva: 314995.10694961547,
    iva: 21.0,
    total_con_iva: 381144.0794090347,
    nro_cliente: 15,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 32,
            cantidad: 44.0
        },
        {
            codigo_producto: 6,
            nro_item: 99,
            cantidad: 86.0
        },
        {
            codigo_producto: 11,
            nro_item: 7,
            cantidad: 18.0
        },
        {
            codigo_producto: 16,
            nro_item: 16,
            cantidad: 89.0
        },
        {
            codigo_producto: 25,
            nro_item: 14,
            cantidad: 4.0
        },
        {
            codigo_producto: 34,
            nro_item: 132,
            cantidad: 26.0
        },
        {
            codigo_producto: 48,
            nro_item: 199,
            cantidad: 71.0
        },
        {
            codigo_producto: 50,
            nro_item: 101,
            cantidad: 71.0
        },
        {
            codigo_producto: 62,
            nro_item: 131,
            cantidad: 90.0
        },
        {
            codigo_producto: 71,
            nro_item: 280,
            cantidad: 6.0
        },
        {
            codigo_producto: 78,
            nro_item: 289,
            cantidad: 25.0
        },
        {
            codigo_producto: 79,
            nro_item: 239,
            cantidad: 61.0
        }
    ]
});
db.factura.insertOne({
    _id: 23,
    fecha: "2017-03-01",
    total_sin_iva: 426362.0094532013,
    iva: 21.0,
    total_con_iva: 515898.0314383736,
    nro_cliente: 3,
    detalle: [
        {
            codigo_producto: 12,
            nro_item: 87,
            cantidad: 94.0
        },
        {
            codigo_producto: 14,
            nro_item: 20,
            cantidad: 96.0
        },
        {
            codigo_producto: 16,
            nro_item: 17,
            cantidad: 80.0
        },
        {
            codigo_producto: 18,
            nro_item: 57,
            cantidad: 66.0
        },
        {
            codigo_producto: 25,
            nro_item: 82,
            cantidad: 71.0
        },
        {
            codigo_producto: 29,
            nro_item: 96,
            cantidad: 85.0
        },
        {
            codigo_producto: 41,
            nro_item: 137,
            cantidad: 63.0
        },
        {
            codigo_producto: 49,
            nro_item: 170,
            cantidad: 43.0
        },
        {
            codigo_producto: 53,
            nro_item: 112,
            cantidad: 36.0
        },
        {
            codigo_producto: 55,
            nro_item: 123,
            cantidad: 20.0
        },
        {
            codigo_producto: 59,
            nro_item: 110,
            cantidad: 36.0
        },
        {
            codigo_producto: 64,
            nro_item: 160,
            cantidad: 62.0
        },
        {
            codigo_producto: 89,
            nro_item: 215,
            cantidad: 39.0
        },
        {
            codigo_producto: 98,
            nro_item: 268,
            cantidad: 34.0
        },
        {
            codigo_producto: 100,
            nro_item: 279,
            cantidad: 88.0
        }
    ]
});
db.factura.insertOne({
    _id: 24,
    fecha: "2016-05-16",
    total_sin_iva: 242470.33775329593,
    iva: 21.0,
    total_con_iva: 293389.1086814881,
    nro_cliente: 17,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 21,
            cantidad: 70.0
        },
        {
            codigo_producto: 18,
            nro_item: 44,
            cantidad: 65.0
        },
        {
            codigo_producto: 23,
            nro_item: 34,
            cantidad: 91.0
        },
        {
            codigo_producto: 27,
            nro_item: 6,
            cantidad: 12.0
        },
        {
            codigo_producto: 31,
            nro_item: 62,
            cantidad: 5.0
        },
        {
            codigo_producto: 33,
            nro_item: 22,
            cantidad: 43.0
        },
        {
            codigo_producto: 38,
            nro_item: 161,
            cantidad: 96.0
        },
        {
            codigo_producto: 40,
            nro_item: 190,
            cantidad: 78.0
        },
        {
            codigo_producto: 45,
            nro_item: 118,
            cantidad: 1.0
        },
        {
            codigo_producto: 55,
            nro_item: 193,
            cantidad: 89.0
        },
        {
            codigo_producto: 56,
            nro_item: 107,
            cantidad: 34.0
        },
        {
            codigo_producto: 68,
            nro_item: 252,
            cantidad: 75.0
        }
    ]
});
db.factura.insertOne({
    _id: 25,
    fecha: "2017-01-15",
    total_sin_iva: 214847.88184204104,
    iva: 21.0,
    total_con_iva: 259965.93702886964,
    nro_cliente: 22,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 5,
            cantidad: 22.0
        },
        {
            codigo_producto: 11,
            nro_item: 65,
            cantidad: 70.0
        },
        {
            codigo_producto: 22,
            nro_item: 68,
            cantidad: 59.0
        },
        {
            codigo_producto: 61,
            nro_item: 121,
            cantidad: 24.0
        },
        {
            codigo_producto: 88,
            nro_item: 269,
            cantidad: 23.0
        },
        {
            codigo_producto: 94,
            nro_item: 233,
            cantidad: 74.0
        },
        {
            codigo_producto: 96,
            nro_item: 282,
            cantidad: 26.0
        },
        {
            codigo_producto: 97,
            nro_item: 286,
            cantidad: 97.0
        }
    ]
});
db.factura.insertOne({
    _id: 26,
    fecha: "2016-04-01",
    total_sin_iva: 220206.76993103029,
    iva: 21.0,
    total_con_iva: 266450.19161654665,
    nro_cliente: 13,
    detalle: [
        {
            codigo_producto: 49,
            nro_item: 474,
            cantidad: 39.0
        },
        {
            codigo_producto: 63,
            nro_item: 432,
            cantidad: 51.0
        },
        {
            codigo_producto: 91,
            nro_item: 525,
            cantidad: 99.0
        },
        {
            codigo_producto: 92,
            nro_item: 600,
            cantidad: 61.0
        },
        {
            codigo_producto: 100,
            nro_item: 501,
            cantidad: 65.0
        }
    ]
});
db.factura.insertOne({
    _id: 27,
    fecha: "2017-03-10",
    total_sin_iva: 355809.3137599946,
    iva: 21.0,
    total_con_iva: 430529.26964959345,
    nro_cliente: 22,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 316,
            cantidad: 71.0
        },
        {
            codigo_producto: 3,
            nro_item: 362,
            cantidad: 43.0
        },
        {
            codigo_producto: 14,
            nro_item: 365,
            cantidad: 81.0
        },
        {
            codigo_producto: 29,
            nro_item: 346,
            cantidad: 81.0
        },
        {
            codigo_producto: 30,
            nro_item: 387,
            cantidad: 91.0
        },
        {
            codigo_producto: 40,
            nro_item: 445,
            cantidad: 24.0
        },
        {
            codigo_producto: 43,
            nro_item: 428,
            cantidad: 64.0
        },
        {
            codigo_producto: 56,
            nro_item: 485,
            cantidad: 59.0
        },
        {
            codigo_producto: 69,
            nro_item: 521,
            cantidad: 18.0
        },
        {
            codigo_producto: 70,
            nro_item: 589,
            cantidad: 61.0
        },
        {
            codigo_producto: 85,
            nro_item: 556,
            cantidad: 42.0
        },
        {
            codigo_producto: 88,
            nro_item: 517,
            cantidad: 33.0
        },
        {
            codigo_producto: 95,
            nro_item: 564,
            cantidad: 53.0
        },
        {
            codigo_producto: 96,
            nro_item: 582,
            cantidad: 85.0
        },
        {
            codigo_producto: 100,
            nro_item: 547,
            cantidad: 2.0
        }
    ]
});
db.factura.insertOne({
    _id: 28,
    fecha: "2017-02-15",
    total_sin_iva: 382908.52656555176,
    iva: 21.0,
    total_con_iva: 463319.3171443176,
    nro_cliente: 23,
    detalle: [
        {
            codigo_producto: 15,
            nro_item: 381,
            cantidad: 12.0
        },
        {
            codigo_producto: 22,
            nro_item: 370,
            cantidad: 9.0
        },
        {
            codigo_producto: 23,
            nro_item: 345,
            cantidad: 16.0
        },
        {
            codigo_producto: 26,
            nro_item: 354,
            cantidad: 72.0
        },
        {
            codigo_producto: 39,
            nro_item: 482,
            cantidad: 60.0
        },
        {
            codigo_producto: 44,
            nro_item: 402,
            cantidad: 17.0
        },
        {
            codigo_producto: 46,
            nro_item: 472,
            cantidad: 25.0
        },
        {
            codigo_producto: 48,
            nro_item: 424,
            cantidad: 6.0
        },
        {
            codigo_producto: 53,
            nro_item: 444,
            cantidad: 32.0
        },
        {
            codigo_producto: 66,
            nro_item: 446,
            cantidad: 54.0
        },
        {
            codigo_producto: 69,
            nro_item: 558,
            cantidad: 36.0
        },
        {
            codigo_producto: 70,
            nro_item: 593,
            cantidad: 90.0
        },
        {
            codigo_producto: 79,
            nro_item: 516,
            cantidad: 87.0
        },
        {
            codigo_producto: 80,
            nro_item: 537,
            cantidad: 65.0
        },
        {
            codigo_producto: 85,
            nro_item: 557,
            cantidad: 81.0
        }
    ]
});
db.factura.insertOne({
    _id: 29,
    fecha: "2016-05-17",
    total_sin_iva: 339807.5715454102,
    iva: 21.0,
    total_con_iva: 411167.16156994633,
    nro_cliente: 8,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 335,
            cantidad: 36.0
        },
        {
            codigo_producto: 8,
            nro_item: 361,
            cantidad: 33.0
        },
        {
            codigo_producto: 11,
            nro_item: 366,
            cantidad: 99.0
        },
        {
            codigo_producto: 26,
            nro_item: 344,
            cantidad: 85.0
        },
        {
            codigo_producto: 36,
            nro_item: 425,
            cantidad: 81.0
        },
        {
            codigo_producto: 42,
            nro_item: 454,
            cantidad: 36.0
        },
        {
            codigo_producto: 67,
            nro_item: 526,
            cantidad: 58.0
        },
        {
            codigo_producto: 78,
            nro_item: 553,
            cantidad: 23.0
        },
        {
            codigo_producto: 80,
            nro_item: 545,
            cantidad: 91.0
        },
        {
            codigo_producto: 97,
            nro_item: 528,
            cantidad: 63.0
        }
    ]
});
db.factura.insertOne({
    _id: 30,
    fecha: "2017-03-23",
    total_sin_iva: 275840.48277893063,
    iva: 21.0,
    total_con_iva: 333766.98416250607,
    nro_cliente: 22,
    detalle: [
        {
            codigo_producto: 17,
            nro_item: 383,
            cantidad: 37.0
        },
        {
            codigo_producto: 38,
            nro_item: 409,
            cantidad: 4.0
        },
        {
            codigo_producto: 55,
            nro_item: 463,
            cantidad: 43.0
        },
        {
            codigo_producto: 59,
            nro_item: 468,
            cantidad: 54.0
        },
        {
            codigo_producto: 64,
            nro_item: 471,
            cantidad: 73.0
        },
        {
            codigo_producto: 72,
            nro_item: 531,
            cantidad: 99.0
        },
        {
            codigo_producto: 77,
            nro_item: 577,
            cantidad: 7.0
        },
        {
            codigo_producto: 78,
            nro_item: 529,
            cantidad: 46.0
        },
        {
            codigo_producto: 85,
            nro_item: 595,
            cantidad: 29.0
        },
        {
            codigo_producto: 87,
            nro_item: 571,
            cantidad: 15.0
        }
    ]
});
db.factura.insertOne({
    _id: 31,
    fecha: "2016-10-19",
    total_sin_iva: 69624.10851745606,
    iva: 21.0,
    total_con_iva: 84245.17130612183,
    nro_cliente: 12,
    detalle: [
        {
            codigo_producto: 25,
            nro_item: 324,
            cantidad: 84.0
        },
        {
            codigo_producto: 30,
            nro_item: 395,
            cantidad: 40.0
        },
        {
            codigo_producto: 68,
            nro_item: 585,
            cantidad: 71.0
        }
    ]
});
db.factura.insertOne({
    _id: 32,
    fecha: "2016-05-25",
    total_sin_iva: 226429.6649963379,
    iva: 21.0,
    total_con_iva: 273979.89464556886,
    nro_cliente: 15,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 332,
            cantidad: 76.0
        },
        {
            codigo_producto: 15,
            nro_item: 340,
            cantidad: 96.0
        },
        {
            codigo_producto: 17,
            nro_item: 389,
            cantidad: 54.0
        },
        {
            codigo_producto: 35,
            nro_item: 448,
            cantidad: 61.0
        },
        {
            codigo_producto: 39,
            nro_item: 477,
            cantidad: 19.0
        },
        {
            codigo_producto: 40,
            nro_item: 417,
            cantidad: 43.0
        },
        {
            codigo_producto: 44,
            nro_item: 439,
            cantidad: 81.0
        },
        {
            codigo_producto: 86,
            nro_item: 542,
            cantidad: 29.0
        }
    ]
});
db.factura.insertOne({
    _id: 33,
    fecha: "2016-08-19",
    total_sin_iva: 351165.87366943364,
    iva: 21.0,
    total_con_iva: 424910.7071400147,
    nro_cliente: 12,
    detalle: [
        {
            codigo_producto: 9,
            nro_item: 343,
            cantidad: 88.0
        },
        {
            codigo_producto: 10,
            nro_item: 358,
            cantidad: 81.0
        },
        {
            codigo_producto: 21,
            nro_item: 356,
            cantidad: 65.0
        },
        {
            codigo_producto: 29,
            nro_item: 341,
            cantidad: 96.0
        },
        {
            codigo_producto: 35,
            nro_item: 480,
            cantidad: 76.0
        },
        {
            codigo_producto: 40,
            nro_item: 489,
            cantidad: 54.0
        },
        {
            codigo_producto: 41,
            nro_item: 434,
            cantidad: 43.0
        },
        {
            codigo_producto: 46,
            nro_item: 495,
            cantidad: 40.0
        },
        {
            codigo_producto: 65,
            nro_item: 500,
            cantidad: 53.0
        },
        {
            codigo_producto: 75,
            nro_item: 580,
            cantidad: 38.0
        },
        {
            codigo_producto: 80,
            nro_item: 519,
            cantidad: 29.0
        },
        {
            codigo_producto: 88,
            nro_item: 514,
            cantidad: 8.0
        },
        {
            codigo_producto: 90,
            nro_item: 523,
            cantidad: 79.0
        },
        {
            codigo_producto: 91,
            nro_item: 538,
            cantidad: 82.0
        },
        {
            codigo_producto: 92,
            nro_item: 599,
            cantidad: 35.0
        }
    ]
});
db.factura.insertOne({
    _id: 34,
    fecha: "2016-08-30",
    total_sin_iva: 157537.54832339284,
    iva: 21.0,
    total_con_iva: 190620.43347130532,
    nro_cliente: 13,
    detalle: [
        {
            codigo_producto: 18,
            nro_item: 373,
            cantidad: 64.0
        },
        {
            codigo_producto: 26,
            nro_item: 310,
            cantidad: 96.0
        },
        {
            codigo_producto: 37,
            nro_item: 440,
            cantidad: 84.0
        },
        {
            codigo_producto: 46,
            nro_item: 408,
            cantidad: 8.0
        },
        {
            codigo_producto: 71,
            nro_item: 530,
            cantidad: 31.0
        },
        {
            codigo_producto: 99,
            nro_item: 515,
            cantidad: 74.0
        },
        {
            codigo_producto: 100,
            nro_item: 504,
            cantidad: 24.0
        }
    ]
});
db.factura.insertOne({
    _id: 35,
    fecha: "2016-08-26",
    total_sin_iva: 163800.4038668871,
    iva: 21.0,
    total_con_iva: 198198.48867893338,
    nro_cliente: 7,
    detalle: [
        {
            codigo_producto: 8,
            nro_item: 347,
            cantidad: 8.0
        },
        {
            codigo_producto: 21,
            nro_item: 314,
            cantidad: 34.0
        },
        {
            codigo_producto: 23,
            nro_item: 348,
            cantidad: 50.0
        },
        {
            codigo_producto: 29,
            nro_item: 317,
            cantidad: 5.0
        },
        {
            codigo_producto: 34,
            nro_item: 452,
            cantidad: 69.0
        },
        {
            codigo_producto: 35,
            nro_item: 460,
            cantidad: 95.0
        },
        {
            codigo_producto: 50,
            nro_item: 427,
            cantidad: 48.0
        },
        {
            codigo_producto: 75,
            nro_item: 561,
            cantidad: 44.0
        },
        {
            codigo_producto: 77,
            nro_item: 560,
            cantidad: 2.0
        },
        {
            codigo_producto: 80,
            nro_item: 520,
            cantidad: 7.0
        },
        {
            codigo_producto: 99,
            nro_item: 596,
            cantidad: 23.0
        }
    ]
});
db.factura.insertOne({
    _id: 36,
    fecha: "2016-08-21",
    total_sin_iva: 341415.6376373291,
    iva: 21.0,
    total_con_iva: 413112.92154116824,
    nro_cliente: 20,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 386,
            cantidad: 4.0
        },
        {
            codigo_producto: 9,
            nro_item: 312,
            cantidad: 44.0
        },
        {
            codigo_producto: 13,
            nro_item: 396,
            cantidad: 50.0
        },
        {
            codigo_producto: 31,
            nro_item: 372,
            cantidad: 96.0
        },
        {
            codigo_producto: 34,
            nro_item: 461,
            cantidad: 76.0
        },
        {
            codigo_producto: 35,
            nro_item: 494,
            cantidad: 88.0
        },
        {
            codigo_producto: 36,
            nro_item: 462,
            cantidad: 52.0
        },
        {
            codigo_producto: 44,
            nro_item: 465,
            cantidad: 9.0
        },
        {
            codigo_producto: 67,
            nro_item: 588,
            cantidad: 16.0
        },
        {
            codigo_producto: 70,
            nro_item: 549,
            cantidad: 40.0
        },
        {
            codigo_producto: 79,
            nro_item: 566,
            cantidad: 43.0
        },
        {
            codigo_producto: 94,
            nro_item: 541,
            cantidad: 38.0
        },
        {
            codigo_producto: 97,
            nro_item: 535,
            cantidad: 93.0
        }
    ]
});
db.factura.insertOne({
    _id: 37,
    fecha: "2016-07-06",
    total_sin_iva: 265121.14291629795,
    iva: 21.0,
    total_con_iva: 320796.5829287205,
    nro_cliente: 16,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 328,
            cantidad: 19.0
        },
        {
            codigo_producto: 9,
            nro_item: 364,
            cantidad: 21.0
        },
        {
            codigo_producto: 10,
            nro_item: 338,
            cantidad: 65.0
        },
        {
            codigo_producto: 17,
            nro_item: 349,
            cantidad: 76.0
        },
        {
            codigo_producto: 34,
            nro_item: 496,
            cantidad: 46.0
        },
        {
            codigo_producto: 38,
            nro_item: 422,
            cantidad: 53.0
        },
        {
            codigo_producto: 39,
            nro_item: 429,
            cantidad: 25.0
        },
        {
            codigo_producto: 41,
            nro_item: 435,
            cantidad: 37.0
        },
        {
            codigo_producto: 42,
            nro_item: 406,
            cantidad: 31.0
        },
        {
            codigo_producto: 45,
            nro_item: 457,
            cantidad: 11.0
        },
        {
            codigo_producto: 47,
            nro_item: 449,
            cantidad: 90.0
        },
        {
            codigo_producto: 50,
            nro_item: 411,
            cantidad: 29.0
        },
        {
            codigo_producto: 57,
            nro_item: 426,
            cantidad: 60.0
        },
        {
            codigo_producto: 59,
            nro_item: 443,
            cantidad: 6.0
        },
        {
            codigo_producto: 60,
            nro_item: 407,
            cantidad: 32.0
        },
        {
            codigo_producto: 80,
            nro_item: 573,
            cantidad: 76.0
        },
        {
            codigo_producto: 97,
            nro_item: 540,
            cantidad: 1.0
        }
    ]
});
db.factura.insertOne({
    _id: 38,
    fecha: "2016-08-21",
    total_sin_iva: 278504.631628418,
    iva: 21.0,
    total_con_iva: 336990.60427038575,
    nro_cliente: 25,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 374,
            cantidad: 34.0
        },
        {
            codigo_producto: 17,
            nro_item: 359,
            cantidad: 28.0
        },
        {
            codigo_producto: 19,
            nro_item: 326,
            cantidad: 22.0
        },
        {
            codigo_producto: 20,
            nro_item: 375,
            cantidad: 68.0
        },
        {
            codigo_producto: 23,
            nro_item: 367,
            cantidad: 37.0
        },
        {
            codigo_producto: 64,
            nro_item: 483,
            cantidad: 94.0
        },
        {
            codigo_producto: 74,
            nro_item: 581,
            cantidad: 69.0
        },
        {
            codigo_producto: 90,
            nro_item: 546,
            cantidad: 94.0
        },
        {
            codigo_producto: 94,
            nro_item: 524,
            cantidad: 29.0
        },
        {
            codigo_producto: 95,
            nro_item: 568,
            cantidad: 20.0
        }
    ]
});
db.factura.insertOne({
    _id: 39,
    fecha: "2016-09-25",
    total_sin_iva: 166210.54415130615,
    iva: 21.0,
    total_con_iva: 201114.75842308044,
    nro_cliente: 6,
    detalle: [
        {
            codigo_producto: 23,
            nro_item: 325,
            cantidad: 9.0
        },
        {
            codigo_producto: 26,
            nro_item: 376,
            cantidad: 13.0
        },
        {
            codigo_producto: 38,
            nro_item: 450,
            cantidad: 53.0
        },
        {
            codigo_producto: 40,
            nro_item: 401,
            cantidad: 58.0
        },
        {
            codigo_producto: 41,
            nro_item: 412,
            cantidad: 95.0
        },
        {
            codigo_producto: 46,
            nro_item: 421,
            cantidad: 96.0
        },
        {
            codigo_producto: 55,
            nro_item: 414,
            cantidad: 3.0
        },
        {
            codigo_producto: 63,
            nro_item: 469,
            cantidad: 13.0
        },
        {
            codigo_producto: 73,
            nro_item: 570,
            cantidad: 71.0
        },
        {
            codigo_producto: 92,
            nro_item: 576,
            cantidad: 21.0
        },
        {
            codigo_producto: 95,
            nro_item: 543,
            cantidad: 99.0
        }
    ]
});
db.factura.insertOne({
    _id: 40,
    fecha: "2016-08-25",
    total_sin_iva: 223034.7343902588,
    iva: 21.0,
    total_con_iva: 269872.02861221315,
    nro_cliente: 9,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 302,
            cantidad: 60.0
        },
        {
            codigo_producto: 30,
            nro_item: 353,
            cantidad: 46.0
        },
        {
            codigo_producto: 41,
            nro_item: 430,
            cantidad: 25.0
        },
        {
            codigo_producto: 54,
            nro_item: 451,
            cantidad: 13.0
        },
        {
            codigo_producto: 56,
            nro_item: 447,
            cantidad: 38.0
        },
        {
            codigo_producto: 72,
            nro_item: 511,
            cantidad: 98.0
        },
        {
            codigo_producto: 84,
            nro_item: 554,
            cantidad: 22.0
        },
        {
            codigo_producto: 87,
            nro_item: 572,
            cantidad: 67.0
        },
        {
            codigo_producto: 90,
            nro_item: 555,
            cantidad: 35.0
        },
        {
            codigo_producto: 97,
            nro_item: 532,
            cantidad: 10.0
        }
    ]
});
db.factura.insertOne({
    _id: 41,
    fecha: "2016-07-01",
    total_sin_iva: 344958.13027038577,
    iva: 21.0,
    total_con_iva: 417399.33762716677,
    nro_cliente: 18,
    detalle: [
        {
            codigo_producto: 6,
            nro_item: 342,
            cantidad: 51.0
        },
        {
            codigo_producto: 7,
            nro_item: 315,
            cantidad: 92.0
        },
        {
            codigo_producto: 14,
            nro_item: 397,
            cantidad: 60.0
        },
        {
            codigo_producto: 18,
            nro_item: 323,
            cantidad: 65.0
        },
        {
            codigo_producto: 34,
            nro_item: 487,
            cantidad: 52.0
        },
        {
            codigo_producto: 35,
            nro_item: 484,
            cantidad: 71.0
        },
        {
            codigo_producto: 36,
            nro_item: 488,
            cantidad: 23.0
        },
        {
            codigo_producto: 39,
            nro_item: 490,
            cantidad: 39.0
        },
        {
            codigo_producto: 52,
            nro_item: 433,
            cantidad: 88.0
        },
        {
            codigo_producto: 64,
            nro_item: 473,
            cantidad: 66.0
        },
        {
            codigo_producto: 68,
            nro_item: 505,
            cantidad: 58.0
        },
        {
            codigo_producto: 69,
            nro_item: 510,
            cantidad: 27.0
        },
        {
            codigo_producto: 77,
            nro_item: 533,
            cantidad: 7.0
        },
        {
            codigo_producto: 95,
            nro_item: 522,
            cantidad: 57.0
        }
    ]
});
db.factura.insertOne({
    _id: 42,
    fecha: "2016-04-11",
    total_sin_iva: 293331.64907836914,
    iva: 21.0,
    total_con_iva: 354931.29538482666,
    nro_cliente: 3,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 351,
            cantidad: 46.0
        },
        {
            codigo_producto: 23,
            nro_item: 337,
            cantidad: 13.0
        },
        {
            codigo_producto: 26,
            nro_item: 319,
            cantidad: 93.0
        },
        {
            codigo_producto: 52,
            nro_item: 404,
            cantidad: 33.0
        },
        {
            codigo_producto: 56,
            nro_item: 464,
            cantidad: 8.0
        },
        {
            codigo_producto: 61,
            nro_item: 418,
            cantidad: 81.0
        },
        {
            codigo_producto: 74,
            nro_item: 534,
            cantidad: 57.0
        },
        {
            codigo_producto: 75,
            nro_item: 544,
            cantidad: 18.0
        },
        {
            codigo_producto: 79,
            nro_item: 578,
            cantidad: 80.0
        },
        {
            codigo_producto: 82,
            nro_item: 512,
            cantidad: 36.0
        },
        {
            codigo_producto: 84,
            nro_item: 507,
            cantidad: 69.0
        },
        {
            codigo_producto: 92,
            nro_item: 586,
            cantidad: 44.0
        },
        {
            codigo_producto: 96,
            nro_item: 548,
            cantidad: 26.0
        }
    ]
});
db.factura.insertOne({
    _id: 43,
    fecha: "2016-08-09",
    total_sin_iva: 391108.89900972845,
    iva: 21.0,
    total_con_iva: 473241.7678017714,
    nro_cliente: 9,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 336,
            cantidad: 22.0
        },
        {
            codigo_producto: 3,
            nro_item: 308,
            cantidad: 77.0
        },
        {
            codigo_producto: 4,
            nro_item: 393,
            cantidad: 16.0
        },
        {
            codigo_producto: 13,
            nro_item: 322,
            cantidad: 46.0
        },
        {
            codigo_producto: 25,
            nro_item: 309,
            cantidad: 1.0
        },
        {
            codigo_producto: 26,
            nro_item: 311,
            cantidad: 93.0
        },
        {
            codigo_producto: 27,
            nro_item: 307,
            cantidad: 47.0
        },
        {
            codigo_producto: 34,
            nro_item: 466,
            cantidad: 18.0
        },
        {
            codigo_producto: 35,
            nro_item: 459,
            cantidad: 97.0
        },
        {
            codigo_producto: 39,
            nro_item: 481,
            cantidad: 13.0
        },
        {
            codigo_producto: 41,
            nro_item: 441,
            cantidad: 38.0
        },
        {
            codigo_producto: 49,
            nro_item: 415,
            cantidad: 48.0
        },
        {
            codigo_producto: 52,
            nro_item: 478,
            cantidad: 19.0
        },
        {
            codigo_producto: 68,
            nro_item: 574,
            cantidad: 84.0
        },
        {
            codigo_producto: 79,
            nro_item: 598,
            cantidad: 45.0
        },
        {
            codigo_producto: 81,
            nro_item: 559,
            cantidad: 61.0
        },
        {
            codigo_producto: 96,
            nro_item: 583,
            cantidad: 23.0
        },
        {
            codigo_producto: 99,
            nro_item: 594,
            cantidad: 83.0
        }
    ]
});
db.factura.insertOne({
    _id: 44,
    fecha: "2017-02-13",
    total_sin_iva: 308925.3035996437,
    iva: 21.0,
    total_con_iva: 373799.61735556886,
    nro_cliente: 15,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 330,
            cantidad: 50.0
        },
        {
            codigo_producto: 20,
            nro_item: 394,
            cantidad: 46.0
        },
        {
            codigo_producto: 30,
            nro_item: 398,
            cantidad: 59.0
        },
        {
            codigo_producto: 33,
            nro_item: 352,
            cantidad: 58.0
        },
        {
            codigo_producto: 34,
            nro_item: 456,
            cantidad: 97.0
        },
        {
            codigo_producto: 36,
            nro_item: 437,
            cantidad: 56.0
        },
        {
            codigo_producto: 38,
            nro_item: 476,
            cantidad: 58.0
        },
        {
            codigo_producto: 42,
            nro_item: 491,
            cantidad: 81.0
        },
        {
            codigo_producto: 44,
            nro_item: 419,
            cantidad: 41.0
        },
        {
            codigo_producto: 47,
            nro_item: 458,
            cantidad: 85.0
        },
        {
            codigo_producto: 74,
            nro_item: 513,
            cantidad: 5.0
        },
        {
            codigo_producto: 84,
            nro_item: 508,
            cantidad: 12.0
        },
        {
            codigo_producto: 92,
            nro_item: 506,
            cantidad: 60.0
        }
    ]
});
db.factura.insertOne({
    _id: 45,
    fecha: "2017-03-04",
    total_sin_iva: 326166.1626617432,
    iva: 21.0,
    total_con_iva: 394661.05682070926,
    nro_cliente: 20,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 304,
            cantidad: 72.0
        },
        {
            codigo_producto: 5,
            nro_item: 368,
            cantidad: 82.0
        },
        {
            codigo_producto: 15,
            nro_item: 392,
            cantidad: 92.0
        },
        {
            codigo_producto: 19,
            nro_item: 399,
            cantidad: 8.0
        },
        {
            codigo_producto: 26,
            nro_item: 321,
            cantidad: 45.0
        },
        {
            codigo_producto: 27,
            nro_item: 363,
            cantidad: 64.0
        },
        {
            codigo_producto: 32,
            nro_item: 382,
            cantidad: 61.0
        },
        {
            codigo_producto: 57,
            nro_item: 436,
            cantidad: 68.0
        },
        {
            codigo_producto: 59,
            nro_item: 455,
            cantidad: 16.0
        },
        {
            codigo_producto: 70,
            nro_item: 587,
            cantidad: 92.0
        },
        {
            codigo_producto: 71,
            nro_item: 562,
            cantidad: 12.0
        },
        {
            codigo_producto: 82,
            nro_item: 552,
            cantidad: 70.0
        }
    ]
});
db.factura.insertOne({
    _id: 46,
    fecha: "2016-09-04",
    total_sin_iva: 297296.00299758906,
    iva: 21.0,
    total_con_iva: 359728.1636270828,
    nro_cliente: 15,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 384,
            cantidad: 20.0
        },
        {
            codigo_producto: 3,
            nro_item: 329,
            cantidad: 56.0
        },
        {
            codigo_producto: 11,
            nro_item: 333,
            cantidad: 38.0
        },
        {
            codigo_producto: 13,
            nro_item: 400,
            cantidad: 33.0
        },
        {
            codigo_producto: 19,
            nro_item: 350,
            cantidad: 62.0
        },
        {
            codigo_producto: 27,
            nro_item: 303,
            cantidad: 64.0
        },
        {
            codigo_producto: 29,
            nro_item: 339,
            cantidad: 70.0
        },
        {
            codigo_producto: 33,
            nro_item: 327,
            cantidad: 13.0
        },
        {
            codigo_producto: 46,
            nro_item: 413,
            cantidad: 33.0
        },
        {
            codigo_producto: 61,
            nro_item: 405,
            cantidad: 39.0
        },
        {
            codigo_producto: 81,
            nro_item: 597,
            cantidad: 67.0
        },
        {
            codigo_producto: 85,
            nro_item: 584,
            cantidad: 74.0
        },
        {
            codigo_producto: 89,
            nro_item: 550,
            cantidad: 78.0
        }
    ]
});
db.factura.insertOne({
    _id: 47,
    fecha: "2016-10-21",
    total_sin_iva: 226836.45173034666,
    iva: 21.0,
    total_con_iva: 274472.10659371945,
    nro_cliente: 5,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 380,
            cantidad: 87.0
        },
        {
            codigo_producto: 22,
            nro_item: 318,
            cantidad: 40.0
        },
        {
            codigo_producto: 31,
            nro_item: 371,
            cantidad: 32.0
        },
        {
            codigo_producto: 42,
            nro_item: 499,
            cantidad: 73.0
        },
        {
            codigo_producto: 52,
            nro_item: 475,
            cantidad: 33.0
        },
        {
            codigo_producto: 57,
            nro_item: 410,
            cantidad: 91.0
        },
        {
            codigo_producto: 64,
            nro_item: 479,
            cantidad: 56.0
        },
        {
            codigo_producto: 80,
            nro_item: 563,
            cantidad: 37.0
        },
        {
            codigo_producto: 93,
            nro_item: 527,
            cantidad: 23.0
        }
    ]
});
db.factura.insertOne({
    _id: 48,
    fecha: "2016-03-23",
    total_sin_iva: 248775.65307617188,
    iva: 21.0,
    total_con_iva: 301018.54022216797,
    nro_cliente: 18,
    detalle: [
        {
            codigo_producto: 8,
            nro_item: 377,
            cantidad: 97.0
        },
        {
            codigo_producto: 14,
            nro_item: 320,
            cantidad: 58.0
        },
        {
            codigo_producto: 21,
            nro_item: 360,
            cantidad: 78.0
        },
        {
            codigo_producto: 40,
            nro_item: 497,
            cantidad: 10.0
        },
        {
            codigo_producto: 42,
            nro_item: 467,
            cantidad: 97.0
        },
        {
            codigo_producto: 63,
            nro_item: 442,
            cantidad: 83.0
        },
        {
            codigo_producto: 67,
            nro_item: 502,
            cantidad: 4.0
        },
        {
            codigo_producto: 70,
            nro_item: 503,
            cantidad: 59.0
        },
        {
            codigo_producto: 86,
            nro_item: 539,
            cantidad: 53.0
        }
    ]
});
db.factura.insertOne({
    _id: 49,
    fecha: "2016-06-02",
    total_sin_iva: 339627.04988937377,
    iva: 21.0,
    total_con_iva: 410948.73036614223,
    nro_cliente: 8,
    detalle: [
        {
            codigo_producto: 5,
            nro_item: 331,
            cantidad: 94.0
        },
        {
            codigo_producto: 11,
            nro_item: 313,
            cantidad: 69.0
        },
        {
            codigo_producto: 13,
            nro_item: 369,
            cantidad: 3.0
        },
        {
            codigo_producto: 15,
            nro_item: 390,
            cantidad: 45.0
        },
        {
            codigo_producto: 23,
            nro_item: 385,
            cantidad: 91.0
        },
        {
            codigo_producto: 25,
            nro_item: 301,
            cantidad: 59.0
        },
        {
            codigo_producto: 33,
            nro_item: 305,
            cantidad: 90.0
        },
        {
            codigo_producto: 49,
            nro_item: 493,
            cantidad: 51.0
        },
        {
            codigo_producto: 53,
            nro_item: 403,
            cantidad: 75.0
        },
        {
            codigo_producto: 57,
            nro_item: 420,
            cantidad: 35.0
        },
        {
            codigo_producto: 72,
            nro_item: 569,
            cantidad: 19.0
        },
        {
            codigo_producto: 73,
            nro_item: 565,
            cantidad: 89.0
        },
        {
            codigo_producto: 83,
            nro_item: 591,
            cantidad: 89.0
        },
        {
            codigo_producto: 93,
            nro_item: 575,
            cantidad: 92.0
        }
    ]
});
db.factura.insertOne({
    _id: 50,
    fecha: "2017-03-14",
    total_sin_iva: 378516.34708936216,
    iva: 21.0,
    total_con_iva: 458004.7799781282,
    nro_cliente: 15,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 306,
            cantidad: 100.0
        },
        {
            codigo_producto: 21,
            nro_item: 334,
            cantidad: 88.0
        },
        {
            codigo_producto: 27,
            nro_item: 357,
            cantidad: 73.0
        },
        {
            codigo_producto: 38,
            nro_item: 492,
            cantidad: 19.0
        },
        {
            codigo_producto: 39,
            nro_item: 438,
            cantidad: 29.0
        },
        {
            codigo_producto: 43,
            nro_item: 416,
            cantidad: 79.0
        },
        {
            codigo_producto: 46,
            nro_item: 431,
            cantidad: 85.0
        },
        {
            codigo_producto: 64,
            nro_item: 423,
            cantidad: 61.0
        },
        {
            codigo_producto: 73,
            nro_item: 536,
            cantidad: 67.0
        },
        {
            codigo_producto: 85,
            nro_item: 509,
            cantidad: 63.0
        },
        {
            codigo_producto: 87,
            nro_item: 579,
            cantidad: 22.0
        },
        {
            codigo_producto: 92,
            nro_item: 590,
            cantidad: 99.0
        },
        {
            codigo_producto: 99,
            nro_item: 592,
            cantidad: 77.0
        },
        {
            codigo_producto: 100,
            nro_item: 518,
            cantidad: 21.0
        }
    ]
});
db.factura.insertOne({
    _id: 51,
    fecha: "2016-04-18",
    total_sin_iva: 143020.14860076905,
    iva: 21.0,
    total_con_iva: 173054.37980693055,
    nro_cliente: 8,
    detalle: [
        {
            codigo_producto: 37,
            nro_item: 770,
            cantidad: 58.0
        },
        {
            codigo_producto: 43,
            nro_item: 797,
            cantidad: 89.0
        },
        {
            codigo_producto: 52,
            nro_item: 766,
            cantidad: 11.0
        },
        {
            codigo_producto: 53,
            nro_item: 745,
            cantidad: 91.0
        },
        {
            codigo_producto: 64,
            nro_item: 714,
            cantidad: 5.0
        },
        {
            codigo_producto: 69,
            nro_item: 858,
            cantidad: 72.0
        },
        {
            codigo_producto: 91,
            nro_item: 856,
            cantidad: 28.0
        },
        {
            codigo_producto: 94,
            nro_item: 833,
            cantidad: 72.0
        },
        {
            codigo_producto: 95,
            nro_item: 838,
            cantidad: 6.0
        }
    ]
});
db.factura.insertOne({
    _id: 52,
    fecha: "2016-07-01",
    total_sin_iva: 187440.5555182457,
    iva: 21.0,
    total_con_iva: 226803.0721770773,
    nro_cliente: 4,
    detalle: [
        {
            codigo_producto: 34,
            nro_item: 758,
            cantidad: 4.0
        },
        {
            codigo_producto: 46,
            nro_item: 774,
            cantidad: 29.0
        },
        {
            codigo_producto: 53,
            nro_item: 754,
            cantidad: 20.0
        },
        {
            codigo_producto: 56,
            nro_item: 756,
            cantidad: 62.0
        },
        {
            codigo_producto: 58,
            nro_item: 799,
            cantidad: 39.0
        },
        {
            codigo_producto: 63,
            nro_item: 717,
            cantidad: 78.0
        },
        {
            codigo_producto: 72,
            nro_item: 860,
            cantidad: 51.0
        },
        {
            codigo_producto: 76,
            nro_item: 888,
            cantidad: 35.0
        },
        {
            codigo_producto: 99,
            nro_item: 836,
            cantidad: 20.0
        }
    ]
});
db.factura.insertOne({
    _id: 53,
    fecha: "2016-04-08",
    total_sin_iva: 96124.87534484864,
    iva: 21.0,
    total_con_iva: 116311.09916726686,
    nro_cliente: 8,
    detalle: [
        {
            codigo_producto: 41,
            nro_item: 779,
            cantidad: 1.0
        },
        {
            codigo_producto: 55,
            nro_item: 705,
            cantidad: 47.0
        },
        {
            codigo_producto: 73,
            nro_item: 847,
            cantidad: 75.0
        },
        {
            codigo_producto: 91,
            nro_item: 826,
            cantidad: 24.0
        },
        {
            codigo_producto: 95,
            nro_item: 844,
            cantidad: 39.0
        }
    ]
});
db.factura.insertOne({
    _id: 54,
    fecha: "2016-08-12",
    total_sin_iva: 120299.3622619629,
    iva: 21.0,
    total_con_iva: 145562.2283369751,
    nro_cliente: 18,
    detalle: [
        {
            codigo_producto: 37,
            nro_item: 787,
            cantidad: 28.0
        },
        {
            codigo_producto: 42,
            nro_item: 778,
            cantidad: 81.0
        },
        {
            codigo_producto: 65,
            nro_item: 788,
            cantidad: 9.0
        },
        {
            codigo_producto: 73,
            nro_item: 890,
            cantidad: 18.0
        },
        {
            codigo_producto: 76,
            nro_item: 870,
            cantidad: 31.0
        },
        {
            codigo_producto: 81,
            nro_item: 839,
            cantidad: 16.0
        },
        {
            codigo_producto: 92,
            nro_item: 842,
            cantidad: 87.0
        }
    ]
});
db.factura.insertOne({
    _id: 55,
    fecha: "2016-06-21",
    total_sin_iva: 132705.16039352416,
    iva: 21.0,
    total_con_iva: 160573.24407616424,
    nro_cliente: 4,
    detalle: [
        {
            codigo_producto: 45,
            nro_item: 796,
            cantidad: 50.0
        },
        {
            codigo_producto: 50,
            nro_item: 777,
            cantidad: 81.0
        },
        {
            codigo_producto: 52,
            nro_item: 708,
            cantidad: 29.0
        },
        {
            codigo_producto: 63,
            nro_item: 738,
            cantidad: 58.0
        },
        {
            codigo_producto: 75,
            nro_item: 811,
            cantidad: 38.0
        },
        {
            codigo_producto: 77,
            nro_item: 881,
            cantidad: 62.0
        },
        {
            codigo_producto: 92,
            nro_item: 857,
            cantidad: 19.0
        },
        {
            codigo_producto: 94,
            nro_item: 867,
            cantidad: 37.0
        }
    ]
});
db.factura.insertOne({
    _id: 56,
    fecha: "2017-03-04",
    total_sin_iva: 83452.22965393067,
    iva: 21.0,
    total_con_iva: 100977.19788125611,
    nro_cliente: 6,
    detalle: [
        {
            codigo_producto: 43,
            nro_item: 702,
            cantidad: 56.0
        },
        {
            codigo_producto: 46,
            nro_item: 773,
            cantidad: 8.0
        },
        {
            codigo_producto: 54,
            nro_item: 763,
            cantidad: 21.0
        },
        {
            codigo_producto: 75,
            nro_item: 864,
            cantidad: 38.0
        },
        {
            codigo_producto: 85,
            nro_item: 801,
            cantidad: 31.0
        },
        {
            codigo_producto: 88,
            nro_item: 854,
            cantidad: 27.0
        },
        {
            codigo_producto: 90,
            nro_item: 812,
            cantidad: 24.0
        }
    ]
});
db.factura.insertOne({
    _id: 57,
    fecha: "2017-02-02",
    total_sin_iva: 243943.07667846684,
    iva: 21.0,
    total_con_iva: 295171.12278094486,
    nro_cliente: 5,
    detalle: [
        {
            codigo_producto: 42,
            nro_item: 792,
            cantidad: 66.0
        },
        {
            codigo_producto: 55,
            nro_item: 740,
            cantidad: 20.0
        },
        {
            codigo_producto: 57,
            nro_item: 710,
            cantidad: 74.0
        },
        {
            codigo_producto: 63,
            nro_item: 775,
            cantidad: 76.0
        },
        {
            codigo_producto: 65,
            nro_item: 701,
            cantidad: 96.0
        },
        {
            codigo_producto: 72,
            nro_item: 848,
            cantidad: 68.0
        },
        {
            codigo_producto: 77,
            nro_item: 897,
            cantidad: 34.0
        },
        {
            codigo_producto: 86,
            nro_item: 873,
            cantidad: 21.0
        },
        {
            codigo_producto: 93,
            nro_item: 830,
            cantidad: 71.0
        },
        {
            codigo_producto: 95,
            nro_item: 893,
            cantidad: 45.0
        }
    ]
});
db.factura.insertOne({
    _id: 58,
    fecha: "2016-04-19",
    total_sin_iva: 119983.10490417482,
    iva: 21.0,
    total_con_iva: 145179.55693405154,
    nro_cliente: 8,
    detalle: [
        {
            codigo_producto: 40,
            nro_item: 725,
            cantidad: 25.0
        },
        {
            codigo_producto: 63,
            nro_item: 721,
            cantidad: 82.0
        },
        {
            codigo_producto: 68,
            nro_item: 861,
            cantidad: 58.0
        },
        {
            codigo_producto: 77,
            nro_item: 862,
            cantidad: 49.0
        },
        {
            codigo_producto: 94,
            nro_item: 815,
            cantidad: 60.0
        }
    ]
});
db.factura.insertOne({
    _id: 59,
    fecha: "2017-03-10",
    total_sin_iva: 125161.66856689451,
    iva: 21.0,
    total_con_iva: 151445.61896594235,
    nro_cliente: 18,
    detalle: [
        {
            codigo_producto: 42,
            nro_item: 783,
            cantidad: 19.0
        },
        {
            codigo_producto: 43,
            nro_item: 784,
            cantidad: 55.0
        },
        {
            codigo_producto: 54,
            nro_item: 719,
            cantidad: 48.0
        },
        {
            codigo_producto: 74,
            nro_item: 840,
            cantidad: 88.0
        },
        {
            codigo_producto: 83,
            nro_item: 887,
            cantidad: 59.0
        },
        {
            codigo_producto: 84,
            nro_item: 843,
            cantidad: 30.0
        },
        {
            codigo_producto: 90,
            nro_item: 810,
            cantidad: 37.0
        }
    ]
});
db.factura.insertOne({
    _id: 60,
    fecha: "2017-02-05",
    total_sin_iva: 108632.29564647673,
    iva: 21.0,
    total_con_iva: 131445.07773223685,
    nro_cliente: 4,
    detalle: [
        {
            codigo_producto: 59,
            nro_item: 760,
            cantidad: 66.0
        },
        {
            codigo_producto: 71,
            nro_item: 865,
            cantidad: 54.0
        },
        {
            codigo_producto: 74,
            nro_item: 832,
            cantidad: 63.0
        },
        {
            codigo_producto: 99,
            nro_item: 829,
            cantidad: 40.0
        }
    ]
});
db.factura.insertOne({
    _id: 61,
    fecha: "2016-12-10",
    total_sin_iva: 141156.96427001955,
    iva: 21.0,
    total_con_iva: 170799.92676672366,
    nro_cliente: 4,
    detalle: [
        {
            codigo_producto: 39,
            nro_item: 711,
            cantidad: 56.0
        },
        {
            codigo_producto: 63,
            nro_item: 703,
            cantidad: 63.0
        },
        {
            codigo_producto: 67,
            nro_item: 822,
            cantidad: 22.0
        },
        {
            codigo_producto: 80,
            nro_item: 849,
            cantidad: 39.0
        },
        {
            codigo_producto: 85,
            nro_item: 831,
            cantidad: 57.0
        },
        {
            codigo_producto: 88,
            nro_item: 821,
            cantidad: 14.0
        }
    ]
});
db.factura.insertOne({
    _id: 62,
    fecha: "2017-01-02",
    total_sin_iva: 163635.8069091797,
    iva: 21.0,
    total_con_iva: 197999.32636010743,
    nro_cliente: 10,
    detalle: [
        {
            codigo_producto: 49,
            nro_item: 752,
            cantidad: 49.0
        },
        {
            codigo_producto: 51,
            nro_item: 707,
            cantidad: 82.0
        },
        {
            codigo_producto: 54,
            nro_item: 782,
            cantidad: 31.0
        },
        {
            codigo_producto: 62,
            nro_item: 720,
            cantidad: 29.0
        },
        {
            codigo_producto: 67,
            nro_item: 889,
            cantidad: 78.0
        },
        {
            codigo_producto: 100,
            nro_item: 850,
            cantidad: 79.0
        }
    ]
});
db.factura.insertOne({
    _id: 63,
    fecha: "2016-09-23",
    total_sin_iva: 230880.3628662109,
    iva: 21.0,
    total_con_iva: 279365.2390681152,
    nro_cliente: 24,
    detalle: [
        {
            codigo_producto: 51,
            nro_item: 769,
            cantidad: 31.0
        },
        {
            codigo_producto: 55,
            nro_item: 791,
            cantidad: 1.0
        },
        {
            codigo_producto: 62,
            nro_item: 751,
            cantidad: 61.0
        },
        {
            codigo_producto: 72,
            nro_item: 851,
            cantidad: 67.0
        },
        {
            codigo_producto: 74,
            nro_item: 820,
            cantidad: 78.0
        },
        {
            codigo_producto: 80,
            nro_item: 824,
            cantidad: 77.0
        },
        {
            codigo_producto: 92,
            nro_item: 868,
            cantidad: 40.0
        },
        {
            codigo_producto: 93,
            nro_item: 835,
            cantidad: 93.0
        },
        {
            codigo_producto: 94,
            nro_item: 898,
            cantidad: 72.0
        }
    ]
});
db.factura.insertOne({
    _id: 64,
    fecha: "2017-01-04",
    total_sin_iva: 184187.83300323487,
    iva: 21.0,
    total_con_iva: 222867.2779339142,
    nro_cliente: 16,
    detalle: [
        {
            codigo_producto: 38,
            nro_item: 786,
            cantidad: 89.0
        },
        {
            codigo_producto: 42,
            nro_item: 747,
            cantidad: 63.0
        },
        {
            codigo_producto: 49,
            nro_item: 735,
            cantidad: 26.0
        },
        {
            codigo_producto: 52,
            nro_item: 722,
            cantidad: 93.0
        },
        {
            codigo_producto: 86,
            nro_item: 883,
            cantidad: 91.0
        },
        {
            codigo_producto: 90,
            nro_item: 859,
            cantidad: 58.0
        },
        {
            codigo_producto: 94,
            nro_item: 884,
            cantidad: 77.0
        }
    ]
});
db.factura.insertOne({
    _id: 65,
    fecha: "2016-07-21",
    total_sin_iva: 213156.82950496674,
    iva: 21.0,
    total_con_iva: 257919.76370100974,
    nro_cliente: 16,
    detalle: [
        {
            codigo_producto: 34,
            nro_item: 734,
            cantidad: 27.0
        },
        {
            codigo_producto: 47,
            nro_item: 764,
            cantidad: 30.0
        },
        {
            codigo_producto: 57,
            nro_item: 724,
            cantidad: 31.0
        },
        {
            codigo_producto: 65,
            nro_item: 736,
            cantidad: 35.0
        },
        {
            codigo_producto: 69,
            nro_item: 886,
            cantidad: 98.0
        },
        {
            codigo_producto: 92,
            nro_item: 818,
            cantidad: 73.0
        },
        {
            codigo_producto: 96,
            nro_item: 900,
            cantidad: 3.0
        },
        {
            codigo_producto: 98,
            nro_item: 846,
            cantidad: 94.0
        }
    ]
});
db.factura.insertOne({
    _id: 66,
    fecha: "2016-05-23",
    total_sin_iva: 77261.16196136475,
    iva: 21.0,
    total_con_iva: 93486.00597325135,
    nro_cliente: 4,
    detalle: [
        {
            codigo_producto: 35,
            nro_item: 761,
            cantidad: 10.0
        },
        {
            codigo_producto: 53,
            nro_item: 772,
            cantidad: 21.0
        },
        {
            codigo_producto: 60,
            nro_item: 800,
            cantidad: 44.0
        },
        {
            codigo_producto: 70,
            nro_item: 817,
            cantidad: 3.0
        },
        {
            codigo_producto: 73,
            nro_item: 878,
            cantidad: 91.0
        },
        {
            codigo_producto: 83,
            nro_item: 863,
            cantidad: 29.0
        }
    ]
});
db.factura.insertOne({
    _id: 67,
    fecha: "2017-02-21",
    total_sin_iva: 259496.69203948972,
    iva: 21.0,
    total_con_iva: 313990.9973677826,
    nro_cliente: 11,
    detalle: [
        {
            codigo_producto: 37,
            nro_item: 794,
            cantidad: 48.0
        },
        {
            codigo_producto: 46,
            nro_item: 730,
            cantidad: 9.0
        },
        {
            codigo_producto: 49,
            nro_item: 729,
            cantidad: 58.0
        },
        {
            codigo_producto: 56,
            nro_item: 716,
            cantidad: 65.0
        },
        {
            codigo_producto: 63,
            nro_item: 785,
            cantidad: 58.0
        },
        {
            codigo_producto: 78,
            nro_item: 827,
            cantidad: 98.0
        },
        {
            codigo_producto: 80,
            nro_item: 808,
            cantidad: 65.0
        },
        {
            codigo_producto: 98,
            nro_item: 877,
            cantidad: 59.0
        }
    ]
});
db.factura.insertOne({
    _id: 68,
    fecha: "2016-07-24",
    total_sin_iva: 257291.28893737792,
    iva: 21.0,
    total_con_iva: 311322.4596142273,
    nro_cliente: 25,
    detalle: [
        {
            codigo_producto: 37,
            nro_item: 726,
            cantidad: 28.0
        },
        {
            codigo_producto: 42,
            nro_item: 728,
            cantidad: 98.0
        },
        {
            codigo_producto: 49,
            nro_item: 704,
            cantidad: 81.0
        },
        {
            codigo_producto: 51,
            nro_item: 793,
            cantidad: 53.0
        },
        {
            codigo_producto: 73,
            nro_item: 869,
            cantidad: 86.0
        },
        {
            codigo_producto: 88,
            nro_item: 823,
            cantidad: 90.0
        },
        {
            codigo_producto: 92,
            nro_item: 819,
            cantidad: 12.0
        },
        {
            codigo_producto: 95,
            nro_item: 845,
            cantidad: 92.0
        },
        {
            codigo_producto: 100,
            nro_item: 841,
            cantidad: 86.0
        }
    ]
});
db.factura.insertOne({
    _id: 69,
    fecha: "2017-01-26",
    total_sin_iva: 168112.58785095214,
    iva: 21.0,
    total_con_iva: 203416.23129965208,
    nro_cliente: 17,
    detalle: [
        {
            codigo_producto: 35,
            nro_item: 759,
            cantidad: 2.0
        },
        {
            codigo_producto: 54,
            nro_item: 733,
            cantidad: 14.0
        },
        {
            codigo_producto: 55,
            nro_item: 723,
            cantidad: 96.0
        },
        {
            codigo_producto: 56,
            nro_item: 755,
            cantidad: 43.0
        },
        {
            codigo_producto: 62,
            nro_item: 776,
            cantidad: 75.0
        },
        {
            codigo_producto: 86,
            nro_item: 879,
            cantidad: 6.0
        },
        {
            codigo_producto: 90,
            nro_item: 816,
            cantidad: 1.0
        },
        {
            codigo_producto: 95,
            nro_item: 806,
            cantidad: 94.0
        }
    ]
});
db.factura.insertOne({
    _id: 70,
    fecha: "2017-02-04",
    total_sin_iva: 306647.15402526857,
    iva: 21.0,
    total_con_iva: 371043.056370575,
    nro_cliente: 18,
    detalle: [
        {
            codigo_producto: 36,
            nro_item: 718,
            cantidad: 71.0
        },
        {
            codigo_producto: 51,
            nro_item: 781,
            cantidad: 96.0
        },
        {
            codigo_producto: 52,
            nro_item: 795,
            cantidad: 21.0
        },
        {
            codigo_producto: 55,
            nro_item: 750,
            cantidad: 47.0
        },
        {
            codigo_producto: 68,
            nro_item: 837,
            cantidad: 88.0
        },
        {
            codigo_producto: 72,
            nro_item: 834,
            cantidad: 84.0
        },
        {
            codigo_producto: 90,
            nro_item: 828,
            cantidad: 98.0
        }
    ]
});
db.factura.insertOne({
    _id: 71,
    fecha: "2016-11-27",
    total_sin_iva: 243844.24699258807,
    iva: 21.0,
    total_con_iva: 295051.5388610316,
    nro_cliente: 7,
    detalle: [
        {
            codigo_producto: 37,
            nro_item: 798,
            cantidad: 11.0
        },
        {
            codigo_producto: 43,
            nro_item: 732,
            cantidad: 56.0
        },
        {
            codigo_producto: 58,
            nro_item: 743,
            cantidad: 59.0
        },
        {
            codigo_producto: 61,
            nro_item: 713,
            cantidad: 87.0
        },
        {
            codigo_producto: 64,
            nro_item: 739,
            cantidad: 51.0
        },
        {
            codigo_producto: 68,
            nro_item: 880,
            cantidad: 18.0
        },
        {
            codigo_producto: 77,
            nro_item: 825,
            cantidad: 39.0
        },
        {
            codigo_producto: 78,
            nro_item: 813,
            cantidad: 67.0
        },
        {
            codigo_producto: 89,
            nro_item: 895,
            cantidad: 6.0
        },
        {
            codigo_producto: 90,
            nro_item: 876,
            cantidad: 79.0
        },
        {
            codigo_producto: 98,
            nro_item: 855,
            cantidad: 71.0
        },
        {
            codigo_producto: 99,
            nro_item: 866,
            cantidad: 12.0
        }
    ]
});
db.factura.insertOne({
    _id: 72,
    fecha: "2016-10-30",
    total_sin_iva: 124315.27113037111,
    iva: 21.0,
    total_con_iva: 150421.47806774903,
    nro_cliente: 11,
    detalle: [
        {
            codigo_producto: 34,
            nro_item: 768,
            cantidad: 33.0
        },
        {
            codigo_producto: 37,
            nro_item: 727,
            cantidad: 26.0
        },
        {
            codigo_producto: 41,
            nro_item: 706,
            cantidad: 50.0
        },
        {
            codigo_producto: 48,
            nro_item: 712,
            cantidad: 82.0
        },
        {
            codigo_producto: 64,
            nro_item: 715,
            cantidad: 5.0
        },
        {
            codigo_producto: 82,
            nro_item: 814,
            cantidad: 24.0
        },
        {
            codigo_producto: 85,
            nro_item: 894,
            cantidad: 13.0
        },
        {
            codigo_producto: 87,
            nro_item: 803,
            cantidad: 53.0
        },
        {
            codigo_producto: 98,
            nro_item: 852,
            cantidad: 45.0
        }
    ]
});
db.factura.insertOne({
    _id: 73,
    fecha: "2016-11-30",
    total_sin_iva: 117099.24821777343,
    iva: 21.0,
    total_con_iva: 141690.09034350584,
    nro_cliente: 2,
    detalle: [
        {
            codigo_producto: 36,
            nro_item: 731,
            cantidad: 4.0
        },
        {
            codigo_producto: 42,
            nro_item: 789,
            cantidad: 20.0
        },
        {
            codigo_producto: 46,
            nro_item: 709,
            cantidad: 57.0
        },
        {
            codigo_producto: 77,
            nro_item: 853,
            cantidad: 14.0
        },
        {
            codigo_producto: 87,
            nro_item: 896,
            cantidad: 44.0
        },
        {
            codigo_producto: 89,
            nro_item: 805,
            cantidad: 80.0
        },
        {
            codigo_producto: 95,
            nro_item: 892,
            cantidad: 13.0
        },
        {
            codigo_producto: 96,
            nro_item: 802,
            cantidad: 26.0
        }
    ]
});
db.factura.insertOne({
    _id: 74,
    fecha: "2017-03-15",
    total_sin_iva: 275678.96484375,
    iva: 21.0,
    total_con_iva: 333571.5474609375,
    nro_cliente: 24,
    detalle: [
        {
            codigo_producto: 41,
            nro_item: 771,
            cantidad: 91.0
        },
        {
            codigo_producto: 43,
            nro_item: 737,
            cantidad: 35.0
        },
        {
            codigo_producto: 48,
            nro_item: 748,
            cantidad: 97.0
        },
        {
            codigo_producto: 49,
            nro_item: 780,
            cantidad: 22.0
        },
        {
            codigo_producto: 56,
            nro_item: 765,
            cantidad: 97.0
        },
        {
            codigo_producto: 86,
            nro_item: 871,
            cantidad: 54.0
        },
        {
            codigo_producto: 98,
            nro_item: 804,
            cantidad: 87.0
        },
        {
            codigo_producto: 100,
            nro_item: 807,
            cantidad: 82.0
        }
    ]
});
db.factura.insertOne({
    _id: 75,
    fecha: "2016-07-26",
    total_sin_iva: 201783.64556579592,
    iva: 21.0,
    total_con_iva: 244158.21113461306,
    nro_cliente: 5,
    detalle: [
        {
            codigo_producto: 41,
            nro_item: 753,
            cantidad: 77.0
        },
        {
            codigo_producto: 57,
            nro_item: 741,
            cantidad: 27.0
        },
        {
            codigo_producto: 63,
            nro_item: 757,
            cantidad: 26.0
        },
        {
            codigo_producto: 64,
            nro_item: 742,
            cantidad: 95.0
        },
        {
            codigo_producto: 72,
            nro_item: 809,
            cantidad: 97.0
        },
        {
            codigo_producto: 73,
            nro_item: 882,
            cantidad: 11.0
        },
        {
            codigo_producto: 92,
            nro_item: 874,
            cantidad: 20.0
        }
    ]
});
db.factura.insertOne({
    _id: 76,
    fecha: "2016-05-04",
    total_sin_iva: 156680.88828964232,
    iva: 21.0,
    total_con_iva: 189583.87483046722,
    nro_cliente: 17,
    detalle: [
        {
            codigo_producto: 17,
            nro_item: 934,
            cantidad: 93.0
        },
        {
            codigo_producto: 24,
            nro_item: 921,
            cantidad: 35.0
        },
        {
            codigo_producto: 29,
            nro_item: 951,
            cantidad: 82.0
        },
        {
            codigo_producto: 41,
            nro_item: 1061,
            cantidad: 39.0
        },
        {
            codigo_producto: 59,
            nro_item: 1082,
            cantidad: 20.0
        },
        {
            codigo_producto: 82,
            nro_item: 1183,
            cantidad: 100.0
        },
        {
            codigo_producto: 87,
            nro_item: 1188,
            cantidad: 33.0
        }
    ]
});
db.factura.insertOne({
    _id: 77,
    fecha: "2016-05-10",
    total_sin_iva: 257974.721333313,
    iva: 21.0,
    total_con_iva: 312149.41281330877,
    nro_cliente: 9,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 912,
            cantidad: 64.0
        },
        {
            codigo_producto: 10,
            nro_item: 928,
            cantidad: 24.0
        },
        {
            codigo_producto: 12,
            nro_item: 977,
            cantidad: 64.0
        },
        {
            codigo_producto: 29,
            nro_item: 906,
            cantidad: 76.0
        },
        {
            codigo_producto: 30,
            nro_item: 993,
            cantidad: 77.0
        },
        {
            codigo_producto: 34,
            nro_item: 1023,
            cantidad: 8.0
        },
        {
            codigo_producto: 51,
            nro_item: 1039,
            cantidad: 81.0
        },
        {
            codigo_producto: 57,
            nro_item: 1097,
            cantidad: 30.0
        },
        {
            codigo_producto: 92,
            nro_item: 1125,
            cantidad: 84.0
        }
    ]
});
db.factura.insertOne({
    _id: 78,
    fecha: "2017-03-06",
    total_sin_iva: 256427.63918151855,
    iva: 21.0,
    total_con_iva: 310277.44340963743,
    nro_cliente: 17,
    detalle: [
        {
            codigo_producto: 32,
            nro_item: 986,
            cantidad: 63.0
        },
        {
            codigo_producto: 35,
            nro_item: 1067,
            cantidad: 70.0
        },
        {
            codigo_producto: 57,
            nro_item: 1044,
            cantidad: 77.0
        },
        {
            codigo_producto: 61,
            nro_item: 1013,
            cantidad: 83.0
        },
        {
            codigo_producto: 66,
            nro_item: 1004,
            cantidad: 52.0
        },
        {
            codigo_producto: 72,
            nro_item: 1162,
            cantidad: 63.0
        },
        {
            codigo_producto: 74,
            nro_item: 1122,
            cantidad: 38.0
        },
        {
            codigo_producto: 75,
            nro_item: 1113,
            cantidad: 32.0
        }
    ]
});
db.factura.insertOne({
    _id: 79,
    fecha: "2017-01-28",
    total_sin_iva: 205515.13350791926,
    iva: 21.0,
    total_con_iva: 248673.3115445823,
    nro_cliente: 20,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 908,
            cantidad: 16.0
        },
        {
            codigo_producto: 5,
            nro_item: 969,
            cantidad: 53.0
        },
        {
            codigo_producto: 22,
            nro_item: 901,
            cantidad: 29.0
        },
        {
            codigo_producto: 32,
            nro_item: 903,
            cantidad: 40.0
        },
        {
            codigo_producto: 35,
            nro_item: 1083,
            cantidad: 30.0
        },
        {
            codigo_producto: 39,
            nro_item: 1015,
            cantidad: 95.0
        },
        {
            codigo_producto: 47,
            nro_item: 1078,
            cantidad: 28.0
        },
        {
            codigo_producto: 61,
            nro_item: 1055,
            cantidad: 40.0
        },
        {
            codigo_producto: 69,
            nro_item: 1130,
            cantidad: 52.0
        },
        {
            codigo_producto: 82,
            nro_item: 1106,
            cantidad: 100.0
        },
        {
            codigo_producto: 88,
            nro_item: 1158,
            cantidad: 52.0
        }
    ]
});
db.factura.insertOne({
    _id: 80,
    fecha: "2016-07-10",
    total_sin_iva: 236987.33622741702,
    iva: 21.0,
    total_con_iva: 286754.6768351746,
    nro_cliente: 5,
    detalle: [
        {
            codigo_producto: 5,
            nro_item: 966,
            cantidad: 48.0
        },
        {
            codigo_producto: 12,
            nro_item: 948,
            cantidad: 91.0
        },
        {
            codigo_producto: 35,
            nro_item: 1086,
            cantidad: 98.0
        },
        {
            codigo_producto: 46,
            nro_item: 1036,
            cantidad: 64.0
        },
        {
            codigo_producto: 55,
            nro_item: 1041,
            cantidad: 42.0
        },
        {
            codigo_producto: 61,
            nro_item: 1076,
            cantidad: 55.0
        },
        {
            codigo_producto: 93,
            nro_item: 1101,
            cantidad: 56.0
        },
        {
            codigo_producto: 98,
            nro_item: 1119,
            cantidad: 8.0
        }
    ]
});
db.factura.insertOne({
    _id: 81,
    fecha: "2016-04-18",
    total_sin_iva: 249488.19174420834,
    iva: 21.0,
    total_con_iva: 301880.7120104921,
    nro_cliente: 23,
    detalle: [
        {
            codigo_producto: 8,
            nro_item: 967,
            cantidad: 50.0
        },
        {
            codigo_producto: 23,
            nro_item: 950,
            cantidad: 90.0
        },
        {
            codigo_producto: 35,
            nro_item: 1050,
            cantidad: 38.0
        },
        {
            codigo_producto: 49,
            nro_item: 1065,
            cantidad: 84.0
        },
        {
            codigo_producto: 58,
            nro_item: 1053,
            cantidad: 26.0
        },
        {
            codigo_producto: 63,
            nro_item: 1077,
            cantidad: 16.0
        },
        {
            codigo_producto: 76,
            nro_item: 1102,
            cantidad: 76.0
        },
        {
            codigo_producto: 79,
            nro_item: 1110,
            cantidad: 30.0
        },
        {
            codigo_producto: 87,
            nro_item: 1144,
            cantidad: 9.0
        },
        {
            codigo_producto: 88,
            nro_item: 1112,
            cantidad: 4.0
        },
        {
            codigo_producto: 99,
            nro_item: 1155,
            cantidad: 77.0
        },
        {
            codigo_producto: 100,
            nro_item: 1175,
            cantidad: 12.0
        }
    ]
});
db.factura.insertOne({
    _id: 82,
    fecha: "2016-09-15",
    total_sin_iva: 263605.9434036255,
    iva: 21.0,
    total_con_iva: 318963.1915183869,
    nro_cliente: 14,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 925,
            cantidad: 93.0
        },
        {
            codigo_producto: 7,
            nro_item: 971,
            cantidad: 36.0
        },
        {
            codigo_producto: 10,
            nro_item: 970,
            cantidad: 74.0
        },
        {
            codigo_producto: 16,
            nro_item: 902,
            cantidad: 2.0
        },
        {
            codigo_producto: 19,
            nro_item: 975,
            cantidad: 73.0
        },
        {
            codigo_producto: 23,
            nro_item: 905,
            cantidad: 94.0
        },
        {
            codigo_producto: 39,
            nro_item: 1070,
            cantidad: 49.0
        },
        {
            codigo_producto: 44,
            nro_item: 1058,
            cantidad: 64.0
        },
        {
            codigo_producto: 73,
            nro_item: 1120,
            cantidad: 100.0
        },
        {
            codigo_producto: 86,
            nro_item: 1173,
            cantidad: 1.0
        }
    ]
});
db.factura.insertOne({
    _id: 83,
    fecha: "2016-09-02",
    total_sin_iva: 296620.54475135804,
    iva: 21.0,
    total_con_iva: 358910.8591491432,
    nro_cliente: 25,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 957,
            cantidad: 89.0
        },
        {
            codigo_producto: 12,
            nro_item: 913,
            cantidad: 83.0
        },
        {
            codigo_producto: 13,
            nro_item: 960,
            cantidad: 10.0
        },
        {
            codigo_producto: 28,
            nro_item: 997,
            cantidad: 41.0
        },
        {
            codigo_producto: 40,
            nro_item: 1071,
            cantidad: 9.0
        },
        {
            codigo_producto: 47,
            nro_item: 1048,
            cantidad: 68.0
        },
        {
            codigo_producto: 52,
            nro_item: 1099,
            cantidad: 25.0
        },
        {
            codigo_producto: 53,
            nro_item: 1010,
            cantidad: 82.0
        },
        {
            codigo_producto: 59,
            nro_item: 1092,
            cantidad: 67.0
        },
        {
            codigo_producto: 68,
            nro_item: 1156,
            cantidad: 42.0
        },
        {
            codigo_producto: 70,
            nro_item: 1133,
            cantidad: 59.0
        },
        {
            codigo_producto: 75,
            nro_item: 1194,
            cantidad: 3.0
        },
        {
            codigo_producto: 94,
            nro_item: 1123,
            cantidad: 11.0
        }
    ]
});
db.factura.insertOne({
    _id: 84,
    fecha: "2016-09-18",
    total_sin_iva: 381204.815322876,
    iva: 21.0,
    total_con_iva: 461257.8265406799,
    nro_cliente: 14,
    detalle: [
        {
            codigo_producto: 5,
            nro_item: 973,
            cantidad: 84.0
        },
        {
            codigo_producto: 10,
            nro_item: 932,
            cantidad: 19.0
        },
        {
            codigo_producto: 23,
            nro_item: 968,
            cantidad: 92.0
        },
        {
            codigo_producto: 24,
            nro_item: 1000,
            cantidad: 55.0
        },
        {
            codigo_producto: 26,
            nro_item: 941,
            cantidad: 97.0
        },
        {
            codigo_producto: 29,
            nro_item: 991,
            cantidad: 32.0
        },
        {
            codigo_producto: 32,
            nro_item: 958,
            cantidad: 78.0
        },
        {
            codigo_producto: 57,
            nro_item: 1068,
            cantidad: 69.0
        },
        {
            codigo_producto: 58,
            nro_item: 1031,
            cantidad: 50.0
        },
        {
            codigo_producto: 67,
            nro_item: 1174,
            cantidad: 39.0
        },
        {
            codigo_producto: 94,
            nro_item: 1105,
            cantidad: 16.0
        },
        {
            codigo_producto: 95,
            nro_item: 1180,
            cantidad: 70.0
        },
        {
            codigo_producto: 96,
            nro_item: 1159,
            cantidad: 72.0
        }
    ]
});
db.factura.insertOne({
    _id: 85,
    fecha: "2016-08-27",
    total_sin_iva: 241778.23165245057,
    iva: 21.0,
    total_con_iva: 292551.6602994652,
    nro_cliente: 5,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 938,
            cantidad: 70.0
        },
        {
            codigo_producto: 33,
            nro_item: 956,
            cantidad: 6.0
        },
        {
            codigo_producto: 35,
            nro_item: 1014,
            cantidad: 48.0
        },
        {
            codigo_producto: 38,
            nro_item: 1089,
            cantidad: 9.0
        },
        {
            codigo_producto: 40,
            nro_item: 1043,
            cantidad: 42.0
        },
        {
            codigo_producto: 47,
            nro_item: 1009,
            cantidad: 36.0
        },
        {
            codigo_producto: 49,
            nro_item: 1047,
            cantidad: 27.0
        },
        {
            codigo_producto: 57,
            nro_item: 1049,
            cantidad: 68.0
        },
        {
            codigo_producto: 59,
            nro_item: 1088,
            cantidad: 5.0
        },
        {
            codigo_producto: 62,
            nro_item: 1002,
            cantidad: 65.0
        },
        {
            codigo_producto: 66,
            nro_item: 1079,
            cantidad: 74.0
        },
        {
            codigo_producto: 89,
            nro_item: 1191,
            cantidad: 35.0
        },
        {
            codigo_producto: 95,
            nro_item: 1108,
            cantidad: 77.0
        }
    ]
});
db.factura.insertOne({
    _id: 86,
    fecha: "2016-03-04",
    total_sin_iva: 266064.20232467656,
    iva: 21.0,
    total_con_iva: 321937.68481285864,
    nro_cliente: 9,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 972,
            cantidad: 20.0
        },
        {
            codigo_producto: 3,
            nro_item: 990,
            cantidad: 18.0
        },
        {
            codigo_producto: 12,
            nro_item: 989,
            cantidad: 31.0
        },
        {
            codigo_producto: 15,
            nro_item: 943,
            cantidad: 32.0
        },
        {
            codigo_producto: 17,
            nro_item: 922,
            cantidad: 40.0
        },
        {
            codigo_producto: 18,
            nro_item: 985,
            cantidad: 95.0
        },
        {
            codigo_producto: 23,
            nro_item: 946,
            cantidad: 74.0
        },
        {
            codigo_producto: 29,
            nro_item: 942,
            cantidad: 74.0
        },
        {
            codigo_producto: 49,
            nro_item: 1057,
            cantidad: 59.0
        },
        {
            codigo_producto: 57,
            nro_item: 1052,
            cantidad: 6.0
        },
        {
            codigo_producto: 76,
            nro_item: 1138,
            cantidad: 88.0
        },
        {
            codigo_producto: 77,
            nro_item: 1124,
            cantidad: 81.0
        },
        {
            codigo_producto: 91,
            nro_item: 1167,
            cantidad: 12.0
        }
    ]
});
db.factura.insertOne({
    _id: 87,
    fecha: "2016-03-30",
    total_sin_iva: 445212.85157775873,
    iva: 21.0,
    total_con_iva: 538707.550409088,
    nro_cliente: 12,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 954,
            cantidad: 56.0
        },
        {
            codigo_producto: 20,
            nro_item: 980,
            cantidad: 96.0
        },
        {
            codigo_producto: 27,
            nro_item: 974,
            cantidad: 11.0
        },
        {
            codigo_producto: 37,
            nro_item: 1027,
            cantidad: 66.0
        },
        {
            codigo_producto: 42,
            nro_item: 1054,
            cantidad: 68.0
        },
        {
            codigo_producto: 51,
            nro_item: 1032,
            cantidad: 22.0
        },
        {
            codigo_producto: 52,
            nro_item: 1056,
            cantidad: 84.0
        },
        {
            codigo_producto: 71,
            nro_item: 1184,
            cantidad: 80.0
        },
        {
            codigo_producto: 73,
            nro_item: 1146,
            cantidad: 69.0
        },
        {
            codigo_producto: 76,
            nro_item: 1126,
            cantidad: 70.0
        },
        {
            codigo_producto: 77,
            nro_item: 1121,
            cantidad: 3.0
        },
        {
            codigo_producto: 78,
            nro_item: 1129,
            cantidad: 9.0
        },
        {
            codigo_producto: 82,
            nro_item: 1137,
            cantidad: 70.0
        },
        {
            codigo_producto: 87,
            nro_item: 1170,
            cantidad: 78.0
        },
        {
            codigo_producto: 88,
            nro_item: 1164,
            cantidad: 47.0
        },
        {
            codigo_producto: 94,
            nro_item: 1135,
            cantidad: 27.0
        },
        {
            codigo_producto: 96,
            nro_item: 1143,
            cantidad: 46.0
        }
    ]
});
db.factura.insertOne({
    _id: 88,
    fecha: "2016-04-12",
    total_sin_iva: 587802.653173828,
    iva: 21.0,
    total_con_iva: 711241.2103403319,
    nro_cliente: 21,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 923,
            cantidad: 39.0
        },
        {
            codigo_producto: 14,
            nro_item: 961,
            cantidad: 90.0
        },
        {
            codigo_producto: 16,
            nro_item: 929,
            cantidad: 92.0
        },
        {
            codigo_producto: 19,
            nro_item: 924,
            cantidad: 94.0
        },
        {
            codigo_producto: 31,
            nro_item: 953,
            cantidad: 55.0
        },
        {
            codigo_producto: 43,
            nro_item: 1038,
            cantidad: 18.0
        },
        {
            codigo_producto: 51,
            nro_item: 1025,
            cantidad: 24.0
        },
        {
            codigo_producto: 56,
            nro_item: 1005,
            cantidad: 41.0
        },
        {
            codigo_producto: 57,
            nro_item: 1091,
            cantidad: 75.0
        },
        {
            codigo_producto: 60,
            nro_item: 1021,
            cantidad: 40.0
        },
        {
            codigo_producto: 68,
            nro_item: 1118,
            cantidad: 42.0
        },
        {
            codigo_producto: 69,
            nro_item: 1163,
            cantidad: 98.0
        },
        {
            codigo_producto: 72,
            nro_item: 1149,
            cantidad: 59.0
        },
        {
            codigo_producto: 82,
            nro_item: 1117,
            cantidad: 40.0
        },
        {
            codigo_producto: 87,
            nro_item: 1151,
            cantidad: 55.0
        },
        {
            codigo_producto: 91,
            nro_item: 1182,
            cantidad: 87.0
        },
        {
            codigo_producto: 100,
            nro_item: 1145,
            cantidad: 95.0
        }
    ]
});
db.factura.insertOne({
    _id: 89,
    fecha: "2016-12-04",
    total_sin_iva: 482178.13379516604,
    iva: 21.0,
    total_con_iva: 583435.5418921509,
    nro_cliente: 25,
    detalle: [
        {
            codigo_producto: 16,
            nro_item: 996,
            cantidad: 63.0
        },
        {
            codigo_producto: 17,
            nro_item: 998,
            cantidad: 81.0
        },
        {
            codigo_producto: 28,
            nro_item: 909,
            cantidad: 16.0
        },
        {
            codigo_producto: 32,
            nro_item: 987,
            cantidad: 38.0
        },
        {
            codigo_producto: 51,
            nro_item: 1030,
            cantidad: 92.0
        },
        {
            codigo_producto: 56,
            nro_item: 1033,
            cantidad: 87.0
        },
        {
            codigo_producto: 57,
            nro_item: 1024,
            cantidad: 60.0
        },
        {
            codigo_producto: 64,
            nro_item: 1042,
            cantidad: 84.0
        },
        {
            codigo_producto: 86,
            nro_item: 1160,
            cantidad: 63.0
        },
        {
            codigo_producto: 90,
            nro_item: 1132,
            cantidad: 37.0
        },
        {
            codigo_producto: 91,
            nro_item: 1147,
            cantidad: 6.0
        },
        {
            codigo_producto: 96,
            nro_item: 1139,
            cantidad: 78.0
        }
    ]
});
db.factura.insertOne({
    _id: 90,
    fecha: "2017-01-11",
    total_sin_iva: 509025.6810155629,
    iva: 21.0,
    total_con_iva: 615921.0740288311,
    nro_cliente: 16,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 911,
            cantidad: 83.0
        },
        {
            codigo_producto: 4,
            nro_item: 926,
            cantidad: 61.0
        },
        {
            codigo_producto: 7,
            nro_item: 988,
            cantidad: 45.0
        },
        {
            codigo_producto: 8,
            nro_item: 976,
            cantidad: 91.0
        },
        {
            codigo_producto: 11,
            nro_item: 920,
            cantidad: 40.0
        },
        {
            codigo_producto: 17,
            nro_item: 992,
            cantidad: 84.0
        },
        {
            codigo_producto: 22,
            nro_item: 963,
            cantidad: 36.0
        },
        {
            codigo_producto: 24,
            nro_item: 904,
            cantidad: 64.0
        },
        {
            codigo_producto: 29,
            nro_item: 964,
            cantidad: 92.0
        },
        {
            codigo_producto: 55,
            nro_item: 1084,
            cantidad: 56.0
        },
        {
            codigo_producto: 56,
            nro_item: 1095,
            cantidad: 85.0
        },
        {
            codigo_producto: 70,
            nro_item: 1187,
            cantidad: 55.0
        },
        {
            codigo_producto: 76,
            nro_item: 1104,
            cantidad: 7.0
        },
        {
            codigo_producto: 80,
            nro_item: 1109,
            cantidad: 79.0
        },
        {
            codigo_producto: 95,
            nro_item: 1166,
            cantidad: 95.0
        },
        {
            codigo_producto: 99,
            nro_item: 1168,
            cantidad: 53.0
        }
    ]
});
db.factura.insertOne({
    _id: 91,
    fecha: "2016-08-03",
    total_sin_iva: 350190.56297912594,
    iva: 21.0,
    total_con_iva: 423730.58120474237,
    nro_cliente: 18,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 955,
            cantidad: 2.0
        },
        {
            codigo_producto: 10,
            nro_item: 917,
            cantidad: 50.0
        },
        {
            codigo_producto: 11,
            nro_item: 935,
            cantidad: 31.0
        },
        {
            codigo_producto: 18,
            nro_item: 945,
            cantidad: 25.0
        },
        {
            codigo_producto: 19,
            nro_item: 947,
            cantidad: 74.0
        },
        {
            codigo_producto: 32,
            nro_item: 918,
            cantidad: 78.0
        },
        {
            codigo_producto: 39,
            nro_item: 1093,
            cantidad: 1.0
        },
        {
            codigo_producto: 42,
            nro_item: 1081,
            cantidad: 20.0
        },
        {
            codigo_producto: 45,
            nro_item: 1017,
            cantidad: 90.0
        },
        {
            codigo_producto: 71,
            nro_item: 1153,
            cantidad: 28.0
        },
        {
            codigo_producto: 73,
            nro_item: 1198,
            cantidad: 1.0
        },
        {
            codigo_producto: 76,
            nro_item: 1186,
            cantidad: 17.0
        },
        {
            codigo_producto: 82,
            nro_item: 1114,
            cantidad: 13.0
        },
        {
            codigo_producto: 96,
            nro_item: 1107,
            cantidad: 95.0
        }
    ]
});
db.factura.insertOne({
    _id: 92,
    fecha: "2016-07-08",
    total_sin_iva: 132268.90318222047,
    iva: 21.0,
    total_con_iva: 160045.37285048678,
    nro_cliente: 12,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 940,
            cantidad: 7.0
        },
        {
            codigo_producto: 19,
            nro_item: 979,
            cantidad: 72.0
        },
        {
            codigo_producto: 30,
            nro_item: 939,
            cantidad: 17.0
        },
        {
            codigo_producto: 46,
            nro_item: 1034,
            cantidad: 34.0
        },
        {
            codigo_producto: 71,
            nro_item: 1141,
            cantidad: 11.0
        },
        {
            codigo_producto: 100,
            nro_item: 1197,
            cantidad: 55.0
        }
    ]
});
db.factura.insertOne({
    _id: 93,
    fecha: "2016-05-30",
    total_sin_iva: 348229.61329250335,
    iva: 21.0,
    total_con_iva: 421357.83208392904,
    nro_cliente: 6,
    detalle: [
        {
            codigo_producto: 16,
            nro_item: 937,
            cantidad: 97.0
        },
        {
            codigo_producto: 37,
            nro_item: 1012,
            cantidad: 90.0
        },
        {
            codigo_producto: 42,
            nro_item: 1019,
            cantidad: 98.0
        },
        {
            codigo_producto: 47,
            nro_item: 1063,
            cantidad: 78.0
        },
        {
            codigo_producto: 59,
            nro_item: 1040,
            cantidad: 88.0
        },
        {
            codigo_producto: 67,
            nro_item: 1177,
            cantidad: 31.0
        },
        {
            codigo_producto: 69,
            nro_item: 1176,
            cantidad: 43.0
        },
        {
            codigo_producto: 70,
            nro_item: 1111,
            cantidad: 58.0
        },
        {
            codigo_producto: 71,
            nro_item: 1154,
            cantidad: 70.0
        },
        {
            codigo_producto: 72,
            nro_item: 1142,
            cantidad: 74.0
        },
        {
            codigo_producto: 93,
            nro_item: 1152,
            cantidad: 49.0
        }
    ]
});
db.factura.insertOne({
    _id: 94,
    fecha: "2016-03-31",
    total_sin_iva: 128570.21040687562,
    iva: 21.0,
    total_con_iva: 155569.9545923195,
    nro_cliente: 19,
    detalle: [
        {
            codigo_producto: 19,
            nro_item: 978,
            cantidad: 69.0
        },
        {
            codigo_producto: 35,
            nro_item: 1059,
            cantidad: 76.0
        },
        {
            codigo_producto: 47,
            nro_item: 1022,
            cantidad: 20.0
        },
        {
            codigo_producto: 50,
            nro_item: 1037,
            cantidad: 56.0
        },
        {
            codigo_producto: 73,
            nro_item: 1178,
            cantidad: 31.0
        }
    ]
});
db.factura.insertOne({
    _id: 95,
    fecha: "2016-10-22",
    total_sin_iva: 134881.99930496217,
    iva: 21.0,
    total_con_iva: 163207.21915900422,
    nro_cliente: 1,
    detalle: [
        {
            codigo_producto: 24,
            nro_item: 930,
            cantidad: 33.0
        },
        {
            codigo_producto: 26,
            nro_item: 914,
            cantidad: 36.0
        },
        {
            codigo_producto: 37,
            nro_item: 1085,
            cantidad: 19.0
        },
        {
            codigo_producto: 39,
            nro_item: 1035,
            cantidad: 6.0
        },
        {
            codigo_producto: 45,
            nro_item: 1066,
            cantidad: 14.0
        },
        {
            codigo_producto: 50,
            nro_item: 1098,
            cantidad: 79.0
        },
        {
            codigo_producto: 77,
            nro_item: 1192,
            cantidad: 17.0
        },
        {
            codigo_producto: 83,
            nro_item: 1189,
            cantidad: 83.0
        },
        {
            codigo_producto: 84,
            nro_item: 1199,
            cantidad: 59.0
        },
        {
            codigo_producto: 93,
            nro_item: 1181,
            cantidad: 1.0
        }
    ]
});
db.factura.insertOne({
    _id: 96,
    fecha: "2016-11-17",
    total_sin_iva: 357820.83092079166,
    iva: 21.0,
    total_con_iva: 432963.20541415794,
    nro_cliente: 2,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 931,
            cantidad: 3.0
        },
        {
            codigo_producto: 19,
            nro_item: 983,
            cantidad: 92.0
        },
        {
            codigo_producto: 23,
            nro_item: 907,
            cantidad: 33.0
        },
        {
            codigo_producto: 29,
            nro_item: 919,
            cantidad: 83.0
        },
        {
            codigo_producto: 34,
            nro_item: 1008,
            cantidad: 88.0
        },
        {
            codigo_producto: 38,
            nro_item: 1096,
            cantidad: 79.0
        },
        {
            codigo_producto: 49,
            nro_item: 1072,
            cantidad: 50.0
        },
        {
            codigo_producto: 54,
            nro_item: 1094,
            cantidad: 19.0
        },
        {
            codigo_producto: 69,
            nro_item: 1134,
            cantidad: 84.0
        },
        {
            codigo_producto: 71,
            nro_item: 1150,
            cantidad: 54.0
        },
        {
            codigo_producto: 76,
            nro_item: 1131,
            cantidad: 94.0
        },
        {
            codigo_producto: 78,
            nro_item: 1196,
            cantidad: 33.0
        }
    ]
});
db.factura.insertOne({
    _id: 97,
    fecha: "2016-12-07",
    total_sin_iva: 203206.243964386,
    iva: 21.0,
    total_con_iva: 245879.55519690705,
    nro_cliente: 16,
    detalle: [
        {
            codigo_producto: 16,
            nro_item: 965,
            cantidad: 42.0
        },
        {
            codigo_producto: 20,
            nro_item: 981,
            cantidad: 36.0
        },
        {
            codigo_producto: 27,
            nro_item: 933,
            cantidad: 59.0
        },
        {
            codigo_producto: 32,
            nro_item: 959,
            cantidad: 41.0
        },
        {
            codigo_producto: 37,
            nro_item: 1045,
            cantidad: 5.0
        },
        {
            codigo_producto: 50,
            nro_item: 1006,
            cantidad: 19.0
        },
        {
            codigo_producto: 62,
            nro_item: 1020,
            cantidad: 69.0
        },
        {
            codigo_producto: 98,
            nro_item: 1103,
            cantidad: 72.0
        }
    ]
});
db.factura.insertOne({
    _id: 98,
    fecha: "2017-02-25",
    total_sin_iva: 343212.48152694706,
    iva: 21.0,
    total_con_iva: 415287.10264760593,
    nro_cliente: 6,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 944,
            cantidad: 80.0
        },
        {
            codigo_producto: 12,
            nro_item: 927,
            cantidad: 66.0
        },
        {
            codigo_producto: 35,
            nro_item: 1064,
            cantidad: 51.0
        },
        {
            codigo_producto: 38,
            nro_item: 1080,
            cantidad: 7.0
        },
        {
            codigo_producto: 45,
            nro_item: 1075,
            cantidad: 57.0
        },
        {
            codigo_producto: 50,
            nro_item: 1029,
            cantidad: 68.0
        },
        {
            codigo_producto: 54,
            nro_item: 1016,
            cantidad: 59.0
        },
        {
            codigo_producto: 70,
            nro_item: 1193,
            cantidad: 68.0
        },
        {
            codigo_producto: 74,
            nro_item: 1148,
            cantidad: 38.0
        },
        {
            codigo_producto: 77,
            nro_item: 1127,
            cantidad: 96.0
        },
        {
            codigo_producto: 93,
            nro_item: 1116,
            cantidad: 71.0
        },
        {
            codigo_producto: 94,
            nro_item: 1128,
            cantidad: 57.0
        },
        {
            codigo_producto: 95,
            nro_item: 1136,
            cantidad: 14.0
        },
        {
            codigo_producto: 98,
            nro_item: 1172,
            cantidad: 89.0
        }
    ]
});
db.factura.insertOne({
    _id: 99,
    fecha: "2016-12-20",
    total_sin_iva: 241925.11350317003,
    iva: 21.0,
    total_con_iva: 292729.38733883575,
    nro_cliente: 17,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 952,
            cantidad: 14.0
        },
        {
            codigo_producto: 4,
            nro_item: 915,
            cantidad: 72.0
        },
        {
            codigo_producto: 8,
            nro_item: 984,
            cantidad: 76.0
        },
        {
            codigo_producto: 24,
            nro_item: 999,
            cantidad: 42.0
        },
        {
            codigo_producto: 39,
            nro_item: 1007,
            cantidad: 46.0
        },
        {
            codigo_producto: 41,
            nro_item: 1011,
            cantidad: 44.0
        },
        {
            codigo_producto: 45,
            nro_item: 1069,
            cantidad: 76.0
        },
        {
            codigo_producto: 47,
            nro_item: 1074,
            cantidad: 19.0
        },
        {
            codigo_producto: 61,
            nro_item: 1003,
            cantidad: 12.0
        },
        {
            codigo_producto: 65,
            nro_item: 1051,
            cantidad: 62.0
        },
        {
            codigo_producto: 70,
            nro_item: 1157,
            cantidad: 21.0
        },
        {
            codigo_producto: 83,
            nro_item: 1169,
            cantidad: 25.0
        },
        {
            codigo_producto: 95,
            nro_item: 1185,
            cantidad: 1.0
        }
    ]
});
db.factura.insertOne({
    _id: 100,
    fecha: "2017-01-07",
    total_sin_iva: 228671.13404603003,
    iva: 21.0,
    total_con_iva: 276692.07219569635,
    nro_cliente: 11,
    detalle: [
        {
            codigo_producto: 5,
            nro_item: 962,
            cantidad: 71.0
        },
        {
            codigo_producto: 6,
            nro_item: 910,
            cantidad: 83.0
        },
        {
            codigo_producto: 21,
            nro_item: 994,
            cantidad: 52.0
        },
        {
            codigo_producto: 59,
            nro_item: 1001,
            cantidad: 96.0
        },
        {
            codigo_producto: 62,
            nro_item: 1060,
            cantidad: 57.0
        },
        {
            codigo_producto: 74,
            nro_item: 1171,
            cantidad: 38.0
        },
        {
            codigo_producto: 95,
            nro_item: 1161,
            cantidad: 94.0
        },
        {
            codigo_producto: 99,
            nro_item: 1140,
            cantidad: 46.0
        }
    ]
});
db.factura.insertOne({
    _id: 101,
    fecha: "2016-08-22",
    total_sin_iva: 112170.31009826661,
    iva: 21.0,
    total_con_iva: 135726.0752189026,
    nro_cliente: 34,
    detalle: [
        {
            codigo_producto: 77,
            nro_item: 1486,
            cantidad: 51.0
        },
        {
            codigo_producto: 83,
            nro_item: 1445,
            cantidad: 79.0
        },
        {
            codigo_producto: 90,
            nro_item: 1470,
            cantidad: 12.0
        },
        {
            codigo_producto: 94,
            nro_item: 1438,
            cantidad: 23.0
        },
        {
            codigo_producto: 95,
            nro_item: 1415,
            cantidad: 42.0
        },
        {
            codigo_producto: 98,
            nro_item: 1499,
            cantidad: 59.0
        }
    ]
});
db.factura.insertOne({
    _id: 102,
    fecha: "2017-01-16",
    total_sin_iva: 19237.580584716798,
    iva: 21.0,
    total_con_iva: 23277.472507507326,
    nro_cliente: 31,
    detalle: [
        {
            codigo_producto: 98,
            nro_item: 1420,
            cantidad: 27.0
        }
    ]
});
db.factura.insertOne({
    _id: 103,
    fecha: "2017-02-15",
    total_sin_iva: 89033.32067871094,
    iva: 21.0,
    total_con_iva: 107730.31802124024,
    nro_cliente: 32,
    detalle: [
        {
            codigo_producto: 69,
            nro_item: 1455,
            cantidad: 8.0
        },
        {
            codigo_producto: 79,
            nro_item: 1449,
            cantidad: 63.0
        },
        {
            codigo_producto: 86,
            nro_item: 1459,
            cantidad: 45.0
        }
    ]
});
db.factura.insertOne({
    _id: 104,
    fecha: "2017-01-23",
    total_sin_iva: 91182.65299072266,
    iva: 21.0,
    total_con_iva: 110331.01011877443,
    nro_cliente: 50,
    detalle: [
        {
            codigo_producto: 76,
            nro_item: 1411,
            cantidad: 94.0
        },
        {
            codigo_producto: 77,
            nro_item: 1458,
            cantidad: 65.0
        },
        {
            codigo_producto: 78,
            nro_item: 1426,
            cantidad: 4.0
        },
        {
            codigo_producto: 95,
            nro_item: 1431,
            cantidad: 18.0
        }
    ]
});
db.factura.insertOne({
    _id: 105,
    fecha: "2016-11-13",
    total_sin_iva: 54755.01150512696,
    iva: 21.0,
    total_con_iva: 66253.56392120362,
    nro_cliente: 35,
    detalle: [
        {
            codigo_producto: 68,
            nro_item: 1435,
            cantidad: 83.0
        },
        {
            codigo_producto: 87,
            nro_item: 1457,
            cantidad: 21.0
        }
    ]
});
db.factura.insertOne({
    _id: 106,
    fecha: "2016-04-23",
    total_sin_iva: 139207.69670398236,
    iva: 21.0,
    total_con_iva: 168441.31301181865,
    nro_cliente: 47,
    detalle: [
        {
            codigo_producto: 70,
            nro_item: 1447,
            cantidad: 29.0
        },
        {
            codigo_producto: 72,
            nro_item: 1484,
            cantidad: 49.0
        },
        {
            codigo_producto: 76,
            nro_item: 1428,
            cantidad: 24.0
        },
        {
            codigo_producto: 81,
            nro_item: 1462,
            cantidad: 14.0
        },
        {
            codigo_producto: 84,
            nro_item: 1408,
            cantidad: 94.0
        },
        {
            codigo_producto: 88,
            nro_item: 1407,
            cantidad: 72.0
        },
        {
            codigo_producto: 99,
            nro_item: 1413,
            cantidad: 97.0
        }
    ]
});
db.factura.insertOne({
    _id: 107,
    fecha: "2016-11-19",
    total_sin_iva: 43867.259464502335,
    iva: 21.0,
    total_con_iva: 53079.38395204782,
    nro_cliente: 47,
    detalle: [
        {
            codigo_producto: 75,
            nro_item: 1419,
            cantidad: 81.0
        },
        {
            codigo_producto: 93,
            nro_item: 1490,
            cantidad: 86.0
        },
        {
            codigo_producto: 95,
            nro_item: 1437,
            cantidad: 45.0
        },
        {
            codigo_producto: 99,
            nro_item: 1454,
            cantidad: 94.0
        }
    ]
});
db.factura.insertOne({
    _id: 108,
    fecha: "2016-10-07",
    total_sin_iva: 22219.650785827638,
    iva: 21.0,
    total_con_iva: 26885.77745085144,
    nro_cliente: 37,
    detalle: [
        {
            codigo_producto: 75,
            nro_item: 1436,
            cantidad: 41.0
        },
        {
            codigo_producto: 85,
            nro_item: 1410,
            cantidad: 8.0
        },
        {
            codigo_producto: 92,
            nro_item: 1409,
            cantidad: 4.0
        },
        {
            codigo_producto: 94,
            nro_item: 1418,
            cantidad: 22.0
        }
    ]
});
db.factura.insertOne({
    _id: 109,
    fecha: "2016-12-14",
    total_sin_iva: 85758.62297058105,
    iva: 21.0,
    total_con_iva: 103767.93379440307,
    nro_cliente: 31,
    detalle: [
        {
            codigo_producto: 82,
            nro_item: 1460,
            cantidad: 78.0
        },
        {
            codigo_producto: 91,
            nro_item: 1466,
            cantidad: 82.0
        },
        {
            codigo_producto: 93,
            nro_item: 1439,
            cantidad: 47.0
        }
    ]
});
db.factura.insertOne({
    _id: 110,
    fecha: "2017-03-22",
    total_sin_iva: 158679.4778503418,
    iva: 21.0,
    total_con_iva: 192002.16819891357,
    nro_cliente: 46,
    detalle: [
        {
            codigo_producto: 74,
            nro_item: 1492,
            cantidad: 92.0
        },
        {
            codigo_producto: 82,
            nro_item: 1482,
            cantidad: 24.0
        },
        {
            codigo_producto: 88,
            nro_item: 1491,
            cantidad: 28.0
        },
        {
            codigo_producto: 91,
            nro_item: 1473,
            cantidad: 92.0
        },
        {
            codigo_producto: 95,
            nro_item: 1481,
            cantidad: 4.0
        },
        {
            codigo_producto: 98,
            nro_item: 1432,
            cantidad: 61.0
        }
    ]
});
db.factura.insertOne({
    _id: 111,
    fecha: "2016-06-10",
    total_sin_iva: 18869.76156311035,
    iva: 21.0,
    total_con_iva: 22832.411491363524,
    nro_cliente: 30,
    detalle: [
        {
            codigo_producto: 73,
            nro_item: 1441,
            cantidad: 12.0
        },
        {
            codigo_producto: 75,
            nro_item: 1423,
            cantidad: 74.0
        },
        {
            codigo_producto: 82,
            nro_item: 1421,
            cantidad: 5.0
        }
    ]
});
db.factura.insertOne({
    _id: 112,
    fecha: "2016-12-23",
    total_sin_iva: 113364.51487426758,
    iva: 21.0,
    total_con_iva: 137171.06299786377,
    nro_cliente: 45,
    detalle: [
        {
            codigo_producto: 68,
            nro_item: 1443,
            cantidad: 75.0
        },
        {
            codigo_producto: 70,
            nro_item: 1479,
            cantidad: 73.0
        },
        {
            codigo_producto: 75,
            nro_item: 1429,
            cantidad: 52.0
        },
        {
            codigo_producto: 85,
            nro_item: 1493,
            cantidad: 32.0
        }
    ]
});
db.factura.insertOne({
    _id: 113,
    fecha: "2016-07-12",
    total_sin_iva: 68244.21129913331,
    iva: 21.0,
    total_con_iva: 82575.49567195131,
    nro_cliente: 45,
    detalle: [
        {
            codigo_producto: 75,
            nro_item: 1430,
            cantidad: 39.0
        },
        {
            codigo_producto: 85,
            nro_item: 1434,
            cantidad: 97.0
        }
    ]
});
db.factura.insertOne({
    _id: 114,
    fecha: "2017-01-12",
    total_sin_iva: 262331.71509704593,
    iva: 21.0,
    total_con_iva: 317421.37526742555,
    nro_cliente: 47,
    detalle: [
        {
            codigo_producto: 70,
            nro_item: 1489,
            cantidad: 49.0
        },
        {
            codigo_producto: 71,
            nro_item: 1402,
            cantidad: 99.0
        },
        {
            codigo_producto: 75,
            nro_item: 1440,
            cantidad: 22.0
        },
        {
            codigo_producto: 76,
            nro_item: 1480,
            cantidad: 77.0
        },
        {
            codigo_producto: 86,
            nro_item: 1497,
            cantidad: 86.0
        },
        {
            codigo_producto: 93,
            nro_item: 1448,
            cantidad: 33.0
        },
        {
            codigo_producto: 94,
            nro_item: 1412,
            cantidad: 16.0
        },
        {
            codigo_producto: 95,
            nro_item: 1453,
            cantidad: 61.0
        }
    ]
});
db.factura.insertOne({
    _id: 115,
    fecha: "2016-08-08",
    total_sin_iva: 38221.10952758789,
    iva: 21.0,
    total_con_iva: 46247.542528381346,
    nro_cliente: 43,
    detalle: [
        {
            codigo_producto: 83,
            nro_item: 1461,
            cantidad: 60.0
        },
        {
            codigo_producto: 84,
            nro_item: 1494,
            cantidad: 35.0
        }
    ]
});
db.factura.insertOne({
    _id: 116,
    fecha: "2016-12-18",
    total_sin_iva: 100344.15900878907,
    iva: 21.0,
    total_con_iva: 121416.43240063477,
    nro_cliente: 33,
    detalle: [
        {
            codigo_producto: 72,
            nro_item: 1452,
            cantidad: 81.0
        },
        {
            codigo_producto: 73,
            nro_item: 1404,
            cantidad: 46.0
        },
        {
            codigo_producto: 89,
            nro_item: 1483,
            cantidad: 35.0
        }
    ]
});
db.factura.insertOne({
    _id: 117,
    fecha: "2017-03-01",
    total_sin_iva: 44396.92506713867,
    iva: 21.0,
    total_con_iva: 53720.27933123779,
    nro_cliente: 32,
    detalle: [
        {
            codigo_producto: 73,
            nro_item: 1406,
            cantidad: 43.0
        },
        {
            codigo_producto: 81,
            nro_item: 1416,
            cantidad: 49.0
        },
        {
            codigo_producto: 87,
            nro_item: 1500,
            cantidad: 4.0
        }
    ]
});
db.factura.insertOne({
    _id: 118,
    fecha: "2016-07-09",
    total_sin_iva: 94854.87408905028,
    iva: 21.0,
    total_con_iva: 114774.39764775084,
    nro_cliente: 33,
    detalle: [
        {
            codigo_producto: 75,
            nro_item: 1451,
            cantidad: 62.0
        },
        {
            codigo_producto: 79,
            nro_item: 1472,
            cantidad: 40.0
        },
        {
            codigo_producto: 82,
            nro_item: 1414,
            cantidad: 7.0
        },
        {
            codigo_producto: 91,
            nro_item: 1496,
            cantidad: 66.0
        }
    ]
});
db.factura.insertOne({
    _id: 119,
    fecha: "2016-10-16",
    total_sin_iva: 71662.21162948609,
    iva: 21.0,
    total_con_iva: 86711.27607167816,
    nro_cliente: 49,
    detalle: [
        {
            codigo_producto: 68,
            nro_item: 1476,
            cantidad: 14.0
        },
        {
            codigo_producto: 91,
            nro_item: 1405,
            cantidad: 64.0
        },
        {
            codigo_producto: 95,
            nro_item: 1469,
            cantidad: 52.0
        },
        {
            codigo_producto: 99,
            nro_item: 1422,
            cantidad: 32.0
        }
    ]
});
db.factura.insertOne({
    _id: 120,
    fecha: "2017-01-15",
    total_sin_iva: 121722.02138671876,
    iva: 21.0,
    total_con_iva: 147283.6458779297,
    nro_cliente: 48,
    detalle: [
        {
            codigo_producto: 70,
            nro_item: 1474,
            cantidad: 51.0
        },
        {
            codigo_producto: 86,
            nro_item: 1485,
            cantidad: 76.0
        },
        {
            codigo_producto: 97,
            nro_item: 1463,
            cantidad: 54.0
        }
    ]
});
db.factura.insertOne({
    _id: 121,
    fecha: "2016-10-18",
    total_sin_iva: 83810.84755859376,
    iva: 21.0,
    total_con_iva: 101411.12554589845,
    nro_cliente: 31,
    detalle: [
        {
            codigo_producto: 70,
            nro_item: 1442,
            cantidad: 88.0
        },
        {
            codigo_producto: 75,
            nro_item: 1417,
            cantidad: 88.0
        },
        {
            codigo_producto: 81,
            nro_item: 1427,
            cantidad: 30.0
        },
        {
            codigo_producto: 85,
            nro_item: 1403,
            cantidad: 4.0
        }
    ]
});
db.factura.insertOne({
    _id: 122,
    fecha: "2016-03-19",
    total_sin_iva: 112790.21520080566,
    iva: 21.0,
    total_con_iva: 136476.16039297485,
    nro_cliente: 43,
    detalle: [
        {
            codigo_producto: 67,
            nro_item: 1488,
            cantidad: 25.0
        },
        {
            codigo_producto: 78,
            nro_item: 1475,
            cantidad: 60.0
        },
        {
            codigo_producto: 86,
            nro_item: 1464,
            cantidad: 80.0
        },
        {
            codigo_producto: 89,
            nro_item: 1477,
            cantidad: 22.0
        }
    ]
});
db.factura.insertOne({
    _id: 123,
    fecha: "2016-12-07",
    total_sin_iva: 136219.0414550781,
    iva: 21.0,
    total_con_iva: 164825.0401606445,
    nro_cliente: 49,
    detalle: [
        {
            codigo_producto: 72,
            nro_item: 1425,
            cantidad: 2.0
        },
        {
            codigo_producto: 79,
            nro_item: 1456,
            cantidad: 77.0
        },
        {
            codigo_producto: 83,
            nro_item: 1478,
            cantidad: 39.0
        },
        {
            codigo_producto: 94,
            nro_item: 1446,
            cantidad: 52.0
        },
        {
            codigo_producto: 97,
            nro_item: 1468,
            cantidad: 37.0
        },
        {
            codigo_producto: 100,
            nro_item: 1401,
            cantidad: 20.0
        }
    ]
});
db.factura.insertOne({
    _id: 124,
    fecha: "2016-05-25",
    total_sin_iva: 51967.980560302734,
    iva: 21.0,
    total_con_iva: 62881.25647796631,
    nro_cliente: 42,
    detalle: [
        {
            codigo_producto: 76,
            nro_item: 1444,
            cantidad: 30.0
        },
        {
            codigo_producto: 94,
            nro_item: 1495,
            cantidad: 90.0
        }
    ]
});
db.factura.insertOne({
    _id: 125,
    fecha: "2016-07-14",
    total_sin_iva: 124454.66211853028,
    iva: 21.0,
    total_con_iva: 150590.14116342165,
    nro_cliente: 39,
    detalle: [
        {
            codigo_producto: 75,
            nro_item: 1465,
            cantidad: 5.0
        },
        {
            codigo_producto: 81,
            nro_item: 1424,
            cantidad: 34.0
        },
        {
            codigo_producto: 90,
            nro_item: 1450,
            cantidad: 92.0
        },
        {
            codigo_producto: 98,
            nro_item: 1467,
            cantidad: 72.0
        }
    ]
});
db.factura.insertOne({
    _id: 126,
    fecha: "2016-11-13",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 33
});
db.factura.insertOne({
    _id: 127,
    fecha: "2017-03-11",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 35
});
db.factura.insertOne({
    _id: 128,
    fecha: "2016-06-11",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 28
});
db.factura.insertOne({
    _id: 129,
    fecha: "2016-07-15",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 38
});
db.factura.insertOne({
    _id: 130,
    fecha: "2016-09-29",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 47
});
db.factura.insertOne({
    _id: 131,
    fecha: "2016-07-01",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 42
});
db.factura.insertOne({
    _id: 132,
    fecha: "2017-02-10",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 37
});
db.factura.insertOne({
    _id: 133,
    fecha: "2016-06-19",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 29
});
db.factura.insertOne({
    _id: 134,
    fecha: "2016-11-27",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 33
});
db.factura.insertOne({
    _id: 135,
    fecha: "2016-10-25",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 26
});
db.factura.insertOne({
    _id: 136,
    fecha: "2016-12-10",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 39
});
db.factura.insertOne({
    _id: 137,
    fecha: "2016-10-27",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 44
});
db.factura.insertOne({
    _id: 138,
    fecha: "2017-01-23",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 27
});
db.factura.insertOne({
    _id: 139,
    fecha: "2016-04-22",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 47
});
db.factura.insertOne({
    _id: 140,
    fecha: "2016-03-05",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 33
});
db.factura.insertOne({
    _id: 141,
    fecha: "2016-06-12",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 35
});
db.factura.insertOne({
    _id: 142,
    fecha: "2016-04-23",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 36
});
db.factura.insertOne({
    _id: 143,
    fecha: "2016-05-16",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 26
});
db.factura.insertOne({
    _id: 144,
    fecha: "2016-04-30",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 41
});
db.factura.insertOne({
    _id: 145,
    fecha: "2016-04-26",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 38
});
db.factura.insertOne({
    _id: 146,
    fecha: "2017-03-12",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 27
});
db.factura.insertOne({
    _id: 147,
    fecha: "2016-03-09",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 30
});
db.factura.insertOne({
    _id: 148,
    fecha: "2016-08-03",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 34
});
db.factura.insertOne({
    _id: 149,
    fecha: "2016-04-19",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 27
});
db.factura.insertOne({
    _id: 150,
    fecha: "2016-03-25",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 42
});
db.factura.insertOne({
    _id: 151,
    fecha: "2016-03-26",
    total_sin_iva: 429054.9749420166,
    iva: 21.0,
    total_con_iva: 519156.5196798401,
    nro_cliente: 45,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 1837,
            cantidad: 90.0
        },
        {
            codigo_producto: 15,
            nro_item: 1834,
            cantidad: 39.0
        },
        {
            codigo_producto: 20,
            nro_item: 1874,
            cantidad: 23.0
        },
        {
            codigo_producto: 27,
            nro_item: 1844,
            cantidad: 5.0
        },
        {
            codigo_producto: 31,
            nro_item: 1873,
            cantidad: 91.0
        },
        {
            codigo_producto: 39,
            nro_item: 1967,
            cantidad: 60.0
        },
        {
            codigo_producto: 65,
            nro_item: 1924,
            cantidad: 75.0
        },
        {
            codigo_producto: 66,
            nro_item: 1911,
            cantidad: 93.0
        },
        {
            codigo_producto: 70,
            nro_item: 2020,
            cantidad: 87.0
        },
        {
            codigo_producto: 80,
            nro_item: 2086,
            cantidad: 54.0
        },
        {
            codigo_producto: 87,
            nro_item: 2039,
            cantidad: 85.0
        },
        {
            codigo_producto: 88,
            nro_item: 2090,
            cantidad: 70.0
        },
        {
            codigo_producto: 97,
            nro_item: 2088,
            cantidad: 92.0
        }
    ]
});
db.factura.insertOne({
    _id: 152,
    fecha: "2016-12-08",
    total_sin_iva: 312806.7586595536,
    iva: 21.0,
    total_con_iva: 378496.17797805986,
    nro_cliente: 35,
    detalle: [
        {
            codigo_producto: 5,
            nro_item: 1880,
            cantidad: 81.0
        },
        {
            codigo_producto: 8,
            nro_item: 1824,
            cantidad: 83.0
        },
        {
            codigo_producto: 20,
            nro_item: 1801,
            cantidad: 14.0
        },
        {
            codigo_producto: 29,
            nro_item: 1892,
            cantidad: 4.0
        },
        {
            codigo_producto: 44,
            nro_item: 1939,
            cantidad: 69.0
        },
        {
            codigo_producto: 47,
            nro_item: 1957,
            cantidad: 26.0
        },
        {
            codigo_producto: 74,
            nro_item: 2048,
            cantidad: 47.0
        },
        {
            codigo_producto: 75,
            nro_item: 2017,
            cantidad: 97.0
        },
        {
            codigo_producto: 87,
            nro_item: 2054,
            cantidad: 27.0
        },
        {
            codigo_producto: 89,
            nro_item: 2061,
            cantidad: 51.0
        },
        {
            codigo_producto: 91,
            nro_item: 2030,
            cantidad: 85.0
        },
        {
            codigo_producto: 97,
            nro_item: 2055,
            cantidad: 97.0
        }
    ]
});
db.factura.insertOne({
    _id: 153,
    fecha: "2016-07-09",
    total_sin_iva: 397433.91953125,
    iva: 21.0,
    total_con_iva: 480895.0426328125,
    nro_cliente: 44,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 1877,
            cantidad: 37.0
        },
        {
            codigo_producto: 9,
            nro_item: 1885,
            cantidad: 2.0
        },
        {
            codigo_producto: 16,
            nro_item: 1853,
            cantidad: 66.0
        },
        {
            codigo_producto: 17,
            nro_item: 1805,
            cantidad: 88.0
        },
        {
            codigo_producto: 25,
            nro_item: 1820,
            cantidad: 40.0
        },
        {
            codigo_producto: 31,
            nro_item: 1807,
            cantidad: 84.0
        },
        {
            codigo_producto: 49,
            nro_item: 1959,
            cantidad: 80.0
        },
        {
            codigo_producto: 55,
            nro_item: 1922,
            cantidad: 40.0
        },
        {
            codigo_producto: 59,
            nro_item: 1906,
            cantidad: 53.0
        },
        {
            codigo_producto: 72,
            nro_item: 2031,
            cantidad: 76.0
        },
        {
            codigo_producto: 77,
            nro_item: 2015,
            cantidad: 11.0
        },
        {
            codigo_producto: 98,
            nro_item: 2029,
            cantidad: 97.0
        }
    ]
});
db.factura.insertOne({
    _id: 154,
    fecha: "2016-04-17",
    total_sin_iva: 252226.91213378907,
    iva: 21.0,
    total_con_iva: 305194.5636818848,
    nro_cliente: 29,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 1840,
            cantidad: 32.0
        },
        {
            codigo_producto: 22,
            nro_item: 1851,
            cantidad: 23.0
        },
        {
            codigo_producto: 27,
            nro_item: 1854,
            cantidad: 64.0
        },
        {
            codigo_producto: 35,
            nro_item: 1951,
            cantidad: 51.0
        },
        {
            codigo_producto: 46,
            nro_item: 1901,
            cantidad: 39.0
        },
        {
            codigo_producto: 57,
            nro_item: 1989,
            cantidad: 60.0
        },
        {
            codigo_producto: 64,
            nro_item: 1903,
            cantidad: 92.0
        },
        {
            codigo_producto: 67,
            nro_item: 2057,
            cantidad: 91.0
        },
        {
            codigo_producto: 88,
            nro_item: 2027,
            cantidad: 53.0
        },
        {
            codigo_producto: 96,
            nro_item: 2053,
            cantidad: 6.0
        }
    ]
});
db.factura.insertOne({
    _id: 155,
    fecha: "2017-03-09",
    total_sin_iva: 212269.6384048462,
    iva: 21.0,
    total_con_iva: 256846.2624698639,
    nro_cliente: 38,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 1832,
            cantidad: 18.0
        },
        {
            codigo_producto: 4,
            nro_item: 1860,
            cantidad: 49.0
        },
        {
            codigo_producto: 23,
            nro_item: 1819,
            cantidad: 72.0
        },
        {
            codigo_producto: 24,
            nro_item: 1898,
            cantidad: 7.0
        },
        {
            codigo_producto: 41,
            nro_item: 1986,
            cantidad: 23.0
        },
        {
            codigo_producto: 46,
            nro_item: 1992,
            cantidad: 9.0
        },
        {
            codigo_producto: 55,
            nro_item: 1931,
            cantidad: 45.0
        },
        {
            codigo_producto: 60,
            nro_item: 1917,
            cantidad: 47.0
        },
        {
            codigo_producto: 63,
            nro_item: 1963,
            cantidad: 80.0
        },
        {
            codigo_producto: 69,
            nro_item: 2068,
            cantidad: 69.0
        },
        {
            codigo_producto: 97,
            nro_item: 2047,
            cantidad: 30.0
        }
    ]
});
db.factura.insertOne({
    _id: 156,
    fecha: "2016-09-10",
    total_sin_iva: 469611.86669197085,
    iva: 21.0,
    total_con_iva: 568230.3586972847,
    nro_cliente: 29,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 1802,
            cantidad: 87.0
        },
        {
            codigo_producto: 12,
            nro_item: 1828,
            cantidad: 6.0
        },
        {
            codigo_producto: 16,
            nro_item: 1869,
            cantidad: 78.0
        },
        {
            codigo_producto: 20,
            nro_item: 1806,
            cantidad: 69.0
        },
        {
            codigo_producto: 40,
            nro_item: 1923,
            cantidad: 76.0
        },
        {
            codigo_producto: 42,
            nro_item: 1914,
            cantidad: 58.0
        },
        {
            codigo_producto: 47,
            nro_item: 1991,
            cantidad: 68.0
        },
        {
            codigo_producto: 56,
            nro_item: 1982,
            cantidad: 29.0
        },
        {
            codigo_producto: 68,
            nro_item: 2045,
            cantidad: 57.0
        },
        {
            codigo_producto: 71,
            nro_item: 2018,
            cantidad: 38.0
        },
        {
            codigo_producto: 72,
            nro_item: 2041,
            cantidad: 94.0
        },
        {
            codigo_producto: 78,
            nro_item: 2070,
            cantidad: 68.0
        },
        {
            codigo_producto: 84,
            nro_item: 2033,
            cantidad: 76.0
        },
        {
            codigo_producto: 85,
            nro_item: 2022,
            cantidad: 40.0
        },
        {
            codigo_producto: 91,
            nro_item: 2019,
            cantidad: 13.0
        },
        {
            codigo_producto: 96,
            nro_item: 2003,
            cantidad: 52.0
        }
    ]
});
db.factura.insertOne({
    _id: 157,
    fecha: "2016-12-21",
    total_sin_iva: 236049.9584716797,
    iva: 21.0,
    total_con_iva: 285620.44975073246,
    nro_cliente: 39,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 1812,
            cantidad: 55.0
        },
        {
            codigo_producto: 27,
            nro_item: 1838,
            cantidad: 80.0
        },
        {
            codigo_producto: 30,
            nro_item: 1893,
            cantidad: 86.0
        },
        {
            codigo_producto: 37,
            nro_item: 1996,
            cantidad: 8.0
        },
        {
            codigo_producto: 78,
            nro_item: 2012,
            cantidad: 69.0
        },
        {
            codigo_producto: 92,
            nro_item: 2050,
            cantidad: 42.0
        },
        {
            codigo_producto: 96,
            nro_item: 2073,
            cantidad: 84.0
        }
    ]
});
db.factura.insertOne({
    _id: 158,
    fecha: "2016-03-28",
    total_sin_iva: 200998.78958129883,
    iva: 21.0,
    total_con_iva: 243208.5353933716,
    nro_cliente: 46,
    detalle: [
        {
            codigo_producto: 8,
            nro_item: 1882,
            cantidad: 44.0
        },
        {
            codigo_producto: 59,
            nro_item: 1988,
            cantidad: 6.0
        },
        {
            codigo_producto: 71,
            nro_item: 2078,
            cantidad: 71.0
        },
        {
            codigo_producto: 81,
            nro_item: 2025,
            cantidad: 6.0
        },
        {
            codigo_producto: 82,
            nro_item: 2092,
            cantidad: 59.0
        },
        {
            codigo_producto: 87,
            nro_item: 2013,
            cantidad: 82.0
        },
        {
            codigo_producto: 94,
            nro_item: 2036,
            cantidad: 47.0
        },
        {
            codigo_producto: 97,
            nro_item: 2009,
            cantidad: 83.0
        }
    ]
});
db.factura.insertOne({
    _id: 159,
    fecha: "2016-11-13",
    total_sin_iva: 281579.8501853228,
    iva: 21.0,
    total_con_iva: 340711.6187242406,
    nro_cliente: 49,
    detalle: [
        {
            codigo_producto: 7,
            nro_item: 1830,
            cantidad: 55.0
        },
        {
            codigo_producto: 11,
            nro_item: 1899,
            cantidad: 58.0
        },
        {
            codigo_producto: 13,
            nro_item: 1856,
            cantidad: 52.0
        },
        {
            codigo_producto: 26,
            nro_item: 1850,
            cantidad: 64.0
        },
        {
            codigo_producto: 35,
            nro_item: 1943,
            cantidad: 37.0
        },
        {
            codigo_producto: 36,
            nro_item: 1946,
            cantidad: 12.0
        },
        {
            codigo_producto: 43,
            nro_item: 1962,
            cantidad: 25.0
        },
        {
            codigo_producto: 50,
            nro_item: 1972,
            cantidad: 3.0
        },
        {
            codigo_producto: 53,
            nro_item: 1910,
            cantidad: 53.0
        },
        {
            codigo_producto: 55,
            nro_item: 1994,
            cantidad: 35.0
        },
        {
            codigo_producto: 59,
            nro_item: 1938,
            cantidad: 75.0
        },
        {
            codigo_producto: 62,
            nro_item: 1913,
            cantidad: 64.0
        },
        {
            codigo_producto: 67,
            nro_item: 2002,
            cantidad: 28.0
        },
        {
            codigo_producto: 99,
            nro_item: 2026,
            cantidad: 39.0
        }
    ]
});
db.factura.insertOne({
    _id: 160,
    fecha: "2016-12-07",
    total_sin_iva: 341159.311536026,
    iva: 21.0,
    total_con_iva: 412802.76695859147,
    nro_cliente: 39,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 1878,
            cantidad: 19.0
        },
        {
            codigo_producto: 19,
            nro_item: 1852,
            cantidad: 43.0
        },
        {
            codigo_producto: 22,
            nro_item: 1814,
            cantidad: 99.0
        },
        {
            codigo_producto: 29,
            nro_item: 1864,
            cantidad: 15.0
        },
        {
            codigo_producto: 34,
            nro_item: 1940,
            cantidad: 97.0
        },
        {
            codigo_producto: 44,
            nro_item: 1985,
            cantidad: 92.0
        },
        {
            codigo_producto: 56,
            nro_item: 1935,
            cantidad: 39.0
        },
        {
            codigo_producto: 66,
            nro_item: 1958,
            cantidad: 98.0
        },
        {
            codigo_producto: 67,
            nro_item: 2076,
            cantidad: 88.0
        },
        {
            codigo_producto: 84,
            nro_item: 2074,
            cantidad: 97.0
        },
        {
            codigo_producto: 86,
            nro_item: 2016,
            cantidad: 12.0
        },
        {
            codigo_producto: 90,
            nro_item: 2060,
            cantidad: 14.0
        }
    ]
});
db.factura.insertOne({
    _id: 161,
    fecha: "2016-08-11",
    total_sin_iva: 271956.0344055176,
    iva: 21.0,
    total_con_iva: 329066.8016306763,
    nro_cliente: 50,
    detalle: [
        {
            codigo_producto: 23,
            nro_item: 1895,
            cantidad: 1.0
        },
        {
            codigo_producto: 28,
            nro_item: 1804,
            cantidad: 85.0
        },
        {
            codigo_producto: 32,
            nro_item: 1879,
            cantidad: 47.0
        },
        {
            codigo_producto: 35,
            nro_item: 1965,
            cantidad: 48.0
        },
        {
            codigo_producto: 41,
            nro_item: 1971,
            cantidad: 74.0
        },
        {
            codigo_producto: 44,
            nro_item: 1964,
            cantidad: 15.0
        },
        {
            codigo_producto: 62,
            nro_item: 1916,
            cantidad: 50.0
        },
        {
            codigo_producto: 72,
            nro_item: 2014,
            cantidad: 30.0
        },
        {
            codigo_producto: 81,
            nro_item: 2075,
            cantidad: 66.0
        },
        {
            codigo_producto: 84,
            nro_item: 2042,
            cantidad: 29.0
        },
        {
            codigo_producto: 85,
            nro_item: 2011,
            cantidad: 4.0
        },
        {
            codigo_producto: 87,
            nro_item: 2008,
            cantidad: 27.0
        },
        {
            codigo_producto: 89,
            nro_item: 2059,
            cantidad: 36.0
        }
    ]
});
db.factura.insertOne({
    _id: 162,
    fecha: "2017-03-21",
    total_sin_iva: 274858.47860412596,
    iva: 21.0,
    total_con_iva: 332578.7591109924,
    nro_cliente: 30,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 1803,
            cantidad: 83.0
        },
        {
            codigo_producto: 14,
            nro_item: 1811,
            cantidad: 74.0
        },
        {
            codigo_producto: 29,
            nro_item: 1813,
            cantidad: 72.0
        },
        {
            codigo_producto: 32,
            nro_item: 1821,
            cantidad: 88.0
        },
        {
            codigo_producto: 34,
            nro_item: 1961,
            cantidad: 44.0
        },
        {
            codigo_producto: 36,
            nro_item: 1973,
            cantidad: 14.0
        },
        {
            codigo_producto: 37,
            nro_item: 1927,
            cantidad: 77.0
        },
        {
            codigo_producto: 48,
            nro_item: 1942,
            cantidad: 51.0
        },
        {
            codigo_producto: 64,
            nro_item: 1953,
            cantidad: 3.0
        },
        {
            codigo_producto: 77,
            nro_item: 2004,
            cantidad: 43.0
        },
        {
            codigo_producto: 90,
            nro_item: 2028,
            cantidad: 42.0
        },
        {
            codigo_producto: 93,
            nro_item: 2049,
            cantidad: 32.0
        },
        {
            codigo_producto: 94,
            nro_item: 2095,
            cantidad: 96.0
        }
    ]
});
db.factura.insertOne({
    _id: 163,
    fecha: "2016-11-03",
    total_sin_iva: 151855.44412994385,
    iva: 21.0,
    total_con_iva: 183745.08739723207,
    nro_cliente: 33,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 1876,
            cantidad: 40.0
        },
        {
            codigo_producto: 2,
            nro_item: 1831,
            cantidad: 73.0
        },
        {
            codigo_producto: 7,
            nro_item: 1808,
            cantidad: 73.0
        },
        {
            codigo_producto: 56,
            nro_item: 1918,
            cantidad: 65.0
        },
        {
            codigo_producto: 92,
            nro_item: 2040,
            cantidad: 35.0
        },
        {
            codigo_producto: 97,
            nro_item: 2010,
            cantidad: 73.0
        }
    ]
});
db.factura.insertOne({
    _id: 164,
    fecha: "2016-04-11",
    total_sin_iva: 323119.86240997317,
    iva: 21.0,
    total_con_iva: 390975.03351606755,
    nro_cliente: 33,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 1855,
            cantidad: 45.0
        },
        {
            codigo_producto: 13,
            nro_item: 1833,
            cantidad: 66.0
        },
        {
            codigo_producto: 16,
            nro_item: 1809,
            cantidad: 60.0
        },
        {
            codigo_producto: 23,
            nro_item: 1815,
            cantidad: 67.0
        },
        {
            codigo_producto: 48,
            nro_item: 1975,
            cantidad: 17.0
        },
        {
            codigo_producto: 61,
            nro_item: 1954,
            cantidad: 21.0
        },
        {
            codigo_producto: 63,
            nro_item: 1966,
            cantidad: 67.0
        },
        {
            codigo_producto: 65,
            nro_item: 1912,
            cantidad: 51.0
        },
        {
            codigo_producto: 79,
            nro_item: 2091,
            cantidad: 74.0
        },
        {
            codigo_producto: 87,
            nro_item: 2006,
            cantidad: 8.0
        },
        {
            codigo_producto: 89,
            nro_item: 2035,
            cantidad: 20.0
        },
        {
            codigo_producto: 91,
            nro_item: 2046,
            cantidad: 100.0
        }
    ]
});
db.factura.insertOne({
    _id: 165,
    fecha: "2016-11-08",
    total_sin_iva: 247526.2759627104,
    iva: 21.0,
    total_con_iva: 299506.7939148796,
    nro_cliente: 43,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 1891,
            cantidad: 5.0
        },
        {
            codigo_producto: 35,
            nro_item: 1933,
            cantidad: 89.0
        },
        {
            codigo_producto: 36,
            nro_item: 1960,
            cantidad: 11.0
        },
        {
            codigo_producto: 38,
            nro_item: 1978,
            cantidad: 74.0
        },
        {
            codigo_producto: 43,
            nro_item: 1934,
            cantidad: 17.0
        },
        {
            codigo_producto: 47,
            nro_item: 1904,
            cantidad: 9.0
        },
        {
            codigo_producto: 54,
            nro_item: 1950,
            cantidad: 56.0
        },
        {
            codigo_producto: 55,
            nro_item: 1944,
            cantidad: 38.0
        },
        {
            codigo_producto: 60,
            nro_item: 1915,
            cantidad: 18.0
        },
        {
            codigo_producto: 67,
            nro_item: 2066,
            cantidad: 44.0
        },
        {
            codigo_producto: 84,
            nro_item: 2062,
            cantidad: 68.0
        },
        {
            codigo_producto: 86,
            nro_item: 2080,
            cantidad: 99.0
        },
        {
            codigo_producto: 94,
            nro_item: 2099,
            cantidad: 22.0
        },
        {
            codigo_producto: 99,
            nro_item: 2089,
            cantidad: 55.0
        }
    ]
});
db.factura.insertOne({
    _id: 166,
    fecha: "2016-03-11",
    total_sin_iva: 178376.49148864747,
    iva: 21.0,
    total_con_iva: 215835.55470126343,
    nro_cliente: 34,
    detalle: [
        {
            codigo_producto: 20,
            nro_item: 1883,
            cantidad: 41.0
        },
        {
            codigo_producto: 61,
            nro_item: 1952,
            cantidad: 33.0
        },
        {
            codigo_producto: 67,
            nro_item: 2087,
            cantidad: 94.0
        },
        {
            codigo_producto: 71,
            nro_item: 2081,
            cantidad: 61.0
        },
        {
            codigo_producto: 72,
            nro_item: 2001,
            cantidad: 16.0
        },
        {
            codigo_producto: 80,
            nro_item: 2082,
            cantidad: 15.0
        },
        {
            codigo_producto: 84,
            nro_item: 2037,
            cantidad: 13.0
        },
        {
            codigo_producto: 86,
            nro_item: 2097,
            cantidad: 65.0
        }
    ]
});
db.factura.insertOne({
    _id: 167,
    fecha: "2016-03-02",
    total_sin_iva: 230028.87923965458,
    iva: 21.0,
    total_con_iva: 278334.94387998205,
    nro_cliente: 38,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 1870,
            cantidad: 1.0
        },
        {
            codigo_producto: 17,
            nro_item: 1884,
            cantidad: 50.0
        },
        {
            codigo_producto: 20,
            nro_item: 1866,
            cantidad: 11.0
        },
        {
            codigo_producto: 25,
            nro_item: 1845,
            cantidad: 47.0
        },
        {
            codigo_producto: 35,
            nro_item: 1983,
            cantidad: 22.0
        },
        {
            codigo_producto: 37,
            nro_item: 1907,
            cantidad: 45.0
        },
        {
            codigo_producto: 40,
            nro_item: 1993,
            cantidad: 86.0
        },
        {
            codigo_producto: 51,
            nro_item: 1908,
            cantidad: 74.0
        },
        {
            codigo_producto: 53,
            nro_item: 1947,
            cantidad: 60.0
        },
        {
            codigo_producto: 90,
            nro_item: 2079,
            cantidad: 70.0
        },
        {
            codigo_producto: 98,
            nro_item: 2093,
            cantidad: 53.0
        }
    ]
});
db.factura.insertOne({
    _id: 168,
    fecha: "2016-05-29",
    total_sin_iva: 236629.41751098633,
    iva: 21.0,
    total_con_iva: 286321.59518829343,
    nro_cliente: 43,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 1861,
            cantidad: 47.0
        },
        {
            codigo_producto: 5,
            nro_item: 1857,
            cantidad: 41.0
        },
        {
            codigo_producto: 16,
            nro_item: 1817,
            cantidad: 57.0
        },
        {
            codigo_producto: 23,
            nro_item: 1825,
            cantidad: 53.0
        },
        {
            codigo_producto: 40,
            nro_item: 1921,
            cantidad: 85.0
        },
        {
            codigo_producto: 54,
            nro_item: 1987,
            cantidad: 95.0
        },
        {
            codigo_producto: 57,
            nro_item: 1945,
            cantidad: 80.0
        },
        {
            codigo_producto: 62,
            nro_item: 1929,
            cantidad: 42.0
        },
        {
            codigo_producto: 83,
            nro_item: 2083,
            cantidad: 19.0
        },
        {
            codigo_producto: 94,
            nro_item: 2051,
            cantidad: 21.0
        }
    ]
});
db.factura.insertOne({
    _id: 169,
    fecha: "2016-09-12",
    total_sin_iva: 215466.4274597168,
    iva: 21.0,
    total_con_iva: 260714.37722625732,
    nro_cliente: 48,
    detalle: [
        {
            codigo_producto: 8,
            nro_item: 1818,
            cantidad: 18.0
        },
        {
            codigo_producto: 15,
            nro_item: 1867,
            cantidad: 16.0
        },
        {
            codigo_producto: 21,
            nro_item: 1810,
            cantidad: 87.0
        },
        {
            codigo_producto: 25,
            nro_item: 1859,
            cantidad: 3.0
        },
        {
            codigo_producto: 39,
            nro_item: 1920,
            cantidad: 49.0
        },
        {
            codigo_producto: 43,
            nro_item: 1926,
            cantidad: 23.0
        },
        {
            codigo_producto: 54,
            nro_item: 2000,
            cantidad: 51.0
        },
        {
            codigo_producto: 61,
            nro_item: 1956,
            cantidad: 86.0
        },
        {
            codigo_producto: 62,
            nro_item: 1997,
            cantidad: 9.0
        },
        {
            codigo_producto: 73,
            nro_item: 2096,
            cantidad: 40.0
        },
        {
            codigo_producto: 98,
            nro_item: 2069,
            cantidad: 99.0
        }
    ]
});
db.factura.insertOne({
    _id: 170,
    fecha: "2016-08-20",
    total_sin_iva: 317626.7874786139,
    iva: 21.0,
    total_con_iva: 384328.41284912283,
    nro_cliente: 33,
    detalle: [
        {
            codigo_producto: 9,
            nro_item: 1839,
            cantidad: 96.0
        },
        {
            codigo_producto: 10,
            nro_item: 1888,
            cantidad: 91.0
        },
        {
            codigo_producto: 12,
            nro_item: 1900,
            cantidad: 45.0
        },
        {
            codigo_producto: 48,
            nro_item: 1979,
            cantidad: 26.0
        },
        {
            codigo_producto: 55,
            nro_item: 1980,
            cantidad: 61.0
        },
        {
            codigo_producto: 68,
            nro_item: 2063,
            cantidad: 35.0
        },
        {
            codigo_producto: 79,
            nro_item: 2038,
            cantidad: 79.0
        },
        {
            codigo_producto: 80,
            nro_item: 2034,
            cantidad: 34.0
        },
        {
            codigo_producto: 84,
            nro_item: 2052,
            cantidad: 44.0
        },
        {
            codigo_producto: 86,
            nro_item: 2071,
            cantidad: 10.0
        },
        {
            codigo_producto: 98,
            nro_item: 2098,
            cantidad: 59.0
        },
        {
            codigo_producto: 99,
            nro_item: 2024,
            cantidad: 45.0
        }
    ]
});
db.factura.insertOne({
    _id: 171,
    fecha: "2017-01-12",
    total_sin_iva: 375195.7442230225,
    iva: 21.0,
    total_con_iva: 453986.8505098572,
    nro_cliente: 50,
    detalle: [
        {
            codigo_producto: 9,
            nro_item: 1858,
            cantidad: 95.0
        },
        {
            codigo_producto: 15,
            nro_item: 1841,
            cantidad: 91.0
        },
        {
            codigo_producto: 27,
            nro_item: 1890,
            cantidad: 20.0
        },
        {
            codigo_producto: 35,
            nro_item: 1937,
            cantidad: 96.0
        },
        {
            codigo_producto: 39,
            nro_item: 1977,
            cantidad: 50.0
        },
        {
            codigo_producto: 50,
            nro_item: 1949,
            cantidad: 78.0
        },
        {
            codigo_producto: 53,
            nro_item: 1969,
            cantidad: 29.0
        },
        {
            codigo_producto: 56,
            nro_item: 1930,
            cantidad: 33.0
        },
        {
            codigo_producto: 61,
            nro_item: 1905,
            cantidad: 80.0
        },
        {
            codigo_producto: 62,
            nro_item: 1955,
            cantidad: 64.0
        },
        {
            codigo_producto: 66,
            nro_item: 1925,
            cantidad: 71.0
        },
        {
            codigo_producto: 68,
            nro_item: 2005,
            cantidad: 89.0
        },
        {
            codigo_producto: 73,
            nro_item: 2058,
            cantidad: 27.0
        },
        {
            codigo_producto: 77,
            nro_item: 2064,
            cantidad: 84.0
        },
        {
            codigo_producto: 100,
            nro_item: 2023,
            cantidad: 50.0
        }
    ]
});
db.factura.insertOne({
    _id: 172,
    fecha: "2017-03-01",
    total_sin_iva: 442208.75425872806,
    iva: 21.0,
    total_con_iva: 535072.5926530609,
    nro_cliente: 39,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 1836,
            cantidad: 13.0
        },
        {
            codigo_producto: 5,
            nro_item: 1886,
            cantidad: 51.0
        },
        {
            codigo_producto: 8,
            nro_item: 1881,
            cantidad: 79.0
        },
        {
            codigo_producto: 12,
            nro_item: 1875,
            cantidad: 79.0
        },
        {
            codigo_producto: 15,
            nro_item: 1862,
            cantidad: 74.0
        },
        {
            codigo_producto: 16,
            nro_item: 1823,
            cantidad: 15.0
        },
        {
            codigo_producto: 20,
            nro_item: 1868,
            cantidad: 69.0
        },
        {
            codigo_producto: 21,
            nro_item: 1887,
            cantidad: 18.0
        },
        {
            codigo_producto: 45,
            nro_item: 1932,
            cantidad: 35.0
        },
        {
            codigo_producto: 61,
            nro_item: 1948,
            cantidad: 88.0
        },
        {
            codigo_producto: 76,
            nro_item: 2007,
            cantidad: 48.0
        },
        {
            codigo_producto: 81,
            nro_item: 2100,
            cantidad: 81.0
        },
        {
            codigo_producto: 89,
            nro_item: 2094,
            cantidad: 69.0
        },
        {
            codigo_producto: 95,
            nro_item: 2032,
            cantidad: 7.0
        },
        {
            codigo_producto: 97,
            nro_item: 2077,
            cantidad: 64.0
        }
    ]
});
db.factura.insertOne({
    _id: 173,
    fecha: "2016-06-20",
    total_sin_iva: 177757.6603546143,
    iva: 21.0,
    total_con_iva: 215086.76902908328,
    nro_cliente: 26,
    detalle: [
        {
            codigo_producto: 30,
            nro_item: 1829,
            cantidad: 19.0
        },
        {
            codigo_producto: 34,
            nro_item: 1928,
            cantidad: 62.0
        },
        {
            codigo_producto: 39,
            nro_item: 1902,
            cantidad: 39.0
        },
        {
            codigo_producto: 45,
            nro_item: 1981,
            cantidad: 15.0
        },
        {
            codigo_producto: 56,
            nro_item: 1990,
            cantidad: 77.0
        },
        {
            codigo_producto: 60,
            nro_item: 1919,
            cantidad: 16.0
        },
        {
            codigo_producto: 85,
            nro_item: 2021,
            cantidad: 74.0
        }
    ]
});
db.factura.insertOne({
    _id: 174,
    fecha: "2016-09-25",
    total_sin_iva: 172131.35135192872,
    iva: 21.0,
    total_con_iva: 208278.93513583374,
    nro_cliente: 42,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 1872,
            cantidad: 89.0
        },
        {
            codigo_producto: 20,
            nro_item: 1843,
            cantidad: 29.0
        },
        {
            codigo_producto: 21,
            nro_item: 1894,
            cantidad: 8.0
        },
        {
            codigo_producto: 22,
            nro_item: 1826,
            cantidad: 5.0
        },
        {
            codigo_producto: 28,
            nro_item: 1827,
            cantidad: 4.0
        },
        {
            codigo_producto: 34,
            nro_item: 1984,
            cantidad: 13.0
        },
        {
            codigo_producto: 49,
            nro_item: 1968,
            cantidad: 71.0
        },
        {
            codigo_producto: 57,
            nro_item: 1970,
            cantidad: 44.0
        },
        {
            codigo_producto: 58,
            nro_item: 1909,
            cantidad: 88.0
        },
        {
            codigo_producto: 65,
            nro_item: 1974,
            cantidad: 52.0
        }
    ]
});
db.factura.insertOne({
    _id: 175,
    fecha: "2017-01-02",
    total_sin_iva: 365652.8776917458,
    iva: 21.0,
    total_con_iva: 442439.98200701247,
    nro_cliente: 50,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 1846,
            cantidad: 94.0
        },
        {
            codigo_producto: 6,
            nro_item: 1849,
            cantidad: 65.0
        },
        {
            codigo_producto: 10,
            nro_item: 1835,
            cantidad: 49.0
        },
        {
            codigo_producto: 15,
            nro_item: 1822,
            cantidad: 33.0
        },
        {
            codigo_producto: 19,
            nro_item: 1816,
            cantidad: 85.0
        },
        {
            codigo_producto: 26,
            nro_item: 1848,
            cantidad: 40.0
        },
        {
            codigo_producto: 33,
            nro_item: 1897,
            cantidad: 77.0
        },
        {
            codigo_producto: 45,
            nro_item: 1936,
            cantidad: 88.0
        },
        {
            codigo_producto: 47,
            nro_item: 1999,
            cantidad: 69.0
        },
        {
            codigo_producto: 51,
            nro_item: 1941,
            cantidad: 19.0
        },
        {
            codigo_producto: 73,
            nro_item: 2056,
            cantidad: 9.0
        },
        {
            codigo_producto: 94,
            nro_item: 2044,
            cantidad: 100.0
        }
    ]
});
db.factura.insertOne({
    _id: 176,
    fecha: "2016-05-29",
    total_sin_iva: 159221.23106536866,
    iva: 21.0,
    total_con_iva: 192657.68958909606,
    nro_cliente: 28,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 2142,
            cantidad: 73.0
        },
        {
            codigo_producto: 3,
            nro_item: 2124,
            cantidad: 100.0
        },
        {
            codigo_producto: 12,
            nro_item: 2165,
            cantidad: 32.0
        },
        {
            codigo_producto: 18,
            nro_item: 2199,
            cantidad: 1.0
        },
        {
            codigo_producto: 19,
            nro_item: 2150,
            cantidad: 10.0
        },
        {
            codigo_producto: 70,
            nro_item: 2310,
            cantidad: 40.0
        },
        {
            codigo_producto: 73,
            nro_item: 2301,
            cantidad: 81.0
        }
    ]
});
db.factura.insertOne({
    _id: 177,
    fecha: "2016-09-02",
    total_sin_iva: 108191.3859008789,
    iva: 21.0,
    total_con_iva: 130911.57694006347,
    nro_cliente: 32,
    detalle: [
        {
            codigo_producto: 5,
            nro_item: 2119,
            cantidad: 36.0
        },
        {
            codigo_producto: 7,
            nro_item: 2181,
            cantidad: 100.0
        },
        {
            codigo_producto: 9,
            nro_item: 2198,
            cantidad: 33.0
        },
        {
            codigo_producto: 16,
            nro_item: 2151,
            cantidad: 71.0
        },
        {
            codigo_producto: 84,
            nro_item: 2400,
            cantidad: 48.0
        },
        {
            codigo_producto: 92,
            nro_item: 2305,
            cantidad: 19.0
        }
    ]
});
db.factura.insertOne({
    _id: 178,
    fecha: "2017-01-18",
    total_sin_iva: 237712.01632690433,
    iva: 21.0,
    total_con_iva: 287631.53975555423,
    nro_cliente: 40,
    detalle: [
        {
            codigo_producto: 5,
            nro_item: 2139,
            cantidad: 72.0
        },
        {
            codigo_producto: 7,
            nro_item: 2122,
            cantidad: 60.0
        },
        {
            codigo_producto: 17,
            nro_item: 2194,
            cantidad: 27.0
        },
        {
            codigo_producto: 30,
            nro_item: 2145,
            cantidad: 36.0
        },
        {
            codigo_producto: 31,
            nro_item: 2125,
            cantidad: 46.0
        },
        {
            codigo_producto: 70,
            nro_item: 2380,
            cantidad: 43.0
        },
        {
            codigo_producto: 71,
            nro_item: 2309,
            cantidad: 63.0
        },
        {
            codigo_producto: 83,
            nro_item: 2333,
            cantidad: 32.0
        },
        {
            codigo_producto: 87,
            nro_item: 2347,
            cantidad: 27.0
        },
        {
            codigo_producto: 97,
            nro_item: 2361,
            cantidad: 86.0
        }
    ]
});
db.factura.insertOne({
    _id: 179,
    fecha: "2017-01-14",
    total_sin_iva: 158360.50989074708,
    iva: 21.0,
    total_con_iva: 191616.21696780395,
    nro_cliente: 43,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 2200,
            cantidad: 94.0
        },
        {
            codigo_producto: 16,
            nro_item: 2192,
            cantidad: 19.0
        },
        {
            codigo_producto: 22,
            nro_item: 2115,
            cantidad: 22.0
        },
        {
            codigo_producto: 27,
            nro_item: 2144,
            cantidad: 100.0
        },
        {
            codigo_producto: 82,
            nro_item: 2345,
            cantidad: 19.0
        },
        {
            codigo_producto: 84,
            nro_item: 2386,
            cantidad: 27.0
        },
        {
            codigo_producto: 97,
            nro_item: 2323,
            cantidad: 77.0
        }
    ]
});
db.factura.insertOne({
    _id: 180,
    fecha: "2016-05-09",
    total_sin_iva: 170855.1684173584,
    iva: 21.0,
    total_con_iva: 206734.75378500365,
    nro_cliente: 44,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 2116,
            cantidad: 84.0
        },
        {
            codigo_producto: 3,
            nro_item: 2173,
            cantidad: 100.0
        },
        {
            codigo_producto: 7,
            nro_item: 2170,
            cantidad: 58.0
        },
        {
            codigo_producto: 15,
            nro_item: 2134,
            cantidad: 63.0
        },
        {
            codigo_producto: 24,
            nro_item: 2185,
            cantidad: 38.0
        },
        {
            codigo_producto: 86,
            nro_item: 2311,
            cantidad: 45.0
        },
        {
            codigo_producto: 87,
            nro_item: 2332,
            cantidad: 16.0
        }
    ]
});
db.factura.insertOne({
    _id: 181,
    fecha: "2016-05-03",
    total_sin_iva: 267647.3004364014,
    iva: 21.0,
    total_con_iva: 323853.2335280457,
    nro_cliente: 29,
    detalle: [
        {
            codigo_producto: 11,
            nro_item: 2175,
            cantidad: 24.0
        },
        {
            codigo_producto: 12,
            nro_item: 2104,
            cantidad: 68.0
        },
        {
            codigo_producto: 21,
            nro_item: 2155,
            cantidad: 87.0
        },
        {
            codigo_producto: 30,
            nro_item: 2136,
            cantidad: 29.0
        },
        {
            codigo_producto: 68,
            nro_item: 2337,
            cantidad: 20.0
        },
        {
            codigo_producto: 74,
            nro_item: 2366,
            cantidad: 89.0
        },
        {
            codigo_producto: 85,
            nro_item: 2335,
            cantidad: 32.0
        },
        {
            codigo_producto: 88,
            nro_item: 2308,
            cantidad: 54.0
        },
        {
            codigo_producto: 92,
            nro_item: 2355,
            cantidad: 79.0
        },
        {
            codigo_producto: 100,
            nro_item: 2387,
            cantidad: 11.0
        }
    ]
});
db.factura.insertOne({
    _id: 182,
    fecha: "2016-09-21",
    total_sin_iva: 153627.39922027587,
    iva: 21.0,
    total_con_iva: 185889.1530565338,
    nro_cliente: 41,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 2103,
            cantidad: 87.0
        },
        {
            codigo_producto: 20,
            nro_item: 2111,
            cantidad: 83.0
        },
        {
            codigo_producto: 72,
            nro_item: 2382,
            cantidad: 94.0
        }
    ]
});
db.factura.insertOne({
    _id: 183,
    fecha: "2016-03-05",
    total_sin_iva: 279173.0725982666,
    iva: 21.0,
    total_con_iva: 337799.4178439026,
    nro_cliente: 32,
    detalle: [
        {
            codigo_producto: 12,
            nro_item: 2168,
            cantidad: 53.0
        },
        {
            codigo_producto: 15,
            nro_item: 2164,
            cantidad: 71.0
        },
        {
            codigo_producto: 29,
            nro_item: 2190,
            cantidad: 32.0
        },
        {
            codigo_producto: 33,
            nro_item: 2167,
            cantidad: 73.0
        },
        {
            codigo_producto: 71,
            nro_item: 2340,
            cantidad: 61.0
        },
        {
            codigo_producto: 76,
            nro_item: 2381,
            cantidad: 14.0
        },
        {
            codigo_producto: 79,
            nro_item: 2377,
            cantidad: 76.0
        },
        {
            codigo_producto: 89,
            nro_item: 2318,
            cantidad: 90.0
        }
    ]
});
db.factura.insertOne({
    _id: 184,
    fecha: "2016-10-03",
    total_sin_iva: 96362.28733062746,
    iva: 21.0,
    total_con_iva: 116598.36767005922,
    nro_cliente: 35,
    detalle: [
        {
            codigo_producto: 6,
            nro_item: 2180,
            cantidad: 36.0
        },
        {
            codigo_producto: 9,
            nro_item: 2110,
            cantidad: 78.0
        },
        {
            codigo_producto: 26,
            nro_item: 2182,
            cantidad: 27.0
        },
        {
            codigo_producto: 84,
            nro_item: 2306,
            cantidad: 64.0
        },
        {
            codigo_producto: 93,
            nro_item: 2371,
            cantidad: 9.0
        },
        {
            codigo_producto: 95,
            nro_item: 2376,
            cantidad: 62.0
        }
    ]
});
db.factura.insertOne({
    _id: 185,
    fecha: "2017-01-13",
    total_sin_iva: 238419.74671325684,
    iva: 21.0,
    total_con_iva: 288487.89352304075,
    nro_cliente: 41,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 2102,
            cantidad: 37.0
        },
        {
            codigo_producto: 19,
            nro_item: 2138,
            cantidad: 29.0
        },
        {
            codigo_producto: 20,
            nro_item: 2112,
            cantidad: 86.0
        },
        {
            codigo_producto: 28,
            nro_item: 2147,
            cantidad: 89.0
        },
        {
            codigo_producto: 31,
            nro_item: 2172,
            cantidad: 15.0
        },
        {
            codigo_producto: 67,
            nro_item: 2348,
            cantidad: 15.0
        },
        {
            codigo_producto: 82,
            nro_item: 2396,
            cantidad: 99.0
        },
        {
            codigo_producto: 95,
            nro_item: 2365,
            cantidad: 48.0
        },
        {
            codigo_producto: 98,
            nro_item: 2303,
            cantidad: 39.0
        }
    ]
});
db.factura.insertOne({
    _id: 186,
    fecha: "2016-06-18",
    total_sin_iva: 215207.1971878052,
    iva: 21.0,
    total_con_iva: 260400.7085972443,
    nro_cliente: 42,
    detalle: [
        {
            codigo_producto: 21,
            nro_item: 2109,
            cantidad: 18.0
        },
        {
            codigo_producto: 26,
            nro_item: 2149,
            cantidad: 91.0
        },
        {
            codigo_producto: 69,
            nro_item: 2360,
            cantidad: 84.0
        },
        {
            codigo_producto: 75,
            nro_item: 2390,
            cantidad: 45.0
        },
        {
            codigo_producto: 79,
            nro_item: 2379,
            cantidad: 17.0
        },
        {
            codigo_producto: 82,
            nro_item: 2397,
            cantidad: 90.0
        },
        {
            codigo_producto: 91,
            nro_item: 2375,
            cantidad: 57.0
        },
        {
            codigo_producto: 95,
            nro_item: 2354,
            cantidad: 81.0
        }
    ]
});
db.factura.insertOne({
    _id: 187,
    fecha: "2017-01-05",
    total_sin_iva: 246311.35379791263,
    iva: 21.0,
    total_con_iva: 298036.73809547425,
    nro_cliente: 42,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 2107,
            cantidad: 49.0
        },
        {
            codigo_producto: 14,
            nro_item: 2188,
            cantidad: 65.0
        },
        {
            codigo_producto: 19,
            nro_item: 2106,
            cantidad: 69.0
        },
        {
            codigo_producto: 67,
            nro_item: 2346,
            cantidad: 38.0
        },
        {
            codigo_producto: 80,
            nro_item: 2367,
            cantidad: 80.0
        },
        {
            codigo_producto: 83,
            nro_item: 2391,
            cantidad: 37.0
        },
        {
            codigo_producto: 85,
            nro_item: 2331,
            cantidad: 85.0
        },
        {
            codigo_producto: 88,
            nro_item: 2316,
            cantidad: 54.0
        },
        {
            codigo_producto: 97,
            nro_item: 2388,
            cantidad: 15.0
        }
    ]
});
db.factura.insertOne({
    _id: 188,
    fecha: "2016-06-01",
    total_sin_iva: 295691.63255615236,
    iva: 21.0,
    total_con_iva: 357786.8753929443,
    nro_cliente: 30,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 2184,
            cantidad: 76.0
        },
        {
            codigo_producto: 26,
            nro_item: 2160,
            cantidad: 86.0
        },
        {
            codigo_producto: 31,
            nro_item: 2101,
            cantidad: 69.0
        },
        {
            codigo_producto: 83,
            nro_item: 2339,
            cantidad: 49.0
        },
        {
            codigo_producto: 86,
            nro_item: 2315,
            cantidad: 95.0
        },
        {
            codigo_producto: 88,
            nro_item: 2341,
            cantidad: 44.0
        },
        {
            codigo_producto: 93,
            nro_item: 2334,
            cantidad: 2.0
        },
        {
            codigo_producto: 100,
            nro_item: 2317,
            cantidad: 74.0
        }
    ]
});
db.factura.insertOne({
    _id: 189,
    fecha: "2016-06-21",
    total_sin_iva: 189353.88470077515,
    iva: 21.0,
    total_con_iva: 229118.20048793792,
    nro_cliente: 31,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 2135,
            cantidad: 82.0
        },
        {
            codigo_producto: 19,
            nro_item: 2169,
            cantidad: 33.0
        },
        {
            codigo_producto: 20,
            nro_item: 2133,
            cantidad: 14.0
        },
        {
            codigo_producto: 21,
            nro_item: 2166,
            cantidad: 15.0
        },
        {
            codigo_producto: 25,
            nro_item: 2129,
            cantidad: 21.0
        },
        {
            codigo_producto: 68,
            nro_item: 2343,
            cantidad: 92.0
        },
        {
            codigo_producto: 74,
            nro_item: 2329,
            cantidad: 67.0
        },
        {
            codigo_producto: 85,
            nro_item: 2350,
            cantidad: 68.0
        }
    ]
});
db.factura.insertOne({
    _id: 190,
    fecha: "2016-11-14",
    total_sin_iva: 269094.07606201177,
    iva: 21.0,
    total_con_iva: 325603.83203503425,
    nro_cliente: 42,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 2193,
            cantidad: 66.0
        },
        {
            codigo_producto: 16,
            nro_item: 2154,
            cantidad: 77.0
        },
        {
            codigo_producto: 67,
            nro_item: 2353,
            cantidad: 37.0
        },
        {
            codigo_producto: 80,
            nro_item: 2364,
            cantidad: 24.0
        },
        {
            codigo_producto: 87,
            nro_item: 2322,
            cantidad: 96.0
        },
        {
            codigo_producto: 90,
            nro_item: 2330,
            cantidad: 99.0
        },
        {
            codigo_producto: 92,
            nro_item: 2398,
            cantidad: 69.0
        },
        {
            codigo_producto: 93,
            nro_item: 2319,
            cantidad: 95.0
        }
    ]
});
db.factura.insertOne({
    _id: 191,
    fecha: "2016-08-25",
    total_sin_iva: 112731.72681350709,
    iva: 21.0,
    total_con_iva: 136405.38944434357,
    nro_cliente: 35,
    detalle: [
        {
            codigo_producto: 22,
            nro_item: 2195,
            cantidad: 22.0
        },
        {
            codigo_producto: 27,
            nro_item: 2117,
            cantidad: 85.0
        },
        {
            codigo_producto: 29,
            nro_item: 2108,
            cantidad: 3.0
        },
        {
            codigo_producto: 69,
            nro_item: 2321,
            cantidad: 45.0
        },
        {
            codigo_producto: 75,
            nro_item: 2327,
            cantidad: 1.0
        },
        {
            codigo_producto: 86,
            nro_item: 2399,
            cantidad: 64.0
        }
    ]
});
db.factura.insertOne({
    _id: 192,
    fecha: "2016-12-21",
    total_sin_iva: 269134.5779174805,
    iva: 21.0,
    total_con_iva: 325652.8392801514,
    nro_cliente: 30,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 2197,
            cantidad: 89.0
        },
        {
            codigo_producto: 3,
            nro_item: 2140,
            cantidad: 4.0
        },
        {
            codigo_producto: 7,
            nro_item: 2174,
            cantidad: 70.0
        },
        {
            codigo_producto: 10,
            nro_item: 2132,
            cantidad: 7.0
        },
        {
            codigo_producto: 12,
            nro_item: 2143,
            cantidad: 94.0
        },
        {
            codigo_producto: 30,
            nro_item: 2159,
            cantidad: 36.0
        },
        {
            codigo_producto: 69,
            nro_item: 2394,
            cantidad: 94.0
        },
        {
            codigo_producto: 73,
            nro_item: 2352,
            cantidad: 49.0
        },
        {
            codigo_producto: 75,
            nro_item: 2338,
            cantidad: 36.0
        },
        {
            codigo_producto: 86,
            nro_item: 2385,
            cantidad: 55.0
        }
    ]
});
db.factura.insertOne({
    _id: 193,
    fecha: "2016-04-23",
    total_sin_iva: 130505.7729171753,
    iva: 21.0,
    total_con_iva: 157911.98522978212,
    nro_cliente: 30,
    detalle: [
        {
            codigo_producto: 12,
            nro_item: 2118,
            cantidad: 35.0
        },
        {
            codigo_producto: 30,
            nro_item: 2176,
            cantidad: 90.0
        },
        {
            codigo_producto: 32,
            nro_item: 2162,
            cantidad: 44.0
        },
        {
            codigo_producto: 67,
            nro_item: 2395,
            cantidad: 9.0
        },
        {
            codigo_producto: 71,
            nro_item: 2304,
            cantidad: 6.0
        }
    ]
});
db.factura.insertOne({
    _id: 194,
    fecha: "2016-09-02",
    total_sin_iva: 273461.3061218262,
    iva: 21.0,
    total_con_iva: 330888.1804074097,
    nro_cliente: 27,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 2157,
            cantidad: 58.0
        },
        {
            codigo_producto: 12,
            nro_item: 2137,
            cantidad: 87.0
        },
        {
            codigo_producto: 13,
            nro_item: 2130,
            cantidad: 14.0
        },
        {
            codigo_producto: 17,
            nro_item: 2158,
            cantidad: 87.0
        },
        {
            codigo_producto: 18,
            nro_item: 2141,
            cantidad: 44.0
        },
        {
            codigo_producto: 79,
            nro_item: 2302,
            cantidad: 29.0
        },
        {
            codigo_producto: 80,
            nro_item: 2357,
            cantidad: 35.0
        },
        {
            codigo_producto: 83,
            nro_item: 2314,
            cantidad: 81.0
        }
    ]
});
db.factura.insertOne({
    _id: 195,
    fecha: "2017-01-04",
    total_sin_iva: 94796.95079956055,
    iva: 21.0,
    total_con_iva: 114704.31046746827,
    nro_cliente: 33,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 2148,
            cantidad: 83.0
        },
        {
            codigo_producto: 68,
            nro_item: 2344,
            cantidad: 3.0
        },
        {
            codigo_producto: 70,
            nro_item: 2362,
            cantidad: 87.0
        }
    ]
});
db.factura.insertOne({
    _id: 196,
    fecha: "2017-03-18",
    total_sin_iva: 300707.7319854736,
    iva: 21.0,
    total_con_iva: 363856.355702423,
    nro_cliente: 26,
    detalle: [
        {
            codigo_producto: 13,
            nro_item: 2186,
            cantidad: 63.0
        },
        {
            codigo_producto: 14,
            nro_item: 2152,
            cantidad: 1.0
        },
        {
            codigo_producto: 27,
            nro_item: 2120,
            cantidad: 56.0
        },
        {
            codigo_producto: 28,
            nro_item: 2128,
            cantidad: 73.0
        },
        {
            codigo_producto: 67,
            nro_item: 2372,
            cantidad: 58.0
        },
        {
            codigo_producto: 71,
            nro_item: 2370,
            cantidad: 56.0
        },
        {
            codigo_producto: 72,
            nro_item: 2320,
            cantidad: 19.0
        },
        {
            codigo_producto: 73,
            nro_item: 2312,
            cantidad: 18.0
        },
        {
            codigo_producto: 75,
            nro_item: 2369,
            cantidad: 68.0
        },
        {
            codigo_producto: 76,
            nro_item: 2324,
            cantidad: 1.0
        },
        {
            codigo_producto: 78,
            nro_item: 2378,
            cantidad: 52.0
        },
        {
            codigo_producto: 81,
            nro_item: 2349,
            cantidad: 6.0
        },
        {
            codigo_producto: 93,
            nro_item: 2363,
            cantidad: 16.0
        },
        {
            codigo_producto: 94,
            nro_item: 2351,
            cantidad: 78.0
        },
        {
            codigo_producto: 98,
            nro_item: 2325,
            cantidad: 91.0
        }
    ]
});
db.factura.insertOne({
    _id: 197,
    fecha: "2016-05-16",
    total_sin_iva: 66046.50016479492,
    iva: 21.0,
    total_con_iva: 79916.26519940185,
    nro_cliente: 42,
    detalle: [
        {
            codigo_producto: 18,
            nro_item: 2161,
            cantidad: 31.0
        },
        {
            codigo_producto: 67,
            nro_item: 2368,
            cantidad: 93.0
        },
        {
            codigo_producto: 88,
            nro_item: 2373,
            cantidad: 30.0
        },
        {
            codigo_producto: 94,
            nro_item: 2313,
            cantidad: 81.0
        }
    ]
});
db.factura.insertOne({
    _id: 198,
    fecha: "2016-06-10",
    total_sin_iva: 153828.2857727051,
    iva: 21.0,
    total_con_iva: 186132.22578497318,
    nro_cliente: 27,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 2121,
            cantidad: 74.0
        },
        {
            codigo_producto: 19,
            nro_item: 2127,
            cantidad: 94.0
        },
        {
            codigo_producto: 31,
            nro_item: 2191,
            cantidad: 74.0
        },
        {
            codigo_producto: 32,
            nro_item: 2171,
            cantidad: 3.0
        },
        {
            codigo_producto: 77,
            nro_item: 2307,
            cantidad: 71.0
        }
    ]
});
db.factura.insertOne({
    _id: 199,
    fecha: "2016-11-26",
    total_sin_iva: 117716.07675476075,
    iva: 21.0,
    total_con_iva: 142436.4528732605,
    nro_cliente: 28,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 2123,
            cantidad: 94.0
        },
        {
            codigo_producto: 13,
            nro_item: 2178,
            cantidad: 13.0
        },
        {
            codigo_producto: 21,
            nro_item: 2153,
            cantidad: 14.0
        },
        {
            codigo_producto: 23,
            nro_item: 2189,
            cantidad: 56.0
        },
        {
            codigo_producto: 89,
            nro_item: 2328,
            cantidad: 58.0
        }
    ]
});
db.factura.insertOne({
    _id: 200,
    fecha: "2017-01-21",
    total_sin_iva: 159588.53607482908,
    iva: 21.0,
    total_con_iva: 193102.1286505432,
    nro_cliente: 38,
    detalle: [
        {
            codigo_producto: 9,
            nro_item: 2163,
            cantidad: 68.0
        },
        {
            codigo_producto: 13,
            nro_item: 2105,
            cantidad: 85.0
        },
        {
            codigo_producto: 14,
            nro_item: 2113,
            cantidad: 26.0
        },
        {
            codigo_producto: 27,
            nro_item: 2114,
            cantidad: 17.0
        },
        {
            codigo_producto: 31,
            nro_item: 2179,
            cantidad: 97.0
        },
        {
            codigo_producto: 74,
            nro_item: 2392,
            cantidad: 6.0
        },
        {
            codigo_producto: 76,
            nro_item: 2383,
            cantidad: 30.0
        },
        {
            codigo_producto: 78,
            nro_item: 2336,
            cantidad: 68.0
        },
        {
            codigo_producto: 89,
            nro_item: 2389,
            cantidad: 14.0
        },
        {
            codigo_producto: 100,
            nro_item: 2359,
            cantidad: 1.0
        }
    ]
});
db.factura.insertOne({
    _id: 201,
    fecha: "2017-02-26",
    total_sin_iva: 53843.15772399903,
    iva: 21.0,
    total_con_iva: 65150.22084603882,
    nro_cliente: 59,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 2470,
            cantidad: 31.0
        },
        {
            codigo_producto: 67,
            nro_item: 2677,
            cantidad: 76.0
        },
        {
            codigo_producto: 79,
            nro_item: 2636,
            cantidad: 40.0
        }
    ]
});
db.factura.insertOne({
    _id: 202,
    fecha: "2016-10-04",
    total_sin_iva: 165306.6421875,
    iva: 21.0,
    total_con_iva: 200021.037046875,
    nro_cliente: 56,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 2429,
            cantidad: 100.0
        },
        {
            codigo_producto: 28,
            nro_item: 2409,
            cantidad: 73.0
        },
        {
            codigo_producto: 86,
            nro_item: 2632,
            cantidad: 74.0
        }
    ]
});
db.factura.insertOne({
    _id: 203,
    fecha: "2016-03-08",
    total_sin_iva: 126837.65947570802,
    iva: 21.0,
    total_con_iva: 153473.5679656067,
    nro_cliente: 68,
    detalle: [
        {
            codigo_producto: 11,
            nro_item: 2420,
            cantidad: 31.0
        },
        {
            codigo_producto: 13,
            nro_item: 2500,
            cantidad: 77.0
        },
        {
            codigo_producto: 18,
            nro_item: 2469,
            cantidad: 48.0
        },
        {
            codigo_producto: 20,
            nro_item: 2496,
            cantidad: 10.0
        },
        {
            codigo_producto: 71,
            nro_item: 2607,
            cantidad: 43.0
        },
        {
            codigo_producto: 84,
            nro_item: 2619,
            cantidad: 91.0
        },
        {
            codigo_producto: 98,
            nro_item: 2611,
            cantidad: 6.0
        }
    ]
});
db.factura.insertOne({
    _id: 204,
    fecha: "2016-03-18",
    total_sin_iva: 77975.70270996095,
    iva: 21.0,
    total_con_iva: 94350.60027905276,
    nro_cliente: 63,
    detalle: [
        {
            codigo_producto: 12,
            nro_item: 2410,
            cantidad: 36.0
        },
        {
            codigo_producto: 14,
            nro_item: 2465,
            cantidad: 40.0
        },
        {
            codigo_producto: 33,
            nro_item: 2416,
            cantidad: 87.0
        }
    ]
});
db.factura.insertOne({
    _id: 205,
    fecha: "2016-03-05",
    total_sin_iva: 23949.881872558595,
    iva: 21.0,
    total_con_iva: 28979.3570657959,
    nro_cliente: 65,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 2480,
            cantidad: 58.0
        }
    ]
});
db.factura.insertOne({
    _id: 206,
    fecha: "2016-03-21",
    total_sin_iva: 61394.71640625,
    iva: 21.0,
    total_con_iva: 74287.60685156251,
    nro_cliente: 69,
    detalle: [
        {
            codigo_producto: 24,
            nro_item: 2424,
            cantidad: 19.0
        },
        {
            codigo_producto: 31,
            nro_item: 2456,
            cantidad: 65.0
        },
        {
            codigo_producto: 74,
            nro_item: 2679,
            cantidad: 78.0
        }
    ]
});
db.factura.insertOne({
    _id: 207,
    fecha: "2016-07-30",
    total_sin_iva: 149196.31072998047,
    iva: 21.0,
    total_con_iva: 180527.53598327638,
    nro_cliente: 55,
    detalle: [
        {
            codigo_producto: 19,
            nro_item: 2472,
            cantidad: 62.0
        },
        {
            codigo_producto: 28,
            nro_item: 2425,
            cantidad: 52.0
        },
        {
            codigo_producto: 30,
            nro_item: 2495,
            cantidad: 94.0
        }
    ]
});
db.factura.insertOne({
    _id: 208,
    fecha: "2016-04-22",
    total_sin_iva: 59134.11080856324,
    iva: 21.0,
    total_con_iva: 71552.27407836152,
    nro_cliente: 67,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 2478,
            cantidad: 2.0
        },
        {
            codigo_producto: 25,
            nro_item: 2473,
            cantidad: 37.0
        },
        {
            codigo_producto: 31,
            nro_item: 2488,
            cantidad: 58.0
        },
        {
            codigo_producto: 70,
            nro_item: 2672,
            cantidad: 55.0
        }
    ]
});
db.factura.insertOne({
    _id: 209,
    fecha: "2016-03-07",
    total_sin_iva: 41333.525051879886,
    iva: 21.0,
    total_con_iva: 50013.56531277466,
    nro_cliente: 52,
    detalle: [
        {
            codigo_producto: 13,
            nro_item: 2462,
            cantidad: 81.0
        },
        {
            codigo_producto: 77,
            nro_item: 2698,
            cantidad: 96.0
        },
        {
            codigo_producto: 81,
            nro_item: 2620,
            cantidad: 19.0
        }
    ]
});
db.factura.insertOne({
    _id: 210,
    fecha: "2016-11-21",
    total_sin_iva: 85165.979668808,
    iva: 21.0,
    total_con_iva: 103050.83539925767,
    nro_cliente: 55,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 2464,
            cantidad: 18.0
        },
        {
            codigo_producto: 3,
            nro_item: 2403,
            cantidad: 26.0
        },
        {
            codigo_producto: 4,
            nro_item: 2447,
            cantidad: 9.0
        },
        {
            codigo_producto: 27,
            nro_item: 2466,
            cantidad: 33.0
        },
        {
            codigo_producto: 29,
            nro_item: 2458,
            cantidad: 25.0
        },
        {
            codigo_producto: 68,
            nro_item: 2657,
            cantidad: 88.0
        }
    ]
});
db.factura.insertOne({
    _id: 211,
    fecha: "2016-10-13",
    total_sin_iva: 105339.48105521202,
    iva: 21.0,
    total_con_iva: 127460.77207680655,
    nro_cliente: 70,
    detalle: [
        {
            codigo_producto: 17,
            nro_item: 2444,
            cantidad: 93.0
        },
        {
            codigo_producto: 26,
            nro_item: 2455,
            cantidad: 3.0
        },
        {
            codigo_producto: 28,
            nro_item: 2474,
            cantidad: 2.0
        },
        {
            codigo_producto: 80,
            nro_item: 2644,
            cantidad: 45.0
        },
        {
            codigo_producto: 99,
            nro_item: 2634,
            cantidad: 5.0
        }
    ]
});
db.factura.insertOne({
    _id: 212,
    fecha: "2017-02-17",
    total_sin_iva: 135780.73077392578,
    iva: 21.0,
    total_con_iva: 164294.68423645018,
    nro_cliente: 53,
    detalle: [
        {
            codigo_producto: 22,
            nro_item: 2401,
            cantidad: 93.0
        },
        {
            codigo_producto: 79,
            nro_item: 2642,
            cantidad: 99.0
        }
    ]
});
db.factura.insertOne({
    _id: 213,
    fecha: "2016-06-26",
    total_sin_iva: 136302.9516265869,
    iva: 21.0,
    total_con_iva: 164926.57146817015,
    nro_cliente: 57,
    detalle: [
        {
            codigo_producto: 23,
            nro_item: 2452,
            cantidad: 45.0
        },
        {
            codigo_producto: 71,
            nro_item: 2654,
            cantidad: 83.0
        },
        {
            codigo_producto: 78,
            nro_item: 2700,
            cantidad: 92.0
        },
        {
            codigo_producto: 94,
            nro_item: 2626,
            cantidad: 15.0
        }
    ]
});
db.factura.insertOne({
    _id: 214,
    fecha: "2016-04-18",
    total_sin_iva: 83166.51736450195,
    iva: 21.0,
    total_con_iva: 100631.48601104737,
    nro_cliente: 71,
    detalle: [
        {
            codigo_producto: 69,
            nro_item: 2610,
            cantidad: 100.0
        },
        {
            codigo_producto: 73,
            nro_item: 2651,
            cantidad: 49.0
        },
        {
            codigo_producto: 74,
            nro_item: 2603,
            cantidad: 58.0
        }
    ]
});
db.factura.insertOne({
    _id: 215,
    fecha: "2017-02-13",
    total_sin_iva: 206609.20971679688,
    iva: 21.0,
    total_con_iva: 249997.1437573242,
    nro_cliente: 75,
    detalle: [
        {
            codigo_producto: 19,
            nro_item: 2404,
            cantidad: 34.0
        },
        {
            codigo_producto: 26,
            nro_item: 2448,
            cantidad: 93.0
        },
        {
            codigo_producto: 30,
            nro_item: 2433,
            cantidad: 93.0
        },
        {
            codigo_producto: 85,
            nro_item: 2647,
            cantidad: 77.0
        }
    ]
});
db.factura.insertOne({
    _id: 216,
    fecha: "2016-04-08",
    total_sin_iva: 80964.41259155273,
    iva: 21.0,
    total_con_iva: 97966.9392357788,
    nro_cliente: 64,
    detalle: [
        {
            codigo_producto: 26,
            nro_item: 2440,
            cantidad: 22.0
        },
        {
            codigo_producto: 28,
            nro_item: 2494,
            cantidad: 73.0
        },
        {
            codigo_producto: 85,
            nro_item: 2670,
            cantidad: 17.0
        }
    ]
});
db.factura.insertOne({
    _id: 217,
    fecha: "2016-06-18",
    total_sin_iva: 76411.62908470632,
    iva: 21.0,
    total_con_iva: 92458.07119249465,
    nro_cliente: 70,
    detalle: [
        {
            codigo_producto: 22,
            nro_item: 2415,
            cantidad: 83.0
        },
        {
            codigo_producto: 74,
            nro_item: 2699,
            cantidad: 97.0
        },
        {
            codigo_producto: 99,
            nro_item: 2691,
            cantidad: 71.0
        }
    ]
});
db.factura.insertOne({
    _id: 218,
    fecha: "2016-12-10",
    total_sin_iva: 20151.962595033645,
    iva: 21.0,
    total_con_iva: 24383.87473999071,
    nro_cliente: 72,
    detalle: [
        {
            codigo_producto: 33,
            nro_item: 2402,
            cantidad: 47.0
        },
        {
            codigo_producto: 99,
            nro_item: 2631,
            cantidad: 86.0
        }
    ]
});
db.factura.insertOne({
    _id: 219,
    fecha: "2016-06-13",
    total_sin_iva: 126881.40963134766,
    iva: 21.0,
    total_con_iva: 153526.50565393068,
    nro_cliente: 72,
    detalle: [
        {
            codigo_producto: 11,
            nro_item: 2430,
            cantidad: 46.0
        },
        {
            codigo_producto: 22,
            nro_item: 2412,
            cantidad: 28.0
        },
        {
            codigo_producto: 31,
            nro_item: 2468,
            cantidad: 55.0
        },
        {
            codigo_producto: 70,
            nro_item: 2682,
            cantidad: 52.0
        },
        {
            codigo_producto: 74,
            nro_item: 2661,
            cantidad: 62.0
        },
        {
            codigo_producto: 92,
            nro_item: 2655,
            cantidad: 10.0
        }
    ]
});
db.factura.insertOne({
    _id: 220,
    fecha: "2016-08-28",
    total_sin_iva: 108760.23504638672,
    iva: 21.0,
    total_con_iva: 131599.88440612794,
    nro_cliente: 74,
    detalle: [
        {
            codigo_producto: 18,
            nro_item: 2483,
            cantidad: 3.0
        },
        {
            codigo_producto: 24,
            nro_item: 2476,
            cantidad: 16.0
        },
        {
            codigo_producto: 92,
            nro_item: 2640,
            cantidad: 71.0
        },
        {
            codigo_producto: 97,
            nro_item: 2637,
            cantidad: 72.0
        }
    ]
});
db.factura.insertOne({
    _id: 221,
    fecha: "2017-01-11",
    total_sin_iva: 182943.26224365237,
    iva: 21.0,
    total_con_iva: 221361.34731481937,
    nro_cliente: 63,
    detalle: [
        {
            codigo_producto: 20,
            nro_item: 2482,
            cantidad: 97.0
        },
        {
            codigo_producto: 31,
            nro_item: 2441,
            cantidad: 36.0
        },
        {
            codigo_producto: 33,
            nro_item: 2422,
            cantidad: 58.0
        },
        {
            codigo_producto: 89,
            nro_item: 2649,
            cantidad: 42.0
        },
        {
            codigo_producto: 96,
            nro_item: 2614,
            cantidad: 52.0
        }
    ]
});
db.factura.insertOne({
    _id: 222,
    fecha: "2016-04-14",
    total_sin_iva: 59876.271386718756,
    iva: 21.0,
    total_con_iva: 72450.2883779297,
    nro_cliente: 60,
    detalle: [
        {
            codigo_producto: 18,
            nro_item: 2499,
            cantidad: 72.0
        },
        {
            codigo_producto: 85,
            nro_item: 2656,
            cantidad: 29.0
        },
        {
            codigo_producto: 96,
            nro_item: 2666,
            cantidad: 27.0
        }
    ]
});
db.factura.insertOne({
    _id: 223,
    fecha: "2017-01-18",
    total_sin_iva: 84271.1976196289,
    iva: 21.0,
    total_con_iva: 101968.14911975097,
    nro_cliente: 73,
    detalle: [
        {
            codigo_producto: 27,
            nro_item: 2471,
            cantidad: 3.0
        },
        {
            codigo_producto: 72,
            nro_item: 2609,
            cantidad: 41.0
        },
        {
            codigo_producto: 90,
            nro_item: 2692,
            cantidad: 80.0
        },
        {
            codigo_producto: 98,
            nro_item: 2630,
            cantidad: 6.0
        }
    ]
});
db.factura.insertOne({
    _id: 224,
    fecha: "2016-03-05",
    total_sin_iva: 113071.15516662598,
    iva: 21.0,
    total_con_iva: 136816.09775161743,
    nro_cliente: 52,
    detalle: [
        {
            codigo_producto: 28,
            nro_item: 2421,
            cantidad: 89.0
        },
        {
            codigo_producto: 74,
            nro_item: 2622,
            cantidad: 27.0
        },
        {
            codigo_producto: 90,
            nro_item: 2668,
            cantidad: 66.0
        }
    ]
});
db.factura.insertOne({
    _id: 225,
    fecha: "2017-02-28",
    total_sin_iva: 32246.098883056642,
    iva: 21.0,
    total_con_iva: 39017.77964849854,
    nro_cliente: 61,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 2475,
            cantidad: 50.0
        },
        {
            codigo_producto: 13,
            nro_item: 2437,
            cantidad: 18.0
        },
        {
            codigo_producto: 72,
            nro_item: 2652,
            cantidad: 3.0
        }
    ]
});
db.factura.insertOne({
    _id: 226,
    fecha: "2016-04-04",
    total_sin_iva: 52958.98631401062,
    iva: 21.0,
    total_con_iva: 64080.37343995285,
    nro_cliente: 72,
    detalle: [
        {
            codigo_producto: 19,
            nro_item: 2443,
            cantidad: 14.0
        },
        {
            codigo_producto: 22,
            nro_item: 2453,
            cantidad: 55.0
        },
        {
            codigo_producto: 29,
            nro_item: 2479,
            cantidad: 73.0
        },
        {
            codigo_producto: 30,
            nro_item: 2467,
            cantidad: 5.0
        },
        {
            codigo_producto: 75,
            nro_item: 2616,
            cantidad: 6.0
        }
    ]
});
db.factura.insertOne({
    _id: 227,
    fecha: "2017-03-28",
    total_sin_iva: 50446.15252075196,
    iva: 21.0,
    total_con_iva: 61039.84455010987,
    nro_cliente: 53,
    detalle: [
        {
            codigo_producto: 31,
            nro_item: 2417,
            cantidad: 66.0
        },
        {
            codigo_producto: 84,
            nro_item: 2639,
            cantidad: 93.0
        }
    ]
});
db.factura.insertOne({
    _id: 228,
    fecha: "2016-08-01",
    total_sin_iva: 71263.89920654296,
    iva: 21.0,
    total_con_iva: 86229.31803991698,
    nro_cliente: 74,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 2459,
            cantidad: 25.0
        },
        {
            codigo_producto: 70,
            nro_item: 2628,
            cantidad: 97.0
        }
    ]
});
db.factura.insertOne({
    _id: 229,
    fecha: "2016-07-10",
    total_sin_iva: 67703.12971572876,
    iva: 21.0,
    total_con_iva: 81920.7869560318,
    nro_cliente: 71,
    detalle: [
        {
            codigo_producto: 7,
            nro_item: 2449,
            cantidad: 34.0
        },
        {
            codigo_producto: 25,
            nro_item: 2405,
            cantidad: 87.0
        },
        {
            codigo_producto: 69,
            nro_item: 2617,
            cantidad: 37.0
        },
        {
            codigo_producto: 80,
            nro_item: 2674,
            cantidad: 53.0
        },
        {
            codigo_producto: 84,
            nro_item: 2687,
            cantidad: 28.0
        }
    ]
});
db.factura.insertOne({
    _id: 230,
    fecha: "2016-10-22",
    total_sin_iva: 129519.14348144531,
    iva: 21.0,
    total_con_iva: 156718.16361254881,
    nro_cliente: 57,
    detalle: [
        {
            codigo_producto: 17,
            nro_item: 2493,
            cantidad: 88.0
        },
        {
            codigo_producto: 71,
            nro_item: 2635,
            cantidad: 82.0
        }
    ]
});
db.factura.insertOne({
    _id: 231,
    fecha: "2016-05-17",
    total_sin_iva: 179748.62808837893,
    iva: 21.0,
    total_con_iva: 217495.83998693852,
    nro_cliente: 52,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 2426,
            cantidad: 40.0
        },
        {
            codigo_producto: 13,
            nro_item: 2446,
            cantidad: 30.0
        },
        {
            codigo_producto: 22,
            nro_item: 2442,
            cantidad: 98.0
        },
        {
            codigo_producto: 24,
            nro_item: 2418,
            cantidad: 16.0
        },
        {
            codigo_producto: 74,
            nro_item: 2683,
            cantidad: 48.0
        },
        {
            codigo_producto: 79,
            nro_item: 2665,
            cantidad: 79.0
        },
        {
            codigo_producto: 84,
            nro_item: 2638,
            cantidad: 15.0
        }
    ]
});
db.factura.insertOne({
    _id: 232,
    fecha: "2016-03-24",
    total_sin_iva: 25823.14186706543,
    iva: 21.0,
    total_con_iva: 31246.001659149173,
    nro_cliente: 68,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 2461,
            cantidad: 30.0
        },
        {
            codigo_producto: 33,
            nro_item: 2484,
            cantidad: 22.0
        },
        {
            codigo_producto: 67,
            nro_item: 2688,
            cantidad: 23.0
        }
    ]
});
db.factura.insertOne({
    _id: 233,
    fecha: "2016-09-05",
    total_sin_iva: 183270.40969848633,
    iva: 21.0,
    total_con_iva: 221757.19573516847,
    nro_cliente: 52,
    detalle: [
        {
            codigo_producto: 6,
            nro_item: 2414,
            cantidad: 59.0
        },
        {
            codigo_producto: 79,
            nro_item: 2646,
            cantidad: 93.0
        },
        {
            codigo_producto: 84,
            nro_item: 2660,
            cantidad: 64.0
        },
        {
            codigo_producto: 91,
            nro_item: 2648,
            cantidad: 10.0
        },
        {
            codigo_producto: 97,
            nro_item: 2618,
            cantidad: 63.0
        }
    ]
});
db.factura.insertOne({
    _id: 234,
    fecha: "2017-01-31",
    total_sin_iva: 22754.28403930664,
    iva: 21.0,
    total_con_iva: 27532.683687561035,
    nro_cliente: 68,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 2486,
            cantidad: 8.0
        },
        {
            codigo_producto: 5,
            nro_item: 2490,
            cantidad: 72.0
        },
        {
            codigo_producto: 9,
            nro_item: 2431,
            cantidad: 53.0
        }
    ]
});
db.factura.insertOne({
    _id: 235,
    fecha: "2016-11-02",
    total_sin_iva: 69183.09724617004,
    iva: 21.0,
    total_con_iva: 83711.54766786576,
    nro_cliente: 64,
    detalle: [
        {
            codigo_producto: 21,
            nro_item: 2436,
            cantidad: 44.0
        },
        {
            codigo_producto: 29,
            nro_item: 2432,
            cantidad: 83.0
        },
        {
            codigo_producto: 67,
            nro_item: 2685,
            cantidad: 75.0
        },
        {
            codigo_producto: 69,
            nro_item: 2602,
            cantidad: 5.0
        },
        {
            codigo_producto: 91,
            nro_item: 2643,
            cantidad: 34.0
        },
        {
            codigo_producto: 98,
            nro_item: 2673,
            cantidad: 13.0
        }
    ]
});
db.factura.insertOne({
    _id: 236,
    fecha: "2016-08-30",
    total_sin_iva: 106740.93704223633,
    iva: 21.0,
    total_con_iva: 129156.53382110596,
    nro_cliente: 73,
    detalle: [
        {
            codigo_producto: 9,
            nro_item: 2438,
            cantidad: 19.0
        },
        {
            codigo_producto: 10,
            nro_item: 2423,
            cantidad: 56.0
        },
        {
            codigo_producto: 12,
            nro_item: 2406,
            cantidad: 3.0
        },
        {
            codigo_producto: 71,
            nro_item: 2676,
            cantidad: 82.0
        },
        {
            codigo_producto: 82,
            nro_item: 2605,
            cantidad: 58.0
        }
    ]
});
db.factura.insertOne({
    _id: 237,
    fecha: "2017-01-22",
    total_sin_iva: 146189.81030273438,
    iva: 21.0,
    total_con_iva: 176889.6704663086,
    nro_cliente: 68,
    detalle: [
        {
            codigo_producto: 8,
            nro_item: 2407,
            cantidad: 16.0
        },
        {
            codigo_producto: 68,
            nro_item: 2623,
            cantidad: 36.0
        },
        {
            codigo_producto: 73,
            nro_item: 2681,
            cantidad: 77.0
        },
        {
            codigo_producto: 78,
            nro_item: 2695,
            cantidad: 86.0
        },
        {
            codigo_producto: 85,
            nro_item: 2669,
            cantidad: 30.0
        },
        {
            codigo_producto: 100,
            nro_item: 2671,
            cantidad: 18.0
        }
    ]
});
db.factura.insertOne({
    _id: 238,
    fecha: "2016-06-18",
    total_sin_iva: 189720.3516036987,
    iva: 21.0,
    total_con_iva: 229561.62544047544,
    nro_cliente: 53,
    detalle: [
        {
            codigo_producto: 5,
            nro_item: 2411,
            cantidad: 99.0
        },
        {
            codigo_producto: 12,
            nro_item: 2413,
            cantidad: 88.0
        },
        {
            codigo_producto: 21,
            nro_item: 2498,
            cantidad: 85.0
        },
        {
            codigo_producto: 75,
            nro_item: 2686,
            cantidad: 48.0
        },
        {
            codigo_producto: 81,
            nro_item: 2690,
            cantidad: 29.0
        },
        {
            codigo_producto: 82,
            nro_item: 2650,
            cantidad: 94.0
        },
        {
            codigo_producto: 95,
            nro_item: 2645,
            cantidad: 71.0
        },
        {
            codigo_producto: 97,
            nro_item: 2680,
            cantidad: 23.0
        }
    ]
});
db.factura.insertOne({
    _id: 239,
    fecha: "2016-03-01",
    total_sin_iva: 49063.347619628905,
    iva: 21.0,
    total_con_iva: 59366.65061975097,
    nro_cliente: 56,
    detalle: [
        {
            codigo_producto: 21,
            nro_item: 2463,
            cantidad: 93.0
        },
        {
            codigo_producto: 73,
            nro_item: 2664,
            cantidad: 45.0
        }
    ]
});
db.factura.insertOne({
    _id: 240,
    fecha: "2016-12-25",
    total_sin_iva: 76569.24195861816,
    iva: 21.0,
    total_con_iva: 92648.78276992797,
    nro_cliente: 63,
    detalle: [
        {
            codigo_producto: 6,
            nro_item: 2427,
            cantidad: 10.0
        },
        {
            codigo_producto: 14,
            nro_item: 2487,
            cantidad: 68.0
        },
        {
            codigo_producto: 81,
            nro_item: 2604,
            cantidad: 85.0
        },
        {
            codigo_producto: 82,
            nro_item: 2693,
            cantidad: 67.0
        }
    ]
});
db.factura.insertOne({
    _id: 241,
    fecha: "2016-08-18",
    total_sin_iva: 27028.07940673828,
    iva: 21.0,
    total_con_iva: 32703.97608215332,
    nro_cliente: 53,
    detalle: [
        {
            codigo_producto: 22,
            nro_item: 2451,
            cantidad: 45.0
        }
    ]
});
db.factura.insertOne({
    _id: 242,
    fecha: "2016-11-04",
    total_sin_iva: 265511.98506774905,
    iva: 21.0,
    total_con_iva: 321269.50193197635,
    nro_cliente: 57,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 2428,
            cantidad: 83.0
        },
        {
            codigo_producto: 16,
            nro_item: 2434,
            cantidad: 90.0
        },
        {
            codigo_producto: 78,
            nro_item: 2627,
            cantidad: 68.0
        },
        {
            codigo_producto: 79,
            nro_item: 2606,
            cantidad: 85.0
        },
        {
            codigo_producto: 89,
            nro_item: 2612,
            cantidad: 63.0
        },
        {
            codigo_producto: 100,
            nro_item: 2663,
            cantidad: 42.0
        }
    ]
});
db.factura.insertOne({
    _id: 243,
    fecha: "2016-11-08",
    total_sin_iva: 116711.86624145508,
    iva: 21.0,
    total_con_iva: 141221.35815216065,
    nro_cliente: 64,
    detalle: [
        {
            codigo_producto: 71,
            nro_item: 2615,
            cantidad: 80.0
        },
        {
            codigo_producto: 72,
            nro_item: 2613,
            cantidad: 65.0
        },
        {
            codigo_producto: 87,
            nro_item: 2697,
            cantidad: 25.0
        }
    ]
});
db.factura.insertOne({
    _id: 244,
    fecha: "2016-05-20",
    total_sin_iva: 44941.16774291992,
    iva: 21.0,
    total_con_iva: 54378.8129689331,
    nro_cliente: 56,
    detalle: [
        {
            codigo_producto: 25,
            nro_item: 2454,
            cantidad: 24.0
        },
        {
            codigo_producto: 33,
            nro_item: 2492,
            cantidad: 15.0
        },
        {
            codigo_producto: 67,
            nro_item: 2621,
            cantidad: 8.0
        },
        {
            codigo_producto: 85,
            nro_item: 2667,
            cantidad: 56.0
        }
    ]
});
db.factura.insertOne({
    _id: 245,
    fecha: "2016-07-03",
    total_sin_iva: 128329.81042785646,
    iva: 21.0,
    total_con_iva: 155279.0706177063,
    nro_cliente: 60,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 2477,
            cantidad: 57.0
        },
        {
            codigo_producto: 32,
            nro_item: 2435,
            cantidad: 28.0
        },
        {
            codigo_producto: 81,
            nro_item: 2625,
            cantidad: 61.0
        },
        {
            codigo_producto: 82,
            nro_item: 2696,
            cantidad: 84.0
        },
        {
            codigo_producto: 86,
            nro_item: 2684,
            cantidad: 43.0
        },
        {
            codigo_producto: 87,
            nro_item: 2629,
            cantidad: 33.0
        }
    ]
});
db.factura.insertOne({
    _id: 246,
    fecha: "2017-01-30",
    total_sin_iva: 96279.39334716796,
    iva: 21.0,
    total_con_iva: 116498.06595007323,
    nro_cliente: 67,
    detalle: [
        {
            codigo_producto: 8,
            nro_item: 2450,
            cantidad: 53.0
        },
        {
            codigo_producto: 22,
            nro_item: 2485,
            cantidad: 69.0
        },
        {
            codigo_producto: 70,
            nro_item: 2608,
            cantidad: 6.0
        },
        {
            codigo_producto: 92,
            nro_item: 2653,
            cantidad: 23.0
        }
    ]
});
db.factura.insertOne({
    _id: 247,
    fecha: "2016-07-13",
    total_sin_iva: 2734.9919357299805,
    iva: 21.0,
    total_con_iva: 3309.3402422332765,
    nro_cliente: 52,
    detalle: [
        {
            codigo_producto: 29,
            nro_item: 2445,
            cantidad: 52.0
        }
    ]
});
db.factura.insertOne({
    _id: 248,
    fecha: "2016-12-21",
    total_sin_iva: 135236.76197509764,
    iva: 21.0,
    total_con_iva: 163636.48198986816,
    nro_cliente: 54,
    detalle: [
        {
            codigo_producto: 11,
            nro_item: 2439,
            cantidad: 29.0
        },
        {
            codigo_producto: 19,
            nro_item: 2497,
            cantidad: 37.0
        },
        {
            codigo_producto: 20,
            nro_item: 2460,
            cantidad: 81.0
        },
        {
            codigo_producto: 67,
            nro_item: 2659,
            cantidad: 52.0
        },
        {
            codigo_producto: 76,
            nro_item: 2694,
            cantidad: 7.0
        }
    ]
});
db.factura.insertOne({
    _id: 249,
    fecha: "2016-10-29",
    total_sin_iva: 131664.92285385134,
    iva: 21.0,
    total_con_iva: 159314.55665316014,
    nro_cliente: 73,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 2408,
            cantidad: 72.0
        },
        {
            codigo_producto: 11,
            nro_item: 2489,
            cantidad: 62.0
        },
        {
            codigo_producto: 25,
            nro_item: 2481,
            cantidad: 89.0
        },
        {
            codigo_producto: 31,
            nro_item: 2457,
            cantidad: 91.0
        },
        {
            codigo_producto: 82,
            nro_item: 2601,
            cantidad: 58.0
        }
    ]
});
db.factura.insertOne({
    _id: 250,
    fecha: "2016-08-06",
    total_sin_iva: 148001.80715332032,
    iva: 21.0,
    total_con_iva: 179082.18665551758,
    nro_cliente: 67,
    detalle: [
        {
            codigo_producto: 8,
            nro_item: 2419,
            cantidad: 51.0
        },
        {
            codigo_producto: 68,
            nro_item: 2678,
            cantidad: 75.0
        },
        {
            codigo_producto: 74,
            nro_item: 2658,
            cantidad: 12.0
        },
        {
            codigo_producto: 76,
            nro_item: 2633,
            cantidad: 46.0
        },
        {
            codigo_producto: 85,
            nro_item: 2624,
            cantidad: 52.0
        }
    ]
});
db.factura.insertOne({
    _id: 251,
    fecha: "2016-12-20",
    total_sin_iva: 133674.0703063965,
    iva: 21.0,
    total_con_iva: 161745.62507073974,
    nro_cliente: 60,
    detalle: [
        {
            codigo_producto: 6,
            nro_item: 2775,
            cantidad: 87.0
        },
        {
            codigo_producto: 8,
            nro_item: 2760,
            cantidad: 53.0
        },
        {
            codigo_producto: 16,
            nro_item: 2751,
            cantidad: 4.0
        },
        {
            codigo_producto: 45,
            nro_item: 2894,
            cantidad: 45.0
        }
    ]
});
db.factura.insertOne({
    _id: 252,
    fecha: "2016-08-18",
    total_sin_iva: 71979.86688079833,
    iva: 21.0,
    total_con_iva: 87095.63892576599,
    nro_cliente: 60,
    detalle: [
        {
            codigo_producto: 5,
            nro_item: 2715,
            cantidad: 69.0
        },
        {
            codigo_producto: 7,
            nro_item: 2791,
            cantidad: 90.0
        },
        {
            codigo_producto: 19,
            nro_item: 2776,
            cantidad: 15.0
        },
        {
            codigo_producto: 26,
            nro_item: 2749,
            cantidad: 35.0
        },
        {
            codigo_producto: 33,
            nro_item: 2738,
            cantidad: 15.0
        }
    ]
});
db.factura.insertOne({
    _id: 253,
    fecha: "2016-09-19",
    total_sin_iva: 103369.54696044921,
    iva: 21.0,
    total_con_iva: 125077.15182214354,
    nro_cliente: 68,
    detalle: [
        {
            codigo_producto: 17,
            nro_item: 2796,
            cantidad: 4.0
        },
        {
            codigo_producto: 22,
            nro_item: 2765,
            cantidad: 47.0
        },
        {
            codigo_producto: 34,
            nro_item: 2893,
            cantidad: 1.0
        },
        {
            codigo_producto: 40,
            nro_item: 2852,
            cantidad: 81.0
        },
        {
            codigo_producto: 44,
            nro_item: 2844,
            cantidad: 63.0
        },
        {
            codigo_producto: 48,
            nro_item: 2818,
            cantidad: 71.0
        },
        {
            codigo_producto: 51,
            nro_item: 2831,
            cantidad: 9.0
        }
    ]
});
db.factura.insertOne({
    _id: 254,
    fecha: "2017-01-02",
    total_sin_iva: 51755.78169555664,
    iva: 21.0,
    total_con_iva: 62624.495851623535,
    nro_cliente: 59,
    detalle: [
        {
            codigo_producto: 27,
            nro_item: 2772,
            cantidad: 4.0
        },
        {
            codigo_producto: 39,
            nro_item: 2884,
            cantidad: 12.0
        },
        {
            codigo_producto: 78,
            nro_item: 2909,
            cantidad: 79.0
        }
    ]
});
db.factura.insertOne({
    _id: 255,
    fecha: "2016-11-27",
    total_sin_iva: 99658.30594482421,
    iva: 21.0,
    total_con_iva: 120586.5501932373,
    nro_cliente: 68,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 2788,
            cantidad: 97.0
        },
        {
            codigo_producto: 21,
            nro_item: 2705,
            cantidad: 33.0
        },
        {
            codigo_producto: 56,
            nro_item: 2866,
            cantidad: 79.0
        }
    ]
});
db.factura.insertOne({
    _id: 256,
    fecha: "2016-12-08",
    total_sin_iva: 127828.02622375489,
    iva: 21.0,
    total_con_iva: 154671.91173074342,
    nro_cliente: 67,
    detalle: [
        {
            codigo_producto: 4,
            nro_item: 2793,
            cantidad: 6.0
        },
        {
            codigo_producto: 16,
            nro_item: 2726,
            cantidad: 98.0
        },
        {
            codigo_producto: 37,
            nro_item: 2855,
            cantidad: 24.0
        },
        {
            codigo_producto: 49,
            nro_item: 2854,
            cantidad: 69.0
        },
        {
            codigo_producto: 55,
            nro_item: 2891,
            cantidad: 20.0
        },
        {
            codigo_producto: 60,
            nro_item: 2882,
            cantidad: 16.0
        }
    ]
});
db.factura.insertOne({
    _id: 257,
    fecha: "2016-10-10",
    total_sin_iva: 85620.76706542968,
    iva: 21.0,
    total_con_iva: 103601.12814916992,
    nro_cliente: 56,
    detalle: [
        {
            codigo_producto: 24,
            nro_item: 2783,
            cantidad: 10.0
        },
        {
            codigo_producto: 28,
            nro_item: 2780,
            cantidad: 71.0
        },
        {
            codigo_producto: 48,
            nro_item: 2900,
            cantidad: 56.0
        },
        {
            codigo_producto: 63,
            nro_item: 2847,
            cantidad: 19.0
        }
    ]
});
db.factura.insertOne({
    _id: 258,
    fecha: "2017-03-26",
    total_sin_iva: 94135.33061828613,
    iva: 21.0,
    total_con_iva: 113903.75004812621,
    nro_cliente: 54,
    detalle: [
        {
            codigo_producto: 21,
            nro_item: 2761,
            cantidad: 21.0
        },
        {
            codigo_producto: 52,
            nro_item: 2898,
            cantidad: 67.0
        },
        {
            codigo_producto: 85,
            nro_item: 2902,
            cantidad: 98.0
        }
    ]
});
db.factura.insertOne({
    _id: 259,
    fecha: "2016-11-16",
    total_sin_iva: 61418.312350463864,
    iva: 21.0,
    total_con_iva: 74316.15794406127,
    nro_cliente: 64,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 2746,
            cantidad: 43.0
        },
        {
            codigo_producto: 16,
            nro_item: 2787,
            cantidad: 4.0
        },
        {
            codigo_producto: 52,
            nro_item: 2867,
            cantidad: 77.0
        },
        {
            codigo_producto: 61,
            nro_item: 2875,
            cantidad: 71.0
        }
    ]
});
db.factura.insertOne({
    _id: 260,
    fecha: "2016-10-12",
    total_sin_iva: 213170.79375,
    iva: 21.0,
    total_con_iva: 257936.66043750002,
    nro_cliente: 65,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 2707,
            cantidad: 100.0
        },
        {
            codigo_producto: 11,
            nro_item: 2748,
            cantidad: 81.0
        },
        {
            codigo_producto: 12,
            nro_item: 2766,
            cantidad: 63.0
        },
        {
            codigo_producto: 51,
            nro_item: 2807,
            cantidad: 79.0
        },
        {
            codigo_producto: 61,
            nro_item: 2883,
            cantidad: 46.0
        }
    ]
});
db.factura.insertOne({
    _id: 261,
    fecha: "2016-12-29",
    total_sin_iva: 93548.89927139282,
    iva: 21.0,
    total_con_iva: 113194.1681183853,
    nro_cliente: 64,
    detalle: [
        {
            codigo_producto: 16,
            nro_item: 2740,
            cantidad: 85.0
        },
        {
            codigo_producto: 25,
            nro_item: 2798,
            cantidad: 63.0
        },
        {
            codigo_producto: 43,
            nro_item: 2896,
            cantidad: 98.0
        }
    ]
});
db.factura.insertOne({
    _id: 262,
    fecha: "2016-10-15",
    total_sin_iva: 36055.13485107422,
    iva: 21.0,
    total_con_iva: 43626.713169799805,
    nro_cliente: 52,
    detalle: [
        {
            codigo_producto: 8,
            nro_item: 2706,
            cantidad: 4.0
        },
        {
            codigo_producto: 26,
            nro_item: 2781,
            cantidad: 25.0
        },
        {
            codigo_producto: 31,
            nro_item: 2747,
            cantidad: 34.0
        },
        {
            codigo_producto: 64,
            nro_item: 2821,
            cantidad: 1.0
        }
    ]
});
db.factura.insertOne({
    _id: 263,
    fecha: "2016-05-31",
    total_sin_iva: 145265.78424682617,
    iva: 21.0,
    total_con_iva: 175771.59893865965,
    nro_cliente: 55,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 2711,
            cantidad: 63.0
        },
        {
            codigo_producto: 34,
            nro_item: 2840,
            cantidad: 40.0
        },
        {
            codigo_producto: 45,
            nro_item: 2892,
            cantidad: 78.0
        },
        {
            codigo_producto: 53,
            nro_item: 2881,
            cantidad: 99.0
        },
        {
            codigo_producto: 58,
            nro_item: 2899,
            cantidad: 21.0
        },
        {
            codigo_producto: 59,
            nro_item: 2865,
            cantidad: 38.0
        }
    ]
});
db.factura.insertOne({
    _id: 264,
    fecha: "2017-01-15",
    total_sin_iva: 14131.097644042968,
    iva: 21.0,
    total_con_iva: 17098.62814929199,
    nro_cliente: 64,
    detalle: [
        {
            codigo_producto: 59,
            nro_item: 2864,
            cantidad: 18.0
        }
    ]
});
db.factura.insertOne({
    _id: 265,
    fecha: "2016-11-08",
    total_sin_iva: 35643.19411010742,
    iva: 21.0,
    total_con_iva: 43128.26487322998,
    nro_cliente: 56,
    detalle: [
        {
            codigo_producto: 13,
            nro_item: 2744,
            cantidad: 65.0
        },
        {
            codigo_producto: 60,
            nro_item: 2857,
            cantidad: 97.0
        }
    ]
});
db.factura.insertOne({
    _id: 266,
    fecha: "2016-08-26",
    total_sin_iva: 62925.58070068359,
    iva: 21.0,
    total_con_iva: 76139.95264782714,
    nro_cliente: 67,
    detalle: [
        {
            codigo_producto: 44,
            nro_item: 2838,
            cantidad: 63.0
        },
        {
            codigo_producto: 46,
            nro_item: 2805,
            cantidad: 54.0
        },
        {
            codigo_producto: 89,
            nro_item: 2901,
            cantidad: 18.0
        }
    ]
});
db.factura.insertOne({
    _id: 267,
    fecha: "2017-03-29",
    total_sin_iva: 101431.20684814453,
    iva: 21.0,
    total_con_iva: 122731.76028625488,
    nro_cliente: 61,
    detalle: [
        {
            codigo_producto: 11,
            nro_item: 2734,
            cantidad: 61.0
        },
        {
            codigo_producto: 49,
            nro_item: 2874,
            cantidad: 48.0
        },
        {
            codigo_producto: 56,
            nro_item: 2816,
            cantidad: 61.0
        }
    ]
});
db.factura.insertOne({
    _id: 268,
    fecha: "2017-01-16",
    total_sin_iva: 36558.96330871582,
    iva: 21.0,
    total_con_iva: 44236.34560354614,
    nro_cliente: 75,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 2716,
            cantidad: 79.0
        },
        {
            codigo_producto: 60,
            nro_item: 2858,
            cantidad: 86.0
        }
    ]
});
db.factura.insertOne({
    _id: 269,
    fecha: "2016-12-27",
    total_sin_iva: 19609.344580078126,
    iva: 21.0,
    total_con_iva: 23727.30694189453,
    nro_cliente: 53,
    detalle: [
        {
            codigo_producto: 49,
            nro_item: 2832,
            cantidad: 48.0
        }
    ]
});
db.factura.insertOne({
    _id: 270,
    fecha: "2016-05-19",
    total_sin_iva: 66865.10402526856,
    iva: 21.0,
    total_con_iva: 80906.77587057496,
    nro_cliente: 75,
    detalle: [
        {
            codigo_producto: 18,
            nro_item: 2789,
            cantidad: 52.0
        },
        {
            codigo_producto: 34,
            nro_item: 2849,
            cantidad: 61.0
        },
        {
            codigo_producto: 61,
            nro_item: 2806,
            cantidad: 45.0
        }
    ]
});
db.factura.insertOne({
    _id: 271,
    fecha: "2016-06-07",
    total_sin_iva: 115057.81867675783,
    iva: 21.0,
    total_con_iva: 139219.96059887696,
    nro_cliente: 57,
    detalle: [
        {
            codigo_producto: 16,
            nro_item: 2786,
            cantidad: 55.0
        },
        {
            codigo_producto: 23,
            nro_item: 2701,
            cantidad: 9.0
        },
        {
            codigo_producto: 24,
            nro_item: 2702,
            cantidad: 19.0
        },
        {
            codigo_producto: 34,
            nro_item: 2843,
            cantidad: 74.0
        },
        {
            codigo_producto: 44,
            nro_item: 2887,
            cantidad: 15.0
        }
    ]
});
db.factura.insertOne({
    _id: 272,
    fecha: "2016-03-25",
    total_sin_iva: 80690.58191299438,
    iva: 21.0,
    total_con_iva: 97635.6041147232,
    nro_cliente: 61,
    detalle: [
        {
            codigo_producto: 9,
            nro_item: 2762,
            cantidad: 33.0
        },
        {
            codigo_producto: 27,
            nro_item: 2782,
            cantidad: 30.0
        },
        {
            codigo_producto: 29,
            nro_item: 2714,
            cantidad: 70.0
        },
        {
            codigo_producto: 42,
            nro_item: 2819,
            cantidad: 28.0
        },
        {
            codigo_producto: 57,
            nro_item: 2853,
            cantidad: 85.0
        },
        {
            codigo_producto: 60,
            nro_item: 2813,
            cantidad: 30.0
        }
    ]
});
db.factura.insertOne({
    _id: 273,
    fecha: "2016-11-25",
    total_sin_iva: 48156.641908264166,
    iva: 21.0,
    total_con_iva: 58269.53670899964,
    nro_cliente: 59,
    detalle: [
        {
            codigo_producto: 6,
            nro_item: 2727,
            cantidad: 19.0
        },
        {
            codigo_producto: 38,
            nro_item: 2827,
            cantidad: 67.0
        },
        {
            codigo_producto: 51,
            nro_item: 2836,
            cantidad: 60.0
        }
    ]
});
db.factura.insertOne({
    _id: 274,
    fecha: "2016-06-11",
    total_sin_iva: 38062.36792831421,
    iva: 21.0,
    total_con_iva: 46055.4651932602,
    nro_cliente: 59,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 2723,
            cantidad: 49.0
        },
        {
            codigo_producto: 22,
            nro_item: 2717,
            cantidad: 40.0
        },
        {
            codigo_producto: 25,
            nro_item: 2708,
            cantidad: 21.0
        }
    ]
});
db.factura.insertOne({
    _id: 275,
    fecha: "2016-12-10",
    total_sin_iva: 61854.76707000733,
    iva: 21.0,
    total_con_iva: 74844.26815470887,
    nro_cliente: 74,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 2719,
            cantidad: 41.0
        },
        {
            codigo_producto: 4,
            nro_item: 2759,
            cantidad: 94.0
        },
        {
            codigo_producto: 38,
            nro_item: 2830,
            cantidad: 53.0
        }
    ]
});
db.factura.insertOne({
    _id: 276,
    fecha: "2017-02-21",
    total_sin_iva: 63454.15060424805,
    iva: 21.0,
    total_con_iva: 76779.52223114013,
    nro_cliente: 65,
    detalle: [
        {
            codigo_producto: 9,
            nro_item: 2770,
            cantidad: 66.0
        },
        {
            codigo_producto: 14,
            nro_item: 2735,
            cantidad: 55.0
        },
        {
            codigo_producto: 25,
            nro_item: 2792,
            cantidad: 52.0
        },
        {
            codigo_producto: 57,
            nro_item: 2885,
            cantidad: 53.0
        },
        {
            codigo_producto: 62,
            nro_item: 2811,
            cantidad: 4.0
        }
    ]
});
db.factura.insertOne({
    _id: 277,
    fecha: "2017-03-09",
    total_sin_iva: 55134.91119689941,
    iva: 21.0,
    total_con_iva: 66713.2425482483,
    nro_cliente: 75,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 2755,
            cantidad: 1.0
        },
        {
            codigo_producto: 30,
            nro_item: 2704,
            cantidad: 40.0
        },
        {
            codigo_producto: 50,
            nro_item: 2876,
            cantidad: 68.0
        },
        {
            codigo_producto: 51,
            nro_item: 2845,
            cantidad: 16.0
        },
        {
            codigo_producto: 60,
            nro_item: 2834,
            cantidad: 74.0
        }
    ]
});
db.factura.insertOne({
    _id: 278,
    fecha: "2016-04-08",
    total_sin_iva: 50824.138516235354,
    iva: 21.0,
    total_con_iva: 61497.20760464478,
    nro_cliente: 64,
    detalle: [
        {
            codigo_producto: 10,
            nro_item: 2768,
            cantidad: 10.0
        },
        {
            codigo_producto: 13,
            nro_item: 2752,
            cantidad: 94.0
        },
        {
            codigo_producto: 50,
            nro_item: 2823,
            cantidad: 2.0
        },
        {
            codigo_producto: 63,
            nro_item: 2888,
            cantidad: 27.0
        }
    ]
});
db.factura.insertOne({
    _id: 279,
    fecha: "2016-06-22",
    total_sin_iva: 101784.24761047363,
    iva: 21.0,
    total_con_iva: 123158.93960867308,
    nro_cliente: 56,
    detalle: [
        {
            codigo_producto: 3,
            nro_item: 2757,
            cantidad: 2.0
        },
        {
            codigo_producto: 24,
            nro_item: 2721,
            cantidad: 1.0
        },
        {
            codigo_producto: 35,
            nro_item: 2880,
            cantidad: 55.0
        },
        {
            codigo_producto: 50,
            nro_item: 2802,
            cantidad: 100.0
        },
        {
            codigo_producto: 64,
            nro_item: 2842,
            cantidad: 8.0
        },
        {
            codigo_producto: 88,
            nro_item: 2907,
            cantidad: 92.0
        }
    ]
});
db.factura.insertOne({
    _id: 280,
    fecha: "2017-03-02",
    total_sin_iva: 93193.76691513062,
    iva: 21.0,
    total_con_iva: 112764.45796730804,
    nro_cliente: 54,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 2732,
            cantidad: 92.0
        },
        {
            codigo_producto: 13,
            nro_item: 2784,
            cantidad: 31.0
        },
        {
            codigo_producto: 27,
            nro_item: 2800,
            cantidad: 28.0
        },
        {
            codigo_producto: 43,
            nro_item: 2817,
            cantidad: 88.0
        },
        {
            codigo_producto: 50,
            nro_item: 2828,
            cantidad: 69.0
        },
        {
            codigo_producto: 51,
            nro_item: 2822,
            cantidad: 57.0
        }
    ]
});
db.factura.insertOne({
    _id: 281,
    fecha: "2016-08-28",
    total_sin_iva: 45020.99935913086,
    iva: 21.0,
    total_con_iva: 54475.40922454834,
    nro_cliente: 55,
    detalle: [
        {
            codigo_producto: 24,
            nro_item: 2785,
            cantidad: 47.0
        },
        {
            codigo_producto: 51,
            nro_item: 2897,
            cantidad: 3.0
        },
        {
            codigo_producto: 94,
            nro_item: 2906,
            cantidad: 26.0
        }
    ]
});
db.factura.insertOne({
    _id: 282,
    fecha: "2016-06-25",
    total_sin_iva: 84043.4637512207,
    iva: 21.0,
    total_con_iva: 101692.59113897705,
    nro_cliente: 71,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 2722,
            cantidad: 48.0
        },
        {
            codigo_producto: 18,
            nro_item: 2741,
            cantidad: 25.0
        },
        {
            codigo_producto: 41,
            nro_item: 2835,
            cantidad: 8.0
        },
        {
            codigo_producto: 42,
            nro_item: 2829,
            cantidad: 35.0
        },
        {
            codigo_producto: 59,
            nro_item: 2812,
            cantidad: 38.0
        },
        {
            codigo_producto: 62,
            nro_item: 2868,
            cantidad: 75.0
        }
    ]
});
db.factura.insertOne({
    _id: 283,
    fecha: "2016-04-08",
    total_sin_iva: 40157.82389612198,
    iva: 21.0,
    total_con_iva: 48590.9669143076,
    nro_cliente: 55,
    detalle: [
        {
            codigo_producto: 40,
            nro_item: 2810,
            cantidad: 5.0
        },
        {
            codigo_producto: 47,
            nro_item: 2841,
            cantidad: 13.0
        },
        {
            codigo_producto: 53,
            nro_item: 2860,
            cantidad: 72.0
        },
        {
            codigo_producto: 66,
            nro_item: 2870,
            cantidad: 17.0
        },
        {
            codigo_producto: 89,
            nro_item: 2903,
            cantidad: 25.0
        }
    ]
});
db.factura.insertOne({
    _id: 284,
    fecha: "2016-04-01",
    total_sin_iva: 154506.76953701972,
    iva: 21.0,
    total_con_iva: 186953.19113979387,
    nro_cliente: 60,
    detalle: [
        {
            codigo_producto: 5,
            nro_item: 2737,
            cantidad: 61.0
        },
        {
            codigo_producto: 30,
            nro_item: 2739,
            cantidad: 79.0
        },
        {
            codigo_producto: 40,
            nro_item: 2803,
            cantidad: 86.0
        },
        {
            codigo_producto: 47,
            nro_item: 2808,
            cantidad: 7.0
        },
        {
            codigo_producto: 55,
            nro_item: 2877,
            cantidad: 56.0
        },
        {
            codigo_producto: 57,
            nro_item: 2879,
            cantidad: 55.0
        }
    ]
});
db.factura.insertOne({
    _id: 285,
    fecha: "2016-08-03",
    total_sin_iva: 92559.85279541016,
    iva: 21.0,
    total_con_iva: 111997.42188244629,
    nro_cliente: 52,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 2756,
            cantidad: 86.0
        },
        {
            codigo_producto: 23,
            nro_item: 2713,
            cantidad: 77.0
        },
        {
            codigo_producto: 37,
            nro_item: 2804,
            cantidad: 33.0
        },
        {
            codigo_producto: 52,
            nro_item: 2837,
            cantidad: 21.0
        },
        {
            codigo_producto: 66,
            nro_item: 2824,
            cantidad: 59.0
        }
    ]
});
db.factura.insertOne({
    _id: 286,
    fecha: "2016-05-28",
    total_sin_iva: 15411.92349243164,
    iva: 21.0,
    total_con_iva: 18648.427425842285,
    nro_cliente: 71,
    detalle: [
        {
            codigo_producto: 81,
            nro_item: 2910,
            cantidad: 33.0
        }
    ]
});
db.factura.insertOne({
    _id: 287,
    fecha: "2016-05-25",
    total_sin_iva: 135908.63879699708,
    iva: 21.0,
    total_con_iva: 164449.45294436647,
    nro_cliente: 51,
    detalle: [
        {
            codigo_producto: 21,
            nro_item: 2763,
            cantidad: 97.0
        },
        {
            codigo_producto: 40,
            nro_item: 2851,
            cantidad: 71.0
        },
        {
            codigo_producto: 59,
            nro_item: 2890,
            cantidad: 71.0
        },
        {
            codigo_producto: 63,
            nro_item: 2856,
            cantidad: 47.0
        }
    ]
});
db.factura.insertOne({
    _id: 288,
    fecha: "2016-07-23",
    total_sin_iva: 137042.05663146972,
    iva: 21.0,
    total_con_iva: 165820.88852407836,
    nro_cliente: 51,
    detalle: [
        {
            codigo_producto: 14,
            nro_item: 2753,
            cantidad: 61.0
        },
        {
            codigo_producto: 53,
            nro_item: 2850,
            cantidad: 28.0
        },
        {
            codigo_producto: 55,
            nro_item: 2872,
            cantidad: 37.0
        },
        {
            codigo_producto: 65,
            nro_item: 2889,
            cantidad: 38.0
        },
        {
            codigo_producto: 87,
            nro_item: 2905,
            cantidad: 100.0
        },
        {
            codigo_producto: 91,
            nro_item: 2904,
            cantidad: 44.0
        }
    ]
});
db.factura.insertOne({
    _id: 289,
    fecha: "2017-03-22",
    total_sin_iva: 132720.34402770997,
    iva: 21.0,
    total_con_iva: 160591.61627352907,
    nro_cliente: 57,
    detalle: [
        {
            codigo_producto: 12,
            nro_item: 2797,
            cantidad: 45.0
        },
        {
            codigo_producto: 27,
            nro_item: 2771,
            cantidad: 23.0
        },
        {
            codigo_producto: 48,
            nro_item: 2869,
            cantidad: 41.0
        },
        {
            codigo_producto: 59,
            nro_item: 2814,
            cantidad: 77.0
        },
        {
            codigo_producto: 63,
            nro_item: 2873,
            cantidad: 24.0
        }
    ]
});
db.factura.insertOne({
    _id: 290,
    fecha: "2017-01-29",
    total_sin_iva: 131844.07054138184,
    iva: 21.0,
    total_con_iva: 159531.325355072,
    nro_cliente: 51,
    detalle: [
        {
            codigo_producto: 12,
            nro_item: 2758,
            cantidad: 49.0
        },
        {
            codigo_producto: 13,
            nro_item: 2718,
            cantidad: 90.0
        },
        {
            codigo_producto: 14,
            nro_item: 2790,
            cantidad: 67.0
        },
        {
            codigo_producto: 16,
            nro_item: 2795,
            cantidad: 64.0
        }
    ]
});
db.factura.insertOne({
    _id: 291,
    fecha: "2016-03-08",
    total_sin_iva: 104693.9857635498,
    iva: 21.0,
    total_con_iva: 126679.72277389526,
    nro_cliente: 53,
    detalle: [
        {
            codigo_producto: 12,
            nro_item: 2724,
            cantidad: 51.0
        },
        {
            codigo_producto: 41,
            nro_item: 2862,
            cantidad: 49.0
        },
        {
            codigo_producto: 45,
            nro_item: 2809,
            cantidad: 29.0
        },
        {
            codigo_producto: 54,
            nro_item: 2820,
            cantidad: 64.0
        }
    ]
});
db.factura.insertOne({
    _id: 292,
    fecha: "2016-08-14",
    total_sin_iva: 75204.87036132812,
    iva: 21.0,
    total_con_iva: 90997.89313720704,
    nro_cliente: 75,
    detalle: [
        {
            codigo_producto: 26,
            nro_item: 2729,
            cantidad: 96.0
        },
        {
            codigo_producto: 56,
            nro_item: 2833,
            cantidad: 4.0
        }
    ]
});
db.factura.insertOne({
    _id: 293,
    fecha: "2016-05-19",
    total_sin_iva: 142923.14991760254,
    iva: 21.0,
    total_con_iva: 172937.01140029906,
    nro_cliente: 73,
    detalle: [
        {
            codigo_producto: 6,
            nro_item: 2742,
            cantidad: 27.0
        },
        {
            codigo_producto: 7,
            nro_item: 2794,
            cantidad: 16.0
        },
        {
            codigo_producto: 13,
            nro_item: 2754,
            cantidad: 70.0
        },
        {
            codigo_producto: 20,
            nro_item: 2710,
            cantidad: 84.0
        },
        {
            codigo_producto: 26,
            nro_item: 2712,
            cantidad: 17.0
        },
        {
            codigo_producto: 56,
            nro_item: 2859,
            cantidad: 15.0
        },
        {
            codigo_producto: 60,
            nro_item: 2846,
            cantidad: 39.0
        }
    ]
});
db.factura.insertOne({
    _id: 294,
    fecha: "2016-04-13",
    total_sin_iva: 123193.91519165039,
    iva: 21.0,
    total_con_iva: 149064.63738189696,
    nro_cliente: 73,
    detalle: [
        {
            codigo_producto: 11,
            nro_item: 2709,
            cantidad: 19.0
        },
        {
            codigo_producto: 17,
            nro_item: 2769,
            cantidad: 90.0
        },
        {
            codigo_producto: 18,
            nro_item: 2736,
            cantidad: 68.0
        },
        {
            codigo_producto: 21,
            nro_item: 2799,
            cantidad: 40.0
        },
        {
            codigo_producto: 25,
            nro_item: 2703,
            cantidad: 80.0
        }
    ]
});
db.factura.insertOne({
    _id: 295,
    fecha: "2017-01-02",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 54
});
db.factura.insertOne({
    _id: 296,
    fecha: "2016-12-31",
    total_sin_iva: 49825.69100189209,
    iva: 21.0,
    total_con_iva: 60289.08611228943,
    nro_cliente: 53,
    detalle: [
        {
            codigo_producto: 24,
            nro_item: 2774,
            cantidad: 37.0
        },
        {
            codigo_producto: 25,
            nro_item: 2750,
            cantidad: 30.0
        },
        {
            codigo_producto: 43,
            nro_item: 2839,
            cantidad: 29.0
        },
        {
            codigo_producto: 60,
            nro_item: 2871,
            cantidad: 68.0
        }
    ]
});
db.factura.insertOne({
    _id: 297,
    fecha: "2017-03-28",
    total_sin_iva: 38258.7301071167,
    iva: 21.0,
    total_con_iva: 46293.06342961121,
    nro_cliente: 66,
    detalle: [
        {
            codigo_producto: 5,
            nro_item: 2778,
            cantidad: 39.0
        },
        {
            codigo_producto: 13,
            nro_item: 2745,
            cantidad: 69.0
        },
        {
            codigo_producto: 46,
            nro_item: 2878,
            cantidad: 34.0
        }
    ]
});
db.factura.insertOne({
    _id: 298,
    fecha: "2017-01-15",
    total_sin_iva: 106004.5082997322,
    iva: 21.0,
    total_con_iva: 128265.45504267597,
    nro_cliente: 64,
    detalle: [
        {
            codigo_producto: 2,
            nro_item: 2773,
            cantidad: 22.0
        },
        {
            codigo_producto: 8,
            nro_item: 2730,
            cantidad: 46.0
        },
        {
            codigo_producto: 26,
            nro_item: 2725,
            cantidad: 95.0
        },
        {
            codigo_producto: 47,
            nro_item: 2826,
            cantidad: 73.0
        }
    ]
});
db.factura.insertOne({
    _id: 299,
    fecha: "2016-11-25",
    total_sin_iva: 59525.82951278686,
    iva: 21.0,
    total_con_iva: 72026.2537104721,
    nro_cliente: 52,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 2777,
            cantidad: 61.0
        },
        {
            codigo_producto: 19,
            nro_item: 2720,
            cantidad: 24.0
        },
        {
            codigo_producto: 25,
            nro_item: 2731,
            cantidad: 89.0
        },
        {
            codigo_producto: 93,
            nro_item: 2908,
            cantidad: 50.0
        }
    ]
});
db.factura.insertOne({
    _id: 300,
    fecha: "2017-03-01",
    total_sin_iva: 41561.67834243774,
    iva: 21.0,
    total_con_iva: 50289.630794349665,
    nro_cliente: 54,
    detalle: [
        {
            codigo_producto: 1,
            nro_item: 2728,
            cantidad: 58.0
        },
        {
            codigo_producto: 31,
            nro_item: 2733,
            cantidad: 8.0
        },
        {
            codigo_producto: 43,
            nro_item: 2825,
            cantidad: 41.0
        },
        {
            codigo_producto: 50,
            nro_item: 2848,
            cantidad: 43.0
        }
    ]
});
db.factura.insertOne({
    _id: 301,
    fecha: "2016-03-18",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 91
});
db.factura.insertOne({
    _id: 302,
    fecha: "2017-02-11",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 83
});
db.factura.insertOne({
    _id: 303,
    fecha: "2017-02-27",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 86
});
db.factura.insertOne({
    _id: 304,
    fecha: "2017-01-14",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 86
});
db.factura.insertOne({
    _id: 305,
    fecha: "2017-03-20",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 88
});
db.factura.insertOne({
    _id: 306,
    fecha: "2016-06-30",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 78
});
db.factura.insertOne({
    _id: 307,
    fecha: "2017-01-18",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 85
});
db.factura.insertOne({
    _id: 308,
    fecha: "2017-01-01",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 94
});
db.factura.insertOne({
    _id: 309,
    fecha: "2016-09-14",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 95
});
db.factura.insertOne({
    _id: 310,
    fecha: "2016-11-06",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 87
});
db.factura.insertOne({
    _id: 311,
    fecha: "2016-12-05",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 79
});
db.factura.insertOne({
    _id: 312,
    fecha: "2016-04-24",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 88
});
db.factura.insertOne({
    _id: 313,
    fecha: "2016-11-06",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 98
});
db.factura.insertOne({
    _id: 314,
    fecha: "2016-12-03",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 98
});
db.factura.insertOne({
    _id: 315,
    fecha: "2016-10-24",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 81
});
db.factura.insertOne({
    _id: 316,
    fecha: "2017-03-01",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 88
});
db.factura.insertOne({
    _id: 317,
    fecha: "2016-07-10",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 91
});
db.factura.insertOne({
    _id: 318,
    fecha: "2016-05-26",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 94
});
db.factura.insertOne({
    _id: 319,
    fecha: "2017-03-25",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 79
});
db.factura.insertOne({
    _id: 320,
    fecha: "2016-08-14",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 97
});
db.factura.insertOne({
    _id: 321,
    fecha: "2017-01-15",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 89
});
db.factura.insertOne({
    _id: 322,
    fecha: "2016-04-14",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 83
});
db.factura.insertOne({
    _id: 323,
    fecha: "2016-09-25",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 99
});
db.factura.insertOne({
    _id: 324,
    fecha: "2017-03-02",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 89
});
db.factura.insertOne({
    _id: 325,
    fecha: "2016-08-28",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 82
});
db.factura.insertOne({
    _id: 326,
    fecha: "2016-09-09",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 98
});
db.factura.insertOne({
    _id: 327,
    fecha: "2016-12-22",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 76
});
db.factura.insertOne({
    _id: 328,
    fecha: "2016-09-04",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 88
});
db.factura.insertOne({
    _id: 329,
    fecha: "2016-12-22",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 90
});
db.factura.insertOne({
    _id: 330,
    fecha: "2016-04-05",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 93
});
db.factura.insertOne({
    _id: 331,
    fecha: "2016-09-26",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 94
});
db.factura.insertOne({
    _id: 332,
    fecha: "2016-07-07",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 76
});
db.factura.insertOne({
    _id: 333,
    fecha: "2016-06-05",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 84
});
db.factura.insertOne({
    _id: 334,
    fecha: "2016-07-13",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 98
});
db.factura.insertOne({
    _id: 335,
    fecha: "2016-03-24",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 78
});
db.factura.insertOne({
    _id: 336,
    fecha: "2016-08-22",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 95
});
db.factura.insertOne({
    _id: 337,
    fecha: "2016-03-08",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 89
});
db.factura.insertOne({
    _id: 338,
    fecha: "2016-08-01",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 83
});
db.factura.insertOne({
    _id: 339,
    fecha: "2016-12-07",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 99
});
db.factura.insertOne({
    _id: 340,
    fecha: "2016-05-01",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 87
});
db.factura.insertOne({
    _id: 341,
    fecha: "2017-03-30",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 92
});
db.factura.insertOne({
    _id: 342,
    fecha: "2016-09-10",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 94
});
db.factura.insertOne({
    _id: 343,
    fecha: "2016-05-14",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 90
});
db.factura.insertOne({
    _id: 344,
    fecha: "2016-04-14",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 78
});
db.factura.insertOne({
    _id: 345,
    fecha: "2016-06-29",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 81
});
db.factura.insertOne({
    _id: 346,
    fecha: "2016-12-12",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 82
});
db.factura.insertOne({
    _id: 347,
    fecha: "2016-05-09",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 83
});
db.factura.insertOne({
    _id: 348,
    fecha: "2016-05-11",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 85
});
db.factura.insertOne({
    _id: 349,
    fecha: "2016-04-04",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 97
});
db.factura.insertOne({
    _id: 350,
    fecha: "2016-11-10",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 85
});
db.factura.insertOne({
    _id: 351,
    fecha: "2016-11-24",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 97
});
db.factura.insertOne({
    _id: 352,
    fecha: "2016-06-23",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 87
});
db.factura.insertOne({
    _id: 353,
    fecha: "2016-10-08",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 100
});
db.factura.insertOne({
    _id: 354,
    fecha: "2016-05-31",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 82
});
db.factura.insertOne({
    _id: 355,
    fecha: "2016-04-02",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 93
});
db.factura.insertOne({
    _id: 356,
    fecha: "2016-09-13",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 84
});
db.factura.insertOne({
    _id: 357,
    fecha: "2016-08-25",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 79
});
db.factura.insertOne({
    _id: 358,
    fecha: "2016-10-04",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 79
});
db.factura.insertOne({
    _id: 359,
    fecha: "2016-06-16",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 85
});
db.factura.insertOne({
    _id: 360,
    fecha: "2016-03-24",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 79
});
db.factura.insertOne({
    _id: 361,
    fecha: "2016-03-25",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 96
});
db.factura.insertOne({
    _id: 362,
    fecha: "2016-10-08",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 76
});
db.factura.insertOne({
    _id: 363,
    fecha: "2016-12-31",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 87
});
db.factura.insertOne({
    _id: 364,
    fecha: "2016-08-24",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 86
});
db.factura.insertOne({
    _id: 365,
    fecha: "2016-04-05",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 81
});
db.factura.insertOne({
    _id: 366,
    fecha: "2016-10-05",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 89
});
db.factura.insertOne({
    _id: 367,
    fecha: "2017-02-17",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 90
});
db.factura.insertOne({
    _id: 368,
    fecha: "2016-12-18",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 76
});
db.factura.insertOne({
    _id: 369,
    fecha: "2017-01-16",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 97
});
db.factura.insertOne({
    _id: 370,
    fecha: "2016-12-10",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 79
});
db.factura.insertOne({
    _id: 371,
    fecha: "2016-11-26",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 82
});
db.factura.insertOne({
    _id: 372,
    fecha: "2016-10-29",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 86
});
db.factura.insertOne({
    _id: 373,
    fecha: "2016-04-23",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 82
});
db.factura.insertOne({
    _id: 374,
    fecha: "2016-03-28",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 76
});
db.factura.insertOne({
    _id: 375,
    fecha: "2017-02-08",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 92
});
db.factura.insertOne({
    _id: 376,
    fecha: "2016-11-13",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 97
});
db.factura.insertOne({
    _id: 377,
    fecha: "2016-03-18",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 91
});
db.factura.insertOne({
    _id: 378,
    fecha: "2016-12-01",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 91
});
db.factura.insertOne({
    _id: 379,
    fecha: "2016-06-03",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 91
});
db.factura.insertOne({
    _id: 380,
    fecha: "2016-05-04",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 82
});
db.factura.insertOne({
    _id: 381,
    fecha: "2016-09-29",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 82
});
db.factura.insertOne({
    _id: 382,
    fecha: "2016-10-28",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 79
});
db.factura.insertOne({
    _id: 383,
    fecha: "2017-02-04",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 100
});
db.factura.insertOne({
    _id: 384,
    fecha: "2016-11-21",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 81
});
db.factura.insertOne({
    _id: 385,
    fecha: "2016-04-21",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 95
});
db.factura.insertOne({
    _id: 386,
    fecha: "2016-11-03",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 77
});
db.factura.insertOne({
    _id: 387,
    fecha: "2016-10-01",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 95
});
db.factura.insertOne({
    _id: 388,
    fecha: "2016-09-20",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 84
});
db.factura.insertOne({
    _id: 389,
    fecha: "2016-05-24",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 90
});
db.factura.insertOne({
    _id: 390,
    fecha: "2016-06-17",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 83
});
db.factura.insertOne({
    _id: 391,
    fecha: "2016-12-28",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 80
});
db.factura.insertOne({
    _id: 392,
    fecha: "2017-01-26",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 83
});
db.factura.insertOne({
    _id: 393,
    fecha: "2016-03-24",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 79
});
db.factura.insertOne({
    _id: 394,
    fecha: "2016-08-18",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 82
});
db.factura.insertOne({
    _id: 395,
    fecha: "2016-06-11",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 85
});
db.factura.insertOne({
    _id: 396,
    fecha: "2016-07-11",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 78
});
db.factura.insertOne({
    _id: 397,
    fecha: "2016-11-08",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 81
});
db.factura.insertOne({
    _id: 398,
    fecha: "2016-05-21",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 88
});
db.factura.insertOne({
    _id: 399,
    fecha: "2016-12-07",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 95
});
db.factura.insertOne({
    _id: 400,
    fecha: "2017-03-28",
    total_sin_iva: 0.0,
    iva: 21.0,
    total_con_iva: 0.0,
    nro_cliente: 97
});
