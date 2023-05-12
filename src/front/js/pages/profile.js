import React, { useContext } from "react";
import profileImg from "../../img/mujer.png";
import "../../styles/profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

const Profile = () => {
  const { store, actions } = useContext(Context);

  const opt = [
    "Account",
    "Reviews",
    "Shopping",
    "Sales",
    "Products",
    "Mailbox",
    "Favorites",
    "Wallet",
    "Settings",
    "Help",
  ];
  const profileOpt = opt.map((item, index) => {
    return (
      <div key={index} className="flex-center">
        <p>{item}</p>
      </div>
    );
  });

  const colors = [
    {
      name: "pink",
    },
    {
      name: "yellow",
    },
    {
      name: "green",
    },
    {
      name: "blue",
    },
    {
      name: "red",
    },
  ];

  const profileColors = colors.map((item, index) => {
    return (
      <div
        key={index}
        onClick={(e) => actions.handleColor(item.name)}
        className={`profile_colors ${item.name}`}
      ></div>
    );
  });

  return (
    <section className={`profile_section  ${store.activeColor}`}>
      <div className="profile_image flex-center">
        <div className="profile_imageContainer">
          <figure>
            <img src={profileImg} alt="user profile image" />
          </figure>
          <p>Alice White</p>
          <span>
            <FontAwesomeIcon icon={faPenToSquare} />
          </span>
          <div className="profile_colorOptions">{profileColors}</div>
        </div>
      </div>
      <div className="profile_options">{profileOpt}</div>
    </section>
  );
};

export default Profile;
