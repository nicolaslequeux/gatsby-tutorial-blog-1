import React from "react"

import { Row, Card, CardText, CardBody, CardTitle, Button } from "reactstrap"
import { slugify } from "../utils/utilityFunctions"

import Layout from "../components/layout"
import SEO from "../components/seo"

import authors from "../utils/authors"
import NicoImage from "../images/nicolas-1.jpeg"
import ColtImage from "../images/colt-1.jpg"

const TeamPage = () => (

  <Layout pageTitle="Propriétaires">

    <SEO title="Propriétaires" />

    <Row className="mb-4">
      <div className="col-md-3">
        <img src={NicoImage} style={{ maxWidth: '100%' }} alt="Profile de Nicolas" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '1OO%'}}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              className="upper-case"
              color="primary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>  
    </Row>

    <Row className="mb-4">
      <div className="col-md-3">
        <img src={ColtImage} style={{ maxWidth: '100%' }} alt="Profile de Colt" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '1OO%'}}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button
              className="upper-case"
              color="primary"
              href={`/author/${slugify(authors[1].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>  
    </Row>


  </Layout>

)

export default TeamPage
