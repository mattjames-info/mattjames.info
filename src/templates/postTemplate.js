import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Card from "../components/card"
import Layout from "../components/layout"
import Nav from "../components/nav"

export default function Template({ data, }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <SEO title={`blog / ${frontmatter.title}`} />
        <Nav dir="blog" subdir={frontmatter.title} />
        <Card cardTitle={frontmatter.title}>
            <h4>date</h4>
            <h3>{frontmatter.date}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Card>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`