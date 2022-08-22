
import "./Modal.css";
// import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import App from '../App'
function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);}}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Character</h1>
        </div>
        <div className="body">
          <p>Info</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
