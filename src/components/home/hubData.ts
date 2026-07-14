export type HubItem = {
  name: string;
  href: string;
  position: string;
  size: string;
};

export const hubItems: HubItem[] = [
  {
    name: "Game",
    href: "/game",
    position: "top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2",
    size: "w-44 h-44",
  },
  {
    name: "Developer",
    href: "/developer",
    position: "top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2",
    size: "w-32 h-32",
  },
];
