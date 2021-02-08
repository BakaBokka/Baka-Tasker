import React, { useState } from "react";
import { CardColumns, Card } from "react-bootstrap";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import ToDoCard from "../ToDoCard/ToDoCard";
import InProgressCard from "../InProgressCard/InProgressCard";
import DoneCard from "../DoneCard/DoneCard";
import NewTaskButton from "../NewTaskButton/NewTaskButton";
import {TasksDataType} from "../../utils/types"
import "./Kanban.scss";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function Kanban() {
  const tasksData: TasksDataType = {
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos") || "")
      : [],
    inProgress: localStorage.getItem("inProgress")
      ? JSON.parse(localStorage.getItem("inProgress") || "")
      : [],
    done: localStorage.getItem("done")
      ? JSON.parse(localStorage.getItem("done") || "")
      : [],
  };

  const [tasks, setTasks] = useState<TasksDataType>(tasksData);
  const [show, setShow] = useState<boolean>(false);

  //Добавление таска
  const addTodo = async (data: { text: string; id: string }) => {
    await localStorage.setItem("todos", JSON.stringify([...tasks.todos, data]));

    setTasks({
      ...tasksData,
      todos: JSON.parse(localStorage.getItem("todos") || ""),
    });
  };

  //Удаление таска
  const deleteTodo = async (id: string) => {
    const newTodos = tasks.todos.filter(
      (todo: { id: string }) => todo.id !== id
    );
    console.log(newTodos);
    await localStorage.setItem("todos", JSON.stringify(newTodos));

    setTasks({
      ...tasksData,
      todos: JSON.parse(localStorage.getItem("todos") || ""),
    });
  };

  const deleteInProgress = async (id: string) => {
    const newInProgress = tasks.inProgress.filter(
      (task: { text: string; id: string }) => task.id !== id
    );
    await localStorage.setItem("inProgress", JSON.stringify(newInProgress));

    setTasks({
      ...tasksData,
      todos: JSON.parse(localStorage.getItem("inProgress") || ""),
    });
  };

  //Добавляем таски в inProgress
  const addInProgress = async (data: { text: string; id: string }) => {
    deleteTodo(data.id);
    await localStorage.setItem(
      "inProgress",
      JSON.stringify([...tasks.inProgress, data])
    );

    setTasks({
      ...tasksData,
      todos: JSON.parse(localStorage.getItem("todos") || ""),
      inProgress: JSON.parse(localStorage.getItem("inProgress") || ""),
    });
  };

  //Добавляем таски в done
  const addDone = async (data: { text: string; id: string }) => {
    deleteInProgress(data.id);
    await localStorage.setItem("done", JSON.stringify([...tasks.done, data]));

    setTasks({
      ...tasksData,
      todos: JSON.parse(localStorage.getItem("todos") || ""),
      inProgress: JSON.parse(localStorage.getItem("inProgress") || ""),
      done: JSON.parse(localStorage.getItem("done") || ""),
    });
  };

  //Собираем таски
  const todoCards =
    tasks.todos &&
    tasks.todos.map((todo: { text: string; id: string }) => {
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
    tasks.inProgress.map((task: { text: string; id: string }) => {
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
    tasks.done.map((task: { text: string; id: string }) => {
      return <DoneCard task={task.text} id={task.id} key={task.id} />;
    });

  //Обработчики
  const handleCloseModal = () => {
    setShow(false);
  };
  const handleSubmit = (data: { text: string; id: string }) => {
    addTodo(data);
  };

  return (
    <div className="Kanban">
      <AddTaskModal
        show={show}
        onHide={handleCloseModal}
        id={1}
        addTask={handleSubmit}
      />
      <CardColumns className="Kanban__content p-3 d-flex">
        <Card className="Kanban__column" bg="light">
          <Card.Body className="p-2 mb-3">
            <div className="Kanban__content-header d-flex">
              <span className="Kanban__counter">
                {tasks.todos && tasks.todos.length}
              </span>
              <Card.Title className="Kanban__content-title">To do</Card.Title>
            </div>

            {todoCards}
          </Card.Body>
          <NewTaskButton setShow={setShow} />
        </Card>

        <Card className="Kanban__column" bg="light">
          <Card.Body className="p-2">
            <div className="Kanban__content-header d-flex">
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
          <Card.Body className="p-2">
            <div className="Kanban__content-header d-flex">
              <span className="Kanban__counter">
                {tasks.done && tasks.done.length}
              </span>
              <Card.Title className="Kanban__content-title">Done</Card.Title>
            </div>
            {doneCards}
          </Card.Body>
        </Card>
      </CardColumns>
    </div>
  );
}

export default Kanban;
