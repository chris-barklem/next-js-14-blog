import ThemeToggle from "@/components/theme-toggle";
import { settings } from '@/constants';

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container max-w-screen-2xl mx-auto mt-8 grid grid-cols-2 items-center">
        <div className="text-left">© {new Date().getFullYear()} {settings.siteName}</div>
        <div className="text-right">
          
        </div>
      </div>
    </footer>
  );
}