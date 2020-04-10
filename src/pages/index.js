import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import PaginationLinks from "../components/PaginationLinks"

export default ({ data }) => {

  const postsPerPage = 3;
  let numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage);

  return(
    <Layout pageTitle="Jeep en Ardenne">
    <SEO title="Home" keywords={['Gatsby', 'Application', 'React']}/>
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          title={node.frontmatter.title}
          author={node.frontmatter.author} 
          slug={node.fields.slug}
          date={node.frontmatter.date}
          fluid={node.frontmatter.image.childImageSharp.fluid}
          tags={node.frontmatter.tags}       
          body={node.excerpt}
        />
      ))}
      <PaginationLinks currentPage={1} numberOfPages={numberOfPages}/>
    </div>
  </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      limit: 3
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`


