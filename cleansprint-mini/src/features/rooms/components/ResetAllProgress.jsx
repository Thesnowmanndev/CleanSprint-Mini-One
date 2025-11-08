"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

function clearByPrefix(prefix) {
  let cleared = 0;
  try {
    const keys = Object.keys(localStorage);
    for (const k of keys) {
      if (k.startsWith(prefix)) {
        localStorage.removeItem(k);
        cleared++;
      }
    }
  } catch {}

  try {
    window.dispatchEvent(new Event("cleansprint:reset-all"));
  } catch {}
  return cleared;
}

export default function ResetAllProgress({ prefix = "cleansprint." }) {
  const [running, setRunning] = useState(false);
  const [lastCleared, setLastCleared] = useState(null);

  const handleResetAll = () => {
    setRunning(true);
    const count = clearByPrefix(prefix);
    setLastCleared(count);
    setRunning(false);
  };

  return (
    <div className="flex items-center gap-3">
      <Button variant="secondary" onClick={handleResetAll} disabled={running}>
        {running ? "Resetting..." : "Reset all progress"}
      </Button>
      {lastCleared !== null && (
        <span className="text-sm text-muted-foreground">
          {" "}
          Cleared {lastCleared} saved lists
        </span>
      )}
    </div>
  );
}
