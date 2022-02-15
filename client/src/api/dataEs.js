import adzuki from "../assets/images/Productos/adzuki-samal.jpg";
import alubia from "../assets/images/Productos/alubia-samal.jpg";
import arveja from "../assets/images/Productos/arveja-samal.jpg";
import coriandro from "../assets/images/Productos/coriandro-samal.jpg";
import cranberry from "../assets/images/Productos/cranberry-samal.jpg";
import drk from "../assets/images/Productos/drk-samal.jpg";
import garbanzo from "../assets/images/Productos/garbanzo-samal.jpg";
import lrk from "../assets/images/Productos/lrk-samal.jpg";
import mung from "../assets/images/Productos/mung-samal.jpg";
import negro from "../assets/images/Productos/negro-samal.jpg";
import pisingallo from "../assets/images/Productos/pisingallo-samal.jpg";
import sesamo from "../assets/images/Productos/sesamo-samal.jpg";
//gifs
import qq from "../assets/gifs/cantidadcalidad.gif";
import eficiency from "../assets/gifs/eficiencia.gif";
import trazability from "../assets/gifs/trazabilidad.gif";

const data = {
  proposes: [
    {
      title: "CANTIDAD-CALIDAD",
      description:
        "Sembramos en diferentes áreas de Argentina ubicadas estratégicamente, atomizando los riesgos productivos, garantizando cantidad y calidad en cada producto.",
      thumbnail: `${qq}`,
    },
    {
      title: "TRAZABILIDAD",
      description:
        "Contamos con un equipo técnico de ingenieros, con conocimientos específicos que participan en toda la cadena de valor, garantizando un estricto control de trazabilidad.",
      thumbnail: `${trazability}`,
    },
    {
      title: "EFICIENCIA",
      description:
        "Contamos con un departamento de comercio exterior que da respuestas a las necesidades documentales de cada pais.",
      thumbnail: `${eficiency}`,
    },
  ],
  products: [
    {
      title: "MUNG VERDE",
      description: {
        quality: "N° 1 | Procesamiento | Fabricación",
        availability: "Marzo a Julio",
        packaging: "25Kg. Polipropileno",
        quality_standard: "HACCP; BPM",
        thumbnail: `${mung}`,
      },
    },
    {
      title: "ADZUKI",
      description: {
        quality: "4mm up",
        availability: "Abril a Julio",
        packaging: "25kg. Polipropileno",
        quality_standard: "HACCP; BPM",
        thumbnail: `${adzuki}`,
      },
    },
    {
      title: "ALUBIA",
      description: {
        quality: "Gje. 180/11/ a 240/100",
        availability: "Marzo a Julio",
        packaging: "25kg. Polipropileno",
        quality_standard: "HCCP;BPM",
        thumbnail: `${alubia}`,
      },
    },
    {
      title: "CORIANDO",
      description: {
        quality: "99% pureza 3% partido",
        availability: "Noviembre a Enero",
        packaging: "25kg. Polipropileno",
        quality_standard: "HACCP;BPM",
        thumbnail: `${coriandro}`,
      },
    },
    {
      title: "GARBANZO",
      description: {
        quality: "7mm | 8mm | 9mm",
        availability: "Noviembre a Enero",
        packaging: "25kg. Polipropileno",
        quality_standard: "HACCP;BPM",
        thumbnail: `${garbanzo}`,
      },
    },
    {
      title: "CRANBERRY",
      description: {
        quality: "Gje. 180/100 a 240/100",
        availability: "Mayo a Julio",
        packaging: "25kg. Polipropileno",
        quality_standard: "HACCP;BPM",
        thumbnail: `${cranberry}`,
      },
    },
    {
      title: "NEGRO",
      description: {
        quality: "4mm up",
        availability: "Junio a Julio",
        packaging: "25kg. Polipropileno",
        quality_standard: "HACCP;BPM",
        thumbnail: `${negro}`,
      },
    },
    {
      title: "RED LIGHT KIDNEY",
      description: {
        quality: "Gje. 180/100 a 240/100",
        availability: "Junio a Julio",
        packaging: "25kg. Polipropileno",
        quality_standard: "HACCP;BPM",
        thumbnail: `${lrk}`,
      },
    },
    {
      title: "SÉSAMO",
      description: {
        quality: "Acidez 2% máximo",
        availability: "Junio a Julio",
        packaging: "25kg. Polipropileno",
        quality_standard: "HACCP;BPM",
        thumbnail: `${sesamo}`,
      },
    },
    {
      title: "RED DARK",
      description: {
        quality: "Gje. 180/100 a 240/100",
        availability: "Junio a Julio",
        packaging: "25kg. Polipropileno",
        quality_standard: "HACCP;BPM",
        thumbnail: `${drk}`,
      },
    },
    {
      title: "PISINGALLO",
      description: {
        quality: "Expansión 40-42 Explosion 98% | K-10 65",
        availability: "Marzo a Junio",
        packaging: "25kg. Polipapel",
        quality_standard: "HACCP;BPM",
        thumbnail: `${pisingallo}`,
      },
    },
    {
      title: "ARVEJA",
      description: {
        quality: "5mm up",
        availability: "Diciembre a Enero",
        packaging: "25kg. Polipropileno",
        quality_standard: "HACCP;BPM",
        thumbnail: `${arveja}`,
      },
    },
  ],
  scope: [
    {
      id: 0,
      title: "AMÉRICA DEL NORTE",
      countries: [
        {
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
      countries: [
        {
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
      countries: [
        {
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
      countries: [
        {
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
      countries: [
        {
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
      countries: [
        {
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
