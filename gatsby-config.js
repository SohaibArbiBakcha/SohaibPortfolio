/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// Warn if Contentful env vars are missing. Do NOT log actual tokens.
if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  console.warn(
    "Warning: CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN not set. Contentful source plugin will fail if these are missing."
  )
}
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Sohaib Arbi Bakcha",
    siteTitle: "Sohaib Arbi Bakcha | Full-Stack Developer & ERP Architect",
    description:
      "Full-Stack Developer & ERP Solutions Architect based in Morocco. Building MERN stack apps, Odoo/Sage ERP systems, and IoT integrations at ATNER · ATLAS ENERGIE.",
    author: "Sohaib Arbi Bakcha",
    twitterUsername: "@sohaibelarabiba",
    image: "/profile.jpg",
    siteUrl: "https://www.sohaibportfolio.gq",
    keywords:
      "Sohaib Arbi Bakcha, Full-Stack Developer, ERP Developer, Odoo, Sage ERP, React, Node.js, MongoDB, MERN, Morocco, IoT, Raspberry Pi, ESP32, Traccar",
    locale: "en_US",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.sohaibportfolio.gq",
        sitemap: "https://www.sohaibportfolio.gq/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    process.env.GOOGLE_ANALYTICS_TRACKING_ID && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "sohaibportfolio.gq",
      },
    },
  ].filter(Boolean),
}
