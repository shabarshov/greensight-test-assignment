import { useEffect, useState } from "react"
import type { Dispatch, SetStateAction } from "react"

interface ApiResponse<T> {
  ok: boolean
  status: number | null
  body: T | null
  setUrl: Dispatch<SetStateAction<string>>
  error: string | null
}

const useGetRequest = <T>(initialUrl: string): ApiResponse<T> => {
  const [url, setUrl] = useState<string>(initialUrl)
  const [body, setBody] = useState<T | null>(null)
  const [ok, setOk] = useState<boolean>(false)
  const [status, setStatus] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(url)
        setBody(response.ok ? await response.json() : null)

        setOk(response.ok)
        setStatus(response.status)
        setError(null)
      } catch (e: any) {
        setBody(null)
        setOk(false)
        setStatus(null)
        setError(e.message)
      }
    }

    sendRequest()
  }, [url])

  return { ok, status, body, error, setUrl }
}

export default useGetRequest
