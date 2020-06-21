import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
            fluid(maxHeight: 325) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
  `)
  const getImage = () => {
    let image
    for (let i = 0; i < data.images.edges.length; ++i) {
      image = data.images.edges[i].node
      if (image.relativePath === src) {
        return image
      }
    }
  }

  if (getImage()) {
    return <Img fluid={getImage().childImageSharp.fluid} />
  }
  return <p>Image not found</p>
}

export default Image
