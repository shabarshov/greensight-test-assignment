import { useEffect, useState } from "react"
import type { Dispatch, SetStateAction } from "react"

interface ApiResponse<T> {
  ok: boolean
  status: number | null
  body: T | null
  isLoading: boolean
  setUrl: Dispatch<SetStateAction<string>>
}

const useGetRequest = <T>(initialUrl: string): ApiResponse<T> => {
  const [url, setUrl] = useState<string>(initialUrl)

  const [ok, setOk] = useState<boolean>(false)
  const [status, setStatus] = useState<number | null>(null)
  const [body, setBody] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(url)
        setBody(response.ok ? await response.json() : null)

        setOk(response.ok)
        setStatus(response.status)
      } catch (e: any) {
        console.log(e.message)
        setBody(null)
        setOk(false)
        setStatus(null)
      }

      setIsLoading(false)
    }

    setIsLoading(true)
    sendRequest()
  }, [url])

  return { ok, status, body, isLoading, setUrl }
}

export default useGetRequest
