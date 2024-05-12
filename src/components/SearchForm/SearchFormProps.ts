import type { Dispatch, SetStateAction } from "react"
import type { EmploymentForm } from "types/EmploymentForm"
import type { Position } from "types/Position"

interface SearchFormProps {
  setForm: Dispatch<SetStateAction<EmploymentForm | null>>
  setPosition: Dispatch<SetStateAction<Position | null>>
}

export type { SearchFormProps }
