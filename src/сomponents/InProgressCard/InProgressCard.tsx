import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Stopwatch from "../Stopwatch/Stopwatch";
import cardIco from "../../img/card-text.svg";
import { formatDate, formatSumm, formatTime } from "../../utils/helpers";
import "./InProgressCard.scss";

function InProgressCard(props: {
  task: string;
  id: string;
  resolveTask: (data: {
    text: string;
    id: string;
    date: string;
    timer: string;
    summ: string;
  }) => void;
}) {
  const timerData: string = localStorage.getItem(`timer${props.id}`)
    ? localStorage.getItem(`timer${props.id}`) || ""
    : "";

  const [timer, setTimer] = useState(+timerData);

  const [isPaused, setIsPaused] = useState(true);

  //Завершить таск
  const handleResolve = () => {
    const date = new Date();
    props.resolveTask({
      text: props.task,
      id: props.id,
      date: formatDate(date),
      timer: formatTime(timer),
      summ: `${formatSumm(timer)} копеек`,
    });
    setIsPaused(true);
  };

  return (
    <Card className="InProgressCard">
      <Card.Body className="InProgressCard__content d-flex p-2">
        <div className="d-flex">
          <img
            className="InProgressCard__content-image mr-2"
            src={cardIco}
            alt="card icon"
          />

          <Card.Title className="InProgressCard__text text-secondary">
            {props.task}
          </Card.Title>
        </div>

        <div className="InProgressCard__controls d-flex">
          <Stopwatch
            id={props.id}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
            timer={timer}
            setTimer={setTimer}
          />
          <Button
            variant="success"
            className="InProgressCard__button"
            size="lg"
            onClick={handleResolve}
          >
            Resolve
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default InProgressCard;
