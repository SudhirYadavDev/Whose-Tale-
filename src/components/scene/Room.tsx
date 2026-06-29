"use client";

import { useState } from "react";

import RoomObject from "./RoomObject";
import { roomObjects, type RoomObjectData } from "./roomData";
import InspectPanel from "@/components/inspect/InspectPanel";

export default function Room() {
  const [selectedObject, setSelectedObject] = useState<RoomObjectData | null>(
    null,
  );

  return (
    <div className="flex-1 relative border-10 border-double border-zinc-700 bg-zinc-950 mb-10">
      {roomObjects.map((object) => (
        <div
          key={object.name}
          className={`absolute ${object.position}`}
          onClick={() => setSelectedObject(object)}
        >
          <RoomObject
            name={object.name}
            className={object.className}
            hoverStyle={object.hoverStyle}
            vertical={object.vertical}
          />
        </div>
      ))}
      {selectedObject && (
        <InspectPanel
          object={selectedObject}
          onClose={() => setSelectedObject(null)}
        />
      )}
    </div>
  );
}
