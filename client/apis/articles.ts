import request from 'superagent'
import { TextData } from '../../models/articles'

const rootUrl = '/api/v1'

export function getArticles(): Promise<string[]> {
  return request.get(rootUrl + '/articles').then((res) => {
    return res.body
  })
}

export function getArticle(id: number | string) {
  return request.get(rootUrl + `/articles/${id}`).then((res) => {
    return res.body
  })
}

export async function addArticle({ text }: TextData) {
  const res = await request.post('/api/v1/articles').send({ text })
  return res.body
}
