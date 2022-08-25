import React from "react";
import "./Buttons.scss";

export default function Buttons(props) {
  const { handleBtnClick } = props;
  return (
    <div className="pageBtn">
      <button onClick={() => handleBtnClick(0)}>1</button>
      <button onClick={() => handleBtnClick(1)}>2</button>
      <button onClick={() => handleBtnClick(2)}>3</button>
      <button onClick={() => handleBtnClick(3)}>4</button>
      <button onClick={() => handleBtnClick(4)}>5</button>
    </div>
  );
}
