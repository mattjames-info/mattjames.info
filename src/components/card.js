import React from "react"

const Card = ({ children, cardTitle }) => (
    <div id={cardTitle}
        style={{
            border: `1px blue solid`,
            padding: `1.5rem`,
            marginBottom: `2rem`,
            background: `white`
        }}
    >
        {cardTitle ? <h1>{cardTitle}</h1> : ``}
        <div>
            {children}
        </div>
    </div>
)

export default Card