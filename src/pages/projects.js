import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"
import Nav from "../components/nav"

const ProjectsPage = () => (
  <Layout>
    <SEO title="projects" />
    <Nav dir="projects" toHome />
    <Projects />
  </Layout>
)

export default ProjectsPage