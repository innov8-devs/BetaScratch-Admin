import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { SERVER_URI_GRAPHQL } from '../constants'
import { AuthResponse } from '../types/interface'
import { fetchStorageItem } from '../utils/storage.util'

const httpLink = createHttpLink({
  uri: SERVER_URI_GRAPHQL,
})

const authLink = setContext((_, { headers }) => {
  const user: AuthResponse = fetchStorageItem('user')
  const token = user?.token
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
