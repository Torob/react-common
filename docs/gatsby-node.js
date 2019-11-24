const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `component-pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/comp-template.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = function onCreateWebpackConfig({
  actions,
  getConfig,
}) {
  actions.setWebpackConfig({
    resolve: {
      symlinks: false,
      alias: {
        aphrodite: path.resolve(__dirname, "../node_modules/aphrodite"),
        "react-common": path.resolve(__dirname, "../src"),
      },
    },
  })

  getConfig().resolve.modules = ["node_modules"]
}
