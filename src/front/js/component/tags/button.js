import React from "react";
import "../../../styles/tag/button.css";

const Button = ({ classname, name, type, onclick }) => {
  return (
    <button type={type} onClick={onclick} className={classname}>
      {name}
    </button>
  );
};

export default Button;
