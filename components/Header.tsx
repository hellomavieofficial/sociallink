'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-lightGray">
      <nav className="h-16 flex items-center justify-between px-6 md:px-8 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
        <Button asChild variant="ghost" className="text-sm">
          <Link href="/contact">Contact</Link>
        </Button>
      </nav>
    </header>
  );
}
