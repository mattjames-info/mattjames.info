import React from "react"

const Card = ({ children, cardTitle, warning }) => (
    <>
    {!warning ?
        <div id={cardTitle} style={{ border: `1px blue solid`, padding: `1.5rem`, marginBottom: `2rem`, background: `white` }} >
            {cardTitle ? <h1>{cardTitle}</h1> : ``}
            <div>
                {children}
            </div>
        </div>
    :
    <div id={cardTitle} style={{ border: `1px blue solid`, padding: `1.5rem`, marginTop: `1rem`, background: `white` }}>
        <div className="warning-title"><span>Please note:</span></div>
        <p>This project is still in the planning stages.</p>
        <p>I will be regularly updating the "sources" section with links to major resources that are fueling and inspiring this project.</p>
    </div>
    }
    </>
)

export default Card