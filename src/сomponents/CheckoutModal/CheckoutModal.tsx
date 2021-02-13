import React, { useMemo } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalType, Task } from "../../utils/types";
import { formatSumm, reformatSumm } from "../../utils/helpers";
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

  //Подготовка данных для таблицы
  const data = useMemo(() => props.closedTasks, [props.closedTasks]);

  const columns = useMemo(
    () => [
      {
        Header: "Task",
        accessor: "text", // accessor is the "key" in the data
      },
      {
        Header: "Timer",
        accessor: "timer",
      },
      {
        Header: "Summ",
        accessor: "summ",
        Footer: (info: any) => {
          // Only calculate total visits if rows change
          const total = React.useMemo(
            () =>
              info.rows.reduce(
                (sum: number, row: any) => {
                  console.log(reformatSumm(row.values.summ));
                 return reformatSumm(row.values.summ) + sum},
                0
              ),
            [info.rows]
          );

          return <> <span style={{ fontWeight: "bolder"}}>Total:</span>  {`${formatSumm(total)} копеек`}</>;
        },
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );

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
        <Modal.Title>Sic transit gloria mundi.</Modal.Title>
      </Modal.Header>

      <Modal.Body  className="CheckoutModal__content">
        <CheckoutTable data={data} columns={columns} />
        <Button
          className="CheckoutModal__button"
          variant="primary"
          type="submit"
          onClick={(e: React.MouseEvent) => handleClick(e)}
        >
          There will be save button
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default CheckoutModal;
