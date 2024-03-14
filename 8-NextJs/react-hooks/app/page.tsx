import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to React Hooks</h1>
      <nav>
        <Link href="/useState" className="pointer">useState</Link>
      </nav>
    </main>
  );
}
