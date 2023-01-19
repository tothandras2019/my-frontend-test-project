import { useEffect, useState } from 'react'

const controller = new AbortController()

export const useFetch = () => {
  const [data, SetData] = useState({})
  const [url, SetUrl] = useState(null)

  const signal = controller.signal

  const fetchRequest = async (url) =>
    await fetch(url, { signal })
      .then((response) => response.json())
      .then((responseData) => SetData(() => responseData))
      .catch((err) => console.error(err))

  useEffect(() => {
    if (!url) return
    fetchRequest(url)
    // return () => AbortFetchRequest()
  }, [url])

  return [data, SetUrl]
}

export const AbortFetchRequest = () => controller.abort()
