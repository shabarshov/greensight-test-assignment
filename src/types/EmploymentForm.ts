enum EmploymentFormEnum {
  "Full",
  "Part",
  "Project",
  "Probation",
  "Volunteer",
}

type EmploymentForm = keyof typeof EmploymentFormEnum

export { EmploymentFormEnum }
export type { EmploymentForm }
