import { useRef } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { todoAtom } from "../../atoms/todo-atom";

export default function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const taskInput = inputRef.current?.value?.trim();

    // check empty input
    if (!taskInput) {
      alert("Empty Field, plesae add any");
      return;
    }

    inputRef.current!.value = "";

    todoAtom.addTask(taskInput);
  };

  return (
    <div className="w-[600px] rounded-lg">
      <form
        className="px-2 flex items-center py-4 font-opensans"
        onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          className="outline-none bg-transparent border border-gray-500 p-2 w-[500px] rounded
        placeholder:text-gray-300 text-gray-400"
        />

        <button
          className="bg-yellow-600 border-none p-2
                 text-white cursor-pointer rounded ml-2">
          <CiCirclePlus size={30} />
        </button>
      </form>
    </div>
  );
}
