import { THttpClient } from '../api/types'
import { IGetUserByIdParams, IReturnGetUserById } from './types'

// Isso é somente para fins didáticos
export default (httpClient: THttpClient) => ({
  getUserById: async ({ id }: IGetUserByIdParams) => {
    const response = await httpClient.get<IReturnGetUserById>(`user/${id}`)

    return {
      data: response.data,
    }
  },
})
