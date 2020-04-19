import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Nav from "../components/nav"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Nav dir="404" toHome />
    <Card cardTitle="404: Not Found!">
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Card>
  </Layout>
)

export default NotFoundPage
