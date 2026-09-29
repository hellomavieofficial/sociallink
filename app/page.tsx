'use client';

import { SOCIAL_LINKS } from '@/lib/constants';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageContainer } from '@/components/PageContainer';
import { SocialCard } from '@/components/SocialCard';
import { DotPattern } from '@/components/ui/dot-pattern';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  Whatsapp: FaWhatsapp,
  Linkedin: FaLinkedinIn,
  Instagram: FaInstagram,
  X: FaXTwitter,
  Facebook: FaFacebook,
  Youtube: FaYoutube,
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <DotPattern className="z-0 text-purpleLight opacity-70" cr={1.25} width={18} height={18} />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <PageContainer className="flex-1">
        {/* Hero Section */}
        <section className="mb-16 md:mb-24">
          <div className="space-y-3 mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground">
              UXFoundery™
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A global design community.
            </p>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            Find every official UXFoundery destination from community updates and events to content, conversations and opportunities.
          </p>
        </section>


        {/* Social Links Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
            Follow Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SOCIAL_LINKS.map((link) => (
              <SocialCard
                key={link.id}
                name={link.name}
                description={link.description}
                url={link.url}
                icon={iconMap[link.icon]}
              />
            ))}
          </div>
        </section>

        </PageContainer>

        <Footer />
      </div>
    </div>
  );
}
