import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import meditationTipsData from "../../../data/meditationtips.json";
import PropTypes from "prop-types";
function MeditationTips() {
  const [tips, setTips] = useState([]); // State to store the selected tip
  const { id } = useParams();

  useEffect(() => {
    // Filter the tip based on the id from the URL
    const selectedTip = meditationTipsData.Tips.find(
      (tip) => tip.id === parseInt(id)
    );
    setTips(selectedTip ? [selectedTip] : []);
  }, [id]); // Re-run effect when id changes

  console.log(meditationTipsData);
  console.log(id);
  return (
    <>
      <h2>Meditation Tips</h2>
      {/* Render the selected tip */}
      {tips.map((tip) => (
        <div key={tip.id}>
          <Link to={`/meditation/${tip.id}`}>
            <h3>{tip.title}</h3>
          </Link>
        </div>
      ))}
    </>
  );
}

MeditationTips.propTypes = {
  map: PropTypes.func.isRequired,
  tips: PropTypes.string.isRequired,
};

export default MeditationTips;
