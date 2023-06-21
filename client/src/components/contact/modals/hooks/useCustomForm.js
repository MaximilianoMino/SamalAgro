import { useForm } from 'react-hook-form';
import { pdf } from '@react-pdf/renderer';
import { sendEmailWithPDF } from '../../../../services/emailService';
import MyPDF from '../../pdf/MyPDF';
import { handleImages } from '../../../../services/cloudinary';

export const useCustomForm = ( setSuccessCard, setLoading, selectedFiles ) => {
  const { register, handleSubmit, formState: { errors }, control } = useForm();

  const onSubmit = async (data) => {
    
    setLoading(true)

    const secure_urls =  selectedFiles?.length > 0 && await handleImages(selectedFiles)

    if (secure_urls.length > 0) {
        data.file = secure_urls
        control._formValues.file = secure_urls
    }

    try {
            generateAndSendPDF(data);
      } catch (error) {
        return error
    }
   
};

const generateAndSendPDF = async (formData) => {
     try {

        const blob = await pdf(<MyPDF formData={formData} />).toBlob();
        const file = new File([blob], "example.pdf", {
            type: 'application/pdf',
            lastModified: new Date().getTime()
          });
 
        const emailData = {
            email: formData.email,
            file: file
         }

             sendEmailWithPDF( emailData , setSuccessCard, setLoading); 
         } catch (error) {
        console.log("🚀 ~ file: useCustomForm.js:34 ~ generateAndSendPDF ~ error:", error)
        return error
    }
    
  };

  return { register, handleSubmit, errors, onSubmit, control };
};



