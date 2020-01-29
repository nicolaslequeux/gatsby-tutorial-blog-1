import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="Page non trouvée...">
    <SEO title="404: Not found" />
    <Link
      to={"/"}
      className="btn btn-danger text-uppercase"
      style={{display: "block", width: "150px", margin: "auto"}}
    >
      Go home
    </Link>
  </Layout>
)

export default NotFoundPage
