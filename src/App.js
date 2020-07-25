import React from "react";
import Tweet from "./Tweet";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Tweet name="One" message="I am number One" />
      <Tweet name="Two" message="I am number Two" />
      <Tweet name="Three" message="I am number Three" />
      <Tweet name="Four" message="I am number Four" />
    </div>
  );
}
export default App;
