import React, { useRef, useState } from 'react'
import '../container/modal.css'
import { useCustomForm } from '../hooks/useCustomForm';
import useCountryData from '../hooks/useCustomCountries';
import SelectField from '../../inputFields/SelectField/SelectField';
import PhonePickup from '../../inputFields/phonePickup/PhonePickup';
import FileUploader from '../../inputFields/fileUploader/FileUploader';

const Sales = ({ english, setSuccessCard, setLoading }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    // COUNTRIES LIST
    const { getOptionListData, getProducts } = useCountryData(english);
    const countriesList = getOptionListData();
    const productList = getProducts()

    const { register, handleSubmit, errors, onSubmit, control } = useCustomForm( setSuccessCard, setLoading, selectedFiles );

  return (
  
     <form className='modal-form-container'  onSubmit={handleSubmit(onSubmit)}>
        <div className='modal-form-control large-input-control'>
            <input type="text" id='fullname' className={`input-form-control large-input-control ${errors.fullname ? "modal-error-line" : null}`} placeholder=" " {...register("fullname", { required: true})}/>
            <label htmlFor="fullname" className="modal-label">{english ? "Fullname" : "Nombre completo"} <span>*</span></label>
        </div>
        
        <div className='modal-form-control'>
            <input
            type="email" 
            id='email' 
            className={`input-form-control ${errors.email ? "modal-error-line" : null}`} 
            placeholder=" " 
            {...register("email", { 
                required: true,
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                }
                } )}/>
            <label htmlFor="email" className="modal-label">Email <span>*</span></label>
        </div>

        <PhonePickup register={register} errors={errors} english={english} control={control} />

        <div className='modal-form-control'>
            <input type="text" id='company' className={`input-form-control ${errors.company ? "modal-error-line" : null}`} placeholder=" " {...register("company", { required: true})}/>
            <label htmlFor="company" className="modal-label">{english ? "Company" : "Compañía"} <span>*</span></label>
        </div>

       <SelectField english={english} errors={errors} control={control} itemList={countriesList} register={register} registerText="company_origen" labelText={english ? "Company origen" : "Origen de la compañía"} />
       <SelectField english={english} errors={errors} control={control} itemList={productList} register={register} registerText="Product" labelText={english ? "Product" : "Producto"} />

       <div className='modal-form-control'>
            <input type="text" id='province' className={`input-form-control ${errors.province ? "modal-error-line" : null}`} placeholder=" " {...register("province", { required: true} )}/>
            <label htmlFor="email" className="modal-label">{english ? "Province/State" : "Provincia/Estado"} <span>*</span></label>
        </div>

        <div className='modal-form-control large-input-control'>
            <textarea type="text" className='input-form-control large-input-control' placeholder=" " {...register("description")}/>
            <label htmlFor="description" className="modal-label">{english ? "Description" : "Descripción"}</label>
        </div>

        <FileUploader english={english} control={control} register={register} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />

        <span className='modal-required-fields'><span>*</span> { english ? "Required fields" : "Campos requeridos" }</span>
        
        <div className='modal-btn-container'>
            <button type="submit" className="modal-btn">{ english ? "Send" : "Enviar"}</button>
        </div>
    </form> 
  )
}

export default Sales