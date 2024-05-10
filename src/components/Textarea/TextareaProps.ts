import type { ChangeEvent } from "react"

interface TextareaProps {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  labelValue?: string
  required?: boolean
  className?: string
}

export type { TextareaProps }
