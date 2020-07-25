import React, { useState } from "react";
import "./App.css";

const Tweet = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="tweet">
      <h3>{props.name}</h3>
      <p>{props.message}</p>
      <h3>Number of likes: {counter}</h3>
      <button className="butt" onClick={() => setCounter(counter + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Tweet;
