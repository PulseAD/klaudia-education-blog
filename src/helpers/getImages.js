const getImages = (data) => {
  const images = data.allImageSharp.edges.map(image => image.node)
  return images
}

export default getImages
