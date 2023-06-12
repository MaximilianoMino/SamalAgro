import emailjs from "@emailjs/browser";
import axios from 'axios';
import { handlePDF } from "./cloudinary";
/* cloudinary.v2.config({
  cloud_name: 'dmrsdfpfm',
  api_key: '861318221419518',
  api_secret: 'ZtP5Mu3_xz4Rd87Udkul3dZlrd8',
  secure: true,
})
 */
const serviceId = "service_i1fmx2g";
const templateId = "template_fmswouo";
const userId = "user_Nci45Ir3ZSNRSm9x9iPsY";
export const sendEmailWithPDF = async (emailData, setSuccessCard) => {
    
    const { file, email } = emailData

    try {
        const attachmentURL = await handlePDF(file)
 
        const emailSent = await emailjs
        .send(
            serviceId,
            templateId,
            {
            email: emailData.email,
            message: 'Adjunto encontrará el PDF solicitado.',
            attachment: attachmentURL
          },
            userId
        )
           setSuccessCard(true);
  
      return emailSent 
    } catch (error) {
      console.error(error);
    }  
  };