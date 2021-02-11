/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Sohaib portfolio",
    description: `
            Sohaib Arbi Bakcha is a junior Developer, he has ${
              new Date().getFullYear() - 1995
            } Years Old, He lives in Morocco.
            He Start IT development in 2017 and now trying to develop his skills
            by self-learning and freelancing
          `,
    author: "@SohaibArbiBakcha",
    twitterUsername: "@sohaibelarabiba",
    image: "/profile.jpg",
    siteUrl: "https://www.sohaibportfolio.gq",
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
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
  ],
}
