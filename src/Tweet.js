import React, { useState } from "react";
import "./App.css";

const Tweet = (props) => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
    return counter;
  };

  return (
    <div className="tweet" onClick={increment}>
      <h3>{props.name}</h3>
      <p>{props.message}</p>
      <h3>Number of likes: {counter}</h3>
    </div>
  );
};

export default Tweet;
