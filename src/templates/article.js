import React from 'react'
import { graphql } from 'gatsby'
import Menu from '../components/menu'
import Footer from '../components/footer'
import Image from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import SEO from '../components/seo'
import '../styles/index.css'
import '../components/layout.css'

export default ({ data }) => {
  const article = data.storyblokEntry
  return (
    <div id="article-page">
      <SEO title={article.field_title_string} />
      <Menu />
      <main>
        <h1>{article.field_title_string}</h1>
        <div className="image-container">
          <Image
            fluid={article.mainImage.childImageSharp.fluid}
            alt="Main article image"
          />
        </div>
        <div className="content">
          <ReactMarkdown source={article.field_content_string} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    storyblokEntry(slug: { eq: $slug }) {
      field_title_string
      field_content_string
      slug
      name
      mainImage {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`