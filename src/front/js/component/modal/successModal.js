import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../store/appContext";
import "../../../styles/modal.css";
import Button from "../tags/button";

const SuccessModal = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Modal show={store.showModalSignup} onHide={actions.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="signupSuccess_title">
            Congratulations!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Sign up successful, you can now log in!</p>
          <Button
            classname="signupSuccess_modal"
            onclick={actions.handleClose}
            name="ok"
          ></Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SuccessModal;
