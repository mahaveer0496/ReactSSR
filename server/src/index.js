const express = require('express')
const app = express()
const React = require('react')
const { renderToString } = require('react-dom/server')
const Home = require('./client/components/Home').default
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  const content = renderToString(<Home />)
  res.send(content)
})

app.get('*', (req, res) => {
  res.status(404).send('page not found')
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})
