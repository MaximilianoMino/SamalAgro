import React from 'react';
import { Page, Text, Document, StyleSheet, View, Image, Font, Link } from '@react-pdf/renderer';
import Roboto from 'assets/fonts/Roboto/Roboto-Regular.ttf'
Font.register({ family: 'Roboto', src: Roboto, fontWeight: 'bold' });
/* const formData = {
    "fullname": "Some Client",
    "email": "someclient@gmail.com",
    "company": "Some Company",
     "province": "Córdoba",
     "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
    "phone": "544564654654",
     "company_origen": {
        "id": "+5-Argentina",
        "value": "Argentina",
        "flag": "https://flagcdn.com/w320/ar.png",
        "label": "Argentina"
    }, 
    "destinity_country": {
        "id": "+5-Argentina",
        "value": "Argentina",
        "flag": "https://flagcdn.com/w320/ar.png",
        "label": "Argentina"
    },
    "Product": {
        "value": "ALUBIA",
        "label": "ALUBIA",
        "flag": "/static/media/alubia-samal.545f9ebb4baff5049a08.WebP"
    },
     
} */
// Estilos
const styles = StyleSheet.create({
  page: {
   position: "relative",
  },
  header: {   
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 24,
    height: 90,
    marginBottom: 40,

},
header_img: {
    top: 0,
    position: "absolute",
    width: "100%",
    height: 90,
},
  logo: {
    width: 150,
    height: 36,
    marginLeft: 30,
  },
  title: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 18,
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
  },
  header_user_info: {
    display: "flex",
    color: "#fff",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 30,
  },
  header_user_info_text: {
    fontSize: 10,
    color: "#fff",
    fontWeight: 700,
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    marginBottom: 30,
    left: 0,
    paddingLeft: 80,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#fff",
    minWidth: "100vh",
    backgroundColor: "#C6261E"
  },
  textContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
    marginLeft: 80,
    marginRight: 80,
    borderBottom: "1px solid #C4C4C4"
  },
  descriptionContainer: {
    position: "relative",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "flex-start",
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 80,
    marginRight: 80,
    borderBottom: "1px solid #C4C4C4"
  },
  text: {
    fontSize: 12,
  },
  flag: {
    width: 12,
    height: 12,
    borderRadius: "50%"
  },
  boldText: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
  },
  imageContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    flexWrap: "wrap",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 60, 
  },
  image_title: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    marginTop: 25,
    paddingLeft: 80,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#fff",
    minWidth: "100vh",
    backgroundColor: "#C6261E"
  },
  image: {
    width: 130,
    height: 90,
    borderRadius: 2,
    borderBottom: "2px solid #E8E9E9 ",
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 1
  },

  footer: {
    position: "absolute",
    bottom: 0,
    height: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    width: "100%",
  },
  footer_user_info: {
    display: "flex",
    color: "#fff",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: 30,
  },
  footer_user_info_text: {
    fontSize: 10,
    color: "#fff",
    fontWeight: 700,
    marginTop: 2
  },

});


const MyPDF = ({formData}) => {

const titleReg = formData.province ? "Ventas" : (formData.destinity_country ? "Compra" : "Consulta")

  return (
    <Document>
      <Page style={styles.page} wrap> 
        <View style={styles.header} bookmark="Encabezado">
            <Image style={styles.header_img} src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686661207/home/landing/web/campo_n2vwdp.jpg"/>
            <Image style={styles.logo} src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686054146/Landing%20Page/SamalAgroLogoB_idytpc.png" />
            <View style={styles.header_user_info}>
                <Text style={styles.header_user_info_text}>Usuario: {formData.email}</Text>
                <Text style={styles.header_user_info_text}>Fecha: {new Date().toLocaleDateString()}</Text>
            </View>
            <Text style={styles.title}>Reporte de Formulario de {titleReg}</Text>
        </View>

        <View bookmark="Info del cliente">
            <Text style={styles.subtitle}>Información del Cliente:</Text>
            <View style={styles.textContainer}>
                <Text style={styles.boldText}>Fecha:</Text> <Text style={styles.text}>{new Date().toLocaleDateString()}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.boldText}>Nombre:</Text> <Text style={styles.text}>{formData.fullname}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.boldText}>Email:</Text><Text style={ styles.text }>{formData.email}</Text> 
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.boldText}>Compañía:</Text> <Text style={styles.text}>{formData.company}</Text>
            </View>
            {
                formData.company_origen &&
            <View style={styles.textContainer}>
                <Text style={styles.boldText}>País de origen de la Compañía:</Text>
                <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                    <Image style={styles.flag} src={formData.company_origen.flag} />
                    <Text style={styles.text}>{formData.company_origen.label}</Text>
                </View>
            </View>
            }
            {
                formData.destinity_country &&
            <View style={styles.textContainer}>
                <Text style={styles.boldText}>País de destino:</Text> 
                <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                    <Image style={styles.flag} src={formData.destinity_country.flag} />
                    <Text style={styles.text}>{formData.destinity_country.label}</Text>
                </View>   
            </View>
            }
            
            <View style={styles.textContainer}>
                <Text style={styles.boldText}>Número de Teléfono:</Text> <Text style={styles.text}>+{formData.phone}</Text>
            </View>

            {
                formData.province &&
            <View style={styles.textContainer}>
                <Text style={styles.boldText}>Provincia:</Text><Text style={styles.text}>{formData.province}</Text>
            </View>  
            }

            {
                formData.Product && 
            <View style={styles.textContainer}>
                <Text style={styles.boldText}>Producto a Vender:</Text> <Text style={styles.text}>{formData.Product.label}</Text>
            </View>
            }
            {
                formData.description !== "" && 
            <View style={styles.descriptionContainer}>
                <Text style={styles.boldText}>Otra Descripción:</Text> <Text style={{...styles.text, maxWidth: "80%"}}>{formData.description}</Text>
            </View>
            }
            
        </View>

        {
            formData.file?.length > 0 &&
        <View bookmark="Producto" wrap>
            <Text style={styles.image_title}>Imágenes del Producto:</Text>
          
            <View style={styles.imageContainer}>
             {formData.file.map((image, index) => (
                <Link src={image} key={index} >
                    <Image style={styles.image} src={image} />
                </Link> ))}
            </View>
         
        </View>
        }

        <View style={styles.footer} bookmark="Footer"> 
            <Image style={styles.header_img} src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686661207/home/landing/web/campo_n2vwdp.jpg" />
            <Image style={styles.logo} src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686054146/Landing%20Page/SamalAgroLogoB_idytpc.png" />
            <View style={styles.footer_user_info}>
                <Text style={styles.footer_user_info_text}>Buenos Aires 315 - 5940 Las Varillas, Cordoba. Argentina</Text>
                <Text style={styles.footer_user_info_text}>Tel./Fax: +54-3533-422641</Text>
                <Text style={styles.footer_user_info_text}>matias.a@samalagro.com - www.samalagro.com</Text>
            </View>
        </View> 
       
      </Page>
    </Document>
  );
};

export default MyPDF;
