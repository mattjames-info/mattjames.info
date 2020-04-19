import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const ToTopButton = () => (
    <button onClick={() => scrollTo('#top')} style={{ position: `fixed`, bottom: `1.5rem`, right: `1.5rem` }}>↑</button>
)

export default ToTopButton