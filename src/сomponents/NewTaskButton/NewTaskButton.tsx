import React from "react";
import { Button } from "react-bootstrap";
import "./NewTaskButton.scss";

function NewTaskButton(props: { setShow: (show: boolean) => void }) {
  return (
    <Button
      className="NewTaskButton"
      variant="outline-secondary"
      style={{ fontWeight: "bolder" }}
      onClick={() => props.setShow(true)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="NewTaskButton__image bi bi-plus"
        viewBox="0 0 16 16"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
      New Task
    </Button>
  );
}

export default NewTaskButton;
