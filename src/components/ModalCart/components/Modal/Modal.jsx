/** @format */
import { Component } from "react";
import { createPortal } from "react-dom";

import { Backdrop, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  handleBackBackdropClick = (e) => {
    const { onClose } = this.props;

    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <Backdrop onClick={(e) => this.handleBackBackdropClick(e)}>
        <ModalContent>{children}</ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}