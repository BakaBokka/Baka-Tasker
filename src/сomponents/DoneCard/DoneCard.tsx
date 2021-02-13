import React from "react";
import { Card } from "react-bootstrap";
import cardIco from "../../img/card-text.svg";
import "./DoneCard.scss";

function DoneCard(props: { task: string; id: string; timer?: string; summ?: string }) {
  return (
    <Card className="DoneCard">
      <Card.Body className="DoneCard__content d-flex p-2">
        <div className="d-flex">
          <img
            className="DoneCard__content-image mr-2"
            src={cardIco}
            alt="card icon"
          />

          <Card.Title className="DoneCard__text text-secondary">
            {props.task}
          </Card.Title>
        </div>
        <div className="DoneCard__container d-flex">
          <div>
            <p className="DoneCard__time">{props.timer}</p>
            <span className="DoneCard__summ">
              {`${props.summ}`}
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DoneCard;
