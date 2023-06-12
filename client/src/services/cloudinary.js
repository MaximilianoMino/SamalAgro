import axios from 'axios';


const cloud_name = 'dpwdm3ip1'
const cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${cloud_name}/upload`;
const cloudinaryUploadPreset = 'hutrcxnd';


export const handleImages = async (selectedFiles) => {
    try {
        const formDataArray = selectedFiles.map((file) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', cloudinaryUploadPreset);
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
            formData.append("upload_preset", cloudinaryUploadPreset);
            formData.append("resource_type", "image");

        const response = await axios.post(cloudinaryUploadURL, formData, {
                headers: {
                  'content-type': 'multipart/form-data',
                },
              });
        
        const attachmentURL = response.data.secure_url;

       return attachmentURL
    } catch (error) {
        console.log("🚀 ~ file: cloudinary.js:12 ~ handleImages ~ error:", error)
        return error
    }
}

