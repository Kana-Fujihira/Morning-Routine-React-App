import "./meditation.css";
import { useState } from "react";
import MeditationTips from "../meditation_page/MeditationTips";
import Footer from "../common_part/Footer";

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
      <div className="meditationBody">
        <div className="meditationcontainer">
          <div className={animation && "circle grow"}></div>
        </div>
        <p>
          Before you start, find a comfortable position and close your eyes.
        </p>
        <p>Once you are ready, let's get started💪</p>
        <p>Repeart inhale and exhale with moving circle.</p>
        <button onClick={handleClick} className="mediButton">
          Start
        </button>
        <button onClick={handleReset} className="mediButton">
          Reset
        </button>
        <MeditationTips />
      </div>
      <Footer />
    </>
  );
}

export default Meditation;
