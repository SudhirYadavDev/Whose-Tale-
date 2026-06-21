"use client";

import { useState, useEffect } from "react";

export default function Game() {
  const [playerName, setPlayerName] = useState("");

  // Loads player name from localStorage
  useEffect(() => {
    const name = localStorage.getItem("playerName");
    if (name) {
      setPlayerName(name);
    }
  }, []);

  return (
    <main className="pt-10 text-center text-white">
      <h1 className="text-2xl pb-6 text-white">
        Forest welcome's you,{" "}
        <i className="text-green-300">
          {playerName ? `${playerName}` : "Nobody"}
        </i>
      </h1>
    </main>
  );
}
