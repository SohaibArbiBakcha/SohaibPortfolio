import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
        title
        description
        author
        siteUrl
        image
        twitterUsername
        keywords
        locale
      }
    }
  }
`

const SEO = ({ title, description, image, url, type = "website" }) => {
  const { site } = useStaticQuery(query)
  const {
    siteTitle,
    title: defaultTitle,
    description: defaultDesc,
    author,
    siteUrl,
    image: defaultImage,
    twitterUsername,
    keywords,
    locale,
  } = site.siteMetadata

  const metaTitle = title ? `${title} | ${defaultTitle}` : siteTitle
  const metaDescription = description || defaultDesc
  const metaImage = `${siteUrl}${image || defaultImage}`
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl
  const metaType = type

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: author,
        url: siteUrl,
        jobTitle: "Full-Stack Developer & ERP Solutions Architect",
        worksFor: {
          "@type": "Organization",
          name: "ATNER · ATLAS ENERGIE",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "MA",
          addressRegion: "Morocco",
        },
        sameAs: [
          "https://github.com/SohaibArbiBakcha",
          "https://www.linkedin.com/in/sohaibarbibakcha",
          "https://www.instagram.com/sohaib.arbi/",
        ],
        knowsAbout: [
          "React",
          "Node.js",
          "MongoDB",
          "Odoo ERP",
          "Sage ERP",
          "Python",
          "IoT",
          "Raspberry Pi",
          "ESP32",
          "Traccar",
          "PowerShell",
        ],
        image: metaImage,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteTitle,
        description: metaDescription,
        author: { "@id": `${siteUrl}/#person` },
      },
    ],
  }

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={metaTitle}>
      {/* ── Core ── */}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#111111" />
      <link rel="canonical" href={metaUrl} />

      {/* ── Open Graph ── */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={metaType} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${author} — portfolio`} />
      <meta property="og:locale" content={locale} />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={`${author} — portfolio`} />

      {/* ── JSON-LD structured data ── */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

export default SEO
