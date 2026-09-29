'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Copy, Mail, MessageCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PageContainer } from '@/components/PageContainer';
import { DotPattern } from '@/components/ui/dot-pattern';
import { CONTACT_EMAIL } from '@/lib/constants';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <DotPattern className="z-0 text-purpleLight opacity-70" cr={1.25} width={18} height={18} />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <PageContainer className="flex-1">
        <main className="mx-auto max-w-3xl py-10 md:py-20">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-darkest focus:ring-offset-4"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to social channels
          </Link>

          <header className="max-w-2xl">
            <p className="eyebrow mb-4">Get in touch</p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              Let&apos;s start a conversation.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Have a question about UXFoundery, or a potential collaboration? We&apos;d love to hear from you.
            </p>
          </header>

          <section className="mt-12 grid gap-4 md:grid-cols-2" aria-label="Contact options">
            <div className="rounded-lg border border-lightGray bg-white p-6">
              <div className="mb-10 flex size-11 items-center justify-center rounded-md border border-lightGray bg-white text-foreground">
                <Mail aria-hidden="true" size={20} />
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Email the team</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 block break-all font-medium text-foreground underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-darkest focus:ring-offset-4"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-lightGray text-foreground transition-colors hover:bg-lightestGray focus:outline-none focus:ring-2 focus:ring-darkest focus:ring-offset-4"
                >
                  {copied ? <Check aria-hidden="true" size={17} /> : <Copy aria-hidden="true" size={17} />}
                </button>
              </div>
            </div>

            <div className="rounded-lg border border-lightGray bg-lightestGray p-6">
              <div className="mb-10 flex size-11 items-center justify-center rounded-md border border-lightGray bg-white text-foreground">
                <MessageCircle aria-hidden="true" size={20} />
              </div>
              <p className="text-sm text-muted-foreground">Community questions</p>
              <p className="mt-1 font-medium text-foreground">Reach us by email and we&apos;ll point you in the right direction.</p>
            </div>
          </section>

        </main>
        </PageContainer>
        <Footer />
      </div>
    </div>
  );
}
