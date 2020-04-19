import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      left: `50%`,
      transform: `translateX(-50%)`,
      position: `fixed`,
      zIndex: `99`,
      maxWidth: 800,
      width: `100%`,
      border: `1px solid blue`,
      margin: `1rem 0 0`,
      padding: `1rem 0 1rem 0`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `.5rem`,
        textAlign: `center`,
      }}
    >
      <h2 style={{ margin: 0, }} id='header-logo'>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
