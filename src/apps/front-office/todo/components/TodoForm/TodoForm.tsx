import { trans } from "@mongez/localization";
import { useRef } from "react";
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
        className="px-2 flex bg-gray-900 items-center py-4 font-opensans"
        onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder={trans("placeholderText")}
          className="outline-none bg-transparent border border-gray-500 p-2 w-[500px] rounded
        placeholder:text-gray-600 placeholder:text-xl text-gray-400"
        />

        <button
          className="bg-blue-300 text-black border-none font-bold py-2 px-4
                  cursor-pointer rounded ml-2 rtl:mr-2">
          {/* <CiCirclePlus size={30} /> */}
          {trans("addBtn")}
        </button>
      </form>
    </div>
  );
}
