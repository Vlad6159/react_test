import React from "react";
import FormInput from "./FormInput";
import Button from "./Button/Button";

interface LoginForm {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginForm> = ({ onChange }) => {
  return (
    <>
      <div>
        <form>
          <FormInput
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Email"}
          />
          <FormInput
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder={"Password"}
          />
          <Button>Авторизироваться</Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
