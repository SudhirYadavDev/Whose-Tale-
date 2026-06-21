"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { GAME_VERSION } from "@/lib/version";

export default function Home() {
  const [playerName, setPlayerName] = useState("");
  const router = useRouter();

  // Handles the "Walk In..." button click
  const handleWalkIn = () => {
    localStorage.setItem("playerName", playerName.trim());
    router.push("/game");
  };

  return (
    <main className="min-h-screen flex flex-col px-6 text-white">
      <h1 className="pt-10 text-4xl font-bold text-center">Whose Tale ?</h1>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <p className="text-lg pb-6">Who are you ?</p>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            maxLength={30}
            autoFocus
            className="mb-6 border p-1 outline-none"
          />
        </div>
      </div>
      {playerName.trim() && (
        <button
          className="fixed border py-2 px-8 font-medium bottom-6 right-6 cursor-pointer"
          onClick={handleWalkIn}
        >
          Walk In...
        </button>
      )}
      <div className="fixed bottom-2 left-2 text-sx opacity-50">
        v{GAME_VERSION}
      </div>
    </main>
  );
}
