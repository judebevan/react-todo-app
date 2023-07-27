import React, { useState } from "react";
import './Tasks.css';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="Container">
      <input
        className="CheckBox"
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span className="Task" style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button className="DelButton" onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodoItem: Todo = {
      id: newId,
      text: newTodo,
      done: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div>
      <div className="Heading"><h6>My Tasks!</h6></div>
      <div>
        <input
          className="TaskInput"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="InButton" onClick={handleAddTodo}>Add</button>
      </div>
      <div className="AddedTasks">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onToggle={handleToggleTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList; 
