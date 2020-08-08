import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import green from "./green.jpg";

function App() {
  const max = 100;
  let getRandomNumbers = (length, max) =>
    [...new Array(length)].map(() => Math.round(Math.random() * max));

  const [lengthProb, setLength] = useState(6);
  const [numbs, setNumbs] = useState(getRandomNumbers(lengthProb, max));
  const [answer, setAnswer] = useState(-1);
  const [again, setAgain] = useState(false);

  let solveProblem = () => eval(numbs.join("+"));

  let ChoiceUI = () => (
    <form style={{ height: "250px" }}>
      <h2 style={{ fontFamily: "Comic Sans MS", color: "white" }}>
        Please select the preferred difficulty
      </h2>
      <div class="ml-5 pl-5">
        <input
          type="radio"
          id="diff1"
          name="diff"
          onClick={() => setLength((lengthProb) => 4)}
        />
        <label
          style={{ fontFamily: "Comic Sans MS", color: "white", width: "80px" }}
          for="diff1"
        >
          {" "}
          EASY{" "}
        </label>
        <input
          type="radio"
          id="diff2"
          name="diff"
          onClick={() => setLength((lengthProb) => 6)}
        />
        <label
          style={{ fontFamily: "Comic Sans MS", color: "white", width: "90px" }}
          for="diff2"
        >
          {" "}
          MEDIUM{" "}
        </label>
        <input
          type="radio"
          id="diff3"
          name="diff"
          onClick={() => setLength((lengthProb) => 10)}
        />
        <label
          style={{ fontFamily: "Comic Sans MS", color: "white" }}
          for="diff3"
        >
          {" "}
          HARD{" "}
        </label>
      </div>
    </form>
  );

  let problemUI = () => (
    <div class="ml-5 pl-5">
      <div>
        {numbs.map((numb) => (
          <ul class="list-group" style={{ height: "50px" }}>
            <li
              class="list-group-item text-center list-group-item-warning"
              style={{ height: "40px", width: "250px" }}
            >
              {numb}
            </li>
          </ul>
        ))}
      </div>
      <form style={{ height: "40px" }}>
        <input
          style={{ width: "250px" }}
          type="text"
          className="input"
          placeholder="answer...."
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
      </form>
      <button
        style={{ width: "250px" }}
        class="btn btn-info"
        onClick={() => {
          answer == solveProblem()
            ? setNumbs(
                (numbs) => getRandomNumbers(lengthProb, max),
                setAgain(false)
              )
            : setAgain(true);
        }}
      >
        Next
      </button>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${green})`,
        height: "1000px",
      }}
    >
      <div class="mt-5 pt-5">
        {ChoiceUI()}
        {again && (
          <h2
            class="ml-5 pl-5"
            style={{ fontFamily: "Comic Sans MS", color: "red" }}
          >
            TRY AGAIN
          </h2>
        )}
        {problemUI()}
      </div>
    </div>
  );
}

export default App;
