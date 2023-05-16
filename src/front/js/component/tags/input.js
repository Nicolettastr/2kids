import React from "react";
import "../../../styles/tag/input.css";

const Input = ({
  type = "text",
  placeholder,
  id,
  name = id,
  value,
  onChange,
  required = false,
  classname,
  children,
}) => {
  return (
    <>
      <input
        className={`input ${classname}`}
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
      {children}
    </>
  );
};

export default Input;
