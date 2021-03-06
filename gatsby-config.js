module.exports = {
  siteMetadata: {
    title: 'Hassan Tariq',
    titleTemplate: '',
    description: 'Personal Portfolio Page of Hassan Tariq',
    url: '', // No trailing slash allowed!
    image: '/images/cover.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '',
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#EAE7FA`,
        theme_color: `#284185`,
        display: `standalone`,
        icon: 'src/images/favicon-32x32.png',
      },
    },
  ],
};
