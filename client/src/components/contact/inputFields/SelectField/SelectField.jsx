import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import Select from 'react-select'

const SelectField = ({ control, itemList, errors, english, register, registerText, labelText }) => {
    const [focused, setFocused] = useState(false);


  return (
    <div className='modal-form-control'>
    <Controller
        control={control}
        {...register(`${registerText}`, { required: true})}
        render={({ field }) => (
        <Select
        isSearchable={false}
        {...field}
        placeholder=" "
        onFocus={() => setFocused(true)}
        options={itemList}
        className={`${errors[registerText] ? "modal-error-line" : null}`}
        getOptionLabel={(option) => (
            <div className="custom-select__options">
                {option.flag && <img srcSet={option.flag} alt={`Samal agro ${option.label}`} className='custom-select__options__flag'/> }
                <span className='custom-select__options__label'>{option.label}</span>
            </div>
        )}
        classNamePrefix="custom-select"
        />)}
    />

    <label htmlFor={`${registerText}`} className={`modal-label ${focused && "select-focused"}`}>{labelText} <span>*</span></label>
</div>
  )
}

export default SelectField