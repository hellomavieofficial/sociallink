'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Logo({ className = '' }: { className?: string }) {
  const [hasLogo, setHasLogo] = useState(true);

  return (
    <div className={`flex items-center ${className}`}>
      {hasLogo ? (
        <div className="relative w-28 h-8 md:w-32 md:h-9">
          <Image
            src="/logo.png"
            alt="UXFoundery"
            fill
            className="object-contain object-left"
            priority
            onError={() => setHasLogo(false)}
          />
        </div>
      ) : (
        <span className="text-sm md:text-base font-semibold tracking-tight text-foreground" aria-label="UXFoundery">
          UXFoundery
        </span>
      )}
    </div>
  );
}
