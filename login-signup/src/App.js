import { useState } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [type, setType] = useState("signup");
  return (
    <div className="App">
      <div class="container">
        {type === "signup" ? (
          <Signup setType={setType} />
        ) : (
          <Login setType={setType} />
        )}
      </div>
    </div>
  );
}

export default App;
