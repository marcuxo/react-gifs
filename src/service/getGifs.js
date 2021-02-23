

function getGifs({keyword = 'morty'} = {}) {
  const apiUrl = `https://api.giphy.com/v1/stickers/search?api_key=eFh32eSSDL7IloMjheubcxLnluUtQkf0&q=${keyword}&limit=5&offset=0&rating=r&lang=es`
  return fetch(apiUrl)
  .then(res => res.json())
  .then(response => {
    const {data = []} = response
    const gifs = data.map(image => {
      const {images, title, id} = image
      const {url} = images.fixed_height
      return { title, id, url}
    })
    return gifs
  })
}

export default getGifs
