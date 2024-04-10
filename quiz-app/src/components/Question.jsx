import React, { useEffect, useRef } from "react";

const Question = ({
  questionNumber,
  question,
  checkAnswer,
  totalQuestions,
  setOptions,
}) => {
  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  useEffect(() => {
    setOptions([option1, option2, option3, option4]);
  }, []);

  return (
    <div className="question">
      <h2>{`${questionNumber}. ${question.question}`}</h2>
      {question.type === "choice" ? (
        <>
          <ul>
            <li ref={option1} onClick={(e) => checkAnswer(e.target, 1)}>
              {question.option1}
            </li>
            <li ref={option2} onClick={(e) => checkAnswer(e.target, 2)}>
              {question.option2}
            </li>
            <li ref={option3} onClick={(e) => checkAnswer(e.target, 3)}>
              {question.option3}
            </li>
            <li ref={option4} onClick={(e) => checkAnswer(e.target, 4)}>
              {question.option4}
            </li>
          </ul>
        </>
      ) : (
        <>
          <form action=""></form>
        </>
      )}
      <div className="index">{`${questionNumber} of ${totalQuestions} questions`}</div>
    </div>
  );
};

export default Question;
