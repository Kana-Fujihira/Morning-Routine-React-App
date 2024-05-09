import "./meditation.css";
import { useState } from "react";
import MeditationTips from "../meditation_page/MeditationTips";

function Meditation() {
  const [animation, setAnimation] = useState(false);
  function handleClick() {
    setAnimation(true);
  }

  function handleReset() {
    setAnimation(false);
  }

  return (
    <>
      <div className="container">
        <div className={animation && "circle grow"}></div>
      </div>
      <p>
        Before you start, find your position comfortable and close your eyes.
      </p>
      <p>Once you are ready, let's get start</p>
      <button onClick={handleClick}>Start</button>
      <button onClick={handleReset}>Reset</button>
      <MeditationTips />
    </>
  );
}

export default Meditation;
