import classes from "./Board.module.css";
import Button from "../UI/Button";

const Board = (props) => {
  const cells = props.cellValues.map((value, index) => {
    const canHighlight =
      props.winningCombination && props.winningCombination.indexOf(index) >= 0;
    return (
      <Button
        key={Math.random()}
        value={value}
        canHighlight={canHighlight}
        onClick={() => props.cellClicked(index)}
      />
    );
  });

  return <div id={classes["board"]}>{cells}</div>;
};

export default Board;
