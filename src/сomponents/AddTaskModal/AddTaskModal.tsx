import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {generateId} from "../../utils/helpers"
import "./AddTaskModal.scss";

function AddTaskModal(props: {
  onHide: () => void;
  id: number;
  show: boolean;
  addTask: (data: {text: string, id: string}) => void;
}) {
  const [value, setValue] = useState<string>("");
  const [id, setId] = useState<number>(0)

  useEffect(() => {
    setId(generateId())
  }, [value])

  //Оброботка сабмита
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.addTask({text: value, id: id + value});
    props.onHide();
    setValue("");
  };

  return (
    <Modal
      className="AddTaskModal"
      show={props.show}
      onHide={props.onHide}
      centered={true}
      autoFocus
    >
      <Modal.Header closeButton>
        <Modal.Title>What's your new task?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="AddTaskModal__form d-flex" autoComplete="off">
          <Form.Group className="AddTaskModal__form-content" controlId="form">
            <Form.Control
              type="text"
              placeholder="Type your task here"
              autoFocus
              value={value}
              onChange={(e: { target: { value: string } }) =>
                setValue(e.target.value)
              }
            />
          </Form.Group>

          <Button
            className="AddTaskModal__button"
            variant="primary"
            type="submit"
            onClick={(e: React.MouseEvent) => handleClick(e)}
          >
            Add
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddTaskModal;
