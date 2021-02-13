import React, {useMemo} from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalType, Task } from "../../utils/types";
import CheckoutTable from "../CheckoutTable/CheckoutTable";
import "./CheckoutModal.scss";

function CheckoutModal(props: {
  onHide: () => void;
  modalType: ModalType;
  closedTasks: Task[];
}) {
  const show = props.modalType === "checkout" ? true : false;

  //Оброботка сабмита
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    props.onHide();
  };

  const data = useMemo(
    () => props.closedTasks,
    [props.closedTasks]
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Task',
        accessor:"text" // accessor is the "key" in the data
      },
      {
        Header: 'Timer',
        accessor: 'timer',
      },
      {
        Header: 'Summ',
        accessor: 'summ',
      },
      {
        Header: 'Time',
        accessor: 'date',
      },
    ],
    []
  )

  return (
    <Modal
      className="CheckoutModal"
      show={show}
      onHide={props.onHide}
      centered={true}
      autoFocus={false}
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Give me more...</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <CheckoutTable data={data} columns={columns} />
        <Button
          className="CheckoutModal__button"
          variant="primary"
          type="submit"
          onClick={(e: React.MouseEvent) => handleClick(e)}
        >
          Add
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default CheckoutModal;
