// Reusabe Objects
const roomObjectStyle =
  "border-4 border-double border-zinc-700 bg-zinc-900 text-zinc-400 font-mono text-center uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer flex flex-col items-center justify-center p-2 hover:scale-[1.025] hover:shadow-2xl hover:rotate-[1.5deg]";

type RoomObjectProps = {
  name: string;
  className?: string;
  hoverStyle?: string;
  vertical?: boolean;
};

const RoomObject = ({
  name,
  className = "",
  hoverStyle = "",
  vertical = false,
}: RoomObjectProps) => (
  <div className={`${roomObjectStyle} ${hoverStyle} ${className}`}>
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

export default RoomObject;
