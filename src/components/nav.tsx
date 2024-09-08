"use client";
import { mainMenu } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4 text-sm lg:gap-6">
      {mainMenu.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;
        return (
          <Link
            className={`transition-colors flex items-center gap-2 hover:text-foreground/80 ${
              isActive ? "text-foreground active" : "text-foreground/80"
            }`}
            href={link.route}
            key={link.label}
          >
            <p>
              {link.label}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}
