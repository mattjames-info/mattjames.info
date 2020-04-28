import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ToTopButton from "../components/to-top-button"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <span id="top" />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 800,
          padding: `0rem 1rem 1rem 1rem`,
        }}
      >
        <main>{children}</main>
        <ToTopButton />        
        <footer style={{ border: `1px solid blue`, padding: `1.5rem`, fontSize: `.5rem`, lineHeight: `.75rem` }}>
          {/* {new Date().getFullYear()} */}
          Copyright © MMXX
          <br />
          Designed by Matt James
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
