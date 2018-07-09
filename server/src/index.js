import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";
const app = express()
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
