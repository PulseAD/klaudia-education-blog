import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import removeMd from 'remove-markdown'
import getTitle from '../helpers/getTitle'

const MainStructure = (props) => {

  const getExcerpt = (article) => {
    const content = removeMd(article.field_content_string)
    return content.slice(0, 100) + ' ...'
  }

  const numberToText = (value) => {
    if (value === 0) {
      return 'one'
    }
    if (value === 1) {
      return 'two'
    }
    if (value === 2) {
      return 'three'
    }
    if (value === 3) {
      return 'four'
    }
  }

  return (
    <div id={props.type} className="main-structure">
      <SEO title={getTitle(props.type)} />
      <header>
        <div className="pictures">
        {props.images.map((image, indice) => (
          <BackgroundImage
            Tag="div"
            fixed={image.fixed}
            className={'picture ' + numberToText(indice)}
            key={image.fixed.src}
          ></BackgroundImage>
        ))}
          {/* <div className="picture one"></div>
          <div className="picture two"></div>
          <div className="picture three"></div>
          <div className="picture four"></div> */}
        </div>
        <div className="title">
          <h1>{getTitle(props.type)}</h1>
        </div>
      </header>
      <Menu />
      <main>
        {props.articles.map(article => (
          <article key={article.id}>
            <div className="article-container">
              <Img
                fixed={article.selectionImage.childImageSharp.fixed}
                alt={article.title}
                />
              <div className="title"><h3>{ article.field_title_string }</h3></div>
              <div className="excerpt">
                <p>{ getExcerpt(article) }</p>
              </div>
              <Link to={'/' + article.slug}>
                <div className="button">
                  <p>READ</p>
                </div>
              </Link>
            </div>
          </article>
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default MainStructure