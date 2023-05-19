import React, { useContext } from "react";
import profileImg from "../../img/mujer.png";
import "../../styles/profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import Button from "../component/tags/button";
import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const optObjects = [
    {
      name: "Account",
      link: "/Account"
    },
    {
      name: "Reviews",
      link: "/Reviews"
    },
    {
      name: "Shopping",
      link: "/Shopping"
    },
    {
      name: "Sales",
      link: "/Sales"
    },
    {
      name: "Products",
      link: "/Products"
    },
    {
      name: "Mailbox",
      link: "/Mailbox"
    },
    {
      name: "Favorites",
      link: "/Favorites"
    },
    {
      name: "Wallet",
      link: "/Wallet"
    },
    {
      name: "Settings",
      link: "/Settings"
    },
    {
      name: "Help",
      link: "/Help"
    }
  ];
  

  const profileOpt = optObjects.map((item, index) => {
    return (
      <Link  key={index} to={item.link} >
        <div className="flex-center">
          <p>{item.name}</p>
        </div>
      </Link>
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

  const color = localStorage.getItem('activeColor');

  return (
    <>
      {store.logoutSuccessful ? (
        navigate("/")
      ) : (
        <section className={`profile_section  ${color}`}>
          <div className="profile_container flex-center">
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
          </div>
          <div className="logout_btnContainer">
            <Button
              onclick={actions.handleLogOut}
              classname="logOut"
              name="Log out"
            ></Button>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
