import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-lg m-2">Pages Routing in Next.js</h1>
      <nav>
        <ul className="flex flex-row justify-center m-2">
          <li className="mx-2 my-1 px-2 py-1 bg-orange-400">
            <Link href="/getStaticProps">Get Static Props</Link>
          </li>
          <li className="mx-2 my-1 px-2 py-1 bg-yellow-400">
            <Link href="/getServerSideProps">Get Server Side Props</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
