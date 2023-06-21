import emailjs from "@emailjs/browser";
import { handlePDF } from "./cloudinary";
import { REACT_APP_EMAILJS_SERVICEID, REACT_APP_EMAILJS_TEMPLATEID, REACT_APP_EMAILJS_USER_ID } from '../config/globals'

 export const sendEmailWithPDF = async (emailData, setSuccessCard, setLoading) => {
    
    const { file } = emailData

    try {
        const attachmentURL = await handlePDF(file)

        const emailSent = await emailjs
        .send(
            REACT_APP_EMAILJS_SERVICEID,
            REACT_APP_EMAILJS_TEMPLATEID,
            {
            email: emailData.email,
            message: 'Adjunto encontrará el PDF solicitado.',
            attachment: attachmentURL
          },
          REACT_APP_EMAILJS_USER_ID
        )
        

        if (emailSent) {
             setSuccessCard(true);
             setLoading(false)
        }
        
      return emailSent 
    } catch (error) {
      console.error(error);
    }  
  }; 