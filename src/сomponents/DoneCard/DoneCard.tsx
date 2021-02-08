import React from "react";
import { Card } from "react-bootstrap";
import cardIco from "../../img/card-text.svg";
import "./DoneCard.scss";

function DoneCard(props: { task: string; id: string }) {
  const timerData: string = localStorage.getItem(`timer${props.id}`)
    ? localStorage.getItem(`timer${props.id}`) || ""
    : "";
  const summ = `${Math.ceil(+timerData * 0.2777777777777778)} ₽`;

  return (
    <Card className="DoneCard">
      <Card.Body className="DoneCard__content d-flex p-2">
        <div className="DoneCard__container d-flex">
          <div className="d-flex">
            <img
              className="DoneCard__content-image mr-2"
              src={cardIco}
              alt="card icon"
            />

            <Card.Title className="DoneCard__text text-secondary">{props.task}</Card.Title>
          </div>
          <span className="DoneCard__summ"> {summ} </span>

        </div>

      </Card.Body>
    </Card>
  );
}

export default DoneCard;
