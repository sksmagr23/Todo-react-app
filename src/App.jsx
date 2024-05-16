import "./App.css";
import { useState, useEffect } from "react";

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiStickyNoteAddLine } from "react-icons/ri";


import Header from "./components/Header";


function App() {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState(() => {
    const todoString = localStorage.getItem("todos");
    return todoString ? JSON.parse(todoString) : [];
  });

  useEffect(() => {
    const todoString = JSON.stringify(todos);
    localStorage.setItem("todos", todoString);
  }, [todos]);

  const savelocal = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAdd = () => {
    const newTodo = {
      todo: todo,
      isCompleted: false,
      timestamp: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
    setTodo("");
    savelocal();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleToggle = (index) => {
    const updatedTodos = todos.map((item, i) => {
      if (i === index) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodos(updatedTodos);
    savelocal();
  };

  const handleEdit = (index) => {
    let t = todos.filter((item, i) => i === index);
    setTodo(t[0].todo);
    const updatedTodos = todos.filter((item, i) => i !== index);
    setTodos(updatedTodos);
    savelocal();
  };

  const handleRemove = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this todo?");
    if (isConfirmed) {
      const updatedTodos = todos.filter((item, i) => i !== index);
      setTodos(updatedTodos);
      savelocal();
    }
  };
  
  return (
    <>
      <Header />

      <div className=" mx-2 md:container md:mx-auto my-10 p-3 bg-teal-200 rounded-xl min-h-[80vh] md:w-3/4 shadow-lg">
        <div className="addTodo my-5 flex flex-col gap-4 text-center">
          <h2 className="text-xl font-bold">ADD YOUR ToDo</h2>
          <div className="flex">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-full rounded-md px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={handleAdd}
            disabled = {todo.length<1}
            className="bg-teal-700 text-white hover:bg-white hover:text-teal-950 p-2 px-2.5 rounded-md mx-6 font-semibold transition duration-500 active:bg-black active:text-white shadow-md"
          >
            <RiStickyNoteAddLine />
          </button>

          </div>
        </div>
        <hr className="h-0.5 bg-teal-800"></hr>
        <h1 className="text-2xl my-2 font-extrabold">MY TASKS </h1>

        <div className="todos">
          {todos.map((item, index) => {
            return (
              <div
                key={index}
                className={`todo flex my-2.5 justify-between hover:shadow-md transition duration-300`}
              >
                <div className="flex gap-5">
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() => handleToggle(index)}
                  />
                  <div
                    className={`font-semibold text-lg ${
                      item.isCompleted ? "line-through" : ""
                    }`}
                  >
                    {item.todo}
                    <div className="text-xs text-gray-500">{new Date(item.timestamp).toLocaleString()}</div>
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-teal-700 text-white hover:bg-white hover:text-teal-950 p-2 py-1 rounded-md mx-2 font-semibold transition duration-500 active:bg-black active:text-white shadow-md"
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    onClick={() => handleRemove(index)}
                    className="bg-teal-700 text-white hover:bg-white hover:text-teal-950 p-2 py-1 rounded-md mx-2 font-semibold transition duration-500 active:bg-black active:text-white shadow-md"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
