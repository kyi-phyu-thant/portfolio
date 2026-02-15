import Image from "next/image";
import Link from "next/link";
import React from "react";
import { site } from "../_config/site";

const contactLinks = [
  {
    href: `mailto:${site.contact.email}`,
    icon: <Image src="/icons/mail.svg" alt="mail" width={40} height={40} />,
  },
  {
    href: site.contact.linkedin,
    icon: (
      <Image src="/icons/linkedin.svg" alt="linkedin" width={40} height={40} />
    ),
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="px-4 py-6 flex justify-center items-center border-t-2 border-dashed"
    >
      <div className="flex gap-4 pr-8 text-lg">
        {contactLinks.map((link) => (
          <Link key={link.href} href={link.href} target="_blank">
            {link.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
