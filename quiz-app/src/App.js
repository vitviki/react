import "./App.css";
import Header from "./components/Header";
import Question from "./components/Question";
import Button from "./components/Button";
import { data } from "./assets/data";

function App() {
  const questions = [
    {
      question: "Who is the owner of JLR?",
      option1: "Tata Motors",
      option2: "Ford Motors",
      option3: "VW Group",
      option4: "Stellantis",
      answer: 1,
      type: "choice",
    },
    {
      question: "What are the things that a checked during the POST operation?",
      option1: "Monitor",
      option2: "Keyboard",
      option3: "Mouse",
      option4: "Printer",
      answer: "2, 3",
      type: "select",
    },
  ];
  return (
    <div className="container">
      <Header title={"React Quiz"} />
      <Question
        questionNumber={1}
        question={questions[0]}
        totalQuestions={questions.length}
      />
      <Button text={"Next"} />
    </div>
  );
}

export default App;
