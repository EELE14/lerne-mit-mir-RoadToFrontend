import AddTodoForm from "../components/AddTodoForm";
import TodoItem from "../components/TodoItem";
import { todos } from "../data/todos";
import { useState } from "react";
import Prism from "../components/Prism";
import Navbar from "../components/Navbar";

export default function Home() {
  const [Todos, setTodos] = useState(todos);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function AddTodo(title: string) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
    ]);
  }

  function DeleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-start space-y-5 px-4 pt-12">
        <h1 className="font-bold text-3xl text-center text-blue-950">
          Your Todos
        </h1>
        <div className="max-w-lg w-full mx-auto bg-white/60 backdrop-blur-sm rounded-md p-5 shadow-2xl space-y-6">
          <AddTodoForm onSubmit={AddTodo} />
          <div className="space-y-4">
            {Todos.map((todo) => (
              <TodoItem
                onCompletedChange={setTodoCompleted}
                onDelete={DeleteTodo}
                todo={todo}
                key={todo.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
