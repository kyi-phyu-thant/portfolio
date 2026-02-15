import Image from "next/image";
import Link from "next/link";
import React from "react";
const navLinks = [
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Header: React.FC = () => {
  return (
    <header className="px-6 py-2 md:px-24 md:py-4 flex justify-between items-center">
      <Image
        src="/kate_logo.webp"
        alt="logo"
        width={100}
        height={100}
        className="w-10 h-10 md:w-20 md:h-20"
      />
      <div className="flex gap-4 text-lg">
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
