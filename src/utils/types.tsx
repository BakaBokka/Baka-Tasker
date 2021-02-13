export type Task = {
  text: string;
  id: string;
  date: string;
  timer?: number;
  summ?: string;
};

export type ClosedTasksType = {
  [id: string]: {
    text: string;
    id: string;
    date: string;
    timer?: number;
    summ?: string;
  };
};

export type TasksDataType = {
  tasks: Task[];
  inProgress: Task[];
  done: Task[];
  closed: Task[];
};

export type ModalType = "add" | "checkout" | undefined;
