import React from "react";
import "./Board.css";

function Board(props) {
  const className = props.className;

  return (
    <div className={className}>
      {props.children}
  </div>
  );
}

export default Board;
