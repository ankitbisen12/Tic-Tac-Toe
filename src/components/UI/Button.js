import classes from "./Button.module.css";

const Button = (props) => {
  const classs = `${classes.cell_content}${classes.populated}`;
  const winClass = `${classes.cell} ${classes.cell_winner}`;

  // Setting className conditionally
  const isPopulated = props.value ? `${classs}` : `${classes.cell_content}`;
  const winnerClass = props.canHighlight ? `${winClass}` : `${classes.cell}`;;

  return (
    <button className={winnerClass} onClick={props.onClick}>
      <span className={isPopulated}>{props.value}</span>
    </button>
  );
};

export default Button;
