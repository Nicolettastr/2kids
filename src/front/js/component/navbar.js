import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faEnvelope,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../component/tags/button";

//import logo

import logo from "../../img/2kids.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // windows screen resize event

  useEffect(() => {
    actions.handleResize();
  }, []);

  window.addEventListener("resize", actions.handleResize);

  // if token exist, this user option appear, this function is to navigate depending on which icon is clicked

  const handleNavbarUserOpt = (item) => {
    console.log(item);
    if (item.iconName === "circle-user") {
      navigate("/profile");
    } else if (item.iconName === "heart") {
      console.log("heart");
    } else if (item.iconName === "envelope") {
      navigate("/envelope");
    }
  };

  // this calls the icons variable in the store and for each element it creates a li with its icon

  const userIcons = store.icons.map((item, index) => {
    return (
      <li
        onClick={(e) => handleNavbarUserOpt(item.icon)}
        className="flex-center"
        key={index}
      >
        <FontAwesomeIcon className="navbar_iconsOptions" icon={item.icon} />
        {item.icon === faEnvelope ? (
          <span className="navbar_envelope">0</span>
        ) : (
          ""
        )}
      </li>
    );
  });

  // this calls the opt variable in the store and for each element it creates a li option for the navbar

  const navOpt = store.opt.map((item, index) => {
    return (
      <li key={index} className="nav-item">
        <Link to={item.link}>{item.opt}</Link>
      </li>
    );
  });

  // this calls the registerAndLoginOpt variable in the store and for each element it creates a button in the navbar to log in and register

  const navBtn = store.registerAndLoginOpt.map((item, index) => {
    return (
      <Link key={index} to={item.link}>
        <Button classname="navbar_buttons" name={item.opt}></Button>
      </Link>
    );
  });

  return (
    <nav className="navbar navbar-expand-md">
      {/* Depending on the screen size which you know because of the
      store.windowsWidth that is a variable with window.innerWidth inside it
      shows a different render */}
      {store.windowsWidth <= "767" ? (
        <div className="container-fluid">
          <Link className="navbar_logo" to="/">
            <img src={logo} alt="2kids logo" />
          </Link>

          {/* if the token is null or doesnt exist and windows.innerWidth is less or equal to 335px it shows whats inside */}

          {(!store.token && store.windowsWidth <= "335") ||
          (store.token === null && store.windowsWidth <= "335") ? (
            <div className="navbar_mobileLogin navbar_mobileMini">
              <FontAwesomeIcon
                className="navbar_iconsOptions"
                icon={faCircleUser}
              />
            </div>
          ) : !store.token || store.token === null ? (
            <div className="navbar_mobileLogin">
              <FontAwesomeIcon
                className="navbar_iconsOptions"
                icon={faCircleUser}
              />
            </div>
          ) : (
            <ul className="navbar_userIcons d-flex">{userIcons}</ul>
          )}
          <button
            className={
              store.windowsWidth <= "335"
                ? "navbar-toggler ms-auto me-0 float_rigth navbar_dropdownBtn"
                : "navbar-toggler navbar_dropdownBtn"
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon flex-center">
              <FontAwesomeIcon className="navbar_dropdownIcon" icon={faBars} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">{navOpt}</ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <Link className="navbar_logo" to="/">
            <img src={logo} alt="2kids logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon flex-center">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="d-flex navbar_lg_ul">{navOpt}</ul>
            <form className="navbar_form d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
          {!store.token || store.token === null ? (
            <>{navBtn}</>
          ) : (
            <ul className="navbar_userIcons d-flex">{userIcons}</ul>
          )}
        </div>
      )}
    </nav>
  );
};
