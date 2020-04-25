const getArticles = (data) => {
  const articles = data.allStoryblokEntry.edges.map(article => article.node)
  return articles
}

export default getArticles
