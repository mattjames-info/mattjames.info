import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import scrollTo from "gatsby-plugin-smoothscroll"

const ToTopButton = () => (
    // smooth scrolling is BROKEN
    <button onClick={() => scrollTo('#top')} style={{ position: `fixed`, right: `1.5rem`, bottom: `1.5rem` }}>↑</button>
    // <AnchorLink to="span#top" title="to top" />
)

export default ToTopButton