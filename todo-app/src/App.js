import "./App.css";
import { useState } from "react";
import TodoWrappwer from "./Components/TodoWrapper";
import Header from "./Components/Header";
import Tab from "./Components/Tab";
import AddTask from "./Components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Header />
      <Tab />
      <AddTask />
      <TodoWrappwer tasks={tasks} />
    </div>
  );
}

export default App;
