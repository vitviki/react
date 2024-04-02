import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoWrappwer from "./Components/TodoWrapper";
import Header from "./Components/Header";
import Tab from "./Components/Tab";
import AddTask from "./Components/AddTask";
uuidv4();

function App() {
  const [tasks, setTasks] = useState([]);
  const [tab, setTab] = useState("personal");

  const addTask = (task) => {
    const o = {
      id: uuidv4(),
      task: task,
      tab: tab,
      completed: false,
    };

    setTasks([...tasks, o]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        task.completed = task.id === id ? true : task.completed;
        return task;
      })
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <Header />
      <Tab tab={tab} setTab={setTab} />
      <AddTask addTask={addTask} />
      <TodoWrappwer
        tasks={tasks}
        tab={tab}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
