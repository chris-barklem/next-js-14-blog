import { settings } from '@/constants';
import { Icons } from '@/components/icons'
import Link from 'next/link';
import Nav from '@/components/nav';
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex w-full">
          <Link className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
            {/* Logo */}
            <span className="hidden font-bold lg:inline-block">{settings.siteName}</span>
          </Link>
          <Nav />
        </div>
        <ThemeToggle />

      </div>
    </header>
  );
}
