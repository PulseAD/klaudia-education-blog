const getTitle = (type) => {
  if (type === 'home') {
    return 'TULIPANOWO - BLOG EDUKACYJNY'
  }
  if (type === 'elementary-education') {
    return 'EDUKACJA PRZEDSZKOLNA'
  }
  if (type === 'kindergarten-education') {
    return 'EDUKACJA WCZESNOSZKOLNA'
  }
  if (type === 'teaching-english') {
    return 'NAUCZANIE JĘZYKA ANGIELSKIEGO'
  }
  if (type === 'pedagogics') {
    return 'PEDAGOGIKA'
  }
  if (type === 'psychology') {
    return 'PSYCHOLOGIA'
  }
  if (type === 'about-me') {
    return 'O MNIE'
  }
  return ''
}

export default getTitle
