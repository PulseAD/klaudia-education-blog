import React from "react"
import MainStructure from '../components/mainStructure'
import { graphql } from "gatsby"
import '../styles/index.css'
import '../components/layout.css'
import getImages from '../helpers/getImages'
import getArticles from '../helpers/getArticles'

const PsychologyPage = ({ data }) => {
  return (
    <MainStructure type="psychology" articles={getArticles(data)} images={getImages(data)} />
  )
}

export const query = graphql`
query PsychologyQuery {
  allStoryblokEntry(filter: {field_component: {eq: "article"}, tag_list: {in: "psychology"}}, sort: {fields: created_at, order: DESC}) {
    edges {
      node {
        field_content_string
        field_language_string
        field_main_image_string
        field_title_string
        tag_list
        id
        slug
        selectionImage {
          childImageSharp {
            fixed(width: 325, height:325 quality: 75) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
  allImageSharp(filter: {fixed: {originalName: {regex: "/psychology_page/"}}}, sort: {order: ASC, fields: fixed___originalName}) {
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

export default PsychologyPage
