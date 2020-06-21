import React from "react"
import { graphql } from "gatsby"
import '../styles/index.css'
import '../components/layout.css'
import Menu from '../components/menu'
import Footer from '../components/footer'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import getImages from '../helpers/getImages'
import numberToText from '../helpers/numberToText'
const AboutMePage = ({ data }) => {
  const article = data.storyblokEntry
  return (
    <div id="about-me" className="main-structure">
      <SEO title="About me" />
      <header>
        <div className="pictures">
          {getImages(data).map((image, indice) => (
            <div
              className={'picture ' + numberToText(indice)}
              key={image.fixed.src}
            >
              <Img fixed={image.fixed}></Img>
            </div>
          ))}
        </div>
        <div className="title">
          <h1>O MNIE</h1>
        </div>
      </header>
      <Menu />
      <main>
        <Img fixed={article.mainImage.childImageSharp.fixed} />
        <p>
          {article.field_content_string}
        </p>
      </main>
      <Footer />
    </div>
  )
}

export const query = graphql`
query AboutMeQuery {
  storyblokEntry(slug: { eq: "about-me" }) {
    field_content_string
    slug
    mainImage {
      childImageSharp {
        fixed(width: 400) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
  allImageSharp(filter: {fixed: {originalName: {regex: "/about_page/"}}}, sort: {order: ASC, fields: fixed___originalName}) {
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

export default AboutMePage
