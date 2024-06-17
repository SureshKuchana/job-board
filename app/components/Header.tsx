import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between mx-auto">
        <Link href={"/"} className="font-bold text-lg">
          Job board
        </Link>
        <nav className="flex gap-4 *:px-4 *:py-2 *:rounded-md">
          <Link className="bg-gray-200 text-gray-800" href={"/login"}>
            Login
          </Link>
          <Link className="bg-blue-600 text-white" href={"/new-jobPost"}>
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}
