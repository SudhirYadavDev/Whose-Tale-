export type RoomObjectData = {
  name: string;
  description: string;
  position: string;
  className: string;
  hoverStyle: string;
  vertical?: boolean;
};

export const roomObjects: RoomObjectData[] = [
  {
    name: "Sleeping Mattress",
    description: "Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??Hey this is repeated words alright?? Hey this is repeated words alright??",
    position: "top-5 left-25",
    className: "w-80 h-50",
    hoverStyle:
      "hover:bg-slate-100/15 hover:border-slate-300/40 hover:text-slate-100",
  },
  {
    name: "Window",
    description: "",
    position: "top-10 left-0",
    className: "w-15 h-45 border-l-0",
    vertical: true,
    hoverStyle:
      "hover:bg-sky-700/15 hover:border-sky-700/40 hover:text-sky-100",
  },
  {
    name: "Wardrobe",
    description: "",
    position: "top-5 right-100",
    className: "w-85 h-35",
    hoverStyle:
      "hover:bg-stone-700/65 hover:border-stone-600/90 hover:text-stone-100",
  },
  {
    name: "Desk",
    description: "",
    position: "bottom-5 right-115",
    className: "w-80 h-40",
    hoverStyle:
      "hover:bg-neutral-700/45 hover:border-neutral-500/60 hover:text-neutral-100",
  },
  {
    name: "Book Shelves",
    description: "",
    position: "bottom-5 left-95",
    className: "w-75 h-25",
    hoverStyle:
      "hover:bg-fuchsia-700/15 hover:border-fuchsia-700/40 hover:text-fuchsia-100",
  },
  {
    name: "Bag",
    description: "",
    position: "bottom-10 right-85",
    className: "w-25 h-30",
    hoverStyle:
      "hover:bg-blue-700/15 hover:border-blue-500/40 hover:text-blue-100",
  },
  {
    name: "Big Box",
    description: "",
    position: "top-5 left-120",
    className: "w-45 h-35",
    hoverStyle:
      "hover:bg-lime-700/15 hover:border-lime-700/40 hover:text-lime-100",
  },
  {
    name: "BR & WR",
    description: "",
    position: "top-0 right-0",
    className: "w-90 h-45 border-r-0 border-t-0",
    hoverStyle:
      "hover:bg-cyan-700/15 hover:border-cyan-700/40 hover:text-cyan-100",
  },
  {
    name: "Kitchen",
    description: "",
    position: "bottom-0 left-0",
    className: "w-70 h-100 border-l-0 border-b-0",
    hoverStyle:
      "hover:bg-emerald-700/15 hover:border-emerald-700/40 hover:text-emerald-100",
  },
  {
    name: "Door",
    description: "",
    position: "bottom-0 right-0",
    className: "w-35 h-65 border-r-0 border-b-0",
    hoverStyle:
      "hover:bg-red-700/15 hover:border-red-700/40 hover:text-red-100",
  },
  {
    name: "kotatsu",
    description: "",
    position: "bottom-55 right-120",
    className: "w-120 h-60",
    hoverStyle:
      "hover:bg-amber-700/15 hover:border-amber-700/40 hover:text-amber-50",
  },
];
