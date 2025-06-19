import { RiStickyNoteAddLine } from "react-icons/ri";
import { FaRegSave } from "react-icons/fa";

export default function TodoForm({
  todoInput,
  setTodoInput,
  editingId,
  addTodo,
  updateTodo,
  dueDate,
  setDueDate,
  priority,
  setPriority,
  category,
  setCategory,
  PRIORITY_LEVELS,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateTodo();
    } else {
      addTodo();
    }
  };

  return (
    <div className="glass-card p-5 my-5">
      <h2 className="text-xl font-bold mb-4 text-center text-teal-800">
        {editingId ? "Edit Todo" : "Add New Todo"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white/60"
            type="text"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Due date */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white/60"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white/60"
            >
              <option value={PRIORITY_LEVELS.LOW}>Low</option>
              <option value={PRIORITY_LEVELS.MEDIUM}>Medium</option>
              <option value={PRIORITY_LEVELS.HIGH}>High</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white/60"
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="shopping">Shopping</option>
              <option value="health">Health</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={todoInput.trim().length < 1}
            className="btn btn-primary flex items-center gap-2 disabled:opacity-50"
          >
            {editingId ? (
              <>
                <FaRegSave /> Save Changes
              </>
            ) : (
              <>
                <RiStickyNoteAddLine /> Add Todo
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}