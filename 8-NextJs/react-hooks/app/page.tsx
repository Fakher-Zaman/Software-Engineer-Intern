import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-center m-3">Welcome to React Hooks</h1>
      <nav className="m-5 flex justify-between items-center">
        <Link href="/useState" className="pointer px-4 py-2 rounded m-2 bg-purple-50">useState</Link>
        <Link href="/useEffect" className="pointer px-4 py-2 rounded m-2 bg-purple-100">useEffect</Link>
        <Link href="/useContext" className="pointer px-4 py-2 rounded m-2 bg-purple-200">useContext</Link>
        <Link href="/useRef" className="pointer px-4 py-2 rounded m-2 bg-purple-300">useRef</Link>
        <Link href="/useReducer" className="pointer px-4 py-2 rounded m-2 bg-purple-400 text-white">useReducer</Link>
        <Link href="/useCallback" className="pointer px-4 py-2 rounded m-2 bg-purple-500 text-white">useCallback</Link>
        <Link href="/useMemo" className="pointer px-4 py-2 rounded m-2 bg-purple-600 text-white">useMemo</Link>
        <Link href="/customHooks" className="pointer px-4 py-2 rounded m-2 bg-purple-700 text-white">customHooks</Link>
      </nav>
    </main>
  );
}
