export type Task = {
  text: string;
  id: string;
  date: string;
  timer?: string;
  summ?: string;
};


export type TasksDataType = {
  tasks: Task[];
  inProgress: Task[];
  done: Task[];
  closed: Task[];
};

export type ModalType = "add" | "total" | undefined;
