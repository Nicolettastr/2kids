import React, { useContext } from "react";
import "../../styles/profilePages/account.css";
import { Context } from "../store/appContext";
import Input from "../component/tags/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  const { store, actions } = useContext(Context);
  const user = JSON.parse(localStorage.getItem("user"));

  const sortUserData = [
    "first_name",
    "last_name",
    "email",
    "phone_number",
    "country",
    "zip_code",
  ];

  const userData = {};

  sortUserData.forEach((prop) => {
    if (user.hasOwnProperty(prop)) {
      userData[prop] = user[prop];
    }
  });

  const handleChange = () => {
    console.log("hola");
  };

  return (
    <section className="account_section">
      <div className="account_container">
        <div className="account_userWelcoming">
          <div>
            <h3>{`Hello ${user.first_name}!`}</h3>
            <p>This is you account information.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
        </div>
        <div className="account_userDataContainer">
          {Object.entries(userData).map((item, index) => {
            if (item[0] !== "id") {
              let value = item[1];
              if (
                item[0] === "first_name" ||
                item[0] === "last_name" ||
                item[0] === "country"
              ) {
                value = actions.capitalize(value);
              }
              return (
                <div className="account_userData">
                  <div key={index}>{`${actions.removeUnderscores(
                    actions.capitalize(item[0])
                  )}: `}</div>
                  <Input
                    id={item[0]}
                    placeholder={value}
                    value={value}
                    onChange={handleChange}
                    readonly
                  ></Input>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Account;
