// UXFoundery Social Configuration
export const SOCIAL_LINKS = [
  {
    id: 'whatsapp-channel',
    name: 'WhatsApp Channel',
    url: 'https://whatsapp.com/channel/0029Vb97KN7JJhzdtpDHYE0I',
    description: 'Stay updated with UXFoundery announcements',
    icon: 'Whatsapp',
  },
  {
    id: 'whatsapp-community',
    name: 'WhatsApp Community',
    url: 'https://chat.whatsapp.com/CyVKMme1FHmK3hPunIkIpm?mode=gi_t',
    description: 'Join conversations with designers',
    icon: 'Whatsapp',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/uxfoundery',
    description: 'Follow our latest insights',
    icon: 'Linkedin',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/uxfoundery/',
    description: 'Visual stories from our community',
    icon: 'Instagram',
  },
  {
    id: 'x',
    name: 'X',
    url: 'https://x.com/uxfoundery',
    description: 'Real-time discussions and updates',
    icon: 'X',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/uxfoundery',
    description: 'Connect with our community',
    icon: 'Facebook',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/@uxfoundery',
    description: 'Watch UXFoundery insights and conversations',
    icon: 'Youtube',
  },
] as const;

export const CONTACT_EMAIL = 'hello@uxfoundery.com';

export const MENTORS_CLUB_MESSAGE =
  "UXF | Mentor's Club is a premium, application-based community for design leaders and professionals seeking to grow and mentor others in the UX community.";

// UXFoundery Brand Colors
export const BRAND_COLORS = {
  // Primary
  darkest: '#121212',
  black: '#000000',

  // Neutral
  lightestGray: '#F1F1F1',
  lightGray: '#E8E8E8',

  // Accent Colors
  purple: '#380993',
  purpleLight: '#9D9DFF',
  burgundy: '#701526',
  orange: '#FF5F19',
  brown: '#443101',
  yellow: '#FFCD04',
  darkGreen: '#253504',
  green: '#85AF25',
} as const;

// SEO
export const SEO = {
  title: 'UXFoundery — Connect With Us',
  description:
    'Discover UXFoundery, a premium community for designers and creative professionals. Connect with our team and follow our official social channels.',
  url: 'https://social.uxfoundery.com',
  ogImage: '/og-image.png',
};
