'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { IconType } from 'react-icons';

interface SocialCardProps {
  name: string;
  description: string;
  url: string;
  icon: IconType;
}

export function SocialCard({ name, description, url, icon: Icon }: SocialCardProps) {
  const isExternal = url.startsWith('http');
  const isEmail = url.startsWith('mailto:');

  const Component = isExternal ? 'a' : Link;
  const linkProps = isExternal
    ? {
        href: url,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        href: url,
      };

  return (
    <Component
      {...linkProps}
      aria-label={`Open ${name}`}
      className="block rounded-lg border border-lightGray bg-white p-5 focus:outline-none focus:ring-2 focus:ring-darkest focus:ring-offset-2"
    >
      <div className="flex items-center gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-lightGray bg-white text-darkest">
          <Icon aria-hidden="true" size={22} strokeWidth={1.6} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 text-base font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-md border border-lightGray bg-white text-darkest"
        >
          <ArrowUpRight size={18} strokeWidth={1.8} />
        </span>
      </div>
    </Component>
  );
}
