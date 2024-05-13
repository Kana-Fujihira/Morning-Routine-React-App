import { useState } from "react";
import PropTypes from "prop-types";
function MeditationTips() {
  const [index, setIndex] = useState(null);

  const tips = [
    {
      title: "Why we need meditation?",
      body: "Meditation improve self-control and sleeping",
      id: 0,
    },
    {
      title: "What the disadvantage ? ",
      body: "It might be difficult to find a time and continue as daily routine at first",
      id: 1,
    },
  ];

  function handleClick(id) {
    setIndex(id);
  }

  return (
    <>
      <h2>Meditation Tips</h2>
      <div>
        {index !== null ? (
          <div>
            <h2>{tips[0].title}</h2>
            <p>{tips[0].body}</p>
          </div>
        ) : (
          tips.map((tip) => (
            <button
              type="button"
              key={tip.id}
              onClick={() => handleClick(tip.id)}
            >
              {tip.title}
            </button>
          ))
        )}
      </div>
    </>
  );
}

MeditationTips.propTypes = {
  map: PropTypes.func.isRequired,
  tips: PropTypes.array.isRequired,
};

export default MeditationTips;
