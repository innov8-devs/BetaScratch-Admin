import { SERVER_URI_REST } from '../constants'

export const uploadImage = async (files: any) => {
  var formdata = new FormData()
  formdata.append('image', files[0], files[0].name)

  var requestOptions = {
    method: 'POST',
    body: formdata,
  }

  return fetch(`${SERVER_URI_REST}/game/upload`, requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log('error', error))
}
