import { TextData } from '../../../models/textContent.ts'
import db from '../connection.ts'

//unnecessary ?
export async function getAllTextContent() {
  const articles = await db('text_content').select()
  return articles
}

export async function getTextContent(id: number | string) {
  const article = await db('text_content').where({ id }).first()
  return article
}

export async function createTextContent(text: TextData) {
  const result = db('text_content')
    .insert(text)
    .returning('id')
    .into('text_content')
    .then(() => {
      console.log(text)
    })

  return result
}
