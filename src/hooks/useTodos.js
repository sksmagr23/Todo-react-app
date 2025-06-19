import { useState, useEffect } from "react";

const PRIORITY_LEVELS = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const CATEGORY_COLORS = {
  work: "blue",
  personal: "purple",
  shopping: "orange",
  health: "green",
  other: "gray",
};

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const todoString = localStorage.getItem("todos");
    try {
      const parsedTodos = JSON.parse(todoString) || [];
      return parsedTodos.filter(todo => todo && typeof todo === 'object');
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      return [];
    }
  });

  const [todoInput, setTodoInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState(PRIORITY_LEVELS.MEDIUM);
  const [category, setCategory] = useState("other");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!todoInput.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: todoInput,
      isCompleted: false,
      timestamp: new Date().toISOString(),
      dueDate: dueDate || null,
      priority,
      category,
    };
    
    setTodos([...todos, newTodo]);
    setTodoInput("");
    setDueDate("");
    setPriority(PRIORITY_LEVELS.MEDIUM);
    setCategory("other");
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setTodoInput(todo.text || "");
    setDueDate(todo.dueDate || "");
    setPriority(todo.priority || PRIORITY_LEVELS.MEDIUM);
    setCategory(todo.category || "other");
  };

  const updateTodo = () => {
    if (!todoInput.trim()) return;
    
    setTodos(todos.map(todo => 
      todo.id === editingId 
        ? { 
            ...todo, 
            text: todoInput,
            dueDate: dueDate || null,
            priority,
            category
          } 
        : todo
    ));
    
    setTodoInput("");
    setEditingId(null);
    setDueDate("");
    setPriority(PRIORITY_LEVELS.MEDIUM);
    setCategory("other");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, isCompleted: !todo.isCompleted } 
        : todo
    ));
  };

  const deleteTodo = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this todo?");
    if (isConfirmed) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  const stats = {
    total: todos.length,
    active: todos.filter(t => !t.isCompleted).length,
    completed: todos.filter(t => t.isCompleted).length,
  };

  return {
    todos,
    todoInput,
    setTodoInput,
    editingId,
    searchQuery,
    setSearchQuery,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    selectedCategory,
    setSelectedCategory,
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
  };
}