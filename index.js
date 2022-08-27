//const express = require('express')
import express from 'express'

import datas from './data.json' assert {type: 'json'}

const app = express()
app.use(express.json())

app.get('/articles', (req, res) => {
    res.status(200).json(datas)
})

/*
app.get('/articles/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const article = articles.find(article => article.id === id)
    res.status(200).json(article)
})

app.post('/articles', (req,res) => {
    articles.push(req.body)
    res.status(200).json(articles)
})
*/


app.listen(3000, () => console.log('3000 on ...'))

export default app;