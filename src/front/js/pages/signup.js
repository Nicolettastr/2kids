import React, { useContext, useState } from "react";
import "../../styles/signup/signup.css";
import { Context } from "../store/appContext";
import SignupForm from "../component/signupForm";
import { useNavigate } from "react-router-dom";
import Button from "../component/tags/button";

const SignUp = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // this is the object that will be filled with the info typed by the user, this object has to be validated
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    country: "select-country",
    zip_code: "",
    password: "",
    confirm_password: "",
  });

  //function that sets userData with the information pass by the user
  const handleChange = (ev) => {
    setUserData({ ...userData, [ev.target.name]: ev.target.value });
  };

  console.log(userData);

  return (
    <>
      {/* //if signup is successful, the variable turns true and sends the user to the home page */}
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
