const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  // const postTemplate = path.resolve(`src/templates/postTemplate.js`)
  const projects = require("./src/data/projects/projects.json")
  // const result = await graphql(`
  //   {
  //     allMarkdownRemark(
  //       sort: { order: DESC, fields: [frontmatter___date] }
  //       limit: 1000
  //     ) {
  //       edges {
  //         node {
  //           frontmatter {
  //             path
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // Handle errors
  // if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }

  // // Create blog pages
  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.frontmatter.path,
  //     component: postTemplate,
  //     context: {},
  //   })
  // })

  // Create project pages
  projects.forEach(project => {
    createPage({
      path: `/projects/${project.slug}/`,
      component: require.resolve("./src/templates/projectTemplate.js"),
      context: {
        slug: project.slug,
        title: project.title,
        timeframe: project.timeframe,
        shortDescription: project.shortDescription,
        longDescription: project.longDescription,
        images: project.images,
        sources: project.sources,
        linkTo: project.linkTo,
        warning: project.warning,
      },
    })
  })
}