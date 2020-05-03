import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/card"

const Writing = ({ pageContext }) => (
  <Layout>
    <SEO title={`writing → ${pageContext.title}`} />
    <Card cardTitle={pageContext.title}>
      <div>
        <p>{pageContext.timeframe}</p>
        <div dangerouslySetInnerHTML={{ __html: pageContext.shortDescription }} />
        
      </div>
    </Card>
    <Card cardTitle="full text">
      <div dangerouslySetInnerHTML={{ __html: pageContext.fullText }} />
    </Card>
  </Layout>
)
export default Writing