import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { formatDate } from "../../utils/helpers";
import { ModalType } from "../../utils/types";
import { v4 as uuidv4 } from 'uuid';
import "./AddTaskModal.scss";

function AddTaskModal(props: {
  onHide: () => void;
  id: number;
  addTask: (data: { text: string; id: string; date: string }) => void;
  modalType: ModalType;
  }) {
  const [value, setValue] = useState<string>("");
  const [id, setId] = useState<string>("");
  const show = props.modalType === "add" ? true : false

  useEffect(() => {
    setId(uuidv4());
  }, [value]);

  //Оброботка сабмита
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const date = new Date();
    props.addTask({ text: value, id: id, date: formatDate(date) });
    props.onHide();
    setValue("");
  };

  return (
    <Modal
      className="AddTaskModal"
      show={show}
      onHide={props.onHide}
      centered={true}
      autoFocus={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>What's your new task?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="AddTaskModal__form d-flex" autoComplete="off">
          <Form.Group className="AddTaskModal__form-content" controlId="form">
            <Form.Control className="AddTaskModal__input"
              type="text"
              placeholder="Type your task here"

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
