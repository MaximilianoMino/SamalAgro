import React from "react";
import { Section, Row, Text, Column, Link, Img } from "@react-email/components";

const EmailTemplate = ({ formData }) => {
  const titleReg = formData.province
    ? "Ventas"
    : formData.destinity_country
      ? "Compra"
      : "Consulta";

  return (
   <> {/* 
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: 24,
          height: 90,
          marginBottom: 40,
        }}
      >
        <img
          style={{
            top: 0,
            position: "absolute",
            width: "100%",
            height: 90,
          }}
          src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686661207/home/landing/web/campo_n2vwdp.jpg"
        />
        <img
          style={{ width: 150, height: 36, marginLeft: 30 }}
          src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1687046049/home/landing/web/SamalAgroLogoB_w4nvuc.png"
        />
        <div
          style={{
            display: "flex",
            color: "#fff",
            flexDirection: "column",
            alignItems: "flex-start",
            marginRight: 30,
          }}
        >
          <p
            style={{
              fontSize: 10,
              color: "#fff",
              fontWeight: 700,
            }}
          >
            Usuario: {formData.email}
          </p>
          <p
            style={{
              fontSize: 10,
              color: "#fff",
              fontWeight: 700,
            }}
          >
            Fecha: {new Date().toLocaleDateString()}
          </p>
        </div>
        <p
          style={{
            fontFamily: "Helvetica-Bold",
            fontSize: 18,
            position: "absolute",
            top: 60,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "#fff",
          }}
        >
          Reporte de Formulario de {titleReg}
        </p>
      </div>

      <div>
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: 16,
            marginBottom: 30,
            left: 0,
            paddingLeft: 80,
            paddingTop: 5,
            paddingBottom: 5,
            color: "#fff",
            minWidth: "100vh",
            backgroundColor: "#C6261E",
          }}
        >
          Información del Cliente:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 30,
            marginLeft: 80,
            marginRight: 80,
            borderBottom: "1px solid #C4C4C4",
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontFamily: "Helvetica-Bold",
            }}
          >
            Fecha:
          </p>{" "}
          <p
            style={{
              fontSize: 12,
            }}
          >
            {new Date().toLocaleDateString()}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 30,
            marginLeft: 80,
            marginRight: 80,
            borderBottom: "1px solid #C4C4C4",
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontFamily: "Helvetica-Bold",
            }}
          >
            Nombre:
          </p>{" "}
          <p
            style={{
              fontSize: 12,
            }}
          >
            {formData.fullname}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 30,
            marginLeft: 80,
            marginRight: 80,
            borderBottom: "1px solid #C4C4C4",
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontFamily: "Helvetica-Bold",
            }}
          >
            Email:
          </p>
          <p
            style={{
              fontSize: 12,
            }}
          >
            {formData.email}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 30,
            marginLeft: 80,
            marginRight: 80,
            borderBottom: "1px solid #C4C4C4",
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontFamily: "Helvetica-Bold",
            }}
          >
            Compañía:
          </p>{" "}
          <p
            style={{
              fontSize: 12,
            }}
          >
            {formData.company}
          </p>
        </div>
        {formData.company_origen && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 30,
              marginLeft: 80,
              marginRight: 80,
              borderBottom: "1px solid #C4C4C4",
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontFamily: "Helvetica-Bold",
              }}
            >
              País de origen de la Compañía:
            </p>
            <p style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <img
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                }}
                src={formData.company_origen.flag}
              />
              <p
                style={{
                  fontSize: 12,
                }}
              >
                {formData.company_origen.label}
              </p>
            </p>
          </div>
        )}
        {formData.destinity_country && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 30,
              marginLeft: 80,
              marginRight: 80,
              borderBottom: "1px solid #C4C4C4",
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontFamily: "Helvetica-Bold",
              }}
            >
              País de destino:
            </p>
            <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <img
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                }}
                src={formData.destinity_country.flag}
              />
              <p
                style={{
                  fontSize: 12,
                }}
              >
                {formData.destinity_country.label}
              </p>
            </div>
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 30,
            marginLeft: 80,
            marginRight: 80,
            borderBottom: "1px solid #C4C4C4",
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontFamily: "Helvetica-Bold",
            }}
          >
            Número de Teléfono:
          </p>{" "}
          <p
            style={{
              fontSize: 12,
            }}
          >
            +{formData.phone}
          </p>
        </div>

        {formData.province && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 30,
              marginLeft: 80,
              marginRight: 80,
              borderBottom: "1px solid #C4C4C4",
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontFamily: "Helvetica-Bold",
              }}
            >
              Provincia:
            </p>
            <p
              style={{
                fontSize: 12,
              }}
            >
              {formData.province}
            </p>
          </div>
        )}

        {formData.Product && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 30,
              marginLeft: 80,
              marginRight: 80,
              borderBottom: "1px solid #C4C4C4",
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontFamily: "Helvetica-Bold",
              }}
            >
              Producto a Vender:
            </p>{" "}
            <p
              style={{
                fontSize: 12,
              }}
            >
              {formData.Product.label}
            </p>
          </div>
        )}
        {formData.description !== "" && (
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              paddingTop: 5,
              paddingBottom: 5,
              marginLeft: 80,
              marginRight: 80,
              borderBottom: "1px solid #C4C4C4",
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontFamily: "Helvetica-Bold",
              }}
            >
              Otra Descripción:
            </p>{" "}
            <p style={{ fontSize: 12, maxWidth: "80%" }}>
              {formData.description}
            </p>
          </div>
        )}
      </div>

      {formData.file?.length > 0 && (
        <div bookmark="Producto" wrap>
          <p
            style={{
              fontFamily: "Helvetica",
              fontSize: 16,
              marginTop: 25,
              paddingLeft: 80,
              paddingTop: 5,
              paddingBottom: 5,
              color: "#fff",
              minWidth: "100vh",
              backgroundColor: "#C6261E",
            }}
          >
            Imágenes del Producto:
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              paddingTop: 20,
              marginTop: 10,
              marginLeft: 80,
              marginRight: 80,
              marginBottom: 60,
            }}
          >
            {formData.file.map((image, index) => (
              <a href={image} target="_blank" key={index}>
                <img
                  style={{
                    width: 130,
                    height: 90,
                    borderRadius: 2,
                    borderBottom: "2px solid #E8E9E9 ",
                    marginTop: 10,
                    marginLeft: 5,
                    marginRight: 5,
                    paddingBottom: 1,
                  }}
                  src={image}
                />
              </a>
            ))}
          </div>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: 0,
          height: 90,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
        bookmark="Footer"
      >
        <img
          style={{
            top: 0,
            position: "absolute",
            width: "100%",
            height: 90,
          }}
          src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686661207/home/landing/web/campo_n2vwdp.jpg"
        />
        <img
          style={{
            width: 150,
            height: 36,
            marginLeft: 30,
          }}
          src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1687046049/home/landing/web/SamalAgroLogoB_w4nvuc.png"
        />
        <img
          style={{
            display: "flex",
            color: "#fff",
            flexDirection: "column",
            alignItems: "flex-end",
            marginRight: 30,
          }}
        />
          <p
            style={{
              fontSize: 10,
              color: "#fff",
              fontWeight: 700,
              marginTop: 2,
            }}
          >
            Buenos Aires 315 - 5940 Las Varillas, Cordoba. Argentina
          </p>
          <p
            style={{
              fontSize: 10,
              color: "#fff",
              fontWeight: 700,
              marginTop: 2,
            }}
          >
            Tel./Fax: +54-3533-422641
          </p>
          <p
            style={{
              fontSize: 10,
              color: "#fff",
              fontWeight: 700,
              marginTop: 2,
            }}
          >
            matias.a@samalagro.com - www.samalagro.com
          </p>
      </div>
    */}

    

    <Section className="my-[16px]">
      <Section>
        <Row>
          <Text className="m-0 text-[16px] font-semibold leading-[24px] text-indigo-600">
            Our products
          </Text>
          <Text className="m-0 mt-[8px] text-[24px] font-semibold leading-[32px] text-gray-900">
            Elegant Style
          </Text>
          <Text className="mt-[8px] text-[16px] leading-[24px] text-gray-500">
            We spent two years in development to bring you the next generation of
            our award-winning home brew grinder. From the finest pour-overs to the
            coarsest cold brews, your coffee will never be the same again.
          </Text>
        </Row>
      </Section>
      <Section>
        <Row>
          <Column className="w-1/3 pr-[8px]">
            <Link href="#">
              <Img
                alt="Stagg Electric Kettle"
                className="w-full rounded-[12px] object-cover"
                height={186}
                src="https://react.email/static/stagg-eletric-kettle.jpg"
              />
            </Link>
          </Column>
          <Column className="w-1/3 px-[8px]">
            <Link href="#">
              <Img
                alt="Ode Grinder"
                className="w-full rounded-[12px] object-cover"
                height={186}
                src="https://react.email/static/ode-grinder.jpg"
              />
            </Link>
          </Column>
          <Column className="w-1/3 pl-[8px]">
            <Link href="#">
              <Img
                alt="Clyde Electric Kettle"
                className="w-full rounded-[12px] object-cover"
                height={186}
                src="https://react.email/static/clyde-electric-kettle.jpg"
              />
            </Link>
          </Column>
        </Row>
      </Section>
    </Section></>
  );
};

export default EmailTemplate;
