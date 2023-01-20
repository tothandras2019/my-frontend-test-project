import { useEffect, useState } from 'react'
import { UsersType } from '../DATA/data-types'

const controller = new AbortController()

export const useFetch = () => {
  const [data, SetData] = useState<UsersType | null>(null)
  const [url, SetUrl] = useState<string | null>(null)

  const signal = controller.signal

  const fetchRequest = async (url: string) =>
    await fetch(url, { signal })
      .then((response) => response.json())
      .then((responseData) => SetData(() => responseData))
      .catch((err) => console.error(err))

  useEffect(() => {
    if (!url) return
    fetchRequest(url)
    // return () => AbortFetchRequest()
  }, [url])

  return [data, SetUrl] as const
}

export const AbortFetchRequest = () => controller.abort()
