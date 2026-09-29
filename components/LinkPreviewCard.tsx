'use client';

import Link from 'next/link';

export function LinkPreviewCard() {
  return (
    <Link
      href="https://social.uxfoundery.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open UXFoundery social page"
      className="block w-full overflow-hidden rounded-[14px] border border-[#d9d9d9] bg-white text-left shadow-[0_1px_3px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-[#380993] focus:ring-offset-4"
    >
      <div
        role="img"
        aria-label="UXFoundery social.uxfoundery.com link preview artwork"
        className="flex aspect-[1200/630] w-full flex-col items-center justify-center overflow-hidden rounded-t-[14px] bg-[#121212] px-6 text-center text-white"
      >
        <span className="text-[clamp(2.5rem,8vw,6.2rem)] font-semibold leading-none tracking-[-0.075em]">
          UXFoundery
        </span>
        <span className="mt-3 text-[clamp(1.35rem,3.5vw,3.2rem)] font-normal leading-none tracking-[-0.04em]">
          social.uxfoundery.com
        </span>
      </div>
      <div className="flex items-start gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-[7px] bg-[#121212] text-[11px] font-semibold tracking-[-0.04em] text-white">
          UX
        </div>
        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-5 text-[#121212]">
            UXFoundery — Connect With Us
          </p>
          <p className="mt-0.5 line-clamp-2 text-[13px] leading-[19px] text-[#5f6368]">
            A community for designers to connect, learn, and grow.
          </p>
          <p className="mt-1.5 truncate text-[12px] leading-4 text-[#747474]">
            social.uxfoundery.com
          </p>
        </div>
      </div>
    </Link>
  );
}
