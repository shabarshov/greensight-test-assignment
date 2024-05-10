import type { ChangeEvent } from "react"

interface MaskedInputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  mask: string
  labelValue?: string
  type?: string
  required?: boolean
  className?: string
}

export type { MaskedInputProps }
