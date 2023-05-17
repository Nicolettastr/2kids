import React, { useContext, useState } from "react";
import "../component/tags/input";
import Input from "../component/tags/input";
import Button from "../component/tags/button";
import { Context } from "../store/appContext";
import "../../styles/signup/signupForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignupForm = ({ userData, handleValidate, handleChange }) => {
  const { store, actions } = useContext(Context);
  const inputFields = Object.keys(userData);

  return (
    <>
      <div className="signupForm_parentSection">
        <div className="signupForm_section">
          {inputFields.map((field) => (
            <div className="signupform_inputContainer flex-center" key={field}>
              <label htmlFor={field}>
                {actions.removeUnderscores(actions.capitalize(field))}
                {/* //shows or not, depending if the variable is true or not, it change every time the user clicks on it */}
                {field.includes("password") ? (
                  <span onClick={actions.handleShowPassword}>
                    <FontAwesomeIcon
                      className="signupForm_showPassword"
                      icon={!store.showPassword ? faEye : faEyeSlash}
                    />
                  </span>
                ) : (
                  ""
                )}
              </label>

              <Input
                type={
                  field.includes("password") && !store.showPassword
                    ? "password"
                    : field.includes("password") & store.showPassword
                    ? "text"
                    : field.includes("email")
                    ? "email"
                    : "text"
                }
                id={field}
                name={field}
                value={userData[field]}
                onChange={handleChange}
                placeholder={actions.removeUnderscores(
                  actions.capitalize(field)
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="signupForm_submitBtn flex-center">
        <Button name="Sign Up" type="submit" onclick={handleValidate}></Button>
      </div>
    </>
  );
};

export default SignupForm;
