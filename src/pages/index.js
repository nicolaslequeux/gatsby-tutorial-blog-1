import React from "react"
import { Row, Col } from 'reactstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"

import Post from "../components/Post"

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
              <Post title={node.frontmatter.title}
                author={node.frontmatter.author} 
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                fluid={node.frontmatter.image.childImageSharp.fluid}             
                body={node.excerpt}
                />
              ))}
            </div>
          )
        }} />
      </Col>
    <Col md="4">
      <div style={{width: "100%", height: "100%", backgroundColor: "grey"}}></div>
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
            date(formatString: "MMM Do YYY")
            author
            path
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


