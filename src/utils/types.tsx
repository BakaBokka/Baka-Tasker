export type Task = {
  text: string;
  id: string;
};

export type TasksDataType = {
  todos: Task[];
  inProgress: Task[];
  done: Task[];
};