import React, { Component } from "react";
import logo from "../../img/2kids.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

import ig from "../../img/instagram.png";
import fb from "../../img/facebook.png";
import tw from "../../img/gorjeo.png";
import tt from "../../img/tik-tok.png";

const Footer = () => {
  const socialNetwork = [
    {
      name: "instagram",
      img: ig,
    },
    {
      name: "facebook",
      img: fb,
    },
    {
      name: "twitter",
      img: tw,
    },
    {
      name: "tik-tok",
      img: tt,
    },
  ];

  const links = [
    {
      name: "About Us",
    },
    {
      name: "Contact Us",
    },
    {
      name: "Privacy Policy",
    },
    {
      name: "Cookies Policy",
    },
    {
      name: "Legal Notice",
    },
    {
      name: "Terms And Conditions",
    },
  ];

  const icons = socialNetwork.map((item, index) => {
    return (
      <figure key={index}>
        <img src={item.img} alt={`${item.name} icon`} />
      </figure>
    );
  });

  const legalTerms = links.map((item, index) => {
    return (
      <Link to="/" key={index}>
        <li>{item.name}</li>
      </Link>
    );
  });

  return (
    <footer className="footer mt-auto py-3 text-center">
      <div className="footer_images flex-center">
        <figure className="footer_logo ">
          <img src={logo} alt="logo 2kids" />
        </figure>
        <div className="footer_socialNetwork">{icons}</div>
      </div>
      {window.innerWidth < "700" ? (
        <>
          <form className="footer_form mg-top">
            <h2>Join The 2kids Community Now.</h2>
            <input type="email" placeholder="Email" name="email" />
            <button type="submit">Submit</button>
          </form>
          <div className="footer_legalList">
            <ul>{legalTerms}</ul>
          </div>
        </>
      ) : (
        <>
          <div className="footer_legalList">
            <ul>{legalTerms}</ul>
          </div>
          <form className="footer_form">
            <h2>Join The 2kids Community Now.</h2>
            <input type="email" placeholder="Email" name="email" />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </footer>
  );
};

export default Footer;
