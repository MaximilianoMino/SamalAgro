import { useForm } from 'react-hook-form';
import { handleImages } from '../../../../services/cloudinary';
import { sendEmail } from '../../../../services/emailService';

export const useCustomForm = ( setSuccessCard, setLoading, selectedFiles ) => {
  const { register, handleSubmit, formState: { errors }, control, reset } = useForm();

  const onSubmit = async (data) => {
    
    setLoading(true)

    const secure_urls =  selectedFiles?.length > 0 && await handleImages(selectedFiles)

    if (secure_urls.length > 0) {
        data.file = secure_urls
        control._formValues.file = secure_urls
    } 

    try {
        reset()

        sendEmail( data, setSuccessCard, setLoading); 
           } catch (error) {
           console.log("🚀 ~ onSubmit ~ error:", error)
        return error
    }
   
};



  return { register, handleSubmit, errors, onSubmit, control };
};



