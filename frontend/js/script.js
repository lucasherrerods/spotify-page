const searchInput = document.querySelector('#search-input')
const resultArtist = document.querySelector('#result-artist')
const resultPlaylist = document.querySelector('#result-playlists')

const requestApi = async (searchTerm) => {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`

  const request = await fetch(url)
  const response = await request.json()

  displayResults(response)
}

const displayResults = (result) => {
  resultPlaylist.classList.add('hidden')

  const artistName = document.querySelector('#artist-name')
  const artistImage = document.querySelector('#artist-img')

  result.forEach((element) => {
    artistName.textContent = element.name
    artistImage.src = element.urlImg
  })

  resultArtist.classList.remove('hidden')
}

document.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase()

  if (searchTerm === '') {
    resultPlaylist.classList.add('hidden')
    resultArtist.classList.remove('hidden')
    return
  }

  requestApi(searchTerm)
})