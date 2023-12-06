import React, { useState } from 'react'
// import { useState } from 'react/cjs/react.production.min'

const InputForm = ({ label, errorMsg, placeholder }) => {
  const [value, setValue] = useState('')

  const handleInputChange = (e) => {
    const inputValue = e.target.value

    setValue(inputValue)
  }

  return (
    <div className='flex flex-col gap-[8px]'>
      {label && <span className='text-[#ffffffcc] text-base font-medium'>{label}</span>}
      <div className='flex flex-col gap-[8px]'>
        <input
          type='text'
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={
            'px-[15px] py-[13px] w-full h-[43px] text-white rounded-[8px] border-[1.4px]  bg-transparent placeholder:text-[#8F8F8F] placeholder:text-sm outline-none ' +
            (!value ? 'border-[#FF6363]' : 'border-[#ffffff33]')
          }
        />
        {!value && errorMsg && <span className='text-[#FF6363] text-[13px] font-normal font-Inter'>{errorMsg}</span>}
      </div>
    </div>
  )
}

export default InputForm
