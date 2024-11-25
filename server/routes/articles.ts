import express from 'express'

import * as db from '../db/functions/articles'

const router = express.Router()
export default router

//GET api/v1/articles
router.get('/', async (req, res) => {
  try {
    const articles = await db.getAllArticles()
    res.json(articles).status(200)
  } catch (e) {
    res
      .sendStatus(404)
      .json({ message: 'Server error: Unable to find articles' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const article = await db.getArticle(id)
    res.json(article).status(200)
  } catch (e) {
    res
      .sendStatus(404)
      .json({ message: 'Server error: Unable to find article' })
  }
})

//POST api/v1/articles
router.post('/', async (req, res) => {
  try {
    const text = req.body
    const id = await db.createArticle(text)
    res.status(201).json(id)
  } catch (e) {
    res.status(500).json({ message: 'Server error: Unable to create article' })
  }
})
