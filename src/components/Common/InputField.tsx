"use client";

import { Input } from "antd";

interface IInputField {
  label?: string;
  type: string;
  placeholder: string;
  handleOnChange: (e: string) => void;
  value?: string;
}

const InputField = ({
  placeholder,
  type,
  label,
  handleOnChange,
  value,
}: IInputField) => {
  return (
    <div className="mb-4 border-md">
      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <Input
        onChange={(e) => handleOnChange(e.target.value)}
        type={type}
        value={value}
        className="w-full px-3 py-2 border-1 border-gray-700 text-gray-700 rounded leading-tight focus:outline-none focus:border-blue-500 hover:bg-violet-200"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
