import React from "react";
import Tweet from "./Tweet";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Tweet name="One" message="I am number ONE" />
      <Tweet name="Two" message="I am number TWO" />
      <Tweet name="Three" message="I am number THREE" />
      <Tweet name="Four" message="I am number FOUR" />
    </div>
  );
}
export default App;
