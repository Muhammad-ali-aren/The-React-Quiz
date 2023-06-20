import { useEffect } from "react";

function Timer({ dispatch, remainingTime }) {
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => {
        clearInterval(id);
      };
    },
    [dispatch]
  );
  return (
    <div className="timer">{`${Math.floor(remainingTime / 60)} : ${
      remainingTime % 60
    }`}</div>
  );
}

export default Timer;
