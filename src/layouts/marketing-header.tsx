'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

import { MARKETING_NAV } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

/** Public marketing header with responsive navigation. */
export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {MARKETING_NAV.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href={ROUTES.login}>Entrar</Link>
          </Button>
          <Button variant="brand" asChild className="hidden sm:inline-flex">
            <Link href={ROUTES.dashboard}>Acessar dashboard</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-4">
                {MARKETING_NAV.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link href={item.href} className="text-sm font-medium">
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button variant="brand" asChild className="mt-2">
                    <Link href={ROUTES.dashboard}>Acessar dashboard</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
