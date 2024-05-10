import type { ChangeEvent } from "react"

interface InputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  labelValue?: string
  type?: string
  required?: boolean
  className?: string
}

export type { InputProps }
