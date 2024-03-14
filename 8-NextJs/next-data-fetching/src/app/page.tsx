import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center my-10">Home Page</h1>
      <div className="flex justify-evenly">
        <Link href="/axios" className="bg-blue-300 py-2 px-4 rounded pointer m-4 text-blue-900">Axios</Link>
        <Link href="/fetch" className="bg-green-300 py-2 px-4 rounded pointer m-4 text-green-900">Fetch</Link>
      </div>
      <div className="flex justify-center">
        <Link href="/server" className="bg-red-300 py-2 px-4 rounded pointer m-4 text-red-900">Server Component</Link>
      </div>
    </div>
  );
}
