import { todoAtom } from "../../atoms/todo-atom";
import TodoEmptyList from "../TodoList/TodoEmptyList";
import TodoList from "../TodoList/TodoList";

export default function TodoListContainer() {
  const tasks = todoAtom.useValue();

  if (tasks.length === 0) {
    return <TodoEmptyList />;
  }

  return <TodoList />;
}
