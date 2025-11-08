import Link from "next/link";
import ResetAllProgress from "@/components/ResetAllProgress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRooms } from "@/lib/rooms";

export default function HomePage() {
  const rooms = getRooms();

  return (
    <main className="min-h-dvh px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold mb-2"> CleanSprint - Rooms</h1>

        <p className="text-muted-foreground mb-6">
          Pick a room to open its cleaning checklist. Progress saves per-room in
          your browser.
        </p>
        <div className="my-2">
          <ResetAllProgress />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {rooms.map((r) => (
            <Link key={r.id} href={`/rooms/${r.id}`}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <CardTitle>{r.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=" text-sm text-muted-foreground">
                    Click to open the {r.name.toLowerCase()} checklist.
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
