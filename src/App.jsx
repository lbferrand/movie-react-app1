import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked, title]);

  return (
    <div className="card">
      <h2>{title}</h2>
      {/* This is how to set a button */}
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "♡"}
      </button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

const App = () => {
  return (
    <div className="card-container">
      <Card
        title="The Notebook"
        ratings={5}
        actors={[{ name: "Ryan Gosling" }, { name: "Rachel McAdams" }]}
      />
      <Card
        title="Sense & Sensibility"
        ratings={5}
        actors={[{ name: "Emma Thompson" }, { name: "Kate Winslet" }]}
      />
      <Card title="Pride & Predige" />
      <Card title="Under the Tuscany Sun" />
      <Card title="The Bridge of Madison County" />
    </div>
  );
};

export default App;
