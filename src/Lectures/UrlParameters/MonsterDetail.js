import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [monster, setMonster] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMonster(data));

    return () => {
      cleanup();
    };
  }, [params.id]);

  const onPrevClick = () => {
    navigate(`/monsters/detail/${Number(params.id) - 1}`);
  };

  const onNextClick = () => {
    navigate(`/monsters/detail/${Number(params.id) + 1}`);
  };

  return monster.id ? (
    <div className="urlParameters">
      <div className="btnWrapper">
        <button onClick={() => navigate(`/monsters`)}>Back to Monsters List</button>
      </div>
      <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email} />
      <div className="btnWrapper">
        <button onClick={onPrevClick}>Previous</button>
        <button onClick={onNextClick}>Next</button>
      </div>
    </div>
  ) : null;
}

export default MonsterDetail;
