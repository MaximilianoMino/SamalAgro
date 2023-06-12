import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import {useDropzone} from 'react-dropzone';
import { BsCloudUploadFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

const FileUploader = ({ english, control, selectedFiles, setSelectedFiles }) => {
 
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/png': []
          },
        multiple: true,
        onDrop: (acceptedFiles) => {
          setSelectedFiles([...selectedFiles, ...acceptedFiles])
        }
      });

      const handleRemoveFile = ( index, e ) => {
        e.stopPropagation();
        setSelectedFiles((prevFiles) => {
          const newFiles = [...prevFiles];
          newFiles.splice(index, 1);
          return newFiles;
        });
      };
    

      const fileItems = selectedFiles.map((file, index) => (
            <li key={file.path}>
                {file.path}
                <MdClose className='file-up__close__icon' onClick={(e) => handleRemoveFile(index, e)} />
            </li>
        
      ));
     
  return (
    
        <Controller
        control={control}
        name="file"
        render={({ field }) => (
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps({...field, name:'file'})} />
                {fileItems.length > 0 ? <ul className='file-up__name-list'>{fileItems}</ul> : (
                <>
                <BsCloudUploadFill className='file-up-icon'/>
                <p className='file-up-text'>{ english ? "Drag and drop some files here, or click to select files" : "Arrastra y suelta archivos aquí, o haz clic para seleccionar archivos"}</p>
                <em className='file-up-text'>{english ? "(Only *.jpeg and *.png images will be accepted)" : "(Solo se aceptarán imágenes *.jpeg y *.png)"}</em>
                </>)}
            </div> 
            )}
        />
    
  )
}

export default FileUploader