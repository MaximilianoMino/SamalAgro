
const data = {
    proposes: [{
            title: "CANTIDAD-CALIDAD",
            description: "Sembramos en diferentes áreas de Argentina ubicadas estratégicamente, atomizando los riesgos productivos, garantizando cantidad y calidad en cada producto.",
            thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603479/home/landing/web/cantidadcalidad_hfcylv.gif",
        },
        {
            title: "TRAZABILIDAD",
            description: "Contamos con un equipo técnico de ingenieros, con conocimientos específicos que participan en toda la cadena de valor, garantizando un estricto control de trazabilidad.",
            thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603481/home/landing/web/trazabilidad_iqie5h.gif",
        },
        {
            title: "EFICIENCIA",
            description: "Contamos con un departamento de comercio exterior que da respuestas a las necesidades documentales de cada pais.",
            thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603479/home/landing/web/eficiencia_sd0zhl.gif",
        },
    ],
    products: [{
            title: "MUNG VERDE",
            description: {
                quality: "N° 1 | Processing | Manufacturing",
                availability: "Marzo a Julio",
                packaging: "25Kg. Polipropileno",
                quality_standard: "HACCP; BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603568/home/landing/products/mung-samal_n4g6hu.jpg",
            },
        },
        {
            title: "ADZUKI",
            description: {
                quality: "4mm up",
                availability: "Abril a Julio",
                packaging: "25kg. Polipropileno",
                quality_standard: "HACCP; BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603569/home/landing/products/adzuki-samal_xkn3os.jpg",
            },
        },
        {
            title: "ALUBIA",
            description: {
                quality: "Gje. 180/100 a 240/100",
                availability: "Marzo a Julio",
                packaging: "25kg. Polipropileno",
                quality_standard: "HCCP;BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603568/home/landing/products/alubia-samal_vbqq7t.jpg",
            },
        },
        {
            title: "CORIANDO",
            description: {
                quality: "99% pureza 3% partido",
                availability: "Noviembre a Enero",
                packaging: "25kg. Polipropileno",
                quality_standard: "HACCP;BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603568/home/landing/products/coriandro-samal_i6eq57.jpg",
            },
        },
        {
            title: "GARBANZO",
            description: {
                quality: "7mm | 8mm | 9mm",
                availability: "Noviembre a Enero",
                packaging: "25kg. Polipropileno",
                quality_standard: "HACCP;BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603569/home/landing/products/garbanzo-samal_b9o4ic.jpg",
            },
        },
        {
            title: "CRANBERRY",
            description: {
                quality: "Gje. 180/100 a 240/100",
                availability: "Mayo a Julio",
                packaging: "25kg. Polipropileno",
                quality_standard: "HACCP;BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603568/home/landing/products/cranberry-samal_ik3prx.jpg",
            },
        },
        {
            title: "NEGRO",
            description: {
                quality: "4mm up",
                availability: "Junio a Julio",
                packaging: "25kg. Polipropileno",
                quality_standard: "HACCP;BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603570/home/landing/products/negro-samal_f6dxba.jpg",
            },
        },
        {
            title: "RED LIGHT KIDNEY",
            description: {
                quality: "Gje. 180/100 a 240/100",
                availability: "Junio a Julio",
                packaging: "25kg. Polipropileno",
                quality_standard: "HACCP;BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603569/home/landing/products/lrk-samal_arzavr.jpg",
            },
        },
        {
            title: "SÉSAMO",
            description: {
                quality: "Acidez 2% máximo 99,9% pureza",
                availability: "Junio a Julio",
                packaging: "25kg. Polipropileno",
                quality_standard: "HACCP;BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603570/home/landing/products/sesamo-samal_ikvqht.jpg",
            },
        },
        {
            title: "RED DARK",
            description: {
                quality: "Gje. 180/100 a 240/100",
                availability: "Junio a Julio",
                packaging: "25kg. Polipropileno",
                quality_standard: "HACCP;BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603571/home/landing/products/drk-samal_riak1e.jpg",
            },
        },
        {
            title: "PISINGALLO",
            description: {
                quality: "Expansión 40-42 Explosion 98% | K-10 65",
                availability: "Marzo a Junio",
                packaging: "25kg. Polipapel",
                quality_standard: "HACCP;BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603570/home/landing/products/pisingallo-samal_mqpwse.jpg",
            },
        },
        {
            title: "ARVEJA",
            description: {
                quality: "5mm up",
                availability: "Diciembre a Enero",
                packaging: "25kg. Polipropileno",
                quality_standard: "HACCP;BPM",
                thumbnail: "https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603570/home/landing/products/arveja.samal_w043a9.jpg",
            },
        },
    ],
    scope: [{
            id: 0,
            title: "AMÉRICA DEL NORTE",
            countries: [{
                    country: "EE.UU.",
                    since: 2018,
                    annual_tons: "446,46",
                    annual_shipments: 10,
                },
                {
                    country: "CANADÁ",
                    since: 2017,
                    annual_tons: "424,47",
                    annual_shipments: 7,
                },
            ],
        },

        {
            id: 1,

            title: "CENTROAMÉRICA Y CARIBE",
            countries: [{
                    country: "MÉXICO",
                    since: 2017,
                    annual_tons: "573,07",
                    annual_shipments: 7,
                },
                {
                    country: "HAITÍ",
                    since: 2020,
                    annual_tons: "94,18",
                    annual_shipments: 3,
                },
                {
                    country: "TRINIDAD Y TOBAGO",
                    since: 2021,
                    annual_tons: "47,96",
                    annual_shipments: 2,
                },
                {
                    country: "COSTA RICA",
                    since: 2020,
                    annual_tons: "26",
                    annual_shipments: 1,
                },
            ],
        },

        {
            id: 2,

            title: "AMÉRICA DEL SUR",
            countries: [{
                    country: "BRASIL",
                    since: 2013,
                    annual_tons: "1.532,14",
                    annual_shipments: 32,
                },
                {
                    country: "COLOMBIA",
                    since: 2016,
                    annual_tons: "2.056,16",
                    annual_shipments: 21,
                },
                {
                    country: "PERÚ",
                    since: 2016,
                    annual_tons: "995,21",
                    annual_shipments: 13,
                },
                {
                    country: "CHILE",
                    since: 2016,
                    annual_tons: "616",
                    annual_shipments: 7,
                },
                {
                    country: "ECUADOR",
                    since: 2018,
                    annual_tons: "149,88",
                    annual_shipments: 2,
                },
            ],
        },

        {
            id: 3,

            title: "EUROPA",
            countries: [{
                    country: "PAISES BAJOS",
                    since: 2013,
                    annual_tons: "59,42",
                    annual_shipments: 2,
                },
                {
                    country: "BÉLGICA",
                    since: 2013,
                    annual_tons: "70,84",
                    annual_shipments: 2,
                },
                {
                    country: "FRANCIA",
                    since: 2017,
                    annual_tons: "71,88",
                    annual_shipments: 1,
                },
                {
                    country: "REINO UNIDO",
                    since: 2017,
                    annual_tons: "119,63",
                    annual_shipments: 4,
                },
                {
                    country: "BULGARIA",
                    since: 2017,
                    annual_tons: "260,88",
                    annual_shipments: 4,
                },
                {
                    country: "ITALIA",
                    since: 2018,
                    annual_tons: "3.668,22",
                    annual_shipments: 61,
                },
                {
                    country: "ESPAÑA",
                    since: 2019,
                    annual_tons: "859.96",
                    annual_shipments: 11,
                },
                {
                    country: "PORTUGAL",
                    since: 2020,
                    annual_tons: "239,16",
                    annual_shipments: 1,
                },
                {
                    country: "RUSIA",
                    since: 2021,
                    annual_tons: "167,77",
                    annual_shipments: 2,
                },
                {
                    country: "TURQUÍA",
                    since: 2014,
                    annual_tons: "2.245,31",
                    annual_shipments: 28,
                },
            ],
        },

        {
            id: 4,

            title: "ÁFRICA",
            countries: [{
                    country: "KENIA",
                    since: 2017,
                    annual_tons: "100,69",
                    annual_shipments: 1,
                },
                {
                    country: "SUDÁFRICA",
                    since: 2017,
                    annual_tons: "24,14",
                    annual_shipments: 1,
                },
                {
                    country: "ARABIA SAUDITA",
                    since: 2017,
                    annual_tons: "647,69",
                    annual_shipments: 3,
                },
                {
                    country: "ARGELIA",
                    since: 2020,
                    annual_tons: "718,43",
                    annual_shipments: 7,
                },
                {
                    country: "TUNEZ",
                    since: 2016,
                    annual_tons: "168",
                    annual_shipments: 4,
                },
            ],
        },

        {
            id: 5,

            title: "ASIA",
            countries: [{
                    country: "INDIA",
                    since: 2013,
                    annual_tons: "5.234,12",
                    annual_shipments: 48,
                },
                {
                    country: "VIETNAM",
                    since: 2014,
                    annual_tons: "9.700,56",
                    annual_shipments: 60,
                },
                {
                    country: "MALASIA",
                    since: 2015,
                    annual_tons: "5.670,97",
                    annual_shipments: 140,
                },
                {
                    country: "NEPAL",
                    since: 2015,
                    annual_tons: "130",
                    annual_shipments: 1,
                },
                {
                    country: "TAIWAN",
                    since: 2016,
                    annual_tons: "1.216,55",
                    annual_shipments: 13,
                },
                {
                    country: "ISRAEL",
                    since: 2017,
                    annual_tons: "934,55",
                    annual_shipments: 15,
                },
                {
                    country: "PAKISTAN",
                    since: 2017,
                    annual_tons: "1.053,16",
                    annual_shipments: 22,
                },
                {
                    country: "SRI LANKA",
                    since: 2017,
                    annual_tons: "998,51",
                    annual_shipments: 15,
                },
                {
                    country: "FILIPINAS",
                    since: 2018,
                    annual_tons: "1.079,47",
                    annual_shipments: 12,
                },
                {
                    country: "CHIPRE",
                    since: 2021,
                    annual_tons: "71,66",
                    annual_shipments: 3,
                },
                {
                    country: "TAILANDIA",
                    since: 2020,
                    annual_tons: "479,2",
                    annual_shipments: 4,
                },
            ],
        },
    ],
};

export default data;