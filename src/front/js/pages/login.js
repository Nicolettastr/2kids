import React, { useContext, useState } from "react";
import "../../styles/login/login.css";
import Input from "../component/tags/input";
import Button from "../component/tags/button";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    actions.login(e, loginData.email, loginData.password);
  };
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {store.loginSuccessful ? (
        navigate("/")
      ) : (
        <section className="login_Section flex-center">
          <h3>Log in</h3>
          <form className="login_form flex-center">
            <div className="login_inputs flex-center">
              {Object.entries(loginData).map(([field, value]) => {
                return (
                  <Input
                    key={field}
                    type={field}
                    name={field}
                    placeholder={actions.capitalize(field)}
                    value={value}
                    onChange={handleChange}
                  />
                );
              })}
              <p className="login_recoverPassword">Forgot your password?</p>
            </div>
            <div className="loging_buttonContainer">
              <Button
                classname="login_button"
                name="Login"
                onclick={handleLogin}
              ></Button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
