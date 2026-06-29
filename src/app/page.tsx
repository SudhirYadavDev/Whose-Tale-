"use client";

import Room from "@/components/scene/Room";
import Version from "@/components/common/Version";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-white">
      {/* ROOM SPACE */}
      <Room />

      {/* GAME VERSION */}
      <Version />
    </main>
  );
}
