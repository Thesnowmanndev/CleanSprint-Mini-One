"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useLocalStorage } from "@/features/rooms/utils/useLocalStorage";

export function Checklist({ roomId, tasks }) {
  const storageKey = `cleansprint.${roomId}.completed.v1`;
  const {
    value: completed,
    setValue: setCompleted,
    reset,
  } = useLocalStorage(storageKey, []);

  const taskCount = tasks?.length ?? 0;

  const percent = useMemo(() => {
    if (taskCount === 0) return 0;
    return Math.round((completed.length / taskCount) * 100);
  }, [completed.length, taskCount]);

  const toggle = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const isDone = (id) => completed.includes(id);

  const handleReset = () => {
    reset();
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  };

  return (
    <Card className="max-w-xl w-full">
      <CardHeader>
        <CardTitle className="text-xl">Room Checklist</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <Progress value={percent} className="h-3" />
          <span className="tabular-nums text-sm w-16 text-right">
            {percent}%
          </span>
        </div>
        <Separator className="my-2" />
        <ul className="space-y-3">
          {tasks.map((t) => (
            <li key={t.id} className="flex items-center gap-3">
              <Checkbox
                id={t.id}
                checked={isDone(t.id)}
                onCheckedChange={() => toggle(t.id)}
              />
              <label
                htmlFor={t.id}
                className={`select-none ${isDone(t.id) ? "line-through text-muted-foreground" : ""}`}
              >
                {t.label}
              </label>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3">
          <Button variant="secondary" onClick={handleReset}>
            Reset to 0%
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
