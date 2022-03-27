import React, { useState } from "react";
import calculateWinner from "../../Utils/WinnerCalculator";
import Board from "../Board/Board";
import Modal from "../Modal/Modal";
import classes from "./Game.module.css";
import Player from "./Player";

const Game = () => {
  const [cellValues, setCellValues] = useState(["","","","","","","","",""]);
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberOfTurnsLeft, setNumberOfTurnsLeft] = useState(9);
  const [winner, setWinner] = useState();
  const [winningCombination, setWinningCombination] = useState([]);

  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";

  const startNewGame = () => {
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setXIsNext(true);
    setIsGameOver(false);
    setNumberOfTurnsLeft(9);
    setWinner(undefined);
    setWinningCombination([]);
  };

  const onCellClicked = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];
      newCellValues[cellIndex] = xIsNext ? "X" : "0";

      const newNumberofTurnsLeft = numberOfTurnsLeft - 1;

      //Calculate the result
      const calcResult = calculateWinner(
        newCellValues,
        newNumberofTurnsLeft,
        cellIndex
      );
      setCellValues(newCellValues);
      setXIsNext(!xIsNext);
      setIsGameOver(calcResult.hasResult);
      setNumberOfTurnsLeft(newNumberofTurnsLeft);
      setWinner(calcResult.winner);
      setWinningCombination(calcResult.winningCombination);
    }
  };

  return (
    <React.Fragment>
      <h1>
        <span className={classes.h1Yel}>T</span>
        <span className={classes.h1Red}>I</span>
        <span className={classes.h1Yel}>C </span>
        <span className={classes.h1Red}>T</span>
        <span className={classes.h1Yel}>A</span>
        <span className={classes.h1Red}>C </span>
        <span className={classes.h1Yel}>T</span>
        <span className={classes.h1Red}>O</span>
        <span className={classes.h1Yel}>E</span>
      </h1>
      <Player />
      <div id={classes["game"]}>
        <Board
          cellValues={cellValues}
          winningCombination={winningCombination}
          cellClicked={onCellClicked}
        />
      </div>
      <Modal isGameOver={isGameOver} winner={winner} onNewGame={startNewGame} />
    </React.Fragment>
  );
};

export default Game;
