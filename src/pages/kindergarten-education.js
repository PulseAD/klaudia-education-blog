import React from "react"
import MainStructure from '../components/mainStructure'
import { graphql } from "gatsby"
import '../styles/index.css'
import '../components/layout.css'
import getImages from '../helpers/getImages'
import getArticles from '../helpers/getArticles'

const KindergartenEducationPage = ({ data }) => {
  return (
    <MainStructure
      type="kindergarten-education"
      articles={getArticles(data)}
      images={getImages(data)}
    />
  )
}

export const query = graphql`
query KindergartenQuery {
  allStoryblokEntry(filter: {field_component: {eq: "article"}, tag_list: {in: "kindergarten-education"}}, sort: {fields: created_at, order: DESC}) {
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
            fixed(width: 325, height:325 quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
  allImageSharp(filter: {fixed: {originalName: {regex: "/kindergarten_page/"}}}, sort: {order: ASC, fields: fixed___originalName}) {
    edges {
      node {
        fixed(width: 600, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
}
`

export default KindergartenEducationPage
