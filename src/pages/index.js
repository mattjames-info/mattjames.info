import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"
import Projects from "../components/projects"
import Nav from "../components/nav"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import { SocialIcon } from "react-social-icons"

const IndexPage = ({data}) => (
  <Layout>
    <SEO />
    <Nav />
    <Card cardTitle="about">
      <p>Matt is a writer, programmer, historian, and anthropologist.</p>
      <p>He writes, designs, programs and studies interactive narratives and digital literature, and many of his <a href="javascript:void(0)" onClick={() => scrollTo('#projects')}>projects</a> are borne out of intense archival research into forgotten historical subjects.</p>
      <p>His <a href="javascript:void(0)" onClick={() => scrollTo('#publications')}>writing</a> is often short-form, drawing inspiration from genres such as micro-fiction, micro-nonfiction, and prose poetry.</p>
      <p>He graduated from Hampshire College with a Bachelor of Arts degree in Creative Writing and Anthropology, concentrating on Migrant Studies and Digital Literature.</p>
      <span id="prjcts" />
    </Card>
    <Projects />
    <Card cardTitle="publications">
      <table style={{ marginBottom: `0`, border: `none` }}>
        <tr>
          <th><h4>title</h4></th>
          <th><h4>year</h4></th>
          <th><h4>publisher</h4></th>
          <th><h4>link</h4></th>
        </tr>
      {data.allPublicationsJson.edges.map(({node}) => (
        <tr>
          <td dangerouslySetInnerHTML={{ __html: node.title }} />
          <td dangerouslySetInnerHTML={{ __html: node.year }} />
          <td dangerouslySetInnerHTML={{ __html: node.publisher }} style={{ fontStyle:`italic` }}/>
          <td><a href={node.pubLink} target="_blank" rel="noopener noreferrer">link</a>&nbsp;↗</td>
        </tr>
      ))}
      </table>
    </Card>
    <Card cardTitle="contact">
      <p style={{ marginBottom: `1rem` }}>Best way to get in touch is through email (...but don't be afraid to check out my other social media profiles.)</p>
      <div style={{ display: `flex`, flexWrap: `wrap`, flexDirection: `row`, width: `100%`, justifyContent: `space-between` }}>
        <div>
          <SocialIcon url="mailto:hello@mattjames.info" bgColor="white" fgColor="blue" target="_blank" rel="noopener noreferrer" />
        </div>
        <div>
          <SocialIcon url="http://twitter.com/mattjamesinfo" bgColor="white" fgColor="blue" target="_blank" rel="noopener noreferrer" />
        </div>
        <div>
          <SocialIcon url="http://instagram.com/mattjames.info" bgColor="white" fgColor="blue" target="_blank" rel="noopener noreferrer" />
        </div>
        <div>
          <SocialIcon url="http://github.com/mattjcarney" bgColor="white" fgColor="blue" target="_blank" rel="noopener noreferrer" />
        </div>
        <div>
          <SocialIcon url="http://linkedin.com/in/matt-j-carney" bgColor="white" fgColor="blue" target="_blank" rel="noopener noreferrer" />
        </div>
      </div>
    </Card>
  </Layout>
)

export const pageQuery = graphql`
  query PublicationsQuery {
    allPublicationsJson {
      edges {
        node {
          pubLink
          publisher
          title
          year
          shortDescription
        }
      }
    }
  }
`

export default IndexPage
