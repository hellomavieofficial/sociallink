'use client';

import Link from 'next/link';
export function Footer() {
  return (
    <footer className="bg-white border-t border-lightGray py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
          {/* Brand */}
          <div>
            <p className="text-xl font-semibold tracking-tight">UXFoundery™</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A global design community.
              <br />
              Design deserves better conversations.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold mb-3">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Social Channels
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-lightGray mt-8 pt-6">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 UXFoundery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
