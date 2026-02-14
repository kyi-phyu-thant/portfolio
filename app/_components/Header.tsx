import Image from "next/image";
import Link from "next/link";
import React from "react";
const navLinks = [
  {
    href: "/",
    label: "Projects",
  },
  {
    href: "/",
    label: "Experience",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Header: React.FC = () => {
  return (
    <header className="px-12 py-4 flex justify-between items-center">
      <Image src="/kate_logo.webp" alt="logo" width={100} height={100} />
      <div className="flex gap-4 pr-8 text-lg">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
