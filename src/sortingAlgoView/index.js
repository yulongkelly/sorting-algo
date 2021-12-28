import React, { useState } from "react";
import { ArrayContainer, NumBar, Container } from "./styling";

const MIN = 5;
const MAX = 1000;
const LENGTH = 50;

const SortingAlgo = () => {
  const [array, setArray] = useState([]);

  const randomNum = () => {
    let tmp = [];
    for (let i = 0; i < LENGTH; i++) {
      tmp.push(Math.floor(Math.random() * (MAX - MIN + 1)) + MIN);
    }
    setArray(tmp);
  };

  return (
    <Container>
      <ArrayContainer>
        {array.map((num) => {
          return (
            <NumBar key={num} height={Math.floor((num * 700) / MAX)} />
          );
        })}
      </ArrayContainer>
      <button
        onClick={() => {
          randomNum();
        }}
      >
        Generate Arrays
      </button>
    </Container>
  );
};

export default SortingAlgo;
