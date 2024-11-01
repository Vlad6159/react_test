import React, { useState } from "react";
import LoginForm from "./LoginForm";

const LoginFormContainer: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <>
      <LoginForm onChange={handleChange}></LoginForm>
    </>
  );
};

export default LoginFormContainer;
