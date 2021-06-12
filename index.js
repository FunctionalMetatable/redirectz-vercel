const express = require('express')
const app = express()

app.get('/u/:user', (req, res) => {
  res.redirect(301, `https://scratch.mit.edu/users/${req.params.user}`)
})

app.get('/p/:id', (req, res) => {
  res.redirect(301, `https://scratch.mit.edu/projects/${req.params.id}`)
})

app.get('/s/:id', (req, res) => {
  res.redirect(301, `https://scratch.mit.edu/studios/${req.params.id}`)
})

app.get('/o/:user', (req, res) => {
  res.redirect(301, `https://ocular.jeffalo.net/user/${req.params.user}`)
})

app.get('/tw/:id', (req, res) => {
  res.redirect(301, `https://turbowarp.org/${req.params.id}`)
})

module.exports = app
