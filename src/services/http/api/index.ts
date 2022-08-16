import axios from 'axios'

import { THttpClient } from './types'

const httpClient: THttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export { httpClient }
