import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4  bg-[#EFC148] text-white m-auto rounded-sm">
      <ul className="flex items-center justify-center gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
