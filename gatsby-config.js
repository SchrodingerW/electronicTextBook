/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
plugins: [
  {
    resolve: 'gatsby-plugin-favicons',
    options: {
      logo: './src/favicon.ico',
      appName: 'My Website',
      background: '#fff',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        yandex: false,
        windows: false
      }
    }
  }
]

module.exports = {
  plugins: [`gatsby-plugin-react-helmet`]
}

