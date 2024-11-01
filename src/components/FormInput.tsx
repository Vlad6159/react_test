import React, { HTMLInputTypeAttribute } from "react";

interface FormInput {
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInput> = ({
  type,
  name,
  id,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default FormInput;
