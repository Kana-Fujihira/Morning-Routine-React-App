import "./meditation.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import meditationTipsData from "../../../data/meditationtips.json";

function Meditation() {
  const [animation, setAnimation] = useState(false);
  function handleClick() {
    setAnimation(true);
  }

  function handleReset() {
    setAnimation(false);
  }

  const [tip, setTip] = useState(null); // State to store the selected tip
  const { id } = useParams();

  useEffect(() => {
    // Filter the tip based on the id from the URL
    const selectedTip = meditationTipsData.Tips.find(
      (tip) => tip.id === parseInt(id)
    );
    setTip(selectedTip);
  }, [id]); // Re-run effect when id changes

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
      <h2>Meditation Tips</h2>
      {/* Render the selected tip */}
      {tip && (
        <div>
          <Link to={`/meditation/${tip.id}`}>
            <h3>{tip.title}</h3>
            <p>{tip.body}</p>
          </Link>
        </div>
      )}
    </>
  );
}

export default Meditation;
