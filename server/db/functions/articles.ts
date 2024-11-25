import { TextData } from '../../../models/articles.ts'
import db from '../connection.ts'

export async function getAllArticles() {
  const articles = await db('text_content').select()
  return articles
}

export async function getArticle(id: number | string) {
  const article = await db('text_content').where({ id }).first()
  return article
}

export async function createArticle(text: TextData) {
  const result = db('text_content')
    .insert(text)
    .returning('id')
    .into('text_content')
    .then(() => {
      console.log(text)
    })

  return result
}
