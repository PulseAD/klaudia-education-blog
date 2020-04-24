import React from "react"
// import { Link } from "gatsby"

import '../styles/index.css'
import MainStructure from '../components/mainStructure'
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const getArticles = () => {
    const articles = data.allStoryblokEntry.edges.map(article => article.node)
    return articles
  }
  return (
    <MainStructure type="home" articles={getArticles()} />
  )
}

export const query = graphql`
query MyQuery {
  allStoryblokEntry(limit: 3, filter: {field_component: {eq: "article"}}, sort: {fields: created_at, order: DESC}) {
    edges {
      node {
        id
        field_content_string
        field_language_string
        field_main_image_string
        field_title_string
        field_component
        created_at
        tag_list
        selectionImage {
          childImageSharp {
            fixed(width: 325, height: 325, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
