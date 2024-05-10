enum PositionEnum {
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "DevOps Engineer",
}

type Position = keyof typeof PositionEnum

export { PositionEnum }
export type { Position }
