interface SelectProps {
  labelValue: string
  selected: string | null
  options: string[]
  placeholder?: string
  onChange: (value: string) => void
  className?: string
}

export type { SelectProps }
