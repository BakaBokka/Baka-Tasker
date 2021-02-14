import React, { useState } from "react";
import { CardColumns, Card } from "react-bootstrap";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import GetTotalModal from "../GetTotalModal/GetTotalModal";
import ToDoCard from "../ToDoCard/ToDoCard";
import InProgressCard from "../InProgressCard/InProgressCard";
import DoneCard from "../DoneCard/DoneCard";
import CommonButton from "../CommonButton/CommonButton";
import { Task, TasksDataType, ModalType } from "../../utils/types";
import "./Kanban.scss";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function Kanban() {
  const tasksData: TasksDataType = {
    tasks: localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks") || "")
      : [],
    inProgress: localStorage.getItem("inProgress")
      ? JSON.parse(localStorage.getItem("inProgress") || "")
      : [],
    done: localStorage.getItem("done")
      ? JSON.parse(localStorage.getItem("done") || "")
      : [],
    closed: localStorage.getItem("closed")
      ? JSON.parse(localStorage.getItem("closed") || "")
      : [],
  };

  const [tasks, setTasks] = useState<TasksDataType>(tasksData);
  const [modalType, setModalType] = useState<ModalType>();

  //Добавление таска
  const addTodo = async (data: Task) => {
    await localStorage.setItem("tasks", JSON.stringify([...tasks.tasks, data]));

    setTasks({
      ...tasksData,
      tasks: JSON.parse(localStorage.getItem("tasks") || ""),
    });
  };

  //Удаление таска
  const deleteTodo = async (id: string) => {
    const newTodos = tasks.tasks.filter(
      (todo: { id: string }) => todo.id !== id
    );
    await localStorage.setItem("tasks", JSON.stringify(newTodos));

    setTasks({
      ...tasksData,
      tasks: JSON.parse(localStorage.getItem("tasks") || ""),
    });
  };

  const deleteInProgress = async (id: string) => {
    const newInProgress = tasks.inProgress.filter(
      (task: { text: string; id: string }) => task.id !== id
    );
    await localStorage.setItem("inProgress", JSON.stringify(newInProgress));

    setTasks({
      ...tasksData,
      inProgress: JSON.parse(localStorage.getItem("inProgress") || ""),
    });
  };

  //Добавляем таски в inProgress
  const addInProgress = async (data: Task) => {
    deleteTodo(data.id);
    await localStorage.setItem(
      "inProgress",
      JSON.stringify([...tasks.inProgress, data])
    );

    setTasks({
      ...tasksData,
      tasks: JSON.parse(localStorage.getItem("tasks") || ""),
      inProgress: JSON.parse(localStorage.getItem("inProgress") || ""),
    });
  };

  //Добавляем таски в done
  const addDone = async (data: Task) => {
    deleteInProgress(data.id);
    await localStorage.setItem("done", JSON.stringify([...tasks.done, data]));

    setTasks({
      ...tasksData,
      tasks: JSON.parse(localStorage.getItem("tasks") || ""),
      inProgress: JSON.parse(localStorage.getItem("inProgress") || ""),
      done: JSON.parse(localStorage.getItem("done") || ""),
    });
    localStorage.removeItem(`timer${data.id}`);
  };

  const getTotal = async () => {
    await localStorage.setItem(
      "closed",
      JSON.stringify([...tasks.closed, ...tasks.done])
    );
    localStorage.removeItem("done");
    setTasks({
      ...tasksData,
      done: [],
      closed: JSON.parse(localStorage.getItem("closed") || ""),
    });
  };

  //Собираем таски
  const todoCards =
    tasks.tasks &&
    tasks.tasks.map((todo: Task) => {
      return (
        <ToDoCard
          todo={todo.text}
          id={todo.id}
          key={todo.id}
          startTask={addInProgress}
        />
      );
    });

  const inProgressCards =
    tasks.inProgress &&
    tasks.inProgress.map((task: Task) => {
      return (
        <InProgressCard
          task={task.text}
          id={task.id}
          key={task.id}
          resolveTask={addDone}
        />
      );
    });

  const doneCards =
    tasks.done &&
    tasks.done.map((task: Task) => {
      return (
        <DoneCard
          task={task.text}
          id={task.id}
          timer={task.timer}
          summ={task.summ}
          key={task.id}
        />
      );
    });

  //Обработчики
  const handleOpenModal = () => {
    setModalType("total");
    getTotal();
  };
  const handleCloseModal = () => {
    setModalType(undefined);
  };

  return (
    <div className="Kanban">
      <AddTaskModal
        onHide={handleCloseModal}
        id={1}
        addTask={addTodo}
        modalType={modalType}
      />

      <GetTotalModal
        onHide={handleCloseModal}
        modalType={modalType}
        closedTasks={tasks.closed}
      />

      <CardColumns className="Kanban__content p-3 d-flex">
        <Card className="Kanban__column" bg="light">
          <Card.Body className="Kanban__column-content p-2 mb-3">
            <div className="Kanban__column-header d-flex">
              <span className="Kanban__counter">
                {tasks.tasks && tasks.tasks.length}
              </span>
              <Card.Title className="Kanban__content-title">To do</Card.Title>
            </div>

            {todoCards}
          </Card.Body>
          <footer className="Kanban__column-footer">
            <CommonButton onClick={() => setModalType("add")} text="New Task" />
          </footer>
        </Card>

        <Card className="Kanban__column" bg="light">
          <Card.Body
            className="Kanban__column-content p-2"
            style={{ height: "100%" }}
          >
            <div className="Kanban__column-header d-flex">
              <span className="Kanban__counter">
                {tasks.inProgress && tasks.inProgress.length}
              </span>
              <Card.Title className="Kanban__content-title">
                In progress
              </Card.Title>
            </div>
            {inProgressCards}
          </Card.Body>
        </Card>

        <Card className="Kanban__column" bg="light">
          <Card.Body className="Kanban__column-content p-2 mb-3">
            <div className="Kanban__column-header d-flex">
              <span className="Kanban__counter">
                {tasks.done && tasks.done.length}
              </span>
              <Card.Title className="Kanban__content-title">Done</Card.Title>
            </div>
            {doneCards}
          </Card.Body>
          <footer className="Kanban__column-footer">
            <CommonButton onClick={handleOpenModal} text="Get total" />
          </footer>
        </Card>
      </CardColumns>
    </div>
  );
}

export default Kanban;
