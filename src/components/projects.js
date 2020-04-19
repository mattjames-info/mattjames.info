import React from "react"
import { Link } from "gatsby"
import Card from "../components/card"
import { StaticQuery, graphql } from "gatsby"
import Img  from "gatsby-image"

const Projects = () => (

    <StaticQuery
    query={graphql`
        query MyQuery {
            allProjectsJson {
            edges {
                node {
                    bannerImage {
                        source {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                            publicURL
                        }
                        name
                        caption
                    }
                    title
                    longDescription
                    shortDescription
                    timeframe
                    slug
                }
            }
        }
    }
    `}

    render={data => (
        <>
        <Card cardTitle="projects" style={{ paddingBottom: `0`, maxHeight: `865px` }}>
            <div>
                {data.allProjectsJson.edges.slice(0,3).map(({ node }) => (
                    <>
                    <div style={{border: `1px blue solid`, padding: `2rem`, marginTop: `2rem`, }}>
                        <div style={{ paddingBottom: `1rem`}}>
                            <div>
                                <Img 
                                    fluid={node.bannerImage.source.childImageSharp.fluid}
                                    alt="" />
                            </div>
                            <div>
                                {node.bannerImage.caption ?
                                    <>
                                        ↪ <i style={{ fontSize: `.75rem`, }} dangerouslySetInnerHTML={{ __html: node.bannerImage.caption }} />
                                    </>
                                    :
                                    ``
                                }
                            </div>
                        </div>
                        <h4>title</h4>
                        <h2>{node.title}</h2>
                        <h4>timeframe</h4>
                        <h3>{node.timeframe}</h3>
                        <h4>description</h4>
                        <p dangerouslySetInnerHTML={{ __html: node.shortDescription }} />
                    </div>
                    <Link to={`projects/${node.slug}`} style={{ textDecoration: `none`, }}>
                        <div className="project-link">
                                <b>read more →</b>
                        </div>
                    </Link>
                    </>
                ))}
            </div>
        </Card>
        {/* <Link to={`projects`} style={{ textDecoration: `none`, }}>
            <div className="project-link" style={{ marginTop: `-2rem`, marginBottom: `2rem` }}>
                <b>more projects →</b>
            </div>
        </Link> */}
        </>
    )}
    />
)

export default Projects;