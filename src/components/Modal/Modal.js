import React from "react";
import classes from "./Modal.module.css";
import image from "../../assets/img1.jpg";

const Modal = (props) => {
  const ModalClasses = props.isGameOver ? `${classes.modal_open}` : ``;
  const message = props.winner ? `Winner is ${props.winner}` : "No result";

  return (
    <div id={classes["modal-overlay"]} className={ModalClasses}>
      <div id={classes["game-result-modal"]}>
        <div id={classes["result-container"]}>
          <div id={classes["winner-container"]}>
            <span>{message}</span>
          </div>
        </div>
        <div id={classes["new-game-container"]}>
          <img src={image} alt="img1" />
        </div>
        <div id={classes["new-game-container"]}>
          <button id={classes["new-game-button"]} onClick={props.onNewGame}>
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
