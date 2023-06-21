import React, {forwardRef} from 'react'
import { Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhonePickup = ({ register, errors, english, control, consultStyle}) => {

const preferredCountries = ['us','cn','ve', 'it', 'my']

  return (
<div className={`modal-form-control ${consultStyle && consultStyle}`}>
    <Controller
        control={control}
        {...register("phone", { required: true, minLength: 3})}
        render={({ field }) => (
            <PhoneInput
                {...field}
                id='phone'
                country="ar"
                countryCodeEditable={false}
                preferredCountries={preferredCountries}
                placeholder= " "
                dropdownStyle={{                    
                    textAlign: "left",
                    color: "rgba(0, 0, 0, 0.8)",
                    minWidth: "100%"

                  }}
                buttonStyle={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "0",
                    borderBottom: `solid ${errors.phone ? "2px #dd403591": "1px rgba(0, 0, 0, 0.25)"}`
                }}
                containerStyle={{
                    marginTop: "1.34em",
                    width: "100%"
                }}
                containerClass="modal-form-control"
                inputClass={`input-form-control ${errors.phone ? "modal-error-line" : null} `}
              
            /> )}
            />
            <label htmlFor="phone" className="modal-label select-focused">{english ? "Phone" : "Telefono"} <span>*</span></label>
        </div>
          )
}

export default PhonePickup