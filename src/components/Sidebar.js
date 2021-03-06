import React from 'react'
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, Input } from 'reactstrap';
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image'

const Sidebar = ({ author, authorFluid }) => (
  <div>
    {/* Si la page ne possède pas l'objet author alors le bloc n'est pas affiché */}
    {
      author && (
        <Card>
          <Img className="card-image-top" fluid={authorFluid} />
          <CardBody>
            <CardTitle className="text-center text-uppercase mb-3">{author.name}</CardTitle>
            <CardText>{author.bio}</CardText>
            { author.instagram &&
              <div className="author-social-links text-center">
                <ul>
                  <li><a href={author.instagram} target="_blank" rel="noopener noreferrer" className="facebook">Instagram</a></li>
                </ul>
              </div>            
            }
          </CardBody>
        </Card>
      )
    }

    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input type="email" name="email" placeholder="Your email address..." />
          </FormGroup>
          <button className="btn btn-outline-success text-upercase">
            Subscribe
          </button>  
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
          <img src="https://via.placeholder.com/320x200" alt="advert" style={{width: "100%"}}></img>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-upeprcase md-3">
          Recent Posts
        </CardTitle>
        <StaticQuery query={sidebarQuery} render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid} alt="Card image cap" />
                  </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={node.fields.slug}>
                      {node.frontmatter.title}  
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
              ))}
            </div>
          )
        }}/>
      </CardBody>
    </Card>

  </div>
);


const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC} limit: 3) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
