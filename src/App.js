import  React from "react";
import CardGame from "./components/CardGame/CardGame";

import './App.css';

export default function App() {
  return (
    <div>
      <h3 className="header"> EMOJI MEMORY CARD GAME</h3>
      <CardGame/>
    </div>
  );
}