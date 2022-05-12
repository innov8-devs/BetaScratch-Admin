const ISSERVER = typeof window === 'undefined'

export const persistStorage = (key: string, value: any) => {
  if (!ISSERVER) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const fetchStorageItem = (key: string) => {
  // @ts-ignore
  if (!ISSERVER) {
    let item = localStorage.getItem(key)
    if (item) {
      return JSON.parse(item)
    }
    return null
  }
}
