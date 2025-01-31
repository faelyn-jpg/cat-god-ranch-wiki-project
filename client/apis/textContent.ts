import request from 'superagent'
import { TextData } from '../../models/textContent'

const rootUrl = '/api/v1'

export function getAllTextContent(): Promise<string[]> {
  return request.get(rootUrl + '/textContent').then((res) => {
    return res.body
  })
}

export function getTextContent(id: number | string) {
  return request.get(rootUrl + `/textContent/${id}`).then((res) => {
    return res.body
  })
}

export async function addTextContent({ text }: TextData) {
  const res = await request.post('/api/v1/textContent').send({ text })
  return res.body
}
