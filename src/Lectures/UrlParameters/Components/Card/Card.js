import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

function Card(props) {
  const navigate = useNavigate();
  return (
    <div className="cardContainer" onClick={() => navigate(`/monsters/detail/${props.id}`)}>
      <img src={`https://robohash.org/${props.id}?set=set2&size=180x180`} alt="" />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
