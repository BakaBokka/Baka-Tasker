import React from "react";
import { Card } from "react-bootstrap";
import cardIco from "../../img/card-text.svg";
import { RATE } from "../../constants/constants";
import "./DoneCard.scss";

function DoneCard(props: { task: string; id: string }) {
  const timerData: string = localStorage.getItem(`timer${props.id}`)
    ? localStorage.getItem(`timer${props.id}`) || ""
    : "";

  //Форматер суммы
  const summ = +timerData * (RATE / 3600);
  const formatSumm = () => {
    const reg = ` рублей `;
    return summ.toFixed(2).toString().replace(/[,.]/g, reg);
  };

  //Форматер таймера
  const formatTime = () => {
    const getSeconds = `0${+timerData % 60}`.slice(-2);
    const minutes = `${Math.floor(+timerData / 60)}`;
    const getMinutes = `0${+minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(+timerData / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

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

            <Card.Title className="DoneCard__text text-secondary">
              {props.task}
            </Card.Title>
          </div>
          <p className="DoneCard__time">{formatTime()}</p>
          <span className="DoneCard__summ"> {`${formatSumm()} копеек`} </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DoneCard;
