import DashedHorizontalRule from '@/components/common/DashedHorizontalRule';
import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-20 w-full bg-background/80 backdrop-blur-sm">
      <div className="content-column content-column-dashed mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              className="size-9 rounded-md border border-[var(--dashed-border)] bg-muted transition-all duration-300 ease-in-out hover:scale-95"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>
          <div className="flex items-center gap-4">
            {navbarConfig.navItems.map((item) => (
              <Link
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <DashedHorizontalRule />
    </div>
  );
}
