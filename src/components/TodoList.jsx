import TodoItem from "./TodoItem";

export default function TodoList({ 
  todos, 
  toggleTodo, 
  startEditing, 
  deleteTodo,
  CATEGORY_COLORS
}) {
  if (todos.length === 0) {
    return (
      <div className="glass-card p-10 text-center">
        <p className="text-gray-500">No todos found</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          startEditing={startEditing}
          deleteTodo={deleteTodo}
          CATEGORY_COLORS={CATEGORY_COLORS}
        />
      ))}
    </div>
  );
}