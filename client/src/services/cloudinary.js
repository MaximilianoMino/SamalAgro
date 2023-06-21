import axios from 'axios';
import { REACT_APP_CLOUDINARY_CLOUD_NAME, REACT_APP_CLOUDINARY_UPLOAD_PRESET } from '../config/globals.js'
 console.log("🚀 ~ file: cloudinary.js:3 ~ REACT_APP_CLOUDINARY_CLOUD_NAME, REACT_APP_CLOUDINARY_UPLOAD_PRESET:", REACT_APP_CLOUDINARY_CLOUD_NAME, REACT_APP_CLOUDINARY_UPLOAD_PRESET)
 
const cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`;

export const handleImages = async (selectedFiles) => {

    try {
        const formDataArray = selectedFiles.map((file) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', REACT_APP_CLOUDINARY_UPLOAD_PRESET);
            return formData;
          });
      
          const response = await Promise.all(formDataArray.map(formData => axios.post(cloudinaryUploadURL, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })));

        const attachmentURLs = response.map((res) => res.data.secure_url);

        return attachmentURLs
          
    } catch (error) {
        console.log("🚀 ~ file: cloudinary.js:12 ~ handleImages ~ error:", error)
        return error
    }
}


export const handlePDF = async (PDFFile) => {
    try {
        const formData = new FormData();
            formData.append("file", PDFFile);
            formData.append("upload_preset", REACT_APP_CLOUDINARY_UPLOAD_PRESET);
            formData.append("resource_type", "image");

        const response = await axios.post(cloudinaryUploadURL, formData, {
                headers: {
                  'content-type': 'multipart/form-data',
                },
              });
        
        const attachmentURL = response.data.secure_url;

       return attachmentURL
    } catch (error) {
        console.log("🚀 ~ file: cloudinary.js:51 ~ handlePDF ~ error:", error)
        return error
    }
}

