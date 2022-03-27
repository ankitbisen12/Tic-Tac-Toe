import React from "react";
import classes from "./Player.module.css";

const Player = () => {
  return (
    <React.Fragment>
      <div className={classes.cell}>
        <div className={classes.box}>
          <i className="fa-regular fa-circle-user fa-2x"></i>
          <h3>Player 1</h3>
          <span className={classes.span1}>X</span>
        </div>
        <div className={classes.box}>
          <i className="fa-regular fa-circle-user fa-2x"></i>
          <h3>Player 2</h3>
          <span className={classes.span2}>0</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Player;
