import express from 'express'

import * as db from '../db/functions/textContent'

const router = express.Router()
export default router

//GET api/v1/textContent
router.get('/', async (req, res) => {
  try {
    const textContent = await db.getAllTextContent()
    res.json(textContent).status(200)
  } catch (e) {
    res
      .sendStatus(404)
      .json({ message: 'Server error: Unable to find articles' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const textContent = await db.getTextContent(id)
    res.json(textContent).status(200)
  } catch (e) {
    res
      .sendStatus(404)
      .json({ message: 'Server error: Unable to find article' })
  }
})

//POST api/v1/textContent
router.post('/', async (req, res) => {
  try {
    const text = req.body
    const id = await db.createTextContent(text)
    res.status(201).json(id)
  } catch (e) {
    res.status(500).json({ message: 'Server error: Unable to create article' })
  }
})
