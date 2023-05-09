import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCircleUser,
  faBagShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

//import logo

import logo from "../../img/2kids.png";

export const Navbar = () => {
  //contenedor del width de la pantalla

  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowsWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
  });

  window.addEventListener("resize", handleResize);

  //list of user icons

  const icons = [
    {
      icon: faCircleUser,
    },
    {
      icon: faHeart,
    },
    {
      icon: faBagShopping,
    },
  ];

  const userIcons = icons.map((item, index) => {
    return (
      <li className="flex-center" key={index}>
        <FontAwesomeIcon className="navbar_iconsOptions" icon={item.icon} />
        {item.icon === faBagShopping ? (
          <span className="navbar_shoppingBar">0</span>
        ) : (
          ""
        )}
      </li>
    );
  });

  //list of navbar options

  const opt = [
    {
      opt: "Contacto",
      link: "contact",
    },
    {
      opt: "Sobre Nosotros",
      link: "aboutUs",
    },
  ];

  const navOpt = opt.map((item, index) => {
    return (
      <li key={index} className="nav-item">
        <Link to={item.link}>{item.opt}</Link>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-md">
      {windowsWidth <= "767" ? (
        <div className="container-fluid">
          <Link className="navbar_logo" to="/">
            <img src={logo} alt="2kids logo" />
          </Link>
          <ul className="navbar_userIcons w-50 d-flex">{userIcons}</ul>
          <button
            className={
              windowsWidth <= "335"
                ? "navbar-toggler ms-auto me-0 float_rigth"
                : "navbar-toggler"
            }
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
          <ul className="navbar_userIcons d-flex">{userIcons}</ul>
        </div>
      )}
    </nav>
  );
};
