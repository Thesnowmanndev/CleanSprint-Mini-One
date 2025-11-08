import Link from "next/link";
import { notFound } from "next/navigation";
import { Checklist } from "@/components/Checklist";
import { Button } from "@/components/ui/button";
import { getRoomTasks } from "@/lib/rooms";

export default async function RoomPage({ params }) {
  const { room } = await params;

  const tasks = getRoomTasks(room);
  if (!tasks) notFound();

  const title = room
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  return (
    <main className="min-h-dvh px-4 py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <Button asChild variant="ghost">
            <Link href="/">← All Rooms</Link>
          </Button>
        </div>
        <Checklist roomId={room} tasks={tasks} />
      </div>
    </main>
  );
}
