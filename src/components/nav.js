import React from "react"
import { Link } from "gatsby"

const Nav = ({ dir, subdir, toHome }) => (
    <div id="nav" style={{ 
        position: `sticky`, 
        top: `0`, 
        background: `white`, 
        zIndex: 99, 
        borderBottom: `1px solid blue`, 
        marginBottom: `-1px`, 
        paddingTop: `.5rem`,
        display: `flex`
    }}>
        {toHome ? 
            <>
                <Link to="/" style={{ textDecoration: `none`, marginBottom: `.5rem`, flex: `0 0 1.5rem`, lineHeight: `1rem` }} title="to home">←</Link>
                <div style={{ flex: `1` }}><h4>mattjames.info / <span>{dir}</span></h4></div>
            </> 
            : subdir ? 
            <>
                <Link to={`/${dir}`} style={{ textDecoration: `none`, marginBottom: `.5rem`, flex: `0 0 1.5rem`, lineHeight: `1rem` }} title={`to ${dir}`}>←</Link>
                <div style={{ flex: `1` }}><h4>mattjames.info / <span>{dir} /</span> <span>{subdir}</span></h4></div>
            </>
            : 
            <>
                <Link to="/" style={{ textDecoration: `none`, marginBottom: `.5rem`, flex: `0 0 1.5rem`, lineHeight: `1rem`, }} title="you are home">⛆</Link> 
                <div style={{ flex: `1` }}><h4>mattjames.info</h4></div>
            </>
        }
    </div>
)

export default Nav