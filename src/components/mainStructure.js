import React from 'react'
import Menu from '../components/menu'
import SEO from '../components/seo'
import Img from 'gatsby-image'

const MainStructure = (props) => {

  const getExcerpt = (article) => {
    return article.field_content_string.slice(0, 100) + ' ...'
  }

  return (
    <div id={props.type}>
      <SEO title="Home" />
      <header>
        <div className="pictures">
          <div className="picture one"></div>
          <div className="picture two"></div>
          <div className="picture three"></div>
          <div className="picture four"></div>
        </div>
        <div className="title">
          <h1>BLOG EDUKACYJNY</h1>
        </div>
      </header>
      <Menu />
      <main>
        {props.articles.map(article => (
          <article key={article.id}>
            <Img
              fixed={article.selectionImage.childImageSharp.fixed}
              alt={article.title}
              />
            <div className="title"><h3>{ article.field_title_string }</h3></div>
            <div className="excerpt">
              <p>{ getExcerpt(article) }</p>
            </div>
            <div className="button">
              <p>READ</p>
            </div>
          </article>
        ))}
      </main>
      <footer><p>© Klaudia 2020</p></footer>
    </div>
  )
}

export default MainStructure