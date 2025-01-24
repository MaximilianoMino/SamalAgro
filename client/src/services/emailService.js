import { REACT_APP_RESEND_API_KEY  } from '../config/globals'
console.log("🚀 ~ REACT_APP_RESEND_API_KEY:", REACT_APP_RESEND_API_KEY)
import EmailTemplate from "components/contact/emailTemplate/EmailTemplate";
import { Resend } from 'resend';

 export const sendEmail = async (emailData, formData, setSuccessCard, setLoading) => {
   
    const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
        from: 'libertadores323@gmail.com',
        to: ['maximiliano.mino323@gmail.com'],
        subject: 'Hello World',
        react: <EmailTemplate formData={formData}/>,
        
      });
    
      if (error) {
        return { error: error.message };
      }


      console.log({ data });
    
 /*
    const emailHtml = renderToStaticMarkup(<EmailTemplate formData={formData} />);

    await resend.emails.send({
      from: 'libertadores323@gmail.com',
      to: 'maximiliano.mino323@gmail.com',
      subject: 'hello world',
      html: emailHtml,  // Usar el HTML generado
    });
     try {
        const emailSent = await emailjs
        .send(
            REACT_APP_EMAILJS_SERVICEID_TEST,
            REACT_APP_EMAILJS_TEMPLATEID_TEST,
            {
            email: emailData.email,
            message: emailContent,
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
    }    */
  }; 
