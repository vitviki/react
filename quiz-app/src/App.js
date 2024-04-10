import "./App.css";
import Header from "./components/Header";
import Question from "./components/Question";
import Button from "./components/Button";
import { data } from "./assets/data";
import { useEffect, useState } from "react";

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState(data[questionNumber]);
  const [locked, setLocked] = useState(false);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNextClick = () => {
    setQuestionNumber((prev) => prev + 1);
  };

  const handlePreviousClick = () => {
    setQuestionNumber((prev) => prev - 1);
  };

  const handleFinishClick = () => {
    setFinished(true);
  };

  const checkAnswer = (target, answer) => {
    if (!locked) {
      if (answer === question.answer) {
        target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        target.classList.add("incorrect");
        options[question.answer - 1].current.classList.add("correct");
      }
      setLocked(true);
    }
  };

  const reset = () => {
    setOptions([]);
    setLocked(false);
    setScore(0);
    setQuestionNumber(0);
    setFinished(false);
  };

  useEffect(() => {
    setQuestion(data[questionNumber]);
    setLocked(false);
    options.map((option) => {
      option.current.classList.remove("correct");
      option.current.classList.remove("incorrect");
    });
  }, [questionNumber]);

  return (
    <div className="container">
      {finished ? (
        <>
          <h2>{`Score: ${score} / ${data.length}`}</h2>
          <Button
            text={"Reset"}
            className="btn-active btn-finished"
            handleClick={reset}
          />
        </>
      ) : (
        <>
          <Header title={"React Quiz"} />
          <Question
            questionNumber={questionNumber + 1}
            question={question}
            totalQuestions={data.length}
            checkAnswer={checkAnswer}
            setOptions={setOptions}
          />
          <div className="button-container">
            {questionNumber === 0 ? (
              <Button text={"Previous"} className={"btn-inactive"} />
            ) : (
              <Button
                text={"Previous"}
                className={"btn-active"}
                handleClick={handlePreviousClick}
              />
            )}
            {questionNumber === data.length - 1 ? (
              <Button
                text={"Finish"}
                className="btn-active btn-finished"
                handleClick={handleFinishClick}
              />
            ) : (
              <Button
                text={"Next"}
                className="btn-active"
                handleClick={handleNextClick}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
