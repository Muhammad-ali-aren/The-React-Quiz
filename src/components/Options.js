function Options({ question, dispatch, answer }) {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} 
            ${
              hasAnswer
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
            `}
            disabled={hasAnswer}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payLoad: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
