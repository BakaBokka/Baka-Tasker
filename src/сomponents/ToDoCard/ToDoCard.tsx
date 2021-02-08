import React from "react";
import { Card, Button } from "react-bootstrap";
import cardIco from "../../img/card-text.svg";
import "./ToDoCard.scss";

function ToDoCard(props: {
  todo: string;
  id: string;
  startTask: (data: { text: string; id: string }) => void;
}) {
  //Принять таск
  const handleStart = () => {
    props.startTask({ text: props.todo, id: props.id });
  };

  

  return (
    <Card className="ToDoCard" id={"" + props.id}>
      <Card.Body className="ToDoCard__content d-flex p-2">
        <div className="d-flex">
          <img
            className="ToDoCard__content-image mr-2"
            src={cardIco}
            alt="card icon"
          />
          <Card.Title className="ToDoCard__text text-secondary">
            {props.todo}
          </Card.Title>
        </div>
        <Button
          className="ToDoCard__button m-3"
          size="lg"
          id={"" + props.id}
          onClick={handleStart}
        >
          Start
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ToDoCard;
