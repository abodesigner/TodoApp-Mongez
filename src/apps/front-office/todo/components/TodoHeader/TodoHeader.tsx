import { trans } from "@mongez/localization";
import { todoAtom } from "../../atoms/todo-atom";

export default function TodoHeader() {
  const todos = todoAtom.useValue();
  const completedTasks = todos.filter(todo => todo.completed).length;
  return (
    <>
      <div
        className="flex justify-between items-center text-center font-bold p-6 bg-gray-900 text-white w-[600px]
                        my-8 text-2xl">
        <div className="flex flex-col">
          <h2 className="text-gray-500 text-5xl mb-2">{trans("titleText")}</h2>
          <p className="text-xl text-gray-600">{trans("bio")}</p>
        </div>
        <div className="flex justify-center items-center bg-blue-300 rounded-full text-black p-10 text-4xl text-center h-40 w-40">
          {completedTasks}/{todos.length}
        </div>
      </div>
    </>
  );
}
