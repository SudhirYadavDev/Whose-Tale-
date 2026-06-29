import RoomObject from "./RoomObject";
import { roomObjects } from "./roomData";

export default function Room() {
  return (
    <div className="flex-1 relative border-10 border-double border-zinc-700 bg-zinc-950 mb-10">
      {roomObjects.map((object) => (
        <div key={object.name} className={`absolute ${object.position}`}>
          <RoomObject
            name={object.name}
            className={object.className}
            hoverStyle={object.hoverStyle}
            vertical={object.vertical}
          />
        </div>
      ))}
    </div>
  );
}
