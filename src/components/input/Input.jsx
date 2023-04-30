import React from 'react'

export default function Input({
  errorMessage,
  type,
  className,
  label,
  labelClassName,
  placeholder,
  field,
  accept,
}) {
  return (
    <>
      <label
        htmlFor=""
        className={`font-[700] text-[14px] leading-[20px] select-none flex items-center gap-4 ${labelClassName}`}
      >
        {label}
        {errorMessage && <p className="text-[#fd8686]">{errorMessage}</p>}
      </label>
      <input
        type={type}
        accept={accept}
        placeholder={placeholder}
        className={`bg-[#EEEEEE] text-[#BCBCBC] text-[14px] font-[400] leading-[21px] w-full h-[46px] rounded-md p-[14px] pt-[18px] border ${className} ${
          errorMessage ? 'outline-[#ffbbbb]' : 'outline-[#EEEEEE]'
        }`}
        {...field}
      />
    </>
  )
}
