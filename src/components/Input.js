import { useState } from "react"

export default function Input({ title, type, placeholder, onChange }) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) onChange(e.target.value)
    }

    return (
        <div className="mt-4">
            <label className="text-sm">{title}</label>
            <input 
                value={inputValue}
                type={type} 
                placeholder={placeholder} 
                className="w-full bg-white mt-2 border focus-visible:border-purple-400 focus:bg-gray-100 focus:outline-purple-400 rounded-md px-4 py-3" 
                onChange={handleChange}
            />
        </div>
    )
}
