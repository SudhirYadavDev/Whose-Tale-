"use client";

import { useState } from "react";

import { type RoomObjectData } from "@/components/scene/roomData";

type InspectProps = {
  object: RoomObjectData;
  onClose: () => void;
};

export default function InspectPanel({ object, onClose }: InspectProps) {
  const [activeTab, setActiveTab] = useState<"story" | "items">("story");

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
      <div className="w-100 h-90 border-4 border-zinc-700 bg-zinc-900 shadow-2xl">
        {/* Title & Close */}
        <div className="flex items-center justify-between border-b-4 border-zinc-700 px-5 py-3">
          <h2 className="font-bold uppercase tracking-wider text-zinc-200">
            {object.name}
          </h2>
          <button
            onClick={onClose}
            className="font-bold cursor-pointer text-xl text-zinc-500 transition-colors hover:text-red-500"
          >
            ✕
          </button>
        </div>
        {/* Two Options selection */}
        <div className="flex border-b-4 border-zinc-700">
          <button
            onClick={() => setActiveTab("story")}
            className={`flex-1 cursor-pointer py-3 font-semibold uppercase transition-colors 
            ${activeTab === "story" ? "bg-zinc-800 text-zinc-100" : "text-zinc-500 hover:bg-zinc-800"}`}
          >
            Story
          </button>
          <button
            onClick={() => setActiveTab("items")}
            className={`flex-1 cursor-pointer py-3 font-semibold uppercase transition-colors
            ${activeTab === "items" ? "bg-zinc-800 text-zinc-100" : "text-zinc-500 hover:bg-zinc-800"}`}
          >
            Items
          </button>
        </div>
        {/* Content box */}
        <div className="h-55 overflow-y-auto p-6">
          {activeTab === "story" ? (
            <p className="leading-8 text-zinc-300">{object.description}</p>
          ) : (
            <div className="flex h-full items-center justify-center text-zinc-500 italic">
              Coming soon...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
