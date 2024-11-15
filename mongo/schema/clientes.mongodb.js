// @ts-nocheck
/* global use, db */

db.cliente.createIndex(
    { "telefonos.codigo_area": 1, "telefonos.nro_telefono": 1 },
    { unique: true, sparse: true }
);

db.cliente.insertOne({
    _id: 1,
    nombre: "Xerxes",
    apellido: "Hale",
    direccion: "129-5974 Suspendisse Ctra.",
    activo: 89,
    telefonos: [
        {
            codigo_area: 513,
            nro_telefono: 4998612,
            tipo: "M"
        },
        {
            codigo_area: 992,
            nro_telefono: 4241515,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 2,
    nombre: "Brent",
    apellido: "Leblanc",
    direccion: "Apartado núm.: 372, 5244 Nibh. ",
    activo: 58,
    telefonos: [
        {
            codigo_area: 638,
            nro_telefono: 4819478,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 3,
    nombre: "Kasper",
    apellido: "Shannon",
    direccion: "Apdo.:304-6908 Class Ctra.",
    activo: 38,
    telefonos: [
        {
            codigo_area: 915,
            nro_telefono: 4686947,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 4,
    nombre: "Pandora",
    apellido: "Tate",
    direccion: "1221 Egestas. Carretera",
    activo: 124
});
db.cliente.insertOne({
    _id: 5,
    nombre: "Kai",
    apellido: "Bullock",
    direccion: "Apdo.:796-1402 Diam Calle",
    activo: 60,
    telefonos: [
        {
            codigo_area: 662,
            nro_telefono: 4466147,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 6,
    nombre: "Calvin",
    apellido: "Hyde",
    direccion: "Apdo.:777-9475 Quam Avda.",
    activo: 66
});
db.cliente.insertOne({
    _id: 7,
    nombre: "Rina",
    apellido: "Brennan",
    direccion: "Apdo.:184-1212 Accumsan C.",
    activo: 14,
    telefonos: [
        {
            codigo_area: 158,
            nro_telefono: 4583134,
            tipo: "M"
        },
        {
            codigo_area: 351,
            nro_telefono: 4268273,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 8,
    nombre: "Mari",
    apellido: "Savage",
    direccion: "2062 Id Avenida",
    activo: 49,
    telefonos: [
        {
            codigo_area: 132,
            nro_telefono: 4962172,
            tipo: "F"
        },
        {
            codigo_area: 212,
            nro_telefono: 4515936,
            tipo: "F"
        },
        {
            codigo_area: 629,
            nro_telefono: 4699941,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 9,
    nombre: "Azalia",
    apellido: "Estes",
    direccion: "3801 Sed Ctra.",
    activo: 56,
    telefonos: [
        {
            codigo_area: 172,
            nro_telefono: 4344579,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 10,
    nombre: "Ivor",
    apellido: "Saunders",
    direccion: "4432 Nisl Avenida",
    activo: 121,
    telefonos: [
        {
            codigo_area: 189,
            nro_telefono: 4229129,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 11,
    nombre: "Lane",
    apellido: "Alvarado",
    direccion: "441-7608 Dis Avenida",
    activo: 25,
    telefonos: [
        {
            codigo_area: 115,
            nro_telefono: 4573879,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 12,
    nombre: "Melvin",
    apellido: "Hubbard",
    direccion: "5483 Dictum Ctra.",
    activo: 81,
    telefonos: [
        {
            codigo_area: 146,
            nro_telefono: 4579375,
            tipo: "F"
        },
        {
            codigo_area: 336,
            nro_telefono: 4869818,
            tipo: "M"
        },
        {
            codigo_area: 698,
            nro_telefono: 4653876,
            tipo: "F"
        },
        {
            codigo_area: 712,
            nro_telefono: 4652912,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 13,
    nombre: "Miranda",
    apellido: "Knowles",
    direccion: "500-3176 Ligula ",
    activo: 22,
    telefonos: [
        {
            codigo_area: 491,
            nro_telefono: 4639673,
            tipo: "F"
        },
        {
            codigo_area: 694,
            nro_telefono: 4485437,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 14,
    nombre: "Ayanna",
    apellido: "Lara",
    direccion: "236-8958 Magna Avenida",
    activo: 52,
    telefonos: [
        {
            codigo_area: 546,
            nro_telefono: 4275735,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 15,
    nombre: "Clio",
    apellido: "Phelps",
    direccion: "Apdo.:139-2362 Fermentum C/",
    activo: 14,
    telefonos: [
        {
            codigo_area: 266,
            nro_telefono: 4938182,
            tipo: "F"
        },
        {
            codigo_area: 494,
            nro_telefono: 4256865,
            tipo: "F"
        },
        {
            codigo_area: 772,
            nro_telefono: 4299982,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 16,
    nombre: "Richard",
    apellido: "Burch",
    direccion: "Apartado núm.: 682, 8150 Eu Avenida",
    activo: 42,
    telefonos: [
        {
            codigo_area: 581,
            nro_telefono: 4369984,
            tipo: "M"
        },
        {
            codigo_area: 599,
            nro_telefono: 4349389,
            tipo: "M"
        },
        {
            codigo_area: 717,
            nro_telefono: 4117747,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 17,
    nombre: "Deirdre",
    apellido: "Wilkinson",
    direccion: "Apartado núm.: 390, 1800 Penatibus Carretera",
    activo: 122,
    telefonos: [
        {
            codigo_area: 729,
            nro_telefono: 4228712,
            tipo: "F"
        },
        {
            codigo_area: 734,
            nro_telefono: 4571175,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 18,
    nombre: "Wendy",
    apellido: "Stokes",
    direccion: "Apdo.:853-5716 Eget, Carretera",
    activo: 123,
    telefonos: [
        {
            codigo_area: 413,
            nro_telefono: 4994492,
            tipo: "F"
        },
        {
            codigo_area: 515,
            nro_telefono: 4513942,
            tipo: "M"
        },
        {
            codigo_area: 854,
            nro_telefono: 4162434,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 19,
    nombre: "Merrill",
    apellido: "Allen",
    direccion: "4958 Vitae Avda.",
    activo: 98,
    telefonos: [
        {
            codigo_area: 221,
            nro_telefono: 4129231,
            tipo: "M"
        },
        {
            codigo_area: 293,
            nro_telefono: 4265431,
            tipo: "F"
        },
        {
            codigo_area: 518,
            nro_telefono: 4547153,
            tipo: "F"
        },
        {
            codigo_area: 737,
            nro_telefono: 4961183,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 20,
    nombre: "Barclay",
    apellido: "Valenzuela",
    direccion: "Apdo.:353-8666 Faucibus Calle",
    activo: 63,
    telefonos: [
        {
            codigo_area: 624,
            nro_telefono: 4263377,
            tipo: "M"
        },
        {
            codigo_area: 721,
            nro_telefono: 4757253,
            tipo: "F"
        },
        {
            codigo_area: 934,
            nro_telefono: 4741992,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 21,
    nombre: "Anjolie",
    apellido: "Soto",
    direccion: "1138 Amet Ctra.",
    activo: 77,
    telefonos: [
        {
            codigo_area: 716,
            nro_telefono: 4156525,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 22,
    nombre: "Jacob",
    apellido: "Cooper",
    direccion: "Apartado núm.: 268, 1455 Volutpat ",
    activo: 92,
    telefonos: [
        {
            codigo_area: 178,
            nro_telefono: 4758526,
            tipo: "M"
        },
        {
            codigo_area: 323,
            nro_telefono: 4481471,
            tipo: "F"
        },
        {
            codigo_area: 416,
            nro_telefono: 4855972,
            tipo: "F"
        },
        {
            codigo_area: 551,
            nro_telefono: 4972222,
            tipo: "M"
        },
        {
            codigo_area: 577,
            nro_telefono: 4473896,
            tipo: "F"
        },
        {
            codigo_area: 844,
            nro_telefono: 4699112,
            tipo: "M"
        },
        {
            codigo_area: 871,
            nro_telefono: 4368415,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 23,
    nombre: "Drew",
    apellido: "Boyle",
    direccion: "663-3481 Nisl. Ctra.",
    activo: 88,
    telefonos: [
        {
            codigo_area: 842,
            nro_telefono: 4848273,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 24,
    nombre: "Kermit",
    apellido: "Dorsey",
    direccion: "4946 Consectetuer Carretera",
    activo: 4
});
db.cliente.insertOne({
    _id: 25,
    nombre: "Galvin",
    apellido: "Summers",
    direccion: "757-9907 Natoque ",
    activo: 102,
    telefonos: [
        {
            codigo_area: 649,
            nro_telefono: 4975485,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 26,
    nombre: "Daniel",
    apellido: "Frye",
    direccion: "2404 Sodales Calle",
    activo: 88,
    telefonos: [
        {
            codigo_area: 698,
            nro_telefono: 4499482,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 27,
    nombre: "Mason",
    apellido: "Swanson",
    direccion: "Apdo.:147-8872 Dolor, Av.",
    activo: 108,
    telefonos: [
        {
            codigo_area: 612,
            nro_telefono: 4788261,
            tipo: "F"
        },
        {
            codigo_area: 964,
            nro_telefono: 4177915,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 28,
    nombre: "Brady",
    apellido: "Burgess",
    direccion: "Apdo.:912-3139 Ante C.",
    activo: 82,
    telefonos: [
        {
            codigo_area: 937,
            nro_telefono: 4981317,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 29,
    nombre: "Oscar",
    apellido: "Merrill",
    direccion: "Apdo.:341-991 Parturient ",
    activo: 2,
    telefonos: [
        {
            codigo_area: 744,
            nro_telefono: 4216131,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 30,
    nombre: "Constance",
    apellido: "Sweeney",
    direccion: "Apartado núm.: 158, 9519 Tincidunt Avenida",
    activo: 92,
    telefonos: [
        {
            codigo_area: 225,
            nro_telefono: 4958119,
            tipo: "F"
        },
        {
            codigo_area: 425,
            nro_telefono: 4989475,
            tipo: "F"
        },
        {
            codigo_area: 826,
            nro_telefono: 4499636,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 31,
    nombre: "Jescie",
    apellido: "Wong",
    direccion: "Apartado núm.: 467, 878 Id, Avenida",
    activo: 40
});
db.cliente.insertOne({
    _id: 32,
    nombre: "Jade",
    apellido: "Garrison",
    direccion: "6341 Sit C.",
    activo: 11,
    telefonos: [
        {
            codigo_area: 122,
            nro_telefono: 4287757,
            tipo: "M"
        },
        {
            codigo_area: 242,
            nro_telefono: 4474281,
            tipo: "M"
        },
        {
            codigo_area: 598,
            nro_telefono: 4922572,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 33,
    nombre: "Cameran",
    apellido: "Levine",
    direccion: "Apartado núm.: 187, 2941 Eu C.",
    activo: 1,
    telefonos: [
        {
            codigo_area: 845,
            nro_telefono: 4727859,
            tipo: "F"
        },
        {
            codigo_area: 934,
            nro_telefono: 4691792,
            tipo: "F"
        },
        {
            codigo_area: 947,
            nro_telefono: 4359678,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 34,
    nombre: "Alexandra",
    apellido: "Noel",
    direccion: "Apartado núm.: 664, 2069 A, Av.",
    activo: 81,
    telefonos: [
        {
            codigo_area: 391,
            nro_telefono: 4959995,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 35,
    nombre: "Melissa",
    apellido: "Mccormick",
    direccion: "8306 Quisque Avda.",
    activo: 59,
    telefonos: [
        {
            codigo_area: 133,
            nro_telefono: 4821891,
            tipo: "F"
        },
        {
            codigo_area: 766,
            nro_telefono: 4997692,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 36,
    nombre: "Kelsie",
    apellido: "Oneill",
    direccion: "6019 Mauris, Carretera",
    activo: 124
});
db.cliente.insertOne({
    _id: 37,
    nombre: "Chandler",
    apellido: "Parrish",
    direccion: "Apdo.:527-3025 A Av.",
    activo: 15,
    telefonos: [
        {
            codigo_area: 138,
            nro_telefono: 4743285,
            tipo: "F"
        },
        {
            codigo_area: 243,
            nro_telefono: 4514757,
            tipo: "F"
        },
        {
            codigo_area: 714,
            nro_telefono: 4688314,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 38,
    nombre: "Hayes",
    apellido: "Pollard",
    direccion: "398-1678 Mattis. C.",
    activo: 116,
    telefonos: [
        {
            codigo_area: 156,
            nro_telefono: 4918587,
            tipo: "M"
        },
        {
            codigo_area: 625,
            nro_telefono: 4232149,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 39,
    nombre: "Anthony",
    apellido: "Rose",
    direccion: "412-4773 Interdum Ctra.",
    activo: 57
});
db.cliente.insertOne({
    _id: 40,
    nombre: "Whoopi",
    apellido: "Herring",
    direccion: "869 Quisque C.",
    activo: 86,
    telefonos: [
        {
            codigo_area: 181,
            nro_telefono: 4416386,
            tipo: "M"
        },
        {
            codigo_area: 584,
            nro_telefono: 4239611,
            tipo: "F"
        },
        {
            codigo_area: 644,
            nro_telefono: 4862538,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 41,
    nombre: "Maryam",
    apellido: "Miranda",
    direccion: "Apdo.:866-8040 Integer Calle",
    activo: 57,
    telefonos: [
        {
            codigo_area: 425,
            nro_telefono: 4866573,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 42,
    nombre: "Linus",
    apellido: "Potts",
    direccion: "Apdo.:858-6434 Luctus. Calle",
    activo: 49,
    telefonos: [
        {
            codigo_area: 193,
            nro_telefono: 4625992,
            tipo: "F"
        },
        {
            codigo_area: 296,
            nro_telefono: 4416716,
            tipo: "F"
        },
        {
            codigo_area: 712,
            nro_telefono: 4261611,
            tipo: "F"
        },
        {
            codigo_area: 734,
            nro_telefono: 4591721,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 43,
    nombre: "Chancellor",
    apellido: "Roy",
    direccion: "Apartado núm.: 584, 2262 Malesuada ",
    activo: 56,
    telefonos: [
        {
            codigo_area: 567,
            nro_telefono: 4226771,
            tipo: "F"
        },
        {
            codigo_area: 895,
            nro_telefono: 4647454,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 44,
    nombre: "Lana",
    apellido: "Gallagher",
    direccion: "Apdo.:446-7104 Lectus Avenida",
    activo: 29,
    telefonos: [
        {
            codigo_area: 764,
            nro_telefono: 4351784,
            tipo: "F"
        },
        {
            codigo_area: 843,
            nro_telefono: 4442328,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 45,
    nombre: "Azalia",
    apellido: "Tyson",
    direccion: "205-2990 Quam C.",
    activo: 16,
    telefonos: [
        {
            codigo_area: 537,
            nro_telefono: 4712565,
            tipo: "F"
        },
        {
            codigo_area: 658,
            nro_telefono: 4676748,
            tipo: "F"
        },
        {
            codigo_area: 767,
            nro_telefono: 4198968,
            tipo: "M"
        },
        {
            codigo_area: 776,
            nro_telefono: 4156887,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 46,
    nombre: "Suki",
    apellido: "Copeland",
    direccion: "Apdo.:427-9736 Integer Calle",
    activo: 107,
    telefonos: [
        {
            codigo_area: 933,
            nro_telefono: 4245265,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 47,
    nombre: "Zorita",
    apellido: "Campbell",
    direccion: "576-8561 Quis Ctra.",
    activo: 83,
    telefonos: [
        {
            codigo_area: 779,
            nro_telefono: 4916857,
            tipo: "M"
        },
        {
            codigo_area: 781,
            nro_telefono: 4872881,
            tipo: "F"
        },
        {
            codigo_area: 984,
            nro_telefono: 4518627,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 48,
    nombre: "Uriah",
    apellido: "Morton",
    direccion: "853-9564 Eu C/",
    activo: 82,
    telefonos: [
        {
            codigo_area: 239,
            nro_telefono: 4889238,
            tipo: "F"
        },
        {
            codigo_area: 321,
            nro_telefono: 4112993,
            tipo: "M"
        },
        {
            codigo_area: 352,
            nro_telefono: 4261374,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 49,
    nombre: "Jescie",
    apellido: "Daugherty",
    direccion: "788-9186 Mattis C/",
    activo: 55,
    telefonos: [
        {
            codigo_area: 372,
            nro_telefono: 4533785,
            tipo: "M"
        },
        {
            codigo_area: 526,
            nro_telefono: 4493917,
            tipo: "M"
        },
        {
            codigo_area: 664,
            nro_telefono: 4892549,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 50,
    nombre: "Charde",
    apellido: "Kinney",
    direccion: "7770 Pharetra. Avenida",
    activo: 39,
    telefonos: [
        {
            codigo_area: 336,
            nro_telefono: 4746844,
            tipo: "F"
        },
        {
            codigo_area: 376,
            nro_telefono: 4692515,
            tipo: "M"
        },
        {
            codigo_area: 571,
            nro_telefono: 4162696,
            tipo: "F"
        },
        {
            codigo_area: 656,
            nro_telefono: 4537796,
            tipo: "F"
        },
        {
            codigo_area: 666,
            nro_telefono: 4714359,
            tipo: "F"
        },
        {
            codigo_area: 678,
            nro_telefono: 4316261,
            tipo: "M"
        },
        {
            codigo_area: 798,
            nro_telefono: 4342943,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 51,
    nombre: "Candice",
    apellido: "Ramos",
    direccion: "Apartado núm.: 247, 103 Neque Avda.",
    activo: 52,
    telefonos: [
        {
            codigo_area: 551,
            nro_telefono: 4538279,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 52,
    nombre: "Wanda",
    apellido: "Baker",
    direccion: "4394 Faucibus Calle",
    activo: 44,
    telefonos: [
        {
            codigo_area: 313,
            nro_telefono: 4578765,
            tipo: "F"
        },
        {
            codigo_area: 593,
            nro_telefono: 4118559,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 53,
    nombre: "Quyn",
    apellido: "Bernard",
    direccion: "4923 Suscipit C.",
    activo: 27
});
db.cliente.insertOne({
    _id: 54,
    nombre: "Laura",
    apellido: "Norton",
    direccion: "Apartado núm.: 940, 3935 Pede. ",
    activo: 99,
    telefonos: [
        {
            codigo_area: 917,
            nro_telefono: 4586231,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 55,
    nombre: "Camden",
    apellido: "Casey",
    direccion: "4816 Magna Ctra.",
    activo: 52,
    telefonos: [
        {
            codigo_area: 954,
            nro_telefono: 4519446,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 56,
    nombre: "Darius",
    apellido: "Myers",
    direccion: "6187 Eu, Ctra.",
    activo: 15,
    telefonos: [
        {
            codigo_area: 653,
            nro_telefono: 4836337,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 57,
    nombre: "Cecilia",
    apellido: "Morgan",
    direccion: "250-9117 Amet C/",
    activo: 45,
    telefonos: [
        {
            codigo_area: 145,
            nro_telefono: 4353693,
            tipo: "F"
        },
        {
            codigo_area: 158,
            nro_telefono: 4478676,
            tipo: "F"
        },
        {
            codigo_area: 297,
            nro_telefono: 4129464,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 58,
    nombre: "Kaye",
    apellido: "Stokes",
    direccion: "Apdo.:227-9814 Natoque Carretera",
    activo: 27,
    telefonos: [
        {
            codigo_area: 428,
            nro_telefono: 4354331,
            tipo: "M"
        },
        {
            codigo_area: 684,
            nro_telefono: 4541672,
            tipo: "M"
        },
        {
            codigo_area: 776,
            nro_telefono: 4552842,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 59,
    nombre: "Rebekah",
    apellido: "Cooke",
    direccion: "795-1037 Est Carretera",
    activo: 53,
    telefonos: [
        {
            codigo_area: 446,
            nro_telefono: 4677526,
            tipo: "M"
        },
        {
            codigo_area: 756,
            nro_telefono: 4646842,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 60,
    nombre: "Willow",
    apellido: "Herman",
    direccion: "156-7871 Mauris Av.",
    activo: 96
});
db.cliente.insertOne({
    _id: 61,
    nombre: "Tanya",
    apellido: "Reynolds",
    direccion: "Apdo.:930-5715 Pede C/",
    activo: 125
});
db.cliente.insertOne({
    _id: 62,
    nombre: "Ursula",
    apellido: "Pollard",
    direccion: "971-7618 Tristique Carretera",
    activo: 118,
    telefonos: [
        {
            codigo_area: 442,
            nro_telefono: 4761113,
            tipo: "F"
        },
        {
            codigo_area: 629,
            nro_telefono: 4143491,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 63,
    nombre: "Uriel",
    apellido: "Lancaster",
    direccion: "Apdo.:954-3051 Scelerisque Calle",
    activo: 87,
    telefonos: [
        {
            codigo_area: 384,
            nro_telefono: 4181452,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 64,
    nombre: "Cruz",
    apellido: "Meyer",
    direccion: "Apartado núm.: 688, 7346 Sit Avenida",
    activo: 76
});
db.cliente.insertOne({
    _id: 65,
    nombre: "Ciaran",
    apellido: "Langley",
    direccion: "237-1249 Fusce Avenida",
    activo: 37,
    telefonos: [
        {
            codigo_area: 259,
            nro_telefono: 4899357,
            tipo: "M"
        },
        {
            codigo_area: 894,
            nro_telefono: 4313689,
            tipo: "F"
        },
        {
            codigo_area: 911,
            nro_telefono: 4321977,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 66,
    nombre: "Tasha",
    apellido: "Robbins",
    direccion: "Apartado núm.: 283, 4035 Fusce Carretera",
    activo: 105,
    telefonos: [
        {
            codigo_area: 486,
            nro_telefono: 4422312,
            tipo: "M"
        },
        {
            codigo_area: 735,
            nro_telefono: 4972978,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 67,
    nombre: "Regina",
    apellido: "Ray",
    direccion: "Apdo.:734-2550 Tellus Av.",
    activo: 108,
    telefonos: [
        {
            codigo_area: 157,
            nro_telefono: 4932118,
            tipo: "M"
        },
        {
            codigo_area: 349,
            nro_telefono: 4378856,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 68,
    nombre: "Lacota",
    apellido: "Moreno",
    direccion: "Apartado núm.: 600, 6030 Enim Ctra.",
    activo: 22,
    telefonos: [
        {
            codigo_area: 197,
            nro_telefono: 4613123,
            tipo: "M"
        },
        {
            codigo_area: 759,
            nro_telefono: 4378627,
            tipo: "F"
        },
        {
            codigo_area: 979,
            nro_telefono: 4636499,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 69,
    nombre: "Kyla",
    apellido: "Cole",
    direccion: "9401 Ipsum Calle",
    activo: 28,
    telefonos: [
        {
            codigo_area: 296,
            nro_telefono: 4156368,
            tipo: "F"
        },
        {
            codigo_area: 573,
            nro_telefono: 4485686,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 70,
    nombre: "Bianca",
    apellido: "Leblanc",
    direccion: "Apartado núm.: 460, 5129 Nec Avenida",
    activo: 31
});
db.cliente.insertOne({
    _id: 71,
    nombre: "Madonna",
    apellido: "Boyer",
    direccion: "462-8219 Nisl C/",
    activo: 30,
    telefonos: [
        {
            codigo_area: 137,
            nro_telefono: 4926131,
            tipo: "M"
        },
        {
            codigo_area: 138,
            nro_telefono: 4758584,
            tipo: "F"
        },
        {
            codigo_area: 217,
            nro_telefono: 4162838,
            tipo: "F"
        },
        {
            codigo_area: 231,
            nro_telefono: 4534116,
            tipo: "M"
        },
        {
            codigo_area: 599,
            nro_telefono: 4991316,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 72,
    nombre: "Denise",
    apellido: "Clemons",
    direccion: "423-7272 In C.",
    activo: 32,
    telefonos: [
        {
            codigo_area: 474,
            nro_telefono: 4559122,
            tipo: "F"
        },
        {
            codigo_area: 851,
            nro_telefono: 4656916,
            tipo: "F"
        },
        {
            codigo_area: 946,
            nro_telefono: 4197417,
            tipo: "M"
        },
        {
            codigo_area: 969,
            nro_telefono: 4274567,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 73,
    nombre: "Guy",
    apellido: "Bishop",
    direccion: "406-1968 Nulla Av.",
    activo: 22
});
db.cliente.insertOne({
    _id: 74,
    nombre: "Lamar",
    apellido: "Moss",
    direccion: "Apdo.:668-1924 Facilisis Avda.",
    activo: 69,
    telefonos: [
        {
            codigo_area: 554,
            nro_telefono: 4199695,
            tipo: "F"
        },
        {
            codigo_area: 657,
            nro_telefono: 4771494,
            tipo: "M"
        },
        {
            codigo_area: 863,
            nro_telefono: 4238232,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 75,
    nombre: "Eagan",
    apellido: "Grimes",
    direccion: "134-3109 Dapibus Calle",
    activo: 98,
    telefonos: [
        {
            codigo_area: 265,
            nro_telefono: 4781126,
            tipo: "F"
        },
        {
            codigo_area: 632,
            nro_telefono: 4417171,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 76,
    nombre: "Lucas",
    apellido: "Francis",
    direccion: "929-594 Velit. Avda.",
    activo: 28,
    telefonos: [
        {
            codigo_area: 553,
            nro_telefono: 4775218,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 77,
    nombre: "Regan",
    apellido: "Schroeder",
    direccion: "487-8680 Neque. C/",
    activo: 39,
    telefonos: [
        {
            codigo_area: 299,
            nro_telefono: 4757249,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 78,
    nombre: "Sloane",
    apellido: "Page",
    direccion: "Apdo.:220-6833 Tellus. Av.",
    activo: 120,
    telefonos: [
        {
            codigo_area: 616,
            nro_telefono: 4675556,
            tipo: "M"
        },
        {
            codigo_area: 763,
            nro_telefono: 4564169,
            tipo: "M"
        },
        {
            codigo_area: 852,
            nro_telefono: 4397237,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 79,
    nombre: "Maxine",
    apellido: "Harris",
    direccion: "828-978 Ante Ctra.",
    activo: 57,
    telefonos: [
        {
            codigo_area: 552,
            nro_telefono: 4966767,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 80,
    nombre: "Baker",
    apellido: "Rose",
    direccion: "Apartado núm.: 620, 5382 Vel Av.",
    activo: 30,
    telefonos: [
        {
            codigo_area: 262,
            nro_telefono: 4939382,
            tipo: "F"
        },
        {
            codigo_area: 512,
            nro_telefono: 4485361,
            tipo: "F"
        },
        {
            codigo_area: 795,
            nro_telefono: 4263523,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 81,
    nombre: "Hu",
    apellido: "Oconnor",
    direccion: "Apartado núm.: 800, 9095 Ipsum. Ctra.",
    activo: 10,
    telefonos: [
        {
            codigo_area: 274,
            nro_telefono: 4415128,
            tipo: "M"
        },
        {
            codigo_area: 321,
            nro_telefono: 4462991,
            tipo: "F"
        },
        {
            codigo_area: 354,
            nro_telefono: 4678235,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 82,
    nombre: "Faith",
    apellido: "Sutton",
    direccion: "365-1827 Nisi Avda.",
    activo: 53,
    telefonos: [
        {
            codigo_area: 488,
            nro_telefono: 4358671,
            tipo: "F"
        },
        {
            codigo_area: 899,
            nro_telefono: 4286564,
            tipo: "M"
        },
        {
            codigo_area: 998,
            nro_telefono: 4666428,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 83,
    nombre: "Shay",
    apellido: "Pugh",
    direccion: "Apartado núm.: 464, 5199 Ut Avenida",
    activo: 99,
    telefonos: [
        {
            codigo_area: 514,
            nro_telefono: 4382972,
            tipo: "M"
        },
        {
            codigo_area: 734,
            nro_telefono: 4944866,
            tipo: "F"
        },
        {
            codigo_area: 746,
            nro_telefono: 4933916,
            tipo: "F"
        },
        {
            codigo_area: 795,
            nro_telefono: 4344723,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 84,
    nombre: "Samantha",
    apellido: "Savage",
    direccion: "5832 Cursus C/",
    activo: 21,
    telefonos: [
        {
            codigo_area: 126,
            nro_telefono: 4187431,
            tipo: "F"
        },
        {
            codigo_area: 247,
            nro_telefono: 4935945,
            tipo: "M"
        },
        {
            codigo_area: 928,
            nro_telefono: 4291373,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 85,
    nombre: "Kiara",
    apellido: "Bond",
    direccion: "472-1379 Eu Avenida",
    activo: 30,
    telefonos: [
        {
            codigo_area: 482,
            nro_telefono: 4246154,
            tipo: "F"
        },
        {
            codigo_area: 526,
            nro_telefono: 4718687,
            tipo: "M"
        },
        {
            codigo_area: 696,
            nro_telefono: 4665156,
            tipo: "M"
        },
        {
            codigo_area: 968,
            nro_telefono: 4157791,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 86,
    nombre: "Lavinia",
    apellido: "Moreno",
    direccion: "Apartado núm.: 589, 8697 Lobortis Ctra.",
    activo: 111,
    telefonos: [
        {
            codigo_area: 853,
            nro_telefono: 4172432,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 87,
    nombre: "India",
    apellido: "Henson",
    direccion: "Apartado núm.: 206, 8992 Posuere C.",
    activo: 77
});
db.cliente.insertOne({
    _id: 88,
    nombre: "Francis",
    apellido: "Barker",
    direccion: "1672 Eu, Carretera",
    activo: 59,
    telefonos: [
        {
            codigo_area: 762,
            nro_telefono: 4729149,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 89,
    nombre: "Ethan",
    apellido: "Berger",
    direccion: "Apdo.:262-2625 Et ",
    activo: 123,
    telefonos: [
        {
            codigo_area: 372,
            nro_telefono: 4378524,
            tipo: "F"
        },
        {
            codigo_area: 582,
            nro_telefono: 4746594,
            tipo: "M"
        },
        {
            codigo_area: 625,
            nro_telefono: 4158832,
            tipo: "F"
        },
        {
            codigo_area: 862,
            nro_telefono: 4435268,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 90,
    nombre: "Nomlanga",
    apellido: "Holloway",
    direccion: "501-9999 A, Carretera",
    activo: 105,
    telefonos: [
        {
            codigo_area: 452,
            nro_telefono: 4314839,
            tipo: "F"
        },
        {
            codigo_area: 927,
            nro_telefono: 4195735,
            tipo: "M"
        },
        {
            codigo_area: 975,
            nro_telefono: 4487148,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 91,
    nombre: "Amber",
    apellido: "Vance",
    direccion: "5315 Orci Avenida",
    activo: 82
});
db.cliente.insertOne({
    _id: 92,
    nombre: "Keegan",
    apellido: "Clarke",
    direccion: "Apdo.:397-2306 Id, Av.",
    activo: 88,
    telefonos: [
        {
            codigo_area: 373,
            nro_telefono: 4467598,
            tipo: "F"
        },
        {
            codigo_area: 457,
            nro_telefono: 4916552,
            tipo: "F"
        },
        {
            codigo_area: 853,
            nro_telefono: 4813291,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 93,
    nombre: "Julie",
    apellido: "Meyers",
    direccion: "1677 Ut ",
    activo: 32
});
db.cliente.insertOne({
    _id: 94,
    nombre: "Eric",
    apellido: "Randolph",
    direccion: "9204 Eget, C.",
    activo: 46,
    telefonos: [
        {
            codigo_area: 363,
            nro_telefono: 4468473,
            tipo: "F"
        },
        {
            codigo_area: 416,
            nro_telefono: 4545544,
            tipo: "F"
        },
        {
            codigo_area: 862,
            nro_telefono: 4694486,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 95,
    nombre: "Solomon",
    apellido: "Bray",
    direccion: "9193 Aptent Avenida",
    activo: 94
});
db.cliente.insertOne({
    _id: 96,
    nombre: "Preston",
    apellido: "Kline",
    direccion: "Apartado núm.: 358, 5322 Dui Avda.",
    activo: 49,
    telefonos: [
        {
            codigo_area: 294,
            nro_telefono: 4421132,
            tipo: "M"
        },
        {
            codigo_area: 327,
            nro_telefono: 4717284,
            tipo: "F"
        },
        {
            codigo_area: 831,
            nro_telefono: 4689194,
            tipo: "M"
        },
        {
            codigo_area: 986,
            nro_telefono: 4434797,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 97,
    nombre: "Zelda",
    apellido: "Crane",
    direccion: "Apdo.:162-8232 Lorem, Carretera",
    activo: 74,
    telefonos: [
        {
            codigo_area: 781,
            nro_telefono: 4841797,
            tipo: "M"
        }
    ]
});
db.cliente.insertOne({
    _id: 98,
    nombre: "Damian",
    apellido: "Franks",
    direccion: "463-6856 Laoreet Avenida",
    activo: 70,
    telefonos: [
        {
            codigo_area: 725,
            nro_telefono: 4164426,
            tipo: "F"
        },
        {
            codigo_area: 853,
            nro_telefono: 4842285,
            tipo: "F"
        },
        {
            codigo_area: 887,
            nro_telefono: 4755325,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 99,
    nombre: "Brynn",
    apellido: "Ryan",
    direccion: "Apartado núm.: 374, 6790 Aliquet, C.",
    activo: 63,
    telefonos: [
        {
            codigo_area: 394,
            nro_telefono: 4617197,
            tipo: "F"
        }
    ]
});
db.cliente.insertOne({
    _id: 100,
    nombre: "Claudia",
    apellido: "Haynes",
    direccion: "Apartado núm.: 814, 6830 Orci. Avenida",
    activo: 77,
    telefonos: [
        {
            codigo_area: 672,
            nro_telefono: 4391936,
            tipo: "F"
        },
        {
            codigo_area: 758,
            nro_telefono: 4132279,
            tipo: "M"
        }
    ]
});
