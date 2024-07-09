import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { TodoListItem } from "../types";

type TodoListItemActions = {
  addTask: (text: string) => void;
  deleteTask: (task: TodoListItem) => void;
  updateTask: (task: TodoListItem, text: string) => void;
  refresh: () => void;
  toggleTask: (task: TodoListItem) => void;
};

export const todoAtom = atom<TodoListItem[], TodoListItemActions>({
  key: "todoItems",
  default: cache.get("tasks", []),
  beforeUpdate(tasks) {
    cache.set("tasks", tasks);
    return tasks;
  },
  actions: {
    refresh() {
      todoAtom.update([...todoAtom.value]);
    },
    toggleTask: (task: TodoListItem) => {
      task.completed = !task.completed;
      todoAtom.refresh();
    },
    addTask: (text: string) => {
      const list = todoAtom.value;
      list.push({
        id: Date.now(),
        text,
        completed: false,
      });

      todoAtom.update([...list]);
    },
    deleteTask: (task: TodoListItem) => {
      const filteredTasks = todoAtom.value.filter(item => item.id !== task.id);
      todoAtom.update(filteredTasks);
    },
    updatedTask: (task: TodoListItem, updateText: string) => {
      task.text = updateText;
      todoAtom.refresh();
    },
  },
});
