import React, { useContext } from "react";
import "../component/tags/input";
import Input from "../component/tags/input";
import Button from "../component/tags/button";
import { Context } from "../store/appContext";

const ProductForm = ({ productData, handleValidate, handleChange }) => {
  const { store, actions } = useContext(Context);
  const inputFields = Object.keys(productData);

  return (
    <>
      <div className="newProductForm_parentSection">
        <div className="newProductForm_section">
          {inputFields.map((field) => (
            <div
              className={
                field.includes("user_id")
                  ? "inacticeInput newProductForm_inputContainer flex-center"
                  : "newProductForm_inputContainer flex-center"
              }
              key={field}
            >
              <label htmlFor={field}>
                {actions.removeUnderscores(actions.capitalize(field))}
                {/* //shows or not, depending if the variable is true or not, it change every time the user clicks on it */}
              </label>
              <Input
                type="text"
                id={field}
                name={field}
                value={productData[field]}
                onChange={handleChange}
                placeholder={actions.removeUnderscores(
                  actions.capitalize(field)
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="newProductForm_submitBtn flex-center">
        <Button name="Publish" type="submit" onclick={handleValidate}></Button>
      </div>
    </>
  );
};

export default ProductForm;
