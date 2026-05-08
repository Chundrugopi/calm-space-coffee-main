import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Workspace", href: "#workspace" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-foreground/10" : "bg-transparent"
      }`}
    >
      <nav className="container-editorial flex items-center justify-between h-20">
        <a href="#home" className="font-serif text-xl tracking-editorial text-foreground">
          COFFEE
        </a>
        <ul className="hidden md:flex items-center gap-10 text-xs tracking-editorial uppercase">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-foreground/80 hover:text-accent transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
