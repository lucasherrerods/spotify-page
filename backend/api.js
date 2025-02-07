const express = require('express')
const cors = require('cors')
const artists = require('./data/artists.json')

const api = express()
api.use(express.json())
api.use(cors())

api.get('/artists', (req, res) => {
  const { name_like } = req.query

  if (name_like) {
    const filteredArtists = artists.filter(artist =>
      artist.name.toLowerCase().includes(name_like.toLowerCase()) // filtragem de nomes
    )
    return res.json(filteredArtists)
  }

  // caso o parâmetro não seja fornecido, retorna todos os artistas
  res.json(artists)
})

api.listen(3000, () => console.log('Server running...'))