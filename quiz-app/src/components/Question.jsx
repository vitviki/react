import React from "react";

const Question = ({ questionNumber, question, totalQuestions }) => {
  return (
    <div className="question">
      <h2>{`${questionNumber}. ${question.question}`}</h2>
      {question.type === "choice" ? (
        <>
          <ul>
            <li>{question.option1}</li>
            <li>{question.option2}</li>
            <li>{question.option3}</li>
            <li>{question.option4}</li>
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
