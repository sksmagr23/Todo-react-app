import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    todoInput,
    setTodoInput,
    editingId,
    dueDate,
    setDueDate,
    priority,
    setPriority,
    category,
    setCategory,
    addTodo,
    startEditing,
    updateTodo,
    toggleTodo,
    deleteTodo,
    stats,
    PRIORITY_LEVELS,
    CATEGORY_COLORS,
  } = useTodos();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-teal-300 to-sky-200 transition-colors duration-300">
        <Header />
        
        <div className="container mx-auto py-8 px-4 max-w-4xl">
          
          <TodoForm
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            editingId={editingId}
            addTodo={addTodo}
            updateTodo={updateTodo}
            dueDate={dueDate}
            setDueDate={setDueDate}
            priority={priority}
            setPriority={setPriority}
            category={category}
            setCategory={setCategory}
            PRIORITY_LEVELS={PRIORITY_LEVELS}
          />
          
          <TodoStats stats={stats} />
          
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4 text-teal-800">My Tasks</h2>
            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              startEditing={startEditing}
              deleteTodo={deleteTodo}
              CATEGORY_COLORS={CATEGORY_COLORS}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;