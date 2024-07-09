import { todoAtom } from "../../atoms/todo-atom";
import TodoItem from "../TodoItem";

export default function TodoList() {
  const tasks = todoAtom.value;
  return (
    <>
      <ul>
        {tasks.map(todo => (
          <TodoItem key={todo.id} task={todo} />
        ))}
      </ul>
    </>
  );
}
