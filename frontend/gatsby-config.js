module.exports = {
  siteMetadata: {
    title: `Models By Mike`,
    description: `The homepage for Models By Mike, the best looking and most talented augmented reality creator this side of the Milky Way`,
    author: `@modelsbymike3d`,
    author_long: 'Michael Porter',
    keywords: [
      `snapchat`,
      `instagram`,
      `facebook`,
      `augmented reality`,
      `filter`,
      `effect`,
    ],
    image: `/assets/background.jpg`,
    siteUrl: `https://modelsbymike3d.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-eslint",
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://modelsbymike3d.com`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "text-3xl my-4",
                "heading[depth=2]": "text-xl my-4",
                paragraph: "my-2",
                link: "underline",
                "list[ordered=false]": "list-disc ml-8",
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Models By Mike`,
        short_name: `Mike`,
        start_url: `/`,
        background_color: `#2d3748`,
        theme_color: `#2d3748`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `modelsbymike3d.com`,
      },
    },
  ],
};
