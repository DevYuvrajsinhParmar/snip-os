import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <div>Snip - OS</div>
      <Link href="/register">
        <Button>Register</Button>
      </Link>
    </main>
  );
}
