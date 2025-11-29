"use client";
import { useState } from "react";
import Die from "./components/Die";

export default function Home() {
  const [dice, setDice] = useState<number[]>([]);

  function generateAllNewDice() {
    const numberArray: number[] = [];
    for (let i = 0; i < 10; i++) {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      numberArray.push(randomNum);
    }
    return numberArray;
  }

  const rollDice = () => {
    setDice(generateAllNewDice());
  };

  return (
    <div style={background}>
      <div style={canvas} className="place-content-center p-6">
        {/* <h1 className="text-2xl">Tenzies</h1>
        <p className="">Lets play tenzies</p> */}
        <div className="grid grid-cols-5 gap-4 place-items-center">
          {dice.map((e, index) => (
            <Die key={index} value={e} />
          ))}
        </div>
        <div>
          <button className="text-gray-700" onClick={rollDice}>
            Roll Dice
          </button>
        </div>
      </div>
    </div>
  );
}

const background = {
  backgroundColor: "#0B2434",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

const canvas = {
  backgroundColor: "#f5f5f5",
  height: "100%",
  width: "100%",
  maxHeight: "400px",
  maxWidth: "400px",
  borderRadius: "6px",
};
