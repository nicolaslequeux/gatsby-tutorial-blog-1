import React from "react"
import { Row, Col } from 'reactstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"

import Post from "../components/Post"
import Sidebar from "../components/Sidebar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Gatsby', 'Application', 'React']}/>
    <h1>Home page</h1>
    <Row>
      <Col md="8">
        <StaticQuery query={indexQuery} render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post key={node.id} title={node.frontmatter.title}
                author={node.frontmatter.author} 
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}       
                body={node.excerpt}
                />
              ))}
            </div>
          )
        }} />
      </Col>
    <Col md="4">
      <Sidebar />
    </Col>      
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
            author
            path
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
export default IndexPage


