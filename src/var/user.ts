import { makeVar } from '@apollo/client'
import { fetchStorageItem } from '../utils/storage.util'

const USER = makeVar(fetchStorageItem('user'))

export default USER
