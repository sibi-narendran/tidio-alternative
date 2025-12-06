import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  noindex, 
  structuredData,
  geo, // { region, placename, position }
  hreflangs // Array of { lang, href }
}) => {
  const siteTitle = 'Doozadesk';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Geo Tags for Local SEO */}
      {geo?.region && <meta name="geo.region" content={geo.region} />}
      {geo?.placename && <meta name="geo.placename" content={geo.placename} />}
      {geo?.position && (
        <>
          <meta name="geo.position" content={geo.position} />
          <meta name="ICBM" content={geo.position} />
        </>
      )}

      {/* Hreflang Tags for International SEO */}
      {hreflangs?.map((hreflang, index) => (
        <link key={index} rel="alternate" hreflang={hreflang.lang} href={hreflang.href} />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

