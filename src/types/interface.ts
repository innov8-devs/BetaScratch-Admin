import { GENDER, ROLE } from './enum'

export interface AuthResponse {
  id: number
  email: string
  username: string
  firstName: string
  lastName: string
  dateOfBirth: string
  role: ROLE
  gender: GENDER
  mobileNumber: string
  state: string
  token: string
}
