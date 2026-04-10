import CustomLink from "@/components/CustomLink";
import { navLinks } from "@/data/nav-links";

interface NavbarProps {
  mobile?: boolean;
}

export default function Navbar({ mobile }: NavbarProps) {
  return (
    <nav
      className={`text-black ${
        mobile
          ? "flex w-full flex-col gap-4 bg-white px-6 py-4 shadow-md"
          : "hidden gap-12 text-lg md:flex"
      } `}
    >
      {navLinks.map((link) => {
        return (
          <CustomLink href={link.href} key={link.label}>
            {link.label}
          </CustomLink>
        );
      })}
    </nav>
  );
}
