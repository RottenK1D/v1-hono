import { Hono } from 'hono'
import {prettyJSON} from 'hono/pretty-json'
import api from './api'

const app = new Hono()
  .use(prettyJSON())
  .get('/', (c) => {
  return c.text('Book Management API')
})
  .notFound((c) => c.json({ message: 'Not Found', ok:  false }, 404))
  .route('/api', api)


export default app
