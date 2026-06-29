import { GAME_VERSION } from "@/lib/version";

export default function Version() {
  return (
    <div className="fixed bottom-2 left-2 text-xs opacity-50">
      v{GAME_VERSION}
    </div>
  );
}
