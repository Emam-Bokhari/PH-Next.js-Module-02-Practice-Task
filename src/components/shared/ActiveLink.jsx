"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children }) {
  const pathName = usePathname();
  return (
    <Link href={href} className={`${pathName === href ? "text-red-500" : ""}`}>
      {children}
    </Link>
  );
}
