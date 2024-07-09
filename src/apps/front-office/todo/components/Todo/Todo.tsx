import TodoForm from "../TodoForm";
import TodoHeader from "../TodoHeader";
import TodoListContainer from "../TodoListContainer";

export default function Todo() {
  console.log("Rendering Todo");
  return (
    <>
      <TodoHeader />
      <div className="bg-gray-800">
        <TodoForm />
      </div>
      <TodoListContainer />
    </>
  );
}
