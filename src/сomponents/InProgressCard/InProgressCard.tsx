import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Stopwatch from "../Stopwatch/Stopwatch";
import cardIco from "../../img/card-text.svg";
import "./InProgressCard.scss";

function InProgressCard(props: {
  task: string;
  id: string;
  resolveTask: (data: {text: string, id: string}) => void;
}) {
  const [isPaused, setIsPaused] = useState(true);

  //Завершить таск
  const handleResolve = () => {
    props.resolveTask({text: props.task, id: props.id});
    setIsPaused(true);
  };

  return (
    <Card className="InProgressCard">
      <Card.Body className="InProgressCard__content d-flex p-2">
        <div className="InProgressCard__container d-flex">
          <div className="d-flex">
            <img
              className="InProgressCard__content-image mr-2"
              src={cardIco}
              alt="card icon"
            />

            <Card.Title className="InProgressCard__text text-secondary">{props.task}</Card.Title>
          </div>
          <Stopwatch
            id={props.id}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
          />
        </div>
        <Button
          variant="success"
          className="InProgressCard__button m-3"
          size="lg"
          onClick={handleResolve}
        >
          Resolve
        </Button>
      </Card.Body>
    </Card>
  );
}

export default InProgressCard;
