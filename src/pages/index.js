import React from "react"
import '../styles/index.css'
import '../components/layout.css'
import MainStructure from '../components/mainStructure'
import { graphql } from "gatsby"
import getImages from '../helpers/getImages'
import getArticles from '../helpers/getArticles'

const IndexPage = ({ data }) => {
  return (
    <MainStructure type="home" articles={getArticles(data)} images={getImages(data)} />
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
        slug
        tag_list
        selectionImage {
          childImageSharp {
            fixed(width: 325, height: 325, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
  allImageSharp(filter: {fixed: {originalName: {regex: "/main_page/"}}}, sort: {order: ASC, fields: fixed___originalName}) {
    edges {
      node {
        fixed(width: 500, quality: 75) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
}
`

export default IndexPage
