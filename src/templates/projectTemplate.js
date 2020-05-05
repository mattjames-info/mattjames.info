import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/card"
import Nav from "../components/nav"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Project = ({ pageContext, data }) => (
  <Layout>
    <SEO title={`projects / ${pageContext.title}`} />
    <Nav dir="projects" subdir={pageContext.title} />
    <Card>
      <div>
        <h4>title</h4>
        <h2>{pageContext.title}</h2>
        <h4>timeframe</h4>
        <h3>{pageContext.timeframe}</h3>
        <h4>description</h4>
        <p dangerouslySetInnerHTML={{ __html: pageContext.longDescription }} />
        {pageContext.warning === true ?
          <>
            <Card warning />
          </>
        :
          ``
        }
      </div>
    </Card>
    {pageContext.linkTo ?
      <>
      <a href={pageContext.linkTo} style={{ textDecoration: `none`, }}>
        <div className="linkTo-link">
              <b>link to {pageContext.linkTo.replace(/[^-A-Z0-9.]+/ig, "")}&nbsp;→</b>
        </div>
      </a>
      </>
      :
      ``
    }
    {pageContext.images ?
      <Card cardTitle="images">
        <div>
          {
          data.projectsJson.images.map(image => (
            <>
            <div className="project-page-photo">
              <Img 
                fluid={image.source.childImageSharp.fluid}
                alt="" />
              {image.caption ? 
                <>
                  ↪ <i style={{ fontSize: `.75rem`, }} dangerouslySetInnerHTML={{ __html: image.caption }} />
                </>
                :
                ``
              }
            </div>
            </>
          ))}
        </div>
      </Card>
      :
      ``
    }
    {pageContext.sources ?
      <Card cardTitle="sources">
        {data.projectsJson.sources.map((source, i) => (
          <>
            <div>
              {i===0 ? `` : <hr style={{ borderWidth: `1px 0px 0px 0px`, borderStyle: `solid`, borderColor: `blue`, marginTop: `1rem`, height: `0` }} />}
              <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `space-between` }}>
                <div style={{ flex: `4` }}>
                  <h3 dangerouslySetInnerHTML={{ __html:source.sourceTitle }} />
                </div>
                {source.sourceLink ? 
                <>
                  <div style={{ flex: `1` }} />
                  <div style={{ flex: `0` }}>
                    <a href={source.sourceLink} target="_blank" rel="noopener noreferrer">link</a>&nbsp;↗
                  </div>
                </>
                :
                ``
                }
              </div>
              {source.sourceDescription ? <p>{source.sourceDescription}</p> : ``}
            </div>
          </>
        ))}
      </Card>
      :
      ``
    }
  </Layout>
)

export const pageQuery = graphql`
  query ProjectsPageQuery($slug: String!) {
    projectsJson(slug: {eq: $slug}) {
      slug
      images {
        source {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              }
            }
          }
      caption
      name
      }
      sources {
        sourceDescription
        sourceLink
        sourceTitle
      }
    }
  }
`

export default Project