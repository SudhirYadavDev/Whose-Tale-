"use client";

import { GAME_VERSION } from "@/lib/version";

// Reusabe Object
const roomObjectStyle =
  "border-4 border-double border-zinc-700 bg-zinc-900 text-zinc-400 font-mono text-center uppercase tracking-wider hover:bg-zinc-800 hover:text-zinc-200 hover:border-zinc-500 transition-colors cursor-pointer flex flex-col items-center justify-center p-2";

const roomObjects = [
  {
    name: "Sleeping Mattress",
    position: "top-5 left-25",
    className: "w-80 h-50",
  },
  {
    name: "Window",
    position: "top-10 left-0",
    className: "w-15 h-45 border-l-0",
    vertical: true,
  },
  {
    name: "Wardrobe",
    position: "top-5 right-100",
    className: "w-85 h-35",
  },
  {
    name: "Desk",
    position: "bottom-5 right-115",
    className: "w-80 h-40",
  },
  {
    name: "Book Shelves",
    position: "bottom-5 left-95",
    className: "w-75 h-25",
  },
  {
    name: "Bag",
    position: "bottom-5 right-85",
    className: "w-25 h-30",
  },
  {
    name: "Big Box",
    position: "top-5 left-120",
    className: "w-45 h-35",
  },
  {
    name: "BR & WR",
    position: "top-0 right-0",
    className: "w-90 h-45 border-r-0 border-t-0",
  },
  {
    name: "Kitchen",
    position: "bottom-0 left-0",
    className: "w-70 h-100 border-l-0 border-b-0",
  },
  {
    name: "Door",
    position: "bottom-0 right-0",
    className: "w-35 h-65 border-r-0 border-b-0",
  },
];

const RoomObject = ({
  name,
  className = "",
  vertical = false,
}: {
  name: string;
  className?: string;
  vertical?: boolean;
}): JSX.Element => (
  <div className={`${roomObjectStyle} ${className}`}>
    <span className="font-bold my-2 text-zinc-300">
      {vertical
        ? name.split("").map((letter, index) => (
            <span key={index} className="block">
              {letter}
            </span>
          ))
        : name}
    </span>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col px-6 text-white">
      {/* ROOM SPACE */}
      <div className="flex-1 relative border border-dashed border-zinc-800 mt-4 mb-10 hover:border-zinc-500 transition-colors">
        {roomObjects.map((object) => (
          <div key={object.name} className={`absolute ${object.position}`}>
            <RoomObject
              name={object.name}
              className={object.className}
              vertical={object.vertical}
            />
          </div>
        ))}
      </div>

      {/* GAME VERSION */}
      <div className="fixed bottom-2 left-2 text-xs opacity-50">
        v{GAME_VERSION}
      </div>
    </main>
  );
}
