import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allNodeArticle {
      edges {
        node {
          id
          title
          body {
            value
          }
          created
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allNodeArticle.edges.map(edge => (
      <>
        <h3>
          <Link to={edge.node.id}>{edge.node.title}</Link>
        </h3>
        <small>
          <em>{Date(edge.node.created)}</em>
        </small>
        <div
          style={{ maxWidth: `300px`, margin: ` 0 1.45rem 1.45rem 0`, width: `100%`, float: `left` }}
        >
          <Img
            fluid={
              edge.node.relationships.field_image.localFile.childImageSharp
                .fluid
            }
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              edge.node.body.value.split(" ").splice(0, 50).join(" ") + "...",
          }}
        ></div>
        <hr style={{ clear: `both`, margin: `1.45rem 0` }}  />
      </>
    ))}
  </Layout>
)

export default IndexPage
