import "./styles.css";
import React, { useState } from "react";

export default function App() {
  // Declare a new state variable, which we'll call "count"
  const [people, setPeople] = useState(0);

  // Function to change state in a positive increment
  function handleAddChange() {
    return setPeople(people + 1);
  }

  // Function to change state in a negative decrement
  function handleSubChange() {
    return setPeople(people - 1);
  }

  return (
    <div className="App">
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">
            <h1>People in the Room</h1>

            <h2>{people}</h2>
            <div className="btn">
              <button
                className="button is-danger is-rounded"
                onClick={handleAddChange}
              >
                Add + of People
              </button>
              <button
                className="button is-warning is-rounded"
                onClick={handleSubChange}
              >
                Subtract - of People
              </button>
            </div>
          </p>
        </div>
      </section>
    </div>
  );
}
