import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { todoAtom } from "../../atoms/todo-atom";
import { TodoListItem } from "../../types";

export type TodoItemProps = {
  task: TodoListItem;
};
export default function TodoItem({ task }: TodoItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [editingText, setEditingText] = useState(task.text);
  const handleDelete = () => {
    todoAtom.deleteTask(task);
  };
  const handleUpdate = () => {
    task.text = editingText.trim();
    todoAtom.refresh();
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCompletedTasks = () => {
    todoAtom.toggleTask(task);
  };

  return (
    <>
      <div className="bg-gray-800 outline-none bg-transparent border border-gray-600 p-2 w-[600px] text-gray my-4 rounded">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onClick={handleCompletedTasks}
              className="h-4 w-4 rounded border-yellow-500 text-indigo-600 focus:ring-indigo-600"
            />

            {isEdit ? (
              <input
                className="bg-transparent w-[400px] outline-none text-white text-3xl p-2"
                type="text"
                value={editingText}
                onChange={e => setEditingText(e.target.value)}
                onBlur={handleUpdate}
                autoFocus
              />
            ) : (
              <p
                className={`text-gray-400 text-xl ${task.completed ? "line-through" : null} ltr:ml-4 rtl:mr-4`}
                onClick={handleCompletedTasks}>
                {task.text.trim().toLowerCase()}
              </p>
            )}
          </div>

          <div className="flex items-center justify-center gap-x-2">
            <button
              className="flex items-center bg-gray-900 rounded-3xl justify-around p-2 text-red-500 rounded"
              onClick={handleDelete}>
              <RiDeleteBinFill size={20} />
            </button>
            <button
              className="flex items-center bg-gray-900 rounded-3xl justify-around p-2 text-blue-500 rounded"
              onClick={handleEdit}>
              <FaEdit size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
