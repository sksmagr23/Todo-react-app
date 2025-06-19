import { FaRegEdit, FaRegClock } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function TodoItem({ 
  todo, 
  toggleTodo, 
  startEditing, 
  deleteTodo,
  CATEGORY_COLORS
}) {
  const priorityColors = {
    low: "bg-green-200 text-green-800",
    medium: "bg-amber-200 text-amber-800",
    high: "bg-red-200 text-red-800"
  };

  const categoryColors = {
    work: "bg-blue-200 text-blue-800",
    personal: "bg-purple-200 text-purple-800",
    shopping: "bg-orange-200 text-orange-800",
    health: "bg-green-200 text-green-800", 
    other: "bg-gray-200 text-gray-800"
  };

  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.isCompleted;
  
  return (
    <div className={`glass-card p-4 mb-3 transition-all ${todo.isCompleted ? 'opacity-70' : ''} ${isOverdue ? 'border-l-4 border-red-500' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3 flex-grow">
          <div className="pt-1">
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleTodo(todo.id)}
              className="h-5 w-5 rounded-md border-gray-300 accent-teal-600 cursor-pointer"
            />
          </div>
          
          <div className="flex-grow">
            <div className={`font-medium text-lg ${todo.isCompleted ? 'line-through text-gray-500' : ''}`}>
              {todo.text}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2 items-center text-xs">
              <span className="text-gray-500 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {new Date(todo.timestamp).toLocaleString()}
              </span>
              
              {todo.dueDate && (
                <span className={`flex items-center gap-1 ${isOverdue ? 'text-red-600 font-medium' : 'text-gray-500'}`}>
                  <FaRegClock className="h-3 w-3" />
                  Due: {new Date(todo.dueDate).toLocaleDateString()}
                </span>
              )}
              
              <span className={`px-2 py-0.5 rounded-full text-xs ${priorityColors[todo.priority || 'medium']}`}>
                {todo.priority || 'medium'}
              </span>
              
              <span className={`px-2 py-0.5 rounded-full text-xs ${categoryColors[todo.category || 'other']}`}>
                {todo.category || 'other'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-1">
          <button
            onClick={() => startEditing(todo)}
            className="btn-icon text-teal-600"
            aria-label="Edit todo"
          >
            <FaRegEdit />
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="btn-icon text-red-600"
            aria-label="Delete todo"
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
}