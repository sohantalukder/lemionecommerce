import React from "react";

const TextInput = ({
    label,
    placeholder,
    type,
    value,
    onChange,
    name,
    required,
    disabled = false,
    error,
}) => {
    return (
        <>
            <label className='block mb-2 text-sm font-medium text-gray-900 '>
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                placeholder={placeholder}
                disabled={disabled}
                required={required}
            />
        </>
    );
};

export default TextInput;
