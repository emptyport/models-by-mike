module.exports = {
  siteMetadata: {
    title: `Models By Mike`,
    description: `The homepage for Models By Mike, the best looking and most talented augmented reality creator this side of the Milky Way`,
    author: `@modelsbymike3d`,
    keywords: [`snapchat`, `instagram`, `augmented reality`, `filter`, `effect`]
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Models By Mike`,
        short_name: `Models By Mike`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-137935194-2",
        head: true,
        anonymize: true,
        respectDNT: true
      }
    },
    `gatsby-plugin-offline`
  ]
};
