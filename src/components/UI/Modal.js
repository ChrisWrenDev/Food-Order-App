import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Background = function (props) {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = function (props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = function (props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Background />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
