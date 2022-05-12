import USER from '../var/user'
export const LogOut = () => {
  USER(null)
  localStorage.clear()
  // document.cookie = 'nekot' + '; max-age=0'
}

export const setTokenCookie = (token: string) => {
  document.cookie =
    'nekot' + '=' + (token || '') + '; path=/' + '; max-age=' + 60 * 60
}
