import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";
import clsx from "clsx";

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  function addTask(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  }

  function toggleComplete(id) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function clearCompleted() {
    setTasks(tasks.filter((t) => !t.completed));
  }

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "active"
      ? tasks.filter((t) => !t.completed)
      : tasks.filter((t) => t.completed);

  return (
    <Card>
      <form onSubmit={addTask} className="flex mb-4">
        <input
          className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" variant="primary" className="rounded-l-none">
          Add
        </Button>
      </form>
      <div className="mb-4 flex gap-2">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        <Button variant="danger" onClick={clearCompleted}>
          Clear Completed
        </Button>
      </div>
      <ul>
        {filteredTasks.length === 0 && (
          <li className="text-gray-500">No tasks.</li>
        )}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between py-2 border-b last:border-b-0"
          >
            <span
              className={clsx(
                "flex-1 cursor-pointer",
                task.completed && "line-through text-gray-400"
              )}
              onClick={() => toggleComplete(task.id)}
              title="Toggle Complete"
            >
              {task.text}
            </span>
            <Button
              variant="danger"
              className="ml-2"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default TaskManager;
