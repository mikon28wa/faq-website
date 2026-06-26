import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEO({ title, description, canonical, ogImage }: SEOProps) {
  const baseUrl = 'https://mikon28wa.github.io/faq-website';
  const fullCanonical = canonical ? canonical : baseUrl;
  const fullOgImage = ogImage ? ogImage : baseUrl + '/images/og-image.jpg';
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="KI Substitutionsmedizin" />
      <meta property="og:locale" content="de_DE" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      <link rel="canonical" href={fullCanonical} />
      
      <meta name="theme-color" content="#2563eb" />
    </Helmet>
  );
}