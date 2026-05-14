import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <div>Snip - OS</div>
      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
    </main>
  );
}
