import React from 'react'
import '../container/modal.css'
import { useCustomForm } from '../hooks/useCustomForm';
import PhonePickup from '../../inputFields/phonePickup/PhonePickup';

const Consult = ({ english, setSuccessCard }) => {

     const { register, handleSubmit, errors, onSubmit, control } = useCustomForm(setSuccessCard);

     const consultStyle = "consult-phone-picker"
  return (
    <form className='modal-form-container' onSubmit={handleSubmit(onSubmit)}>
        
        <div className='modal-form-control large-input-control'>
            <input 
            type="text" 
            id='fullname' 
            className={`input-form-control large-input-control ${errors.fullname ? "modal-error-line" : null}`} 
            placeholder=" " 
            {...register("fullname", { 
                required: true,
                })}/>
            <label htmlFor="fullname" className="modal-label">{english ? "Fullname" : "Nombre completo"} <span>*</span></label>
        </div>
    
        <div className='modal-form-control large-input-control'>
            <input type="email" 
            id='email' 
            className={`input-form-control large-input-control ${errors.email ? "modal-error-line" : null}`} 
            placeholder=" " 
            {...register("email", { 
                required: true,
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                }
                } )}/>
            <label htmlFor="email" className="modal-label">Email <span>*</span></label>
        </div>

        <PhonePickup register={register} errors={errors} english={english} control={control} consultStyle={consultStyle}/>
    
        <div className='modal-form-control large-input-control'>
            <input type="text" id='company' className={`input-form-control large-input-control ${errors.company ? "modal-error-line" : null}`} placeholder=" " {...register("company", { required: true})}/>
            <label htmlFor="company" className="modal-label">{english ? "Company" : "Compañía"} <span>*</span></label>
        </div>

        <div className='modal-form-control large-input-control'>
            <textarea type="text" className='input-form-control large-input-control' placeholder=" " {...register("description")}/>
            <label htmlFor="description" className="modal-label">{english ? "Description" : "Descripción"}</label>
        </div>

        <span className='modal-required-fields'><span>*</span> { english ? "Required fields" : "Campos requeridos" }</span>

        <div className='modal-btn-container'>
            <button type="submit" className="modal-btn">{ english ? "Send" : "Enviar"}</button>
        </div>

</form>
  )
}

export default Consult