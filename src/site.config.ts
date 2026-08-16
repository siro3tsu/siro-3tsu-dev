export const siteConfig: {
  baseUrl: string;
  siteName: string;
  xAccount?: string;
  defaultDescription: string;
  defaultOgImage: string;
} = {
  baseUrl: 'https://siro.3tsu.dev',
  siteName: "しろみつ's Site",
  xAccount: 'siro3tsu',
  defaultDescription: 'しろみつの個人サイトです。プロフィールなどを掲載しています。',
  defaultOgImage: 'https://siro.3tsu.dev/og-image.png',
};

export const pathIgnoredFromSitemap = ['/privacy/', '/terms/', '/email/'];

export const headerItems: {
  label: string;
  href: string;
}[] = [
  {
    label: 'About',
    href: '/about/',
  },
];
