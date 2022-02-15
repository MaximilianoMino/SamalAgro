//images
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
      title: "QUANTITY-QUALITY",
      description:
        "We plant in diferent strategically located regions of Argentina, atomizing production risks, ensuring quantity and quality in each product.",
      thumbnail: `${qq}`,
    },
    {
      title: "TRACEABILITY",
      description:
        "We have a team of engineers with specific knowledge who participate in the entire value chain, ensuring strict traceability control.",
      thumbnail: `${trazability}`,
    },
    {
      title: "EFFICENCY",
      description:
        "We have a Foreign Trade Departament that responds to the documentary needs of each country.",
      thumbnail: `${eficiency}`,
    },
  ],
  products: [
    {
      title: "GREEN MUNG BEAN",
      description: {
        quality: "N° 1 | Processing | Manufacturing",
        availability: "March to July",
        packaging: "25Kg. Polypropylene New Bags",
        quality_standard: "HACCP; BPM",
        thumbnail: `${mung}`,
      },
    },
    {
      title: "ADZUKI BEAN",
      description: {
        quality: "4mm up",
        availability: "April to July",
        packaging: "25kg. Polypropylene New Bags",
        quality_standard: "HACCP; BPM",
        thumbnail: `${adzuki}`,
      },
    },
    {
      title: "ALUBIA BEAN",
      description: {
        quality: "Caliber 180/100 to 240/100",
        availability: "June-July",
        packaging: "25kg. Polypropylene New Bags",
        quality_standard: "HCCP;BPM",
        thumbnail: `${alubia}`,
      },
    },
    {
      title: "CORIANDER",
      description: {
        quality: "99% purity 3% split",
        availability: "November to January",
        packaging: "25kg. Polypropylene New Bags",
        quality_standard: "HACCP;BPM",
        thumbnail: `${coriandro}`,
      },
    },
    {
      title: "CHEAKPEAS",
      description: {
        quality: "7mm | 8mm | 9mm",
        availability: "November to January",
        packaging: "25kg. Polypropylene New Bags",
        quality_standard: "HACCP;BPM",
        thumbnail: `${garbanzo}`,
      },
    },
    {
      title: "CRANBERRY BEANS",
      description: {
        quality: "Caliber 180/100 a 240/100",
        availability: "May to July",
        packaging: "25kg. Polypropylene New Bags",
        quality_standard: "HACCP;BPM",
        thumbnail: `${cranberry}`,
      },
    },
    {
      title: "BLACK BEAN",
      description: {
        quality: "4mm up",
        availability: "June to July",
        packaging: "25kg. Polypropylene New Bags",
        quality_standard: "HACCP;BPM",
        thumbnail: `${negro}`,
      },
    },
    {
      title: "LIGHT RED KIDNEY",
      description: {
        quality: "Gje. 180/100 a 240/100",
        availability: "June to August",
        packaging: "25kg. Polypropylene New Bags",
        quality_standard: "HACCP;BPM",
        thumbnail: `${lrk}`,
      },
    },
    {
      title: "SESAME",
      description: {
        quality: "Acidity 0,5% max / oil 40% min",
        availability: "June to July",
        packaging: "25kg. Polypropylene New Bags",
        quality_standard: "HACCP;BPM",
        thumbnail: `${sesamo}`,
      },
    },
    {
      title: "DARK RED KIDNEY",
      description: {
        quality: "Gje. 180/100 a 240/100",
        availability: "June to July",
        packaging: "25kg. Polypropylene New Bags",
        quality_standard: "HACCP;BPM",
        thumbnail: `${drk}`,
      },
    },
    {
      title: "POP CORN",
      description: {
        quality: "Expansion 40-42 Explosion 98% | K-10 65",
        availability: "March to June",
        packaging: "25kg. Polypaper New Bags",
        quality_standard: "HACCP;BPM",
        thumbnail: `${pisingallo}`,
      },
    },
    {
      title: "GREEN PEAS",
      description: {
        quality: "5mm up",
        availability: "December to January",
        packaging: "25kg. Polypropylene New Bags",
        quality_standard: "HACCP;BPM",
        thumbnail: `${arveja}`,
      },
    },
  ],
  scope: [
    {
      id: 0,
      title: "NORTH AMERICA",
      countries: [
        {
          country: "U.S.A",
          since: 2018,
          annual_tons: "446,46",
          annual_shipments: 10,
        },
        {
          country: "CANADA",
          since: 2017,
          annual_tons: "424,47",
          annual_shipments: 7,
        },
      ],
    },

    {
      id: 1,

      title: "CENTRAL AMERICA AND CARIBBEAN",
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
          country: "TRINIDAD AND TOBAGO",
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

      title: "SOUTH AMERICA",
      countries: [
        {
          country: "BRAZIL",
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

      title: "EUROPE",
      countries: [
        {
          country: "NETHERLANDS",
          since: 2013,
          annual_tons: "59,42",
          annual_shipments: 2,
        },
        {
          country: "BELGIUM",
          since: 2013,
          annual_tons: "70,84",
          annual_shipments: 2,
        },
        {
          country: "FRANCE",
          since: 2017,
          annual_tons: "71,88",
          annual_shipments: 1,
        },
        {
          country: "UNITED KINGDOM",
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
          country: "ITALY",
          since: 2018,
          annual_tons: "3.668,22",
          annual_shipments: 61,
        },
        {
          country: "SPAIN",
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
          country: "RUSSIA",
          since: 2021,
          annual_tons: "167,77",
          annual_shipments: 2,
        },
        {
          country: "TURKEY",
          since: 2014,
          annual_tons: "2.245,31",
          annual_shipments: 28,
        },
      ],
    },

    {
      id: 4,

      title: "AFRICA",
      countries: [
        {
          country: "KENYA",
          since: 2017,
          annual_tons: "100,69",
          annual_shipments: 1,
        },
        {
          country: "SOUTH AFRICA",
          since: 2017,
          annual_tons: "24,14",
          annual_shipments: 1,
        },
        {
          country: "SAUDI ARABIA",
          since: 2017,
          annual_tons: "649,69",
          annual_shipments: 3,
        },
        {
          country: "ARGELIA",
          since: 2020,
          annual_tons: "718,43",
          annual_shipments: 7,
        },
        {
          country: "TUNISIA",
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
          country: "MALAYSIA",
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
          country: "PHILIPPINES",
          since: 2018,
          annual_tons: "1.079,47",
          annual_shipments: 12,
        },
        {
          country: "CYPRUS",
          since: 2021,
          annual_tons: "71,66",
          annual_shipments: 3,
        },
        {
          country: "THAILAND",
          since: 2020,
          annual_tons: "479,2",
          annual_shipments: 4,
        },
      ],
    },
  ],
};
export default data;
