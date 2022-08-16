import { httpClient } from './api'
import UserService from './user'

export default {
  user: UserService(httpClient),
}
