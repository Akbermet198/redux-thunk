import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <ModalContent>{children}</ModalContent>,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};

export default Modal;

const Backdrop = ({ onClose }) => {

  return <StyledBackdrop onClick={onClose} />;
};

const StyledBackdrop = styled.div`
  background-color: black;
  opacity: 0.75;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const ModalContent = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

const StyledModalContent = styled.div`
  position: fixed;
  z-index: 2;
  top: 20vh;
  left: 5%;

  width: 40rem;
  left: calc(50% - 20rem);

  background-color: white;
  padding: 1rem ;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 3;
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
