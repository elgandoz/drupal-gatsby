import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($id: String!) {
    nodeArticle(id: { eq: $id }) {
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
`

export default ({ data }) => {
  const post = data.nodeArticle
  return (
    <Layout>
      <SEO title={post.title} />
      <div>
        <h1>{post.title}</h1>
        <small>
          <em>{Date(post.created)}</em>
        </small>
        <div
          style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}
        >
          <Img
            fluid={
              post.relationships.field_image.localFile.childImageSharp.fluid
            }
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
      </div>
    </Layout>
  )
}
