"use client";

import HubButton from "./HubButton";
import { hubItems } from "./hubData";

export default function HomeHub() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      {hubItems.map((item) => (
        <div key={item.name} className={`absolute ${item.position}`}>
          <HubButton name={item.name} href={item.href} size={item.size} />
        </div>
      ))}
    </main>
  );
}
