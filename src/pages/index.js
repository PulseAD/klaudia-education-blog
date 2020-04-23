import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import '../styles/index.css'

const IndexPage = () => {
  return (
    <div id="app">
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
      <nav>
        <ul>
          <li>Strona główna</li>
          <li>Edukacja przedszkolna</li>
          <li>Edukacja wczesnoszkolna</li>
          <li>Nauczanie języka angielskiego</li>
          <li>Pedagogika</li>
          <li>Psychologia</li>
          <li>O mnie</li>
        </ul>
      </nav>
      <main>
        {[0,1,2].map(index => (
          <article key={index}>
            <div className="image">
            </div>
            <div className="title"><h3>Title example</h3></div>
            <div className="excerpt">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet amet egestas odio nunc, in bibendum mauris. Ac sit tincidunt vitae netus semper.
              </p>
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

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

export default IndexPage
