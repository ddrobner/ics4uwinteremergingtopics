import path from 'path'
import axios from 'axios'

export default {
  getRoutes: async () => {
    return [
      {
        path: 'whatisml',
        template: "src/pages/whatisml.js"
      },
      {
        path: 'examples',
        template: "src/pages/examples.js"
      },
      {
        path: 'history',
        template: "src/pages/hist.js"
      },
      {
        path: 'howitworks',
        template: "src/pages/how.js"
      },
      {
      path: 'about',
      template: "src/pages/about.js"
  }
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
