import ActiveLink from "./ActiveLink";

export default function Navbar() {
  return (
    <nav className="p-4  bg-[#EFC148] text-white m-auto rounded-sm">
      <ul className="flex items-center justify-center gap-10">
        <li>
          <ActiveLink href="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/blogs">Blogs</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/about">About</ActiveLink>
        </li>
      </ul>
    </nav>
  );
}
