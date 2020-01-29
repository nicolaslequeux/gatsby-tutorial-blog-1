import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Badge, Button} from "reactstrap"
import { slugify } from "../utils/utilityFunctions"

const tagsPage = ({ pageContext }) => {

  // Destructuring pageContext object
  const { tags, tagPostCount } = pageContext;
  
  return (
    <Layout pageTitle="Liste des Tags">
      <SEO title="Liste des tags"/>
      <ul>
        {
          tags.map(tag => (
            <li key={tag} style={{ marginBottom: "10px" }}>
              <Button color="primary" href={`/tags/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPostCount[tag]}</Badge>
              </Button>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export default tagsPage
