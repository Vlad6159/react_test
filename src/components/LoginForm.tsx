import React from "react";

const LoginForm: React.FC = () => {
    const onChange:number   () => {

    }
  return (
    <>
      <div>
        <form>
          <input type="email" name="email" id="email" />
          <input type="password" name="password" id="password" />
          <button>Авторизоваться</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
