exports.createPages = ({ actions: { createPage } }) => {
  const projects = require("./src/data/projects/projects.json")
  projects.forEach(project => {
    createPage({
      path: `/projects/${project.slug}/`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        slug: project.slug,
        title: project.title,
        timeframe: project.timeframe,
        shortDescription: project.shortDescription,
        longDescription: project.longDescription,
        images: project.images,
        sources: project.sources,
        linkTo: project.linkTo,
      },
    })
  })
}
