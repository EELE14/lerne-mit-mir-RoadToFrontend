import { todos } from "../data/todos";
import { type Todo } from "../types/todo";
import { Trash } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompletedChange,
  onDelete,
}: TodoItemProps) {
  function handleDelete() {
    onDelete(todo.id);
  }
  return (
    <>
      <div className="flex items-center gap-2">
        <label className="flexbox items-center gap-2 border rounded p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
          <input
            className="scale-125"
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          />
          <span className={todo.completed ? "line-through text-gray-400" : ""}>
            {todo.title}
          </span>
        </label>
        <button
          type="button"
          className="h-full"
          onClick={handleDelete}
          aria-label={`Delete ${todo.title}`}
        >
          <Trash
            size={20}
            className="rounded shadow-amber-50 hover:bg-slate-300 h-full"
          />
        </button>
      </div>
      {todos.length === 0 && (
        <p className="text-center text-gray-800 text-sm text-shadow-amber-100">
          No todos available.
        </p>
      )}
    </>
  );
}
