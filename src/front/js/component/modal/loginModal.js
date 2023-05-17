import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import Button from "../tags/button";
import "../../../styles/modal.css";

const ShowModal = () => {
  const { store, actions } = useContext(Context);

  const navBtn = store.registerAndLoginOpt.map((item, index) => {
    return (
      <Link onClick={actions.handleClose} key={index} to={item.link}>
        <Button classname="navbar_modalButtons" name={item.opt}></Button>
      </Link>
    );
  });

  return (
    <>
      <Modal show={store.show} onHide={actions.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal_title">Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{navBtn}</Modal.Body>
      </Modal>
    </>
  );
};

export default ShowModal;
