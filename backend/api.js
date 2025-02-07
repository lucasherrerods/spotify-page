const express = require('express')
const cors = require('cors')
const artists = require('./data/artists.json')

const api = express()
api.use(express.json())
api.use(cors())

api.get('/artists', (req, res) => {
  res.status(200).json(artists)
})

api.listen(3000, () => console.log('Server running...'))