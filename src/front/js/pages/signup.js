import React, { useContext, useState } from "react";
import "../../styles/signup/signup.css";
import { Context } from "../store/appContext";
import SignupForm from "../component/signupForm";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // this is the object that will be filled with the info typed by the user, this object has to be validated
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    country: "select-country",
    zip_code: "",
    phone_number: "",
  });

  const handleChange = (ev) => {
    console.log(userData);
    setUserData({ ...userData, [ev.target.name]: ev.target.value });
  };

  console.log(userData);

  return (
    <>
      {store.signupSuccessful ? (
        navigate("/")
      ) : (
        <section className="signup_section flex-center">
          <h3>Sign Up</h3>
          <div className="signup_container">
            <SignupForm
              userData={userData}
              handleValidate={(e) => actions.handleValidateForm(e, userData)}
              handleChange={handleChange}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default SignUp;
